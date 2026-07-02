"use client";

import { motion } from "framer-motion";
import { dmSans, jetBrainsMono, patrickHand } from "../lib/fonts";
import { SectionTransition, getRevealProps } from "./SectionTransition";

type SkillCard = {
  title: string;
  note: string;
  accent: string;
  bg: string;
  items: string[];
};

const skillCards: SkillCard[] = [
  {
    title: "Languages",
    note: "Languages I use across backend optimization work, research code, data pipelines, web apps, and product interfaces.",
    accent: "#2867d8",
    bg: "#eef6ff",
    items: [
      "Java",
      "Python",
      "C++",
      "TypeScript",
      "JavaScript",
      "SQL",
      "R",
      "Dart",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Math + ML",
    note: "The mathematical foundation behind my interests in quant development, robotics, machine learning, and statistical modeling.",
    accent: "#4d8a53",
    bg: "#f0f8e8",
    items: [
      "Optimization",
      "Linear Programming",
      "Probability",
      "Statistics",
      "Linear Algebra",
      "Algorithms",
      "Data Structures",
      "Machine Learning",
    ],
  },
  {
    title: "Frameworks",
    note: "Frameworks I use to turn technical ideas into usable applications, dashboards, research tools, and client-facing products.",
    accent: "#e68ab3",
    bg: "#fff0f6",
    items: [
      "Spring Boot",
      "Angular",
      "React",
      "Next.js",
      "Flask",
      "Node.js",
      "Flutter",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Tools + Libraries",
    note: "Tools, platforms, and libraries I use for optimization, data analysis, visualization, research, deployment, and collaboration.",
    accent: "#d0a326",
    bg: "#fff7d6",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Snowflake",
      "Gurobi",
      "LINDO",

      "pandas",
      "NumPy",
      "SciPy",
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "D3.js",
      "DC.js",
      "Three.js",
      "Mapbox",
      "Cesium",
      "Figma",
      "Vercel",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="paper-texture relative min-h-screen overflow-hidden border-b-2 border-dashed border-[#9fc5f8] bg-[var(--paper)] px-6 py-24 text-[#202020] md:px-10 lg:px-20"
    >
      {/* paper speckle */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#202020_0.7px,transparent_0.7px)] [background-size:18px_18px]" />

      {/* soft sketch marks */}
      <div className="pointer-events-none absolute left-8 top-16 hidden h-40 w-40 rounded-full border-2 border-dashed border-[#e68ab3]/50 md:block" />
      <div className="pointer-events-none absolute bottom-14 right-10 hidden h-52 w-52 rounded-full border-2 border-dashed border-[#4d8a53]/45 md:block" />

      <SectionTransition
        direction="left"
        accent="rgba(40, 103, 216, 0.2)"
        className="relative mx-auto max-w-7xl"
      >
        {/* Header */}
        <motion.div
          {...getRevealProps({ x: -24, y: 24, amount: 0.35 })}
          className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p
              className={`${jetBrainsMono.className} mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#f26a2e]`}
            >
              my technology :)
            </p>

            <h2
              className={`${patrickHand.className} whitespace-nowrap text-5xl leading-none text-[#2867d8] sm:text-6xl lg:text-8xl`}
            >
              TOOLS & SKILLS
            </h2>

            <div className="mt-3 h-[3px] w-72 max-w-full rounded-full bg-[#2867d8]" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {skillCards.map((card, index) => (
            <SkillCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </SectionTransition>
    </section>
  );
}

function SkillCard({ card, index }: { card: SkillCard; index: number }) {
  return (
    <motion.article
      {...getRevealProps({
        delay: index * 0.08,
        x: index % 2 === 0 ? -24 : 24,
        y: 28,
        rotate: index % 2 === 0 ? -0.8 : 0.8,
      })}
      whileHover={{ y: -6, rotate: 0 }}
      className="group relative min-h-[390px] overflow-hidden rounded-[30px] border-2 border-[#202020] bg-[var(--paper)] shadow-[6px_6px_0_rgba(32,32,32,0.16)]"
    >
      {/* top bar */}
      <div
        className="flex items-center justify-between border-b-2 border-[#202020] px-5 py-4"
        style={{ backgroundColor: card.bg }}
      >
        <WindowDots />
      </div>

      {/* graph paper overlay */}
      <div className="pointer-events-none absolute inset-0 top-[58px] opacity-[0.22] [background-image:linear-gradient(#9fc5f8_1px,transparent_1px),linear-gradient(90deg,#9fc5f8_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative z-10 p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div>
            <h3
              className={`${patrickHand.className} text-5xl leading-none sm:text-6xl`}
              style={{ color: card.accent }}
            >
              {card.title}
            </h3>

            {/* <p
              className={`${dmSans.className} mt-4 max-w-2xl text-base leading-7 text-[#202020]/85 sm:text-lg`}
            >
              {card.note}
            </p> */}
          </div>

          <div
            className={`${patrickHand.className} hidden text-6xl leading-none opacity-80 sm:block`}
            style={{ color: card.accent }}
          >
            {index === 0
              ? "{ }"
              : index === 1
                ? "Σ"
                : index === 2
                  ? "</>"
                  : ">_"}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {card.items.map((item) => (
            <span
              key={item}
              className={`${jetBrainsMono.className} rounded-full border-2 bg-[var(--paper)] px-4 py-2 text-sm font-semibold shadow-[2px_2px_0_rgba(32,32,32,0.12)] transition group-hover:shadow-[3px_3px_0_rgba(32,32,32,0.16)]`}
              style={{ borderColor: card.accent }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function WindowDots() {
  return (
    <div className="flex gap-2">
      <span className="h-4 w-4 rounded-full border-2 border-[#202020] bg-[#ff5b5b]" />
      <span className="h-4 w-4 rounded-full border-2 border-[#202020] bg-[#f6c945]" />
      <span className="h-4 w-4 rounded-full border-2 border-[#202020] bg-[#73c97c]" />
    </div>
  );
}
