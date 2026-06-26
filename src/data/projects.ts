export type ProjectTier = "flagship" | "major" | "minor";

export type ProjectCategory =
  | "AI"
  | "Data"
  | "Backend"
  | "Web"
  | "Mobile"
  | "Game";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  tier: ProjectTier;
  categories: ProjectCategory[];
  summary: string;
  description: string;
  tech: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  // ----------------------------- Flagship -----------------------------
  {
    name: "DDR — Distribution Data Reporting",
    tier: "flagship",
    categories: ["Data", "Backend", "AI"],
    summary:
      "Flagship event-driven enterprise data ingestion platform publishing clean distributor data to AWS Redshift.",
    description:
      "An event-driven platform automating the full distributor reporting chain. Files emailed by global distributors land on a shared EFS volume, where a watcher enqueues them into a persistent queue for automated ingestion, validation, exception checking, approval routing, and publication to AWS Redshift — escalating to users only on unresolved exceptions. Built on a memory-bounded, multi-stage streaming pipeline with producer–consumer workers and backpressure, a custom semaphore-based concurrency limiter, adaptive query-size-aware batching under Redshift's 16 MB limit, a SQLite WAL out-of-core store for unbounded intermediate state, and SHA-256 deduplication.",
    tech: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "AWS Redshift",
      "SQLite (WAL)",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    name: "Virtual Business Analyst",
    tier: "flagship",
    categories: ["AI", "Data", "Backend"],
    summary:
      "Natural-language interface that lets stakeholders query company databases directly — answers in seconds, not days.",
    description:
      "A conversational interface that lets business stakeholders query company databases in plain English, without waiting on analysts or manual dashboards. It turns ad-hoc data requests that previously took days into instant answers, putting real-time decision-making in the hands of non-technical users.",
    tech: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "LangChain",
      "DeepSeek",
      "Pinecone",
      "PostgreSQL",
    ],
  },
  {
    name: "Developer Assistant",
    tier: "flagship",
    categories: ["AI", "Backend"],
    summary:
      "Agentic virtual coder employees talk to — it generates production-ready apps on the Rapidflow platform.",
    description:
      "An agentic virtual coder employees can simply talk to, which generates production-ready applications on the Rapidflow platform — creating tables, forms, dashboards, and more. Built on an architecture of specialized agents that orchestrate sub-agents and invoke tools to call APIs and build entire apps end-to-end, aligned to internal codebases, databases, and engineering standards.",
    tech: [
      "Agentic Systems",
      "LangChain",
      "LangGraph",
      "Tool-Calling",
      "Node.js",
      "TypeScript",
      "Rapidflow APIs",
    ],
  },

  // --------------------------- Other major ----------------------------
  {
    name: "Rapidflow",
    tier: "major",
    categories: ["Web", "Backend"],
    summary:
      "Workflow-automation platform powering apps like Promotional Expenses Management and Application Delivery Management.",
    description:
      "A workflow-automation platform/product for enterprise clients. Apps built on it include Promotional Expenses Management (defining yearly promotional budgets, raising and approving expense requests against them, and formally closing requests on completion) and Application Delivery Management (efficient employee onboarding/offboarding via configurable checklists assigned across organizational sections). Fully dynamic Angular forms, approval chains, and calculations replace manual, error-prone processes with auditable, real-time workflows.",
    tech: ["Angular", "TypeScript", "Dynamic Forms", "Approval Chains", "REST APIs"],
  },
  {
    name: "Nylytics",
    tier: "major",
    categories: ["Mobile", "Data"],
    summary:
      "Android 5G drive-test tool automating call, SMS, and throughput tests along routes with real-time analytics.",
    description:
      "An Android-based drive-test tool for measuring 5G network performance in the field. It automatically runs call, SMS, and download/throughput tests along predefined drive routes — built on the Maps APIs so field drivers simply follow the on-screen path — then uploads results to an admin dashboard for real-time network-quality analysis. Replaced manual, hardware-heavy drive testing with an accessible, automated mobile solution.",
    tech: ["Android", "Kotlin", "Java", "Jetpack", "Google Maps APIs", "REST"],
  },

  // ------------------------------ Minor -------------------------------
  {
    name: "President",
    tier: "minor",
    categories: ["Web", "Game"],
    summary:
      "Real-time multiplayer card game for 4–15 players with rooms, auth, and a turn timer.",
    description:
      "A real-time online version of the President card game I built to play with friends. Supports 4–15 players with shareable rooms, sign-up/login, ready-up flow, and an auto-pass turn timer, all over live websockets.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Socket.IO",
      "SQLite (better-sqlite3)",
      "Zod",
    ],
  },
  {
    name: "Wi-Box",
    tier: "minor",
    categories: ["Mobile"],
    summary:
      "High-speed device-to-device file sharing and proximity group chat over Wi-Fi Direct — no internet required.",
    description:
      "An Android app (similar to Zapya) that shares data between devices using Wi-Fi Direct at high speed. It also lets users create groups and chat with people or groups in close proximity — entirely offline, without depending on any internet connection.",
    tech: ["Android", "Java", "Wi-Fi Direct", "P2P"],
  },
  {
    name: "Flappy Bird",
    tier: "minor",
    categories: ["Game"],
    summary: "My own version of the classic 2D Flappy Bird game, built in Java.",
    description:
      "A from-scratch implementation of the classic Flappy Bird — a 2D arcade game built in Java, covering the game loop, physics, collision detection, and scoring.",
    tech: ["Java", "2D Game Loop"],
  },
  {
    name: "Pizza App",
    tier: "minor",
    categories: ["Mobile"],
    summary: "Android app for ordering and managing pizza orders.",
    description:
      "An Android application for ordering pizzas and maintaining pizza orders end-to-end, from menu selection through order management.",
    tech: ["Android", "Java"],
  },
  {
    name: "Bluetooth Keyboard",
    tier: "minor",
    categories: ["Mobile"],
    summary:
      "Use your Android phone as a Bluetooth keyboard for Windows.",
    description:
      "An Android app that connects to Windows over Bluetooth, letting the mobile keyboard act as a physical keyboard for the PC.",
    tech: ["Android", "Java", "Bluetooth"],
  },
  {
    name: "SMS Auto Responder",
    tier: "minor",
    categories: ["Mobile"],
    summary:
      "Auto-replies to known messages with configurable templates.",
    description:
      "An Android app that automatically replies to known messages using configured response templates, automating routine SMS responses.",
    tech: ["Android", "Java"],
  },
  {
    name: "Money Trader App",
    tier: "minor",
    categories: ["Mobile"],
    summary:
      "Prototype for transferring money over Wi-Fi Direct in close proximity.",
    description:
      "A prototype application that could trade/transfer money using Wi-Fi Direct between devices in close proximity, exploring offline peer-to-peer value transfer.",
    tech: ["Android", "Java", "Wi-Fi Direct"],
  },

  // ----- Upwork projects: add entries here when details are ready -----
];

export const tierLabels: Record<ProjectTier, string> = {
  flagship: "Flagship Projects",
  major: "Other Major Projects",
  minor: "More Projects",
};
