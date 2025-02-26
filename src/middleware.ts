let locales = ["pt", ""];

export function middleware(request: any) {
  const { pathname } = request.nextUrl;
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  
  const isImageRequest = imageExtensions.some((ext) => pathname.endsWith(ext));

  if (isImageRequest) return;

  const pathnameHasLocale = locales.some((locale) =>
    pathname.endsWith(`/${locale}`)
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = "";
  return Response.redirect(request.nextUrl);
}

