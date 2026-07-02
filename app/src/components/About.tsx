"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { jetBrainsMono, patrickHand } from "../lib/fonts";
import { SectionTransition, getRevealProps } from "./SectionTransition";

export function About() {
  return (
    <section
      id="about"
      className="paper-section relative min-h-screen overflow-hidden border-b-2 border-dashed border-[#9fc5f8] bg-[var(--paper)] px-6 py-30 text-[#202020] md:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#202020_0.7px,transparent_0.7px)] [background-size:18px_18px]" />

      <SectionTransition
        direction="left"
        accent="rgba(136, 163, 219, 0.22)"
        className="relative mx-auto max-w-7xl"
      >
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_0.9fr]">
          {/* Left About Card */}
          <motion.div
            {...getRevealProps({ x: -32, y: 34, rotate: -1, amount: 0.32 })}
            className="relative rounded-sm border-2 border-[#202020] bg-[var(--paper)] px-8 py-8 shadow-[5px_5px_0_rgba(32,32,32,0.12)] sm:px-10 sm:py-10"
          >
            {/* Yellow tape */}
            <div className="absolute -top-5 left-1/2 h-10 w-32 -translate-x-1/2 rotate-[-3deg] border border-[#d69d20]/40 bg-[#f6c945] opacity-90 shadow-sm">
              <div className="h-full w-full opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:10px_10px]" />
            </div>

            <h2
              className={`${patrickHand.className} inline-block border-b-2 border-[#202020] text-4xl font-bold uppercase`}
            >
              About Me
            </h2>

            <div
              className={`${jetBrainsMono.className} mt-6 max-w-2xl space-y-4 text-sm leading-7 sm:text-base`}
            >
              <p>
                I&apos;m a junior at University of Illinois studying Computer
                Science and Statistics, with a minor in Math.
              </p>

              <p>
                I got into CS because I loved art and building front-end designs
                and games. Then, as I took required math classes in college, I
                fell back in love with math, just sitting for hours with a pen
                and paper picking apart a problem. I ended up taking on the math
                minor because I enjoyed those classes so much, and I started
                seeing that same math show up everywhere in software and ML.
              </p>

              <p>
                Now, I'm most interested in optimization, ML, and turning
                technical work into things people can actually understand, and
                outside of work, I still draw and paint for fun.
              </p>
            </div>

            <p
              className={`${patrickHand.className} ml-20 mt-6 rotate-[-1deg] text-center text-3xl leading- text-[#88a3db]`}
            >
              math + code + creativity
              <br />= endless possibilities
            </p>

            <span
              className={`${patrickHand.className} absolute right-10 bottom-8 text-5xl text-[#4866a3]`}
            >
              ☆
            </span>

            <div className="absolute -bottom-13 -left-13 z-10 w-36 rotate-[-7deg] sm:w-54">
              <Image
                src="/global_pictures/illini.png"
                alt="Pennant pinned to the bulletin board"
                width={320}
                height={240}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Currently Card */}
          <motion.div
            {...getRevealProps({
              delay: 0.1,
              x: 32,
              y: 34,
              rotate: 1.5,
              amount: 0.32,
            })}
            className="relative mx-auto flex w-full max-w-xl flex-col items-end gap-6"
          >
            <div className="relative w-full bg-[#d0e0f5] px-8 py-15 shadow-[5px_5px_0_rgba(32,32,32,0.12)]">
              {/* Notebook holes */}
              <div className="absolute left-0 right-0 top-0 flex justify-around px-5">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span
                    key={index}
                    className="mt-[-1px] h-5 w-5 rounded-b-full bg-[var(--paper)]"
                  />
                ))}
              </div>

              {/* Blue tape */}
              <div className="absolute -top-5 right-54 h-10 w-32 rotate-[7deg] border border-[#3f8f54]/40 bg-[#a9cf8c] opacity-90 shadow-sm">
                <div className="h-full w-full opacity-35 [background-image:linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:10px_10px]" />
              </div>

              {/* notebook lines */}
              <div className="pointer-events-none absolute inset-0 mt-12 opacity-25 [background-image:linear-gradient(#c55281_1px,transparent_1px)] [background-size:100%_28px]" />

              <div className="relative pt-6">
                <h3
                  className={`${patrickHand.className} mx-auto mb-6 w-fit border-b-2 border-[#202020] text-3xl font-bold uppercase`}
                >
                  What I'm Up To:
                </h3>

                <ul
                  className={`${patrickHand.className} space-y-4 text-2xl leading-7`}
                >
                  <li className="flex items-center gap-4">
                    <span className="grid h-5 w-5 place-items-center border-2 border-[#202020] bg-[var(--paper)]" />
                    software engineering @ Octus
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="grid h-5 w-5 place-items-center border-2 border-[#202020] bg-[var(--paper)]" />
                    researching robotics @ Parasol Lab
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="grid h-5 w-5 place-items-center border-2 border-[#202020] bg-[var(--paper)]" />
                    drawing and painting
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="grid h-5 w-5 place-items-center border-2 border-[#202020] bg-[var(--paper)]" />
                    going on long bike rides
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="grid h-5 w-5 place-items-center border-2 border-[#202020] bg-[var(--paper)]" />
                    learning to like running
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative mr-20 w-full max-w-[29rem] rotate-[2deg] border-2 border-[#202020]/90 bg-[#a9cf8c] px-5 py-4 shadow-[4px_4px_0_rgba(32,32,32,0.16)]">
              <div className="absolute -top-4 left-48 h-8 w-21 rotate-[-4deg] border border-[#95b4db]/40 bg-[#d8dfe8] opacity-90 shadow-sm">
                <div className="h-full w-full opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:10px_10px]" />
              </div>

              <p
                className={`${patrickHand.className} text-2xl font-bold text-[#202020]`}
              >
                things I love
              </p>
              <div
                className={`${jetBrainsMono.className} mt-3 space-y-2 text-xs leading-5 text-[#202020] sm:text-sm`}
              >
                <p>
                  <span className="font-semibold">movies:</span> Good Will
                  Hunting, Rocky, When Harry Met Sally, Zodiac
                </p>
                <p>
                  <span className="font-semibold">books:</span> The Catcher in
                  the Rye, Hunger Games, Normal People, Daisy Jones & the Six
                </p>
                <p>
                  <span className="font-semibold">misc:</span> cats, chocolate,
                  coffee, baking, biking, art
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionTransition>
    </section>
  );
}
