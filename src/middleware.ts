let locales = ['pt', '']

export function middleware(request: any) {
  const imageExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.webp',
    '.svg',
    '.ico',
    '.pdf'
  ]

  const { pathname } = request.nextUrl
  const isImageRequest = imageExtensions.some(ext => pathname.endsWith(ext))
  const pathnameHasLocale = locales.some(locale => pathname.endsWith(`/${locale}`))

  if (pathnameHasLocale || isImageRequest) return

  request.nextUrl.pathname = ''
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)']
}
