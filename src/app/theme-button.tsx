'use client'

import { PaintBucket } from 'lucide-react';

export default function ThemeButton() {
  const toggleTheme = () => {
      const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
  };
  

  return <button className="absolute top-6 left-6 p-2 bg-[#222222] dark:bg-[#f4f4f4] text-[#f4f4f4] dark:text-[#1a1a1a] rounded shadow-lg" onClick={toggleTheme}><PaintBucket size={28} /></button>;
}
