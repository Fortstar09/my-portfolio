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

export default function ProjectCard() {
  return (
    <>
      {Projects.map((project) => (
        <div
          className=" flex flex-col-reverse sm:flex sm:even:flex-row-reverse gap-4 my-12"
          key={project.id}
        >
          <div className="flex flex-col gap-8">
            <div>
              <p className="my-1 text-maingrey text-secondary text-subText">
                Featured Project
              </p>
              <h3 className="mb-4 text-maingrey text-nav font-bold">
                <a href={project.src} rel="noopener noreferrer" target="_blank">
                  {project.name}
                </a>
              </h3>
            </div>
            <div className="text-maingrey max-w-6xl text-subText">
              <p>{project.description}</p>
            </div>
            <div>
              <ul className="flex my-4">
                {/* {project.link.map()} */}
                <li className="mr-2 text-sm hover:text-secondary">VS Code</li>
                <li className="mr-2 text-sm hover:text-secondary">
                  Sublime Text
                </li>
                <li className="mr-2 text-sm hover:text-secondary">Atom</li>
                <li className="mr-2 text-sm hover:text-secondary">iTerm2</li>
              </ul>
              <div className="flex item-center gap-4 project-links">
                <a
                  href={project.github}
                  aria-label="GitHub Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href={project.src}
                  aria-label="External Link"
                  className="external"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-external-link"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <img
              className="icon rounded"
              src={project.imageSrc}
              alt="first project"
            />
          </div>
        </div>
      ))}
    </>
  );
}
