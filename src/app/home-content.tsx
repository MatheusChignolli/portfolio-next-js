'use client'

import Image from 'next/image'
import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import DownloadCv from './download-cv'

const linkKeys = ['projects', 'certifications', 'articles', 'posts'] as const
const experienceKeys = ['bayer', 'base39', 'paketa', 'essencia', 'optera'] as const

export default function HomeContent() {
  const t = useTranslations('main')

  const links = linkKeys.map(item => ({
    href: t(`links.${item}.href`),
    label: t(`links.${item}.label`)
  }))

  const experiences = experienceKeys.map(company => ({
    year: t(`experiences.items.${company}.year`),
    title: t(`experiences.items.${company}.title`),
    company: t(`experiences.items.${company}.company`),
    description: t(`experiences.items.${company}.description`)
  }))

  return (
    <main className="flex flex-col gap-20">
      <section className="flex flex-col justify-center items-center p-5 mt-20">
        <div className="relative">
          <Image
            src="/profile.jpeg"
            width={230}
            height={230}
            alt="Profile photo"
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 180px, 230px"
            className="rounded-full border-4 border-text-primary w-[180px] h-[180px] sm:w-[230px] sm:h-[230px]"
          />
          <Image
            src="/cartoon.png"
            width={76}
            height={76}
            alt="Cartoon avatar"
            sizes="76px"
            className="rounded-full border-2 border-text-primary bg-card absolute bottom-0 right-9 sm:right-0 w-[50px] h-[50px] sm:w-[76px] sm:h-[76px]"
          />
          <DownloadCv />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4 text-center">{t('name')}</h1>
        <h2 className="text-xl sm:text-2xl text-text-secondary text-center">
          {t('role')}
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-5 max-w-screen-lg mx-auto justify-center items-center mt-10">
          {links.map(({ href, label }, index) => (
            <Fragment key={href}>
              {index > 0 && <div className="h-2 w-2 rounded-full bg-text-tertiary" />}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-lg font-semibold underline"
              >
                {label}
              </a>
            </Fragment>
          ))}
        </div>
      </section>
      <section className="max-w-screen-lg flex flex-col gap-3 sm:gap-6 items-center justify-center mx-auto px-5">
        <h3 className="text-2xl sm:text-4xl font-semibold text-center">
          {t('about.title')}
        </h3>
        <p className="text-md sm:text-lg text-text-secondary text-justify">
          {t('about.content')}
        </p>
      </section>
      <section className="max-w-screen-lg flex flex-col gap-3 sm:gap-6 items-center justify-center mx-auto w-full px-5">
        <h3 className="text-2xl sm:text-4xl font-semibold text-center">
          {t('experiences.title')}
        </h3>
        <div className="relative border-gray-300 dark:border-gray-700 w-full grid grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`flex flex-col relative ${index === 0 ? 'col-span-2' : 'sm:col-span-1'} bg-card rounded-md p-4`}
            >
              <h4 className="text-md sm:text-xl font-semibold">{experience.title}</h4>
              <h5 className="text-md sm:text-lg font-normal">{experience.company}</h5>
              <span className="text-sm sm:text-md text-gray-500 dark:text-gray-400 mt-2">
                {experience.year}
              </span>
              <p className="text-sm sm:text-md text-gray-700 dark:text-gray-300 mt-1">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
