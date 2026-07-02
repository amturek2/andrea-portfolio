"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences } from "../data/experience";
import { dmSans, jetBrainsMono, patrickHand } from "../lib/fonts";
import { renderInlineFormatting } from "../lib/renderInlineFormatting";
import { SectionTransition, getRevealProps } from "./SectionTransition";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="paper-section relative min-h-screen overflow-hidden border-b-2 border-dashed border-[#9fc5f8] bg-[var(--paper)] px-6 py-18 text-[#202020] md:px-10 lg:px-20"
    >
      {/* subtle paper speckle */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#202020_0.7px,transparent_0.7px)] [background-size:18px_18px]" />

      <SectionTransition
        direction="right"
        accent="rgba(77, 138, 83, 0.18)"
        className="relative mx-auto max-w-6xl"
      >
        {/* heading */}
        <div className="mb-12">
          <h2
            className={`${patrickHand.className} text-5xl leading-none text-[#2867d8] sm:text-6xl`}
          >
            EXPERIENCE
          </h2>
          <div className="mt-2 h-[3px] w-56 rounded-full bg-[#2867d8]" />
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-[18px] top-3 hidden h-[calc(100%-2rem)] w-[2px] bg-[#202020] md:block" />
          <div className="space-y-15">
            {experiences.map((experience, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={`${experience.company}-${experience.role}`}
                  {...getRevealProps({
                    delay: index * 0.08,
                    x: -20,
                    y: 26,
                    amount: 0.2,
                  })}
                  className="relative md:pl-20"
                >
                  {/* timeline dot */}
                  <div className="absolute left-0 top-3 hidden md:block">
                    <div className="h-9 w-9 rounded-full border-2 border-[#202020] bg-[#202020]" />
                  </div>

                  {/* top row */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left"
                  >
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_auto] md:items-start md:gap-5">
                      <div>
                        <h3
                          className={`${dmSans.className} text-3xl font-bold tracking-tight sm:text-2xl`}
                        >
                          {experience.role}
                        </h3>

                        <p
                          className={`${jetBrainsMono.className} mt-1.5 text-base font-semibold text-[#2867d8] sm:text-lg`}
                        >
                          {experience.company}
                        </p>
                      </div>

                      <p
                        className={`${jetBrainsMono.className} text-sm font-semibold text-[#4d8a53] sm:text-base md:pt-1.5`}
                      >
                        {experience.dateRange}
                      </p>

                      <div className="md:pt-0.5">
                        <span
                          className={`${jetBrainsMono.className} inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#202020] bg-[#f8e7a8] text-2xl leading-none`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* expanded card */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -6, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="relative mt-5 rounded-[28px] border-2 border-[#202020] bg-[var(--paper)] px-5 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:px-6">
                          {/* tape */}
                          <div className="absolute -top-4 left-1/2 h-8 w-36 -translate-x-1/2 rotate-[-3deg] border border-[#c79d2a]/40 bg-[#f6c945] opacity-95">
                            <div className="h-full w-full opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:12px_12px]" />
                          </div>

                          {/* skills */}
                          <div className="mb-5">
                            {/* <p
                              className={`${patrickHand.className} mb-2 text-xl text-[#202020]`}
                            >
                              skills + technologies
                            </p> */}

                            <div className="flex flex-wrap gap-2">
                              {experience.skills.map((skill, skillIndex) => {
                                const pillColors = [
                                  "border-[#f26a2e] text-[#202020]",
                                  "border-[#2867d8] text-[#202020]",
                                  "border-[#4d8a53] text-[#202020]",
                                  "border-[#e68ab3] text-[#202020]",
                                  "border-[#d0a326] text-[#202020]",
                                ];

                                return (
                                  <span
                                    key={skill}
                                    className={`${jetBrainsMono.className} rounded-full border-2 bg-[var(--paper)] px-3 py-1.5 text-xs font-medium ${pillColors[skillIndex % pillColors.length]}`}
                                  >
                                    {skill}
                                  </span>
                                );
                              })}
                            </div>
                          </div>

                          {/* bullets */}
                          <div className="mb-5">
                            <ul
                              className={`${jetBrainsMono.className} space-y-3 text-sm leading-6 sm:text-[15px]`}
                            >
                              {experience.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex items-start gap-3"
                                >
                                  <span className="mt-[8px] block h-2 w-2 rounded-full bg-[#202020]" />
                                  <span>{renderInlineFormatting(bullet)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* links */}
                          {experience.links && experience.links.length > 0 && (
                            <div className="border-t border-[#202020]/20 pt-5">
                              <div className="flex flex-wrap gap-x-6 gap-y-2">
                                {experience.links.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    className={`${jetBrainsMono.className} text-sm font-semibold text-[#2867d8] underline decoration-2 underline-offset-4 transition hover:text-[#f26a2e]`}
                                  >
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionTransition>
    </section>
  );
}
