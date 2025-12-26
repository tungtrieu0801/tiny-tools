// middleware.ts (Copy đè lại file này)
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const host = req.headers.get('host') || '';
    const url = req.nextUrl.clone();

    // 1. Subdomain JSON
    if (host.startsWith('json.')) {
        url.pathname = `/json_tool${req.nextUrl.pathname}`;
        return NextResponse.rewrite(url);
    }

    // 2. Subdomain TFT
    if (host.startsWith('tft.')) {
        url.pathname = `/tft_tool${req.nextUrl.pathname}`;
        return NextResponse.rewrite(url);
    }

    // 3. Subdomain BLOG
    if (host.startsWith('blog.')) {
        url.pathname = `/blog${req.nextUrl.pathname}`;
        return NextResponse.rewrite(url);
    }

    // 4. Default www
    url.pathname = `/(www)${req.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
}

// QUAN TRỌNG: Matcher giúp loại bỏ các file tĩnh khỏi middleware
export const config = {
    matcher: [
        // Chạy middleware trên tất cả request TRỪ các path dưới đây:
        // - api (API routes)
        // - _next/static (static files: js, css)
        // - _next/image (image optimization files)
        // - favicon.ico (icon file)
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};