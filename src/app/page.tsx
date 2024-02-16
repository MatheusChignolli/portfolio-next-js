import Image from "next/image";
import githubIcon from "../../public/github.svg";
import linkedinIcon from "../../public/linkedin.svg";
import mailIcon from "../../public/mail.svg";
import clickIcon from "../../public/click.svg";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="grid grid-cols-6 gap-1 h-full">
        <div className="bg-white col-span-2 flex flex-col items-center justify-center">
          <h1 className="text-4xl">Matheus Chignolli</h1>
          <h2 className="text-3xl">Software Engineer</h2>
        </div>
        <div className="grid grid-cols-2 gap-1 h-full">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/"
            className="bg-white row-span-2 flex items-center justify-center"
          >
            <Image width={50} priority src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a
            href="https://github.com/MatheusChignolli"
            target="_blank"
            className="bg-white flex items-center justify-center"
          >
            <Image width={50} priority src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="mailto:matheuschignolli@gmail.com"
            className="bg-white flex items-center justify-center"
          >
            <Image width={50} priority src={mailIcon} alt="Mail icon" />
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/details/certifications/"
          target="_blank"
          className="bg-white flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl">Certifications</h3>
          <Image width={50} priority src={clickIcon} alt="Click icon" />
        </a>
        <a
          href="https://medium.com/@matheuschignolli"
          target="_blank"
          className="bg-white flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl">Articles</h3>
          <Image width={50} priority src={clickIcon} alt="Click icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-chignolli-a0115b155/recent-activity/all/"
          target="_blank"
          className="bg-white flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl">Posts</h3>
          <Image width={50} priority src={clickIcon} alt="Click icon" />
        </a>
        <div className="bg-white flex items-center justify-center">
          <h3 className="text-2xl">About {"->"}</h3>
        </div>
        <div className="bg-white col-span-5 flex items-center justify-start px-12">
          <p className="text-xl">
            As a seasoned software engineer, I thrive on diverse projects aimed
            at solving real-world problems for clients. My focus is on creating
            meaningful solutions that positively impact users, regardless of
            scale. I prioritize continuous learning to enhance problem-solving
            abilities. My proactive approach and dedication to quality drive me
            to stay updated on industry trends and engage in personal projects.
            I prioritize collaboration and knowledge sharing in the workplace,
            offering support to colleagues and aspiring to leave a lasting
            impact by both learning from and mentoring others in software
            development.
          </p>
        </div>
        <a
          href="/projects"
          className="bg-white col-span-2 flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl">Projects</h3>
          <Image width={50} priority src={clickIcon} alt="Click icon" />
        </a>
        <div className="bg-white col-span-2 flex items-center justify-center">
          <h3 className="text-2xl">Technologies {"->"}</h3>
        </div>
        <div className="bg-white col-span-2 flex items-center justify-around text-xl">
          <ul className="list-disc">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>NodeJs</li>
            <li>ReactJs</li>
            <li>Svelte</li>
            <li>Flutter</li>
            <li>Ruby on Rails</li>
            <li>Unit/E2E tests</li>
          </ul>
          <ul className="list-disc">
            <li>GraphQl</li>
            <li>REST</li>
            <li>AWS</li>
            <li>MongoDB</li>
            <li>Postgres</li>
            <li>MySQL</li>
            <li>Git</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
