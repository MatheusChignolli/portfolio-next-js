'use client'

import { NextIntlClientProvider } from 'next-intl'
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
  useTransition
} from 'react'
import { defaultLocale, localeToHtmlLang, type Locale } from './config'
import enMessages from '../../messages/en_US.json'
import ptMessages from '../../messages/pt_BR.json'
import { setUserLocale } from './services'

type Messages = typeof enMessages

const messagesByLocale: Record<Locale, Messages> = {
  en_US: enMessages,
  pt_BR: ptMessages
}

interface LocaleContextValue {
  locale: Locale
  changeLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  changeLocale: () => {}
})

export function useLocaleContext() {
  return useContext(LocaleContext)
}

function getCookieLocale(): Locale {
  if (typeof document === 'undefined') return defaultLocale
  const match = document.cookie.match(/(?:^|;\s*)LOCALE=([^;]+)/)
  const value = match?.[1] as Locale | undefined
  return value === 'en_US' || value === 'pt_BR' ? value : defaultLocale
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = localeToHtmlLang[locale]
  document.documentElement.dataset.locale = locale
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [, startTransition] = useTransition()
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [messages, setMessages] = useState<Messages>(enMessages)

  useLayoutEffect(() => {
    const cookieLocale = getCookieLocale()
    setLocale(cookieLocale)
    setMessages(messagesByLocale[cookieLocale])
    applyLocale(cookieLocale)
  }, [])

  const changeLocale = useCallback(
    (nextLocale: Locale) => {
      startTransition(async () => {
        await setUserLocale(nextLocale)
        setLocale(nextLocale)
        setMessages(messagesByLocale[nextLocale])
        applyLocale(nextLocale)
      })
    },
    [startTransition]
  )

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone="America/Sao_Paulo"
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  )
}
