import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const i18nRouting = defineRouting({
  // A list of locales that are supported
  locales: ['en', 'fr'],

  // The default locale
  defaultLocale: 'en',
})

export const {} = createNavigation(i18nRouting)