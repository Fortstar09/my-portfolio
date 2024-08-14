"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const name = "Ogunya Fortunate.";
const work = "I build things on the web.";

export default function Hero() {
  const nameWords = name.split(" ");
  const workWords = work.split(" ");

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="w-full flex flex-col justify-between items-start px-6 sm:px-10 md:px-32 py-20"
      >
        <motion.h2
          transition={transition}
          variants={variants}
          className="ml-1 mb-4 text-secondary"
        >
          Hi, my name is
        </motion.h2>
        <h2 className="big-heading font-bold text-mainblack mb-2">
          {nameWords.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                className="inline-block"
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < nameWords.length - 1 && " "}
            </React.Fragment>
          ))}
        </h2>
        <h2 className="big-heading font-bold text-maingrey">
          {workWords.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                className="inline-block"
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < workWords.length - 1 && " "}
            </React.Fragment>
          ))}
        </h2>
        <motion.p
          transition={transition}
          variants={variants}
          className="text-subText font-light text-maingrey mt-6 leading-normal max-w-lg"
        >
          {`I'm a software engineer devoted to crafting and designing exceptional
          digital experiences. With a strong passion for building sleek,
          responsive websites that delight users, I'm currently focused on
          creating accessible solutions and tackling real-world challenges
          through my projects. `}
          <span className="text-secondary font-normal">
            {`Let's team up and make something extraordinary!`}
          </span>
        </motion.p>
        <motion.a
          transition={transition}
          variants={variants}
          href="#"
          className="mt-12 text-secondary resume text- rounded-md"
        >
          Check out my resume!
        </motion.a>
      </motion.div>
    </>
  );
}
