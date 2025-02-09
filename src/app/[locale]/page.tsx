import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('about')}</p>
    </div>
  )
}