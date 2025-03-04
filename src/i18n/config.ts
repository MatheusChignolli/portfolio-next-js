export type Locale = (typeof locales)[number]

export const locales = ['en_US', 'pt_BR'] as const
export const defaultLocale: Locale = 'en_US'
