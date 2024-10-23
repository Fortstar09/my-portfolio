import Section from "./ui/section";
import Header from "./ui/header";
import { ProjectCard } from "./projectCard";

const Projects = [
  {
    src: "https://fort-ground.netlify.app/",
    name: "Halcyon Theme",
    description: `A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.`,
    github: "https://github.com/bchiang7/halcyon-site",
    externaLink: "https://halcyon-theme.netlify.com/",
    imageSrc: "5.png",
    // list: {"VS Code" "Sublime Text", "Atom", "iTerm2"},
    id: 1,
  },
  {
    src: "https://fort-ground.netlify.app/",
    name: "Halcyon Theme",
    description: `A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.`,
    github: "https://github.com/bchiang7/halcyon-site",
    externaLink: "https://halcyon-theme.netlify.com/",
    imageSrc: "5.png",
    // list: {"VS Code" "Sublime Text", "Atom", "iTerm2"},
    id: 2,
  },
  {
    src: "https://fort-ground.netlify.app/",
    name: "Halcyon Theme",
    description: `A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.`,
    github: "https://github.com/bchiang7/halcyon-site",
    externaLink: "https://halcyon-theme.netlify.com/",
    imageSrc: "5.png",
    // list: {"VS Code" "Sublime Text", "Atom", "iTerm2"},
    id: 3,
  },
];

export default function Project() {
  return (
    <>
      <Section id="project">
        <Header id={3} title="Projects" />
        <div className="my-10">
          <ProjectCard />
        </div>
      </Section>
    </>
  );
}
