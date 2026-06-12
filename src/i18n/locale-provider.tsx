'use client'

import { NextIntlClientProvider } from 'next-intl'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition
} from 'react'
import { defaultLocale, localeToHtmlLang, type Locale } from './config'
import enMessages from '../../messages/en_US.json'
import { setUserLocale } from './services'

type Messages = typeof enMessages

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

function getCookieLocale(): Locale | null {
  const match = document.cookie.match(/(?:^|;\s*)LOCALE=([^;]+)/)
  const value = match?.[1] as Locale | undefined
  return value === 'en_US' || value === 'pt_BR' ? value : null
}

async function loadMessages(locale: Locale): Promise<Messages> {
  if (locale === defaultLocale) return enMessages
  return (await import(`../../messages/${locale}.json`)).default
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [, startTransition] = useTransition()
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [messages, setMessages] = useState<Messages>(enMessages)

  useEffect(() => {
    const cookieLocale = getCookieLocale()
    if (!cookieLocale || cookieLocale === defaultLocale) return

    loadMessages(cookieLocale).then(nextMessages => {
      setLocale(cookieLocale)
      setMessages(nextMessages)
      document.documentElement.lang = localeToHtmlLang[cookieLocale]
    })
  }, [])

  const changeLocale = useCallback(
    (nextLocale: Locale) => {
      startTransition(async () => {
        await setUserLocale(nextLocale)
        const nextMessages = await loadMessages(nextLocale)
        setLocale(nextLocale)
        setMessages(nextMessages)
        document.documentElement.lang = localeToHtmlLang[nextLocale]
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
