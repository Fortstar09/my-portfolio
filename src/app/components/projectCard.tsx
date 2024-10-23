"use client";
import { useTheme } from "next-themes";
// import ShineBorder from "@/components/ui/shine-border";
import { MagicCard } from "@/components/ui/magic-card";
// import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import { useEffect, useState } from "react";

const Projects = [
  {
    src: "https://fort-ground.netlify.app/",
    name: "Votingsystem",
    description: `A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.`,
    github: "https://github.com/bchiang7/halcyon-site",
    externaLink: "https://halcyon-theme.netlify.com/",
    imageSrc: "/5.png",
    list: "VSCode SublimeText Atom iTerm2",
    id: 1,
  },
  {
    src: "https://fort-ground.netlify.app/",
    name: "Finitech",
    description: `A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.`,
    github: "https://github.com/bchiang7/halcyon-site",
    externaLink: "https://halcyon-theme.netlify.com/",
    imageSrc: "/6.png",
    list: "VSCode SublimeText Atom iTerm2",
    id: 2,
  },
  {
    src: "https://fort-ground.netlify.app/",
    name: "Healthtech",
    description: `A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.`,
    github: "https://github.com/bchiang7/halcyon-site",
    externaLink: "https://halcyon-theme.netlify.com/",
    imageSrc: "/7.png",
    list: "VSCode SublimeText Atom iTerm2",
    id: 3,
  },
  {
    src: "https://fort-ground.netlify.app/",
    name: "Fun",
    description: `A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.`,
    github: "https://github.com/bchiang7/halcyon-site",
    externaLink: "https://halcyon-theme.netlify.com/",
    imageSrc: "/4.png",
    list: "VSCode SublimeText Atom iTerm2",
    id: 4,
  },
  {
    src: "https://fort-ground.netlify.app/",
    name: "Edutech",
    description: `A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.`,
    github: "https://github.com/bchiang7/halcyon-site",
    externaLink: "https://halcyon-theme.netlify.com/",
    imageSrc: "/3.png",
    list: "VSCode SublimeText Atom iTerm2",
    id: 5,
  },
  {
    src: "https://fort-ground.netlify.app/",
    name: "Transportation",
    description: `A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.`,
    github: "https://github.com/bchiang7/halcyon-site",
    externaLink: "https://halcyon-theme.netlify.com/",
    imageSrc: "/2.png",
    list: "VSCode SublimeText Atom iTerm2",
    id: 6,
  },
];

type Project = {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  list: string;
  github: string;
  src: string;
};

export function ProjectCard() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (Projects.length > 0) {
      setSelectedProject(Projects[0]);
    }
  }, []);

  function handleSelection(project: Project) {
    setSelectedProject(project);
  }

  const { theme } = useTheme();
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 justify-center items-center h-[600px] md:h-[600px] w-full xl:h-[400px]">
      <div className="flex items-center py-4 xl:px-12 lg:px-4  xl:py-10 border boderjustify-center border-gray-300 rounded-md bg-white">
        {selectedProject ? (
          <SelectedProject
            key={selectedProject.id}
            name={selectedProject.name}
            description={selectedProject.description}
            imageSrc={selectedProject.imageSrc}
            tech={selectedProject.list}
            githubSrc={selectedProject.github}
            liveSrc={selectedProject.src}
          />
        ) : (
          <p>Select a project to view details</p>
        )}
      </div>
      <ul className=" lg:max-w-[200px] w-full border-b lg:border-b-0 lg:border-l px-3 border-gray-300 scrollbar overflow-y-hidden overflow-x-scroll flex gap-3 lg:gap-1 flex-row lg:flex-col items-start justify-start lg:justify-center">
        {Projects.map((project) => (
          <li
            className="w-[500px] cursor-pointer px-2 mb-4 bg-gray-100 text-subText lg:text-body flex items-center justify-center lg:justify-start lg:py-4"
            key={project.id}
            onClick={() => {
              handleSelection(project);
            }}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

type SelectedProjectProps = {
  name: string;
  description: string;
  imageSrc: string;
  tech: string;
  githubSrc: string;
  liveSrc: string;
};

function SelectedProject({
  name,
  description,
  imageSrc,
  tech,
  githubSrc,
  liveSrc,
}: SelectedProjectProps) {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 xl:gap-10 px-4 xl:px-8 w-full">
      <Image
        src={imageSrc}
        alt="display image"
        width={570}
        height={570}
        className="shadow-md md:shadow-xl cursor-pointer"
      />
      <div className="xl:max-w-[300px] flex flex-col gap-4 leading-normal">
        <h1 className="text-lg lg:text-h2 font-bold">{name}</h1>
        <p className=" text-sm md:text-subText font-light text-gray-400 tracking-wide">
          {description}
        </p>
        <p className=" text-sm lg:text-subText text-gray-500 font-normal">
          {tech}
        </p>
        <div className="flex text-sm font-normal text-secondary  gap-6 items-center">
          <span className="cursor-pointer hover:scale-125">
            <a target="_blank" href={githubSrc}>
              Github
            </a>
          </span>
          <span className="cursor-pointer hover:scale-125">
            <a target="_blank" href={liveSrc}>
              Live link
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
