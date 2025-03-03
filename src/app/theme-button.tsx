'use client'

import { PaintBucket } from 'lucide-react'
import { useTransition } from 'react'

export default function ThemeButton() {
  const [isPending, startTransition] = useTransition()

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    startTransition(() => {
      const currentTheme = localStorage.getItem('theme') || 'light'
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

      const x = event.clientX
      const y = event.clientY

      const wave = document.createElement('span')
      wave.className = 'fixed rounded-full animate-sonar z-40'
      wave.style.backgroundColor = currentTheme === 'dark' ? '#f4f4f4' : '#222222'
      wave.style.left = `${x}px`
      wave.style.top = `${y}px`
      wave.style.transform = 'translate(-50%, -50%)'
      wave.style.zIndex = '1'

      document.getElementById('theme-button')?.appendChild(wave)

      setTimeout(() => {
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
        localStorage.setItem('theme', newTheme)
      }, 1200)

      setTimeout(() => wave.remove(), 1500)
    })
  }

  return (
    <>
      <div id="theme-button" />
      <button
        disabled={isPending}
        className="z-10 w-10 sm:w-12 h-10 sm:h-12 bg-[#222222] dark:bg-[#f4f4f4] text-[#f4f4f4] dark:text-[#1a1a1a] shadow-md hover:shadow-xl p-2 rounded-lg flex items-center justify-center transition-all duration-500 ease-in-out"
        onClick={toggleTheme}
      >
        <PaintBucket size={36} />
      </button>
    </>
  )
}
