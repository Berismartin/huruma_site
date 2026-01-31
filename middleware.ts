import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the root path
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Allow API routes
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Allow Next.js internal routes and static files
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/images2/') ||
    pathname.startsWith('/team/') ||
    pathname === '/favicon.ico' ||
    /\.(ico|png|jpg|jpeg|svg|webp|gif|css|js|woff|woff2|ttf|eot|json)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Redirect all other routes to the index page
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next (Next.js internal)
     * - static files (images, fonts, etc.)
     */
    '/((?!api|_next|images|images2|team|favicon\\.ico|.*\\..*).*)',
  ],
};
