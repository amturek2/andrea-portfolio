"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects";
import { jetBrainsMono, patrickHand } from "../lib/fonts";
import { renderInlineFormatting } from "../lib/renderInlineFormatting";
import { SectionTransition, getRevealProps } from "./SectionTransition";

export function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const selectedProject =
    selectedProjectIndex === null ? null : projects[selectedProjectIndex];
  const detailImages = selectedProject
    ? [selectedProject.detailImageOne, selectedProject.detailImageTwo].filter(
        (image): image is string => Boolean(image?.trim()),
      )
    : [];

  useEffect(() => {
    if (selectedProjectIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProjectIndex(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProjectIndex]);

  const projectModal = selectedProject ? (
    <AnimatePresence initial={false}>
      <motion.div
        key={selectedProject.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10"
      >
        <button
          type="button"
          aria-label="Close project details"
          className="fixed inset-0 h-screen w-screen bg-[#202020]/45 backdrop-blur-[2px]"
          onClick={() => setSelectedProjectIndex(null)}
        />

        <motion.article
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[28px] border-2 border-[#202020] bg-[var(--paper)] shadow-[10px_10px_0_rgba(32,32,32,0.18)]"
        >
          <div
            className="flex items-center justify-between rounded-t-[25px] border-b-2 border-[#202020] px-5 py-3"
            style={{ backgroundColor: selectedProject.accentColor }}
          >
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSelectedProjectIndex(null)}
                aria-label="Close project details"
                className={`${jetBrainsMono.className} flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#202020] bg-[#ff6b6b] text-[9px] font-bold leading-none text-[#202020] transition hover:scale-110`}
              ></button>
              <span className="h-4 w-4 rounded-full border-2 border-[#202020] bg-[#f6c945]" />
              <span className="h-4 w-4 rounded-full border-2 border-[#202020] bg-[#73c97c]" />
            </div>
          </div>

          <div className="max-h-[calc(90vh-4.5rem)] overflow-y-auto p-6 sm:p-8 lg:p-10">
            <div className="mb-6 flex items-start justify-between gap-4">
              <h3
                className={`${patrickHand.className} text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl`}
              >
                {selectedProject.title}
              </h3>
            </div>

            <div className="h-[3px] w-52 rounded-full bg-[#ff75a7]" />

            <p
              className={`${patrickHand.className} mt-6 text-xl leading-7 sm:text-2xl`}
            >
              {renderInlineFormatting(selectedProject.description)}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {selectedProject.tags.map((tag, index) => {
                const colors = [
                  "border-[#ff5b2e]",
                  "border-[#2867d8]",
                  "border-[#4d8a53]",
                  "border-[#ff75a7]",
                  "border-[#d0a326]",
                ];

                return (
                  <span
                    key={tag}
                    className={`${jetBrainsMono.className} rounded-full border-2 bg-[var(--paper)] px-4 py-2 text-sm font-medium ${
                      colors[index % colors.length]
                    }`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>

            <div className="mt-8">
              <h4
                className={`${patrickHand.className} mb-4 text-3xl text-[#ff5b2e]`}
              >
                What I built
              </h4>

              {selectedProject.detailsFormat === "paragraph" &&
              selectedProject.detailsParagraph ? (
                <p
                  className={`${jetBrainsMono.className} text-sm leading-7 sm:text-base`}
                >
                  {renderInlineFormatting(selectedProject.detailsParagraph)}
                </p>
              ) : selectedProject.bullets &&
                selectedProject.bullets.length > 0 ? (
                <ul
                  className={`${jetBrainsMono.className} space-y-3 text-sm leading-7 sm:text-base`}
                >
                  {selectedProject.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff75a7]" />
                      <span>{renderInlineFormatting(bullet)}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {detailImages.length > 0 && (
              <div
                className={`mt-7 grid gap-4 ${
                  detailImages.length === 1
                    ? "grid-cols-1"
                    : "md:grid-cols-[minmax(0,1.3fr)_minmax(240px,0.85fr)]"
                }`}
              >
                {detailImages.map((image, index) => (
                  <div
                    key={`${selectedProject.title}-${index}`}
                    className="relative h-64 overflow-hidden rounded-xl border-2 border-[#202020] bg-white sm:h-72 lg:h-80"
                  >
                    <Image
                      src={image}
                      alt={`${selectedProject.title} detail image ${index + 1}`}
                      fill
                      sizes={
                        detailImages.length === 1
                          ? "(max-width: 1023px) 100vw, 80vw"
                          : index === 0
                            ? "(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 60vw"
                            : "(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 36vw"
                      }
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 border-t border-[#202020]/20 pt-6">
              <h4
                className={`${patrickHand.className} mb-4 text-3xl text-[#ff5b2e]`}
              >
                Links
              </h4>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {selectedProject.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`${jetBrainsMono.className} text-base font-bold text-[#2867d8] underline decoration-2 underline-offset-4 transition hover:text-[#ff5b2e]`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  ) : null;

  return (
    <>
      <section
        id="projects"
        className="paper-section relative min-h-screen overflow-hidden border-b-2 border-dashed border-[#9fc5f8] bg-[var(--paper)] px-6 py-20 text-[#202020] md:px-10 lg:px-20"
      >
        {/* paper speckle */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#202020_0.7px,transparent_0.7px)] [background-size:18px_18px]" />

        <SectionTransition
          direction="up"
          accent="rgba(255, 117, 167, 0.18)"
          className="relative mx-auto w-full max-w-[1600px]"
        >
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <h2
                className={`${patrickHand.className} text-6xl leading-none text-[#5984bd] sm:text-7xl`}
              >
                FEATURED PROJECTS
              </h2>
            </div>

            <div className="mt-2 h-[3px] w-80 max-w-full rounded-full bg-[#5984bd]" />

            <p
              className={`${patrickHand.className} mt-4 text-2xl text-[#202020]`}
            >
              Click a project to see more details
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {projects.map((project, index) => {
              const isSelected = selectedProjectIndex === index;

              return (
                <motion.button
                  key={project.title}
                  {...getRevealProps({
                    delay: index * 0.05,
                    y: 34,
                    rotate: index % 2 === 0 ? -0.8 : 0.8,
                    amount: 0.18,
                  })}
                  type="button"
                  onClick={() => setSelectedProjectIndex(index)}
                  whileHover={{
                    y: -5,
                    rotate: isSelected ? 0 : -0.5,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  aria-pressed={isSelected}
                  className={`group relative flex w-full flex-col overflow-hidden rounded-xl border-2 bg-[var(--paper)] p-0 text-left shadow-[4px_4px_0_rgba(32,32,32,0.18)] transition ${
                    isSelected
                      ? "border-[#ff5b2e] shadow-[6px_6px_0_#ffb199]"
                      : "border-[#202020] hover:shadow-[6px_6px_0_rgba(32,32,32,0.22)]"
                  }`}
                >
                  {isSelected && (
                    <span
                      className={`${patrickHand.className} absolute -right-3 -top-3 z-20 rotate-12 rounded-full bg-[var(--paper)] px-3 py-2 text-3xl`}
                    >
                      ✦
                    </span>
                  )}

                  <div
                    className="relative block h-44 w-full shrink-0 overflow-hidden border-b-2 border-[#202020]"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    <div className="absolute inset-x-0.5 inset-y-0.00 sm:inset-x-0.5 sm:inset-y-0">
                      <Image
                        src={project.previewImage}
                        alt={`${project.title} illustration`}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
                        className="scale-110 object-contain object-top transition duration-300 group-hover:scale-[1.14]"
                      />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3
                      className={`${jetBrainsMono.className} min-h-[3.8rem] text-xl font-bold leading-tight`}
                    >
                      {project.title}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`${jetBrainsMono.className} rounded-full border-2 border-[#6b9c75] bg-[var(--paper)] px-3 py-1 text-xs font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <p
            className={`${patrickHand.className} mt-12 text-center text-3xl text-[#202020]`}
          >
            ✦ more projects coming soon!
          </p>
        </SectionTransition>
      </section>

      {typeof document !== "undefined"
        ? createPortal(projectModal, document.body)
        : null}
    </>
  );
}
