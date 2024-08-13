import Link from "next/link";

const navLinks = [
  { src: "#", name: "about", id: 2 },
  { src: "#", name: "projects", id: 3 },
  { src: "#", name: "playground", id: 4 },
  { src: "#", name: "contact", id: 5 },
];

export default function Navbar() {
  return (
    <>
      <nav className="w-full flex justify-between items-center px-32 pt-8">
        <div className="">
          <h1 className="text-h2 text-mainblack font-black">om.</h1>
        </div>

        <ul className="flex justify-between item-center">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.src}>
              <li className="text-link text-maingrey px-3 hover:text-secondary hover:underline hover:underline-offset-2">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
