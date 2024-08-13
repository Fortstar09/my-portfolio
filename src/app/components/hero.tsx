import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="w-full flex flex-col justify-between items-start px-4 sm:px-10 md:px-32 pt-12">
        <h2 className="ml-1 mb-4 text-secondary">Hi, my name is</h2>
        <h2 className="big-heading font-bold text-mainblack mb-2">
          Ogunya Fortunate.
        </h2>
        <h2 className="big-heading font-bold text-maingrey">
          I build things on the web.
        </h2>
        <p className="text-subText font-light text-maingrey mt-6 leading-normal max-w-lg">
          {`I'm a software engineer devoted to crafting and designing exceptional
          digital experiences. With a strong passion for building sleek,
          responsive websites that delight users, I'm currently focused on
          creating accessible solutions and tackling real-world challenges
          through my projects. `}
          <span className="text-secondary font-normal">
            {`Let's team up and make something extraordinary!`}
          </span>
        </p>
        <Link href="#" className="mt-12 text-secondary resume text-subText">
          Check out my resume!
        </Link>
      </div>
    </>
  );
}
