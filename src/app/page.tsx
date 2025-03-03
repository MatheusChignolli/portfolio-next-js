import Image from 'next/image'
import { Fragment } from 'react'
import Header from './header'
import Footer from './footer'
import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations('main')

  const links = ['projects', 'certifications', 'articles', 'posts'].map(item => ({
    href: t(`links.${item}.href`),
    label: t(`links.${item}.label`)
  }))

  const experiences = ['base39', 'paketa', 'essencia', 'optera'].map(company => ({
    year: t(`experiences.items.${company}.year`),
    title: t(`experiences.items.${company}.title`),
    company: t(`experiences.items.${company}.company`),
    description: t(`experiences.items.${company}.description`)
  }))

  return (
    <>
      <Header />
      <main className="flex flex-col gap-20">
        <div className="flex flex-col justify-center items-center p-5">
          <div className="relative">
            <Image
              src="/profile.jpeg"
              width={230}
              height={230}
              alt="Profile photo"
              className="rounded-full border-4 border-text-primary w-[180px] h-[180px] sm:w-[230px] sm:h-[230px]"
            />
            <Image
              src="/cartoon.png"
              width={75}
              height={75}
              alt="Profile photo"
              className="rounded-full border-2 border-text-primary bg-card absolute bottom-0 right-0 w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]"
            />
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
                  aria-label="Projects"
                >
                  {label}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
        <article className="max-w-screen-lg flex flex-col gap-3 sm:gap-6 items-center justify-center mx-auto px-5">
          <h3 className="text-2xl sm:text-4xl font-semibold text-center">
            {t('about.title')}
          </h3>
          <p className="text-md sm:text-lg text-text-secondary text-justify">
            {t('about.content')}
          </p>
        </article>
        <article className="max-w-screen-lg flex flex-col gap-3 sm:gap-6 items-center justify-center mx-auto w-full px-5">
          <h3 className="text-2xl sm:text-4xl font-semibold text-center">
            {t('experiences.title')}
          </h3>
          <div className="relative border-gray-300 dark:border-gray-700 w-full grid grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="flex flex-col relative col-span-2 sm:col-span-1 bg-card rounded-md p-4"
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
        </article>
      </main>
      <Footer />
      {/* <div className="grid grid-cols-6 gap-4 p-4 max-w-[1920px] mx-auto min-h-full">
        <div className="grid grid-cols-3 col-span-4 sm:col-span-3 xl:col-span-2 xl:col-start-5 xl:col-end-7 gap-2"></div>
        <div className="col-span-6 h-10" />
        <div className="col-span-4 col-start-2 p-6"></div>
        <div className="col-span-4 col-start-2 p-6">
          <h3 className="text-3xl font-semibold text-center">{dictionary.experiences}</h3>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              'JavaScript',
              'TypeScript',
              'Node.js',
              'React.js',
              'Svelte',
              'Flutter',
              'Ruby on Rails',
              'Unit Tests',
              'GraphQL',
              'REST',
              'AWS',
              'MongoDB',
              'PostgreSQL',
              'MySQL',
              'GitHub',
              'CI/CD'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-badge px-3 py-1 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div> */}
    </>
  )
}
