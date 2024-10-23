"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id: string;
};

const Section = ({ children, id }: SectionProps) => {
  return (
    <motion.div
      id={id}
      className="w-full mb-40 md:my-40 px-6 sm:px-10 lg:px-32 pt-12 element"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
