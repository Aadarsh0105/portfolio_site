import kb from '@/data/chatbot-kb.json';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type KnowledgeItem = {
  keywords: string[];
  answer: string;
  suggestions?: string[];
};

function normalize(value: string) {
  return value.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
}

function scoreItem(item: KnowledgeItem, question: string) {
  const q = normalize(question);
  if (!q) return 0;

  let score = 0;
  for (const rawKeyword of item.keywords ?? []) {
    const keyword = normalize(rawKeyword);
    if (!keyword) continue;

    // Word boundary-ish match; prefer whole words when possible.
    const pattern = new RegExp(`(^|\\s)${keyword.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}(\\s|$)`, 'i');
    if (pattern.test(q)) score += 3;
    else if (q.includes(keyword)) score += 1;
  }

  return score;
}

export async function POST(request: Request) {
  let body: { question?: string };
  try {
    body = (await request.json()) as { question?: string };
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const question = (body.question ?? '').trim();
  if (!question) {
    return Response.json({ ok: false, error: 'Missing question' }, { status: 400 });
  }

  const items = kb as KnowledgeItem[];
  let best: KnowledgeItem | null = null;
  let bestScore = 0;

  for (const item of items) {
    const s = scoreItem(item, question);
    if (s > bestScore) {
      bestScore = s;
      best = item;
    }
  }

  if (!best || bestScore < 2) {
    return Response.json({
      ok: true,
      answer:
        "I’m sorry, I couldn’t fully understand your request. I can assist with our services, pricing, AI solutions, web development, mobile applications, project consultations, and support inquiries. Could you provide a little more detail?",
      suggestions: [
        "Web Development",
        "Mobile Apps",
        "AI Solutions",
        "Pricing",
        "Contact Team"
      ]
    });
  }

  return Response.json({
    ok: true,
    answer: best.answer,
    suggestions: best.suggestions ?? []
  });
}

