'use server'

import { cookies } from 'next/headers'
import { Locale } from './config'

const COOKIE_NAME = 'LOCALE'

export async function setUserLocale(locale: Locale) {
  ;(await cookies()).set(COOKIE_NAME, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax'
  })
}
