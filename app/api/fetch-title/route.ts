import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
    }

    // Attempt to fetch the target page directly
    const res = await fetch(url, { method: 'GET' });

    // Some sites (e.g., YouTube) might return non-HTML or block bots
    const html = await res.text();

    // Try to extract <title> text
    const match = html.match(/<title>(.*?)<\/title>/i);
    let title = match ? match[1] : null;

    // Fallback 1: use hostname if <title> not found
    if (!title) {
      try {
        const parsed = new URL(url);
        title = parsed.hostname.replace(/^www\./, '');
      } catch {
        title = 'Untitled Page';
      }
    }

    // Fallback 2: final safe default
    if (!title) title = 'Untitled Page';

    return NextResponse.json({ title });
  } catch (error) {
    console.error('[FETCH_TITLE_ERROR]', error);

    // Fallback when fetch fails (e.g., blocked domain)
    try {
      const { url } = await req.json();
      const parsed = new URL(url);
      const fallbackTitle = parsed.hostname.replace(/^www\./, '');
      return NextResponse.json({ title: fallbackTitle });
    } catch {
      return NextResponse.json({ title: 'Untitled Page' });
    }
  }
}
