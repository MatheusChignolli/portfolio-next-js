let locales = ["pt", ""];

export function middleware(request: any) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) =>
    pathname.endsWith(`/${locale}`)
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = "";
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
