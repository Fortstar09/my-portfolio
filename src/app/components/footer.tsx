import Link from "next/link";

const link = [
  { src: "#", name: "Github", id: 1 },
  { src: "#", name: "LinkedIn", id: 2 },
  { src: "#", name: "Twitter", id: 3 },
  { src: "#", name: "Sololearn", id: 3 },
];

export function Footer() {
  return (
    <footer className="px-4 sm:px-10 md:px-32 py-4">
      <div className="">
        <h1 className="text-link text-secondary">Mehmet Akif Karasu ⏤ 2020</h1>
      </div>
      <ul className="flex justify-between item-center">
        {link.map((link) => (
          <Link key={link.id} href={link.src}>
            <li className="text-subText text-maingrey px-3 hover:text-secondary hover:underline hover:underline-offset-2">
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </footer>
  );
}
