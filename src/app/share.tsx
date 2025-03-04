'use client'

import { Share } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ShareButton() {
  const t = useTranslations('header')

  const toggleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: t('share.title'),
          text: t('share.text'),
          url: t('share.url')
        })
        .catch(error => console.error('Erro to share:', error))
    } else {
      console.warn('Share not available on this browser.')
    }
  }

  return (
    <button
      className="w-10 sm:w-12 h-10 sm:h-12 p-2 rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={toggleShare}
    >
      <Share size={36} />
    </button>
  )
}
