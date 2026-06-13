import { MongoClient, type Db, type Collection } from 'mongodb';

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getMongoUri() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not configured');
  }
  return uri;
}

function getClientPromise() {
  if (clientPromise) {
    return clientPromise;
  }

  const uri = getMongoUri();
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
    return clientPromise;
  }

  client = new MongoClient(uri);
  clientPromise = client.connect();
  return clientPromise;
}

export async function getMongoDb(): Promise<Db> {
  const connectedClient = await getClientPromise();
  const dbName = process.env.MONGODB_DB;
  if (!dbName) {
    throw new Error('MONGODB_DB is not configured');
  }
  return connectedClient.db(dbName);
}

export async function getContactCollection(): Promise<Collection> {
  const db = await getMongoDb();
  const collectionName = process.env.MONGODB_COLLECTION;
  if (!collectionName) {
    throw new Error('MONGODB_COLLECTION is not configured');
  }
  return db.collection(collectionName);
}
