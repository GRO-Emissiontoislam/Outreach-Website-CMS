import createMiddleware from 'next-intl/middleware';
import { i18nRouting } from './i18n/routing';

export default createMiddleware(i18nRouting)

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*']
}