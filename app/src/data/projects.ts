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
    detailImageOne: "/project_pictures/robot_detail1.png",
    detailImageTwo: "/project_pictures/robot_detail2.png",
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

    detailsFormat: "paragraph",
    detailsParagraph:
      "A robotics research platform for testing how different multi-agent pathfinding algorithms perform  when many robots need to move through the same space without collisions as environments become more crowded, constrained, or complex. The system runs planning methods across open, cluttered, and narrow-passage maps with different robot counts, then compares runtime, makespan, solution cost, scalability, and conflict behavior. I helped build the benchmarking pipeline so the results can eventually support an adaptive ML framework that chooses the best planning strategy for a given environment.",
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
    bullets: [
      "Built a 3D flight playback experience where users can scrub through a route, follow the aircraft camera, and visualize altitude, velocity, and geographic movement.",
      "Processed raw flight JSON into normalized simulation state, including timestamps, aircraft metadata, coordinates, and route samples.",
      "Worked directly with an aviation media client through weekly meetings to align features with story-driven business goals.",
      "Led and supported teammates across Git, JavaScript, data processing, and technical communication throughout the consulting project.",
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Big Ten Fight Song Data Visualization",
    shortTitle: "Fight Song Data Viz",
    description:
      "A competition-winning data visualization project that analyzes Big Ten fight song lyrics, school spirit, attendance, and football outcomes through an interactive React and D3 interface.",
    previewImage: "/project_pictures/fight-song.png",
    detailImageOne: "/project_pictures/music.png",
    detailImageTwo: "/project_pictures/music.png",
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
      { label: "Live Site", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Cancer Detection Pipeline with Bloom Filters",
    shortTitle: "Cancer Detection",
    description:
      "A genomics data systems project that compresses large sequencing files into Bloom-filter representations and classifies tumor versus normal tissue using similarity-based methods.",
    previewImage: "/project_pictures/gene_data.png",
    detailImageOne: "/project_pictures/genomics.png",
    detailImageTwo: "/project_pictures/genomics.png",
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
      "Compressed hundreds of GB of genomic FASTA/FASTQ data into compact Bloom-filter representations for efficient tissue comparison.",
      "Implemented k-mer extraction, singleton-noise filtering, hash-function testing, and approximate set-similarity scoring.",
      "Built a Jaccard-similarity classifier to distinguish tumor tissue from normal tissue using compressed genomic fingerprints.",
      "Presented the research at two undergraduate conferences, explaining probabilistic data structures and cancer-signal detection to mixed audiences.",
    ],
    links: [
      { label: "Poster", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "SkipIt Real-Time Queue App",
    shortTitle: "SkipIt",
    description:
      "A cross-platform queue management app that lets customers join virtual lines while businesses manage live waitlists, service flow, and estimated wait times.",
    previewImage: "/project_pictures/skipit.png",
    detailImageOne: "/project_pictures/skipit.png",
    detailImageTwo: "/project_pictures/skipit.png",
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
      "Built frontend flows that subscribe to Firestore streams and update queue position, wait time, favorites, and business dashboards in real time.",
      "Connected the Flutter client to Firebase Auth, Cloud Firestore, Cloud Functions, and role-based routing.",
      "Handled asynchronous loading, error states, live queue updates, and user-specific membership records.",
      "Designed mascot and branding elements while contributing to product usability, architecture planning, and frontend-backend integration.",
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Machine Learning Music Recommendation Website",
    shortTitle: "Music Recommender",
    description:
      "A full-stack recommendation platform that connects a React frontend to a Flask and scikit-learn backend for personalized song suggestions.",
    previewImage: "/project_pictures/music-recommendation.png",
    detailImageOne: "/project_pictures/music-recommender.png",
    detailImageTwo: "/project_pictures/music-recommender.png",
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
      "Built the frontend and backend integration for a music recommendation app that turns user preferences into ranked song suggestions.",
      "Collaborated on a scikit-learn recommendation pipeline using clustering, feature scaling, categorical encoding, and cosine similarity.",
      "Designed user flows, form validation, API request/response contracts, and recommendation result displays.",
      "Translated machine learning outputs into an interface that felt understandable and useful to non-technical users.",
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Slides", href: "#" },
    ],
  },
];
