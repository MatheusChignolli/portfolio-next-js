'use client'

import { PaintBucket } from 'lucide-react'

export default function ThemeButton() {
  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light'
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button
      className="w-10 sm:w-12 h-10 sm:h-12 bg-[#222222] dark:bg-[#f4f4f4] text-[#f4f4f4] dark:text-[#1a1a1a] shadow-md hover:shadow-xl transition-shadow p-2 rounded-lg flex items-center justify-center"
      onClick={toggleTheme}
    >
      <PaintBucket size={36} />
    </button>
  )
}
