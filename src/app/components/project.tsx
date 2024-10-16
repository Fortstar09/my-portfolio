"use client";

import Link from "next/link";
import ProjectCard from "./projectCard";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Project() {
  return (
    <>
      <motion.div
        id="project"
        className="w-full my-40 px-6 sm:px-10 md:px-32 py-12 element bg-mainwhite"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        // variants={cardVariants}
      >
        <h2 className="mb-4 text-maingrey text-nav sm:text-h2 font-bold">
          <span className="text-sm text-secondary font-normal mr-3">02.</span>
          Some Things I&apos;ve Built
          <span
            className="mx-3 sm:inline-block w-56 opacity-25 bg-maingrey"
            style={{ height: "1px" }}
          ></span>
        </h2>
        <div className="flex flex-col justify-between item-center">
          <ProjectCard />
        </div>
      </motion.div>
    </>
  );
}
