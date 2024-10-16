import IconCloud from "@/components/ui/icon-cloud";
import Section from "./ui/section";
import Header from "./ui/header";

const slugs = [
  "typescript",
  "javascript",
  "mysql",
  "react",
  "next",
  "html5",
  "css3",
  "netlify",
  "jquery",
  "jira",
  "github",
  "asana",
  "visualstudiocode",
  "laravel",
  "postman",
  "firebase",
  "vercel",
  "slack",
  "php",
  "git",
  "jira",
  "gitlab",
  "figma",
];

export function IconCloudDemo() {
  return (
    <Section>
      <Header id={2} title="Tools & Technologies" />
      <div className=" flex flex-col md:flex-row items-center gap-24 justify-center">
        <IconCloud iconSlugs={slugs} />
        <div>
          <Technologies />
        </div>
      </div>
    </Section>
  );
}

export function Technologies() {
  return (
    <div className="flex flex-col items-start gap-20 justify-center">
      <div>
        <h3 className=" text-maingrey text-nav font-bold">Tech Stack</h3>
        <ul className="flex gap-12">
          <div>
            <li className="my-1 text-subText">
              <span className="text-secondary text-nav">▹</span>JavaScript
              (ES6+)
            </li>
            <li className="my-1   text-subText">
              <span className="text-secondary text-nav">▹</span>TypeScript
            </li>
            <li className="my-1  text-subText">
              <span className="text-secondary text-nav">▹</span>React{" "}
            </li>
          </div>
          <div>
            <li className="my-1   text-subText">
              <span className="text-secondary text-nav">▹</span>Next.Js
            </li>
            <li className="my-1 text-subText">
              <span className="text-secondary text-nav">▹</span>PHP
            </li>
            <li className="my-1 text-subText">
              <span className="text-secondary text-nav">▹</span>Git
            </li>
          </div>
        </ul>
      </div>
      <div>
        <h3 className=" text-maingrey text-nav font-bold">
          Collaboration tools
        </h3>
        <ul className="flex gap-12">
          <div>
            <li className="my-1 text-subText">
              <span className="text-secondary text-nav">▹</span>Github
            </li>
            <li className="my-1   text-subText">
              <span className="text-secondary text-nav">▹</span>Gitlab
            </li>
            <li className="my-1  text-subText">
              <span className="text-secondary text-nav">▹</span>Postman
            </li>
          </div>
          <div>
            <li className="my-1   text-subText">
              <span className="text-secondary text-nav">▹</span>Slack
            </li>
            <li className="my-1 text-subText">
              <span className="text-secondary text-nav">▹</span>Jira
            </li>
            <li className="my-1 text-subText">
              <span className="text-secondary text-nav">▹</span>Asana
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
