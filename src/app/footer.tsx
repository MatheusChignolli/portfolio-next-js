import { getTranslations } from 'next-intl/server'

export default async function () {
  const t = await getTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-card mt-20">
      <div className="max-w-screen-lg mx-auto w-full p-5 flex items-center justify-center">
        <span className="text-xs">
          {year} {t('copyright')}
        </span>
      </div>
    </footer>
  )
}
