"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

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

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      id="about"
      className="w-full my-40 px-6 sm:px-10 md:px-32 pt-12 element"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
