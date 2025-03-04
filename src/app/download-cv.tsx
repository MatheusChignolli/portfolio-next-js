'use client'

import { Download } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'

export default function DownloadCV() {
  const t = useTranslations('main')
  const [isPending, startTransition] = useTransition()

  const handleDownload = () => {
    startTransition(() => {
      const link = document.createElement('a')
      link.href = '/cv-matheus-chignolli.pdf' // Substitua pelo caminho correto do seu arquivo
      link.download = 'cv-matheus-chignolli.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }

  return (
    <button
      disabled={isPending}
      onClick={handleDownload}
      className="absolute flex gap-0.5 min-w-[140px] sm:min-w-[160px] sm:gap-2 items-center px-1 left-[138px] h-[30px] bottom-[10px] sm:px-2 sm:py-1.5 sm:left-[223px] sm:h-[41px] sm:bottom-[17px] border-2 border-l-0 border-text-primary bg-card rounded-r-lg"
    >
      <Download className="h-4 sm:h-6 w-4 sm:w-6" />
      <p className="w-full text-center">{t('downloadCv')}</p>
    </button>
  )
}
