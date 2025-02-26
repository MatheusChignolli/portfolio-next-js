import { getDictionary } from "../dictionaries/dictionaries";
import ThemeButton from "./theme-button";
import { Github, Mail, Linkedin, Languages, MousePointerClick } from "lucide-react";

export default async function Home() {
  const currentLang = "en";
  const dictionary = await getDictionary(currentLang);

  const nextLang = {
    en: "pt",
    pt: "en",
    es: "en",
  };

  return (
    <>
      <ThemeButton/>
      <div className="grid grid-cols-6 gap-2 p-4 max-w-[1920px] mx-auto min-h-full">
        <div className="bg-card shadow-lg rounded-lg p-8 col-span-6 sm:col-span-4 xl:col-span-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold">{dictionary.name}</h1>
          <h2 className="text-2xl text-text-secondary">{dictionary.role}</h2>
          <span className="text-text-tertiary mt-2">({dictionary.language})</span>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-2 col-span-6 sm:col-span-2 xl:col-span-1 gap-2">
          {[ 
            { href: "https://www.linkedin.com/in/matheus-chignolli-a0115b155/", icon: Linkedin, label: "LinkedIn", blank: true },
            { href: `/${nextLang[currentLang]}`, icon: Languages, label: "Change Language", blank: false },
            { href: "https://github.com/MatheusChignolli", icon: Github, label: "GitHub", blank: true },
            { href: "mailto:matheuschignolli@gmail.com", icon: Mail, label: "E-mail", blank: true }
          ].map(({ href, icon: Icon, label, blank }, index) => (
            <a
              key={index}
              href={href}
              target={blank ? "_blank" : "_self"}
              rel="noopener noreferrer"
              aria-label={label}
              className="bg-card shadow-md hover:shadow-xl transition-shadow p-4 rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Icon size={50} />
            </a>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-6 sm:col-span-3 xl:col-span-1 bg-card shadow-lg rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-xl transition-shadow"
          aria-label="Certifications"
        >
          <h3 className="text-2xl font-semibold">{dictionary.certifications}</h3>
          <MousePointerClick size={36} />
        </a>
        <a
          href="https://medium.com/@matheuschignolli"
          target="_blank"
          className="col-span-3 sm:col-span-3 xl:col-span-1 bg-card shadow-lg rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl font-semibold">{dictionary.articles}</h3>
          <MousePointerClick size={36} />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/recent-activity/all/"
          target="_blank"
          className="col-span-3 sm:col-span-3 xl:col-span-1 bg-card shadow-lg rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl font-semibold">{dictionary.posts}</h3>
          <MousePointerClick size={36} />
        </a>
        <a
          href="https://github.com/MatheusChignolli/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-6 sm:col-span-3 xl:col-span-1 bg-card shadow-lg rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-xl transition-shadow"
          aria-label="Projects"
        >
          <h3 className="text-2xl font-semibold">{dictionary.projects}</h3>
          <MousePointerClick size={36} />
        </a>
        <div className="col-span-6 bg-card shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold">{dictionary.about}</h3>
          <p className="text-lg text-text-secondary mt-2 text-justify">{dictionary.aboutParagraph}</p>
        </div>
        <div className="col-span-6 bg-card shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold">{dictionary.technologies}</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              "JavaScript", "TypeScript", "Node.js", "React.js", "Svelte", "Flutter", "Ruby on Rails", "Unit Tests",
              "GraphQL", "REST", "AWS", "MongoDB", "PostgreSQL", "MySQL", "GitHub", "CI/CD"
            ].map((tech, index) => (
              <span key={index} className="bg-badge px-3 py-1 rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
