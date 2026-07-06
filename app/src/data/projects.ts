export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  shortTitle?: string;
  description: string;
  previewImage: string;
  detailImageOne?: string;
  detailImageTwo?: string;
  accentColor: string;
  tags: string[];
  bullets?: string[];
  detailsFormat?: "bullets" | "paragraph";
  detailsParagraph?: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Adaptive Multi-Agent Pathfinding Benchmarking Platform",
    shortTitle: "MAPF Benchmarking",
    description:
      "A robotics research platform for testing how path-planning algorithms scale across different environments and robot team sizes.",
    previewImage: "/project_pictures/mapf-cartoon.png",
    detailImageOne: "/project_pictures/MAPF-pipeline.png",
    detailImageTwo: "/project_pictures/MAPF-maps.png",
    accentColor: "#CFE1FF",
    tags: [
      "Python",
      "C++",
      "Robotics",
      "A* Search",
      "CBS",
      "MA-CBS",
      "Motion Planning",
      "Benchmarking",
      "Performance Analysis",
    ],
    detailsFormat: "bullets",
    bullets: [
      "Built a **benchmarking pipeline** to evaluate multi-agent pathfinding algorithms (**A\\***, **CBS**, **MA-CBS**) across open, cluttered, and narrow-passage environments with varying robot team sizes.",
      "Measured **runtime**, **makespan**, **solution cost**, and **conflict behavior** to characterize how each planner scales as environments grow more crowded or constrained.",
      "Designed the platform to feed results into a future **adaptive ML framework** that selects the best planning strategy for a given environment on the fly.",
      "Implemented core planning and evaluation logic in **Python** and **C++**, working within Parasol Lab's research codebase under Dr. Nancy Amato.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Kcruz28/Parasol-PPL-2.0" },
      { label: "Poster", href: "/documents/Turek_MAPF_Poster.pdf" },
    ],
  },
  {
    title: "3D Flight Visualization and Simulation Platform",
    shortTitle: "Flight Simulator",
    description:
      "An interactive aviation storytelling platform that turns raw flight-track data into a 3D simulation with animated aircraft movement, route playback, and geospatial context.",
    previewImage: "/project_pictures/airplane_world.png",
    detailImageTwo: "/project_pictures/3js-demo.png",
    accentColor: "#B8C7F4",
    tags: [
      "JavaScript",
      "Three.js",
      "Mapbox",
      "Cesium",
      "WebGL",
      "Data Visualization",
      "Geospatial Data",
    ],
    detailsFormat: "bullets",
    bullets: [
      "Built a **3D flight playback experience** using **Three.js** and **WebGL**, letting users scrub through a route, follow the aircraft camera, and track altitude, velocity, and geographic movement in real time.",
      "Processed raw flight-track **JSON** into normalized simulation state — timestamps, aircraft metadata, coordinates, and route samples — to drive smooth, accurate playback.",
      "Integrated **Mapbox** and **Cesium** for geospatial context, grounding the 3D simulation in real-world terrain and location data.",
      "Partnered directly with an **aviation media client** through weekly meetings to align technical features with story-driven business goals.",
      "Led and supported teammates across **Git**, **JavaScript**, data processing, and client communication as part of a CUBE Consulting engagement.",
    ],
    links: [],
  },
  {
    title: "Big Ten Fight Song Data Visualization",
    shortTitle: "Fight Song Data Viz",
    description:
      "A competition-winning data visualization project that analyzes Big Ten fight song lyrics, school spirit, attendance, and football outcomes through an interactive React and D3 interface.",
    previewImage: "/project_pictures/fight-song.png",
    detailImageOne: "/project_pictures/big10-rhetoric.png",
    detailImageTwo: "/project_pictures/big10-map.png",
    accentColor: "#EADCFB",
    tags: [
      "Python",
      "pandas",
      "NumPy",
      "React",
      "D3.js",
      "JavaScript",
      "Feature Engineering",
      "Data Storytelling",
    ],
    bullets: [
      "Won the UIUC round of the Big Ten Academic Alliance Data Visualization Championship.",
      "Built a Python pipeline to clean fight song metadata, normalize school identifiers, merge football outcome data, and engineer lyrical trope metrics.",
      "Created custom lexicon-based scores for aggression, unity, tradition, pride, chant energy, and competitive language.",
      "Designed an interactive React/D3 interface with maps, filters, scatterplots, score explanations, and conference-level comparisons.",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://amturek2.github.io/Big-10-Song-Data-Viz/",
      },
      {
        label: "GitHub",
        href: "https://github.com/amturek2/Big-10-Song-Data-Viz",
      },
      {
        label: "Big 10 Competition Page",
        href: "    https://publish.illinois.edu/lovedataweek/love-data-week-2026-data-viz-competition/",
      },
    ],
  },
  {
    title: "Cancer Detection Pipeline with Bloom Filters",
    shortTitle: "Cancer Detection",
    description:
      "A genomics data systems project that compresses large sequencing files into Bloom-filter representations and classifies tumor versus normal tissue using similarity-based methods.",
    previewImage: "/project_pictures/gene_data.png",
    detailImageOne: "/project_pictures/gene-table.png",
    detailImageTwo: "/project_pictures/gene-bloom.png",
    accentColor: "#C7C4F6",
    tags: [
      "Python",
      "Bloom Filters",
      "K-mers",
      "Jaccard Similarity",
      "MurmurHash3",
      "MinHash",
      "Genomics",
      "Classification",
    ],
    bullets: [
      "Compressed hundreds of **GB of genomic FASTA/FASTQ data** into compact **Bloom-filter** representations, enabling fast, memory-efficient tissue comparison at scale.",
      "Implemented **k-mer extraction**, singleton-noise filtering, and hash-function testing (**MurmurHash3**, **MinHash**) to build robust approximate set-similarity scoring.",
      "Built a **Jaccard-similarity classifier** to distinguish tumor tissue from normal tissue using compressed genomic fingerprints, rather than full raw sequences.",
      "Presented the research at **two undergraduate conferences**, translating probabilistic data structures and cancer-signal detection for mixed technical and non-technical audiences.",
    ],
    links: [
      { label: "Poster", href: "/documents/Spring25PosterCSSTARS.pdf" },
      { label: "GitHub", href: "https://github.com/amturek2/spr25_stars" },
    ],
  },
  {
    title: "SkipIt Real-Time Queue App",
    shortTitle: "SkipIt",
    description:
      "A cross-platform queue management app that lets customers join virtual lines while businesses manage live waitlists, service flow, and estimated wait times.",
    previewImage: "/project_pictures/skipit.png",
    detailImageOne: "/project_pictures/skipit-app.png",
    detailImageTwo: "/project_pictures/skipit-architecture.png",
    accentColor: "#D9C8F5",
    tags: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "Cloud Functions",
      "TypeScript",
      "Real-Time Systems",
    ],
    bullets: [
      "Built frontend flows using **Flutter** and **Dart** that subscribe to **Firestore streams**, updating queue position, wait time, favorites, and business dashboards in real time.",
      "Connected the client to **Firebase Auth**, **Cloud Firestore**, and **Cloud Functions**, with role-based routing for customers versus businesses.",
      "Handled asynchronous loading, error states, live queue updates, and user-specific membership records across the app.",
      "Designed **mascot and branding elements** while contributing to product usability, system architecture, and frontend-backend integration.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/CS222-UIUC/fa25-fa25-team102",
      },
    ],
  },
  {
    title: "Machine Learning Music Recommendation Website",
    shortTitle: "Music Recommender",
    description:
      "A full-stack recommendation platform that connects a React frontend to a Flask and scikit-learn backend for personalized song suggestions.",
    previewImage: "/project_pictures/music-recommendation.png",
    detailImageOne: "/project_pictures/music1.png",
    detailImageTwo: "/project_pictures/music2.png",
    accentColor: "#9BB9F2",
    tags: [
      "React",
      "Flask",
      "Python",
      "scikit-learn",
      "K-Means",
      "Cosine Similarity",
      "Pandas",
      "NumPy",
    ],
    bullets: [
      "Built the **React** frontend and **Flask** backend integration for a music recommendation app that turns user preferences into ranked song suggestions.",
      "Collaborated on a **scikit-learn** recommendation pipeline using **K-Means clustering**, feature scaling, categorical encoding, and **cosine similarity**.",
      "Designed user flows, form validation, API request/response contracts, and recommendation result displays.",
      "Translated **machine learning** outputs into an interface that felt understandable and useful to non-technical users.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/CS196Illinois/FA24-Group29",
      },
    ],
  },
];
