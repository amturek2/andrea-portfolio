"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bowlby, jetBrainsMono } from "../lib/fonts";
import { resumePath } from "../data/site";
import { SectionTransition } from "./SectionTransition";

const slowFloat = {
  y: [0, -2, 0],
  rotate: [0, -2, 0],
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export function Hero() {
  return (
    <section className="paper-section wobbly-border-bottom relative min-h-screen overflow-hidden border-b-0 px-6 pt-28 text-[#202020] md:px-10 lg:px-20">
      <SectionTransition
        direction="up"
        accent="rgba(136, 163, 219, 0.16)"
        className="relative mx-auto max-w-7xl"
      >
        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 pb-10"
          >
            <h1
              className={`${bowlby.className} hero-title text-[4.6rem] leading-[0.86] tracking-[-0.04em] sm:text-[6.4rem] lg:text-[8.6rem]`}
            >
              <span className="block text-[#88a3db]">ANDREA</span>
              <span className="block text-[#2259bd]">TUREK</span>
            </h1>

            <p
              className={`${jetBrainsMono.className} mt-7 max-w-[34rem] text-lg font-semibold leading-8 sm:text-xl`}
            >
              software engineer building at the intersection of math, data, and
              design :)
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="#projects"
                className="sketch-button sketch-button-orange"
              >
                View Projects →
              </a>

              <a
                href={resumePath}
                className="sketch-button sketch-button-paper"
              >
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto flex w-full max-w-[40rem] justify-center md:justify-end"
          >
            <motion.div
              animate={slowFloat}
              className="relative aspect-square w-full max-w-[40rem] md:max-w-[50rem] lg:max-w-[56rem]"
            >
              <Image
                src="/hero-doodles/planet.png"
                alt="Hand-drawn planet illustration"
                fill
                priority
                sizes="(max-width: 767px) 80vw, (max-width: 1100px) 42vw, 48rem"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </SectionTransition>
    </section>
  );
}
