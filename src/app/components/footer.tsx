import Link from "next/link";

const links = [
  { src: "https://github.com/Fortstar09", name: "Github", id: 1 },
  {
    src: "https://www.linkedin.com/in/ogunya-fortunate/",
    name: "LinkedIn",
    id: 2,
  },
  { src: "https://x.com/OgunyaFort", name: "Twitter", id: 3 },
  {
    src: "https://www.sololearn.com/en/profile/26110325",
    name: "Sololearn",
    id: 3,
  },
];

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 md:px-32 py-4">
      <div className="">
        <h1 className="md:text-link text-sm text-secondary">Fortunate</h1>
      </div>
      <ul className="flex justify-between item-center">
        {links.map((link) => (
          <Link target="_blank" key={link.id} href={link.src}>
            <li className="text-sm md:text-subText text-maingrey px-1 md:px-3 hover:text-secondary hover:underline hover:underline-offset-2">
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </footer>
  );
}
