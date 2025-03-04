import { Github, Linkedin, Mail } from 'lucide-react'
import ThemeButton from './theme-button'
import { getTranslations } from 'next-intl/server'
import Translate from './translate'
import { getUserLocale } from '@/i18n/services'
import Share from './share'

export default async function Header() {
  const t = await getTranslations('header')
  const currentLocale = await getUserLocale()

  const contactLinks = [
    {
      icon: Linkedin,
      href: t('socialLinks.linkedIn.href'),
      label: t('socialLinks.linkedIn.label'),
      className: 'bg-blue-500 text-white'
    },
    {
      icon: Github,
      href: t('socialLinks.github.href'),
      label: t('socialLinks.github.label'),
      className: 'bg-black text-white'
    },
    {
      icon: Mail,
      href: t('socialLinks.email.href'),
      label: t('socialLinks.email.label'),
      className: 'bg-gray-500 text-white'
    }
  ]

  return (
    <header className="flex p-4 justify-between items-center gap-4 max-w-[1920px] sticky -top-[1px] bg-background border border-t-0 rounded-b-2xl z-10 border-card mx-auto shadow-2xl">
      {/* <h3 className="text-2xl font-bold hidden sm:block">{t('title')}</h3> */}
      <div className="flex justify-center gap-2">
        {contactLinks.map(({ href, icon: Icon, label, className }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`w-10 sm:w-12 h-10 sm:h-12 shadow-md hover:shadow-xl transition-shadow p-2 rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          >
            <Icon size={36} />
          </a>
        ))}
      </div>
      <div className="flex">
        <Share />
        <Translate currentLocale={currentLocale} />
        <ThemeButton />
      </div>
    </header>
  )
}
