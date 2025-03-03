'use client'

import { useEffect, useRef, useState, useTransition } from 'react'
import { useTranslations } from 'next-intl'
import { Languages } from 'lucide-react'
import { Locale } from '@/i18n/config'
import { setUserLocale } from '@/i18n/services'

interface Props {
  currentLocale: Locale
}

export default function ({ currentLocale }: Props) {
  const t = useTranslations('header')
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const locales = [
    {
      label: t('locales.portuguese.label'),
      value: 'pt_BR'
    },
    {
      label: t('locales.english.label'),
      value: 'en_US'
    }
  ] as const

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocaleChange = (locale: Locale) => {
    startTransition(() => {
      setUserLocale(locale)
      setOpen(false)
    })
  }

  return (
    <div ref={ref} className="relative">
      <button
        disabled={isPending}
        className="w-10 sm:w-12 h-10 sm:h-12 p-2 rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => {
          setOpen(prevState => !prevState)
        }}
      >
        <Languages size={36} />
      </button>
      <div
        style={{
          maxHeight: open ? `104px` : '0px'
        }}
        className={`absolute right-0 z-50 flex flex-col gap-2 p-2 rounded-lg shadow-xl border border-card bg-background overflow-hidden transition-all duration-300 ease-in-out translate-y-full -bottom-2 ${open ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {locales.map(({ label, value }) => (
          <button
            key={value}
            className={`text-left p-2 w-36 rounded ${currentLocale === value ? 'bg-card' : ''}`}
            onClick={() => handleLocaleChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
