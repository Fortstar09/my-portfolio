import Image from "next/image";
import Button from "./ui/button";
import Header from "./ui/header";
import Section from "./ui/section";

export default function About() {
  return (
    <>
      <Section id="about">
        <Header id={1} title="About" />

        <div className="flex flex-col-reverse md:flex-row justify-between items-start ">
          <div>
            <div>
              <p className="leading-8 text-maingrey mt-6 max-w-screen-sm">
                <span className="text-secondary font-normal text-body mb-4 block">{`Hello, I'm Fortunate!`}</span>
                <span className="block text-subText leading-8 md:w-[500px]">{`
I'm a seasoned frontend engineer with a focus on building responsive, intuitive web applications. With a strong foundation in design and a passion for problem-solving, I create seamless, high-performance user experiences. I stay ahead of the curve by working with modern frameworks like React, Next.js, and other JavaScript technologies. Let's collaborate and bring innovative digital solutions to life!`}</span>
              </p>
            </div>
            <div className="mt-12">
              <Button title="Check out my resume" href="#" color="secondary" />
            </div>
          </div>
          <div className="sm:w-96">
            <Image
              src="/myImage.jpg"
              alt="My Image"
              width={400}
              height={400}
              className="rounded-md image"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
