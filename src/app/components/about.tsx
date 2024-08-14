import Link from "next/link";
// import Image from "next/image";

export default function About() {
  return (
    <>
      <div id="about" className="w-full my-40 px-6 sm:px-10 md:px-32 pt-12">
        <h2 className="ml-1 mb-4 text-secondary">
          <span>O1.</span>About me
        </h2>
        <span></span>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-start ">
          <div>
            <div>
              <p className="leading-8 text-maingrey mt-6 max-w-screen-sm">
                <span className="text-secondary font-black text-body mb-4 block">{`Hello, I'm Fortunate!`}</span>
                <span className="block text-subText leading-8">{`I'm a passionate junior frontend developer with a love for crafting beautiful and responsive websites. My journey into the world of web development began with a curiosity for design and a knack for problem-solving. I thrive on turning ideas into interactive, user-friendly experiences. From HTML and CSS to JavaScript, I'm continuously expanding my skill set and embracing new technologies. My goal? To create seamless, engaging websites that not only look good but also function flawlessly. When I'm not coding, you'll find me exploring new design trends, tweaking my personal projects, or diving into the latest tech blogs. Let's connect and build something awesome together! 🚀`}</span>
              </p>
            </div>
            <div className="mt-12">
              <Link
                href="#"
                className="mt-12 text-secondary resume text-subText rounded-md"
              >
                Check out my resume!
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-96">
            <img
              src="./myImage.jpg"
              alt="My Image"
              className="rounded-md image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
