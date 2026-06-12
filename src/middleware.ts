import { NextRequest, NextResponse } from 'next/server'

const locales = ['pt', '']

const STATIC_PATHS = new Set(['/robots.txt', '/sitemap.xml', '/site.webmanifest'])

function isStaticAsset(pathname: string) {
  return STATIC_PATHS.has(pathname) || /\.[a-zA-Z0-9]+$/.test(pathname)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next') || isStaticAsset(pathname)) {
    return
  }

  const pathnameHasLocale = locales.some(locale => pathname.endsWith(`/${locale}`))

  if (pathnameHasLocale) return

  request.nextUrl.pathname = ''
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)']
}
