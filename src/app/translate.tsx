'use client'

import { useEffect, useId, useRef, useState, useTransition } from 'react'
import { useTranslations } from 'next-intl'
import { Languages } from 'lucide-react'
import { Locale } from '@/i18n/config'
import { useLocaleContext } from '@/i18n/locale-provider'

export default function Translate() {
  const t = useTranslations('header')
  const { locale, changeLocale } = useLocaleContext()
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const listboxId = useId()
  const toggleId = useId()

  const locales = [
    {
      label: t('locales.portuguese.label'),
      value: 'pt_BR' as const
    },
    {
      label: t('locales.english.label'),
      value: 'en_US' as const
    }
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocaleChange = (nextLocale: Locale) => {
    startTransition(() => {
      changeLocale(nextLocale)
      setOpen(false)
    })
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        id={toggleId}
        disabled={isPending}
        aria-label={t('languageButton')}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        className="mr-1 w-10 sm:w-12 h-10 sm:h-12 p-2 rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setOpen(prevState => !prevState)}
      >
        <Languages size={36} aria-hidden="true" />
      </button>
      {open && (
        <div
          id={listboxId}
          role="listbox"
          aria-labelledby={toggleId}
          className="absolute right-0 z-50 flex flex-col gap-2 p-2 rounded-lg shadow-xl border border-card bg-background translate-y-full -bottom-2"
        >
          {locales.map(({ label, value }) => (
            <div
              key={value}
              role="option"
              aria-selected={locale === value}
              tabIndex={0}
              className={`text-left p-2 w-36 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${locale === value ? 'bg-card' : ''}`}
              onClick={() => handleLocaleChange(value)}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  handleLocaleChange(value)
                }
              }}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
