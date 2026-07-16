import dns from "node:dns";
import { MongoClient, type Collection, type Db } from "mongodb";

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

const DNS_SERVERS = ["1.1.1.1", "8.8.8.8"];

function ensureDnsServers() {
  if (process.env.MONGODB_URI?.startsWith("mongodb+srv://")) {
    dns.setServers(DNS_SERVERS);
  }
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getMongoUri() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }
  return uri;
}

function createClientPromise(uri: string) {
  ensureDnsServers();
  client = new MongoClient(uri);

  return client.connect().catch((error) => {
    if (process.env.NODE_ENV === "development") {
      global._mongoClientPromise = undefined;
    }
    clientPromise = undefined;
    client = undefined;
    throw error;
  });
}

function getClientPromise() {
  if (clientPromise) {
    return clientPromise;
  }

  const uri = getMongoUri();

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = createClientPromise(uri);
    }
    clientPromise = global._mongoClientPromise;
    return clientPromise;
  }

  clientPromise = createClientPromise(uri);
  return clientPromise;
}

export async function connectDB(): Promise<Db> {
  const connectedClient = await getClientPromise();
  const dbName = process.env.MONGODB_DB;
  if (!dbName) {
    throw new Error("MONGODB_DB is not configured");
  }
  return connectedClient.db(dbName);
}

export async function getContactCollection(): Promise<Collection> {
  const db = await connectDB();
  const collectionName = process.env.MONGODB_COLLECTION;
  if (!collectionName) {
    throw new Error("MONGODB_COLLECTION is not configured");
  }
  return db.collection(collectionName);
}
