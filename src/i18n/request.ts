import { getRequestConfig } from 'next-intl/server';
import { i18nRouting } from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if(!locale || !i18nRouting.locales.includes(locale as 'en' | 'fr')) {
    locale = i18nRouting.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
