export type ExperienceLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  dateRange: string;
  skills: string[];
  bullets: string[];
  links?: ExperienceLink[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Octus Intelligence",
    role: "Quantitative Developer Intern",
    dateRange: "Dec 2025 – Present",
    skills: [
      "Java",
      "Spring Boot",
      "Optimization",
      "LINDO",
      "Snowflake",
      "Angular",
      "TypeScript",
    ],
    bullets: [
      "Building backend tools for a **financial portfolio optimizer**, allowing users to batch test many constraint and risk scenarios.",
      "Developing a Java/Spring Boot **batch runner** that generates model variants, tunes solver settings, runs optimization jobs, and compares results across experiment sets.",
      "Working with **linear programming** libraries and **Snowflake** reporting to make optimization testing faster and easier to analyze.",
    ],
  },
  {
    company: "CUBE Consulting",
    role: "Creative Director",
    dateRange: "Aug 2024 – Present",
    skills: [
      "Client Consulting",
      "AI Workflows",
      "React",
      "Flask",
      "Gemini API",
      "Deepgram",
      "Three.js",
      "Mapbox",
      "Brand Design",
      "Canva",
    ],
    bullets: [
      "Promoted from Technical Consultant → Senior Consultant →  **Creative Director**, now directing CUBE’s branding, sponsor materials, promotional strategy, and client-facing design assets.",
      "Led AWS AI Operations project, building an **AI meeting agent** with React, Flask, Gemini, Deepgram, and Google Calendar integrations.",
      "Built a **3D flight visualization platform** for an aviation magazine client.",
    ],
    links: [{ label: "CUBE Website", href: "https://www.cubeconsulting.org/" }],
  },
  {
    company: "Parasol Lab @ UIUC",
    role: "Robotics & Motion-Planning Undergraduate Researcher",
    dateRange: "Aug 2025 – Present",
    skills: [
      "Python",
      "C++",
      "Robotics",
      "Motion Planning",
      "Multi-Agent Path Finding",
      "Benchmarking",
    ],
    bullets: [
      "Researching **multi-agent pathfinding** and motion-planning algorithms to understand how environment structure affects solver performance as robot count scales.",
      "Built a Python **benchmarking pipeline**, evaluating runtime, makespan, solution cost, scalability, and conflicts to support future **ML-based algorithm selection**.",
    ],
    links: [
      { label: "Lab Website", href: "https://parasollab.web.illinois.edu/" },
      { label: "Research Poster", href: "/documents/Turek_MAPF_Poster.pdf" },
      {
        label: "CBS Presentation",
        href: "/documents/CBS_Presentation_Turek.pdf",
      },
      {
        label: "Project Description",
        href: "/documents/MAPF_Research_Turek.pdf",
      },
    ],
  },
  {
    company: "Sky Road LLC",
    role: "Software Engineer Intern",
    dateRange: "Dec 2024 – Dec 2025",
    skills: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "DC.js",
      "Crossfilter",
      "Financial APIs",
      "Data Visualization",
      "UI/UX Design",
    ],
    bullets: [
      "Led front-end development of a **Deal Pipeline dashboard** that helped asset managers filter, analyze, and track 300+ live market deals by date, status, analyst, and investment criteria.",
      "Designed interactive **data visualization workflows** using DC.js, Crossfilter, internal APIs, and configurable tear-sheet widgets for investment teams.",
    ],
  },
];
