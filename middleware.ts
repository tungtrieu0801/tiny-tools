import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const host = req.headers.get('host') || '';

    if (host.startsWith('json.')) {
        return NextResponse.rewrite(new URL('/json_tool', req.url));
    }

    if (host.startsWith('tft.')) {
        return NextResponse.rewrite(new URL('/tft_tool', req.url));
    }

    if (host.startsWith('blog.')) {
        return NextResponse.rewrite(new URL('/blog', req.url));
    }

    return NextResponse.rewrite(new URL('/(www)', req.url));
}
