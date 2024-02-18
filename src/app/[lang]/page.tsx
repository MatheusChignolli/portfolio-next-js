import Image from "next/image";
import githubIcon from "../../../public/github.svg";
import linkedinIcon from "../../../public/linkedin.svg";
import mailIcon from "../../../public/mail.svg";
import clickIcon from "../../../public/click.svg";
import translateIcon from "../../../public/translate.svg";
import { getDictionary } from "./dictionaries";

// TODO: Add every type of aria inside this html

export default async function Home({
  params,
}: {
  params: { lang: "en" | "pt" | "es" };
}) {
  const dictionary = await getDictionary(params.lang);

  const nextLang = {
    en: "pt",
    pt: "en",
    es: "en",
  };

  return (
    <main className="h-screen">
      <div className="grid grid-cols-6 gap-1 h-full">
        <div className="bg-white py-8 xl:py-0 col-span-6 sm:col-span-4 xl:col-span-2 flex flex-col items-center justify-center">
          <h1 className="text-3xl xl:text-4xl">{dictionary.name}</h1>
          <h2 className="text-2xl xl:text-3xl">{dictionary.role}</h2>
          <span className="text-p">({dictionary.language})</span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 col-span-6 sm:col-span-2 xl:col-span-1 gap-1 h-full">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/"
            className="bg-white py-4 sm:py-0 row-span-1 col-span-3 sm:col-span-1 flex items-center justify-center"
          >
            <Image width={50} priority src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a
            href={`/${nextLang[params.lang || "es"]}`}
            className="bg-white py-4 sm:py-0 row-span-1 flex items-center justify-center"
          >
            <Image
              width={50}
              priority
              src={translateIcon}
              alt="LinkedIn icon"
            />
          </a>
          <a
            href="https://github.com/MatheusChignolli"
            target="_blank"
            className="bg-white py-4 sm:py-0 flex items-center justify-center"
          >
            <Image width={50} priority src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="mailto:matheuschignolli@gmail.com"
            className="bg-white py-4 sm:py-0 flex items-center justify-center"
          >
            <Image width={50} priority src={mailIcon} alt="Mail icon" />
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/details/certifications/"
          target="_blank"
          className="col-span-6 sm:col-span-2 xl:col-span-1 py-4 xl:py-0 bg-white flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl">{dictionary.certifications}</h3>
          <Image width={50} priority src={clickIcon} alt="Click icon" />
        </a>
        <a
          href="https://medium.com/@matheuschignolli"
          target="_blank"
          className="col-span-3 sm:col-span-2 xl:col-span-1 py-4 xl:py-0 bg-white flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl">{dictionary.articles}</h3>
          <Image width={50} priority src={clickIcon} alt="Click icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/recent-activity/all/"
          target="_blank"
          className="col-span-3 sm:col-span-2 xl:col-span-1 py-4 xl:py-0 bg-white flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl">{dictionary.posts}</h3>
          <Image width={50} priority src={clickIcon} alt="Click icon" />
        </a>
        <div className="col-span-6 sm:col-span-2 xl:col-span-1 py-8 xl:py-0 xl:min-h-48 bg-white flex items-center justify-center">
          <h3 className="text-2xl flex gap-2">
            {dictionary.about} <span className="hidden sm:block">{"->"}</span>
          </h3>
        </div>
        <div className="bg-white col-span-6 sm:col-span-4 xl:col-span-5 xl:min-h-48 flex items-center justify-start p-6 xl:p-12">
          <p className="text-xl text-justify">{dictionary.aboutParagraph}</p>
        </div>
        <a
          href="https://github.com/MatheusChignolli/projects"
          target="_blank"
          className="bg-white col-span-6 sm:col-span-6 xl:col-span-2 py-4 xl:py-0 flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl">{dictionary.projects}</h3>
          <Image width={50} priority src={clickIcon} alt="Click icon" />
        </a>
        <div className="bg-white col-span-6 sm:col-span-2 py-8 sm:py-0 flex items-center justify-center">
          <h3 className="text-2xl flex gap-2">
            {dictionary.technologies}{" "}
            <span className="hidden sm:block">{"->"}</span>
          </h3>
        </div>
        <div className="bg-white col-span-6 sm:col-span-4 xl:col-span-2 py-8 xl:py-0 flex items-center justify-around text-xl">
          <ul className="list-disc">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>NodeJs</li>
            <li>ReactJs</li>
            <li>Svelte</li>
            <li>Flutter</li>
            <li>Ruby on Rails</li>
            <li>Unit tests</li>
            <li>E2E tests</li>
          </ul>
          <ul className="list-disc">
            <li>GraphQl</li>
            <li>REST</li>
            <li>AWS</li>
            <li>MongoDB</li>
            <li>Postgres</li>
            <li>MySQL</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
