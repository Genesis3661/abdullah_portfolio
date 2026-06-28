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
  /** Short descriptive line shown under the project name. */
  subtitle: string;
  /** Emoji used as the card/modal icon. */
  icon: string;
  tier: ProjectTier;
  categories: ProjectCategory[];
  /** Concise card blurb (2–3 lines). */
  summary: string;
  /** Intro paragraph shown at the top of the detail modal. */
  overview: string;
  /** Detailed bullet points shown in the expanded detail modal. */
  highlights: string[];
  tech: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  // ----------------------------- Flagship -----------------------------
  {
    name: "Developer Assistant",
    subtitle: "Agentic AI Coding Platform",
    icon: "🤖",
    tier: "flagship",
    categories: ["AI", "Backend"],
    summary:
      "An agentic virtual coder employees simply talk to — it builds production-ready apps end to end on the Rapidflow platform.",
    overview:
      "An agentic virtual coder that employees can simply talk to, which generates production-ready applications on the Rapidflow platform — creating tables, forms, dashboards, and complete workflows from natural-language intent.",
    highlights: [
      "Built on a multi-agent architecture where specialized agents orchestrate sub-agents and invoke tools to call platform APIs and assemble entire applications end to end.",
      "Aligned to internal codebases, databases, and engineering standards so every generated artifact is standards-compliant and consistent with the existing platform.",
      "Reduced boilerplate and base-template generation from hours to minutes, measurably accelerating delivery and improving team productivity.",
      "Continuously improved through live updates, expanding the set of components and workflows the agents can generate over time.",
    ],
    tech: [
      "LangChain",
      "LangGraph",
      "Multi-Agent",
      "Tool-Calling",
      "Node.js",
      "TypeScript",
      "Rapidflow APIs",
    ],
  },
  {
    name: "Virtual Business Analyst",
    subtitle: "Conversational Analytics over Enterprise Data",
    icon: "💬",
    tier: "flagship",
    categories: ["AI", "Data", "Backend"],
    summary:
      "A natural-language interface that lets stakeholders query company databases in plain English — answers in seconds, not days.",
    overview:
      "A natural-language interface that lets business stakeholders query company databases directly, without waiting on analysts or manual dashboards. It turns ad-hoc data requests that previously took days into instant answers, putting real-time decision-making in the hands of non-technical users.",
    highlights: [
      "Translates plain-English business questions into accurate database queries and returns instant, conversational answers.",
      "Collapses ad-hoc reporting cycles from days to seconds, freeing analysts from repetitive query work.",
      "Retrieval-augmented architecture grounds every response in the company's real schema and data using a vector store, reducing hallucination.",
      "Delivered as a scalable, cloud-native NestJS service integrated directly with the production data warehouse.",
    ],
    tech: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "LangChain",
      "DeepSeek",
      "Pinecone (RAG)",
      "PostgreSQL",
    ],
  },
  {
    name: "DDR — Distribution Data Reporting",
    subtitle: "Event-Driven Data Ingestion to AWS Redshift",
    icon: "🗄️",
    tier: "flagship",
    categories: ["Data", "Backend", "AI"],
    summary:
      "Event-driven platform that automates the full distributor reporting chain — ingest, validate, resolve exceptions, and publish clean data to AWS Redshift.",
    overview:
      "An event-driven platform (internally \"MailFlow\") automating the full distributor reporting chain. Files emailed by global distributors land on a shared EFS volume, where a watcher enqueues them into a persistent queue for automated ingestion, validation, exception checking, approval routing, and publication to AWS Redshift — escalating to users only on unresolved exceptions.",
    highlights: [
      "Processes distributor Excel datasets (Stock, Sales, Transit, Actuals, IMS, TMS Estimates) with automated validation, transformation, and exception resolution before publishing clean data to AWS Redshift.",
      "Engineered a memory-bounded, multi-stage streaming pipeline (extraction → structuring → validation → exception checking → insertion) using producer–consumer workers with bounded queues and backpressure.",
      "Maximized Redshift insert throughput with a custom semaphore-based concurrency limiter and adaptive, query-size-aware batching that estimates statement size against Redshift's 16 MB limit and splits work into parallel batches only when required.",
      "Used SQLite in WAL mode as a tuned out-of-core store (custom PRAGMAs, manual checkpointing) to offload unbounded intermediate state from RAM, backed by a persistent file queue with controlled concurrency, cancellation, failure recovery, and deduplication that survives server restarts without data loss.",
      "Eliminated redundant API and database calls during exception resolution via SHA-256 deduplication of repeated values, maintaining a value→row mapping with a \"checked\" cache.",
      "Implemented schema-flexible Redshift staging using SUPER columns with JSON_PARSE, plus schema-aware validation against the live database schema (type, precision/scale, nullability) for constraint-driven data-quality checks.",
    ],
    tech: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "AWS Redshift",
      "SQLite (WAL)",
      "PostgreSQL",
      "AWS EFS",
      "Docker",
    ],
  },

  // --------------------------- Other major ----------------------------
  {
    name: "Rapidflow",
    subtitle: "Enterprise Workflow Automation Platform",
    icon: "🔁",
    tier: "major",
    categories: ["Web", "Backend"],
    summary:
      "A workflow-automation platform powering apps like Promotional Expenses Management and Application Delivery Management for multinational clients.",
    overview:
      "A workflow-automation platform and product for enterprise clients. Teams build apps on top of it using fully dynamic Angular forms, approval chains, and automated calculations that replace manual, error-prone processes with auditable, real-time workflows.",
    highlights: [
      "Powers Promotional Expenses Management — defining yearly promotional budgets, raising and approving expense requests against them throughout the year, and formally closing requests on completion.",
      "Powers Application Delivery Management — streamlined employee onboarding and offboarding via configurable checklists assigned across organizational sections.",
      "Fully dynamic Angular forms, approval chains, and automated calculations give clients an auditable, real-time view of budget allocation and spend.",
      "Delivered for large multinational pharmaceutical clients, replacing manual processes with secure digital workflows that reduced turnaround time and human error.",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "NestJS",
      "Dynamic Forms",
      "Approval Chains",
      "REST APIs",
    ],
  },
  {
    name: "Nylytics",
    subtitle: "Automated 5G Network Drive-Test Suite",
    icon: "📡",
    tier: "major",
    categories: ["Mobile", "Data"],
    summary:
      "An Android drive-test tool that automates call, SMS, and throughput tests along map-guided routes, streaming telemetry to a real-time analytics dashboard.",
    overview:
      "An Android-based drive-test tool for measuring 5G network performance in the field. It automatically runs call, SMS, and download/throughput tests along predefined drive routes — built on the Maps APIs so field drivers simply follow the on-screen path — then uploads results to an admin dashboard for real-time network-quality analysis, replacing manual, hardware-heavy drive testing.",
    highlights: [
      "Designed, developed, and shipped the full product lifecycle — from requirement gathering to production release — for 5G network-quality testing in live field environments.",
      "Integrated Google Maps APIs for real-time location tracking and route guidance, enabling precise geospatial monitoring throughout active test sessions.",
      "Automated device-level test actions — call initiation, SMS dispatch, upload/download throughput tests, and performance logging — as devices roamed across the city, eliminating manual test execution entirely.",
      "Built background services that continuously capture network performance metrics and securely transmit telemetry to a central server for automated reporting and analysis.",
      "Optimized continuous GPS tracking, network logging, and background sync for minimal battery consumption — critical for long field sessions.",
      "Collaborated with backend teams on secure REST endpoints and integrated push notifications to coordinate field testers in real time during city-wide test runs.",
    ],
    tech: [
      "Android",
      "Kotlin",
      "Java",
      "Jetpack",
      "Google Maps APIs",
      "Background Services",
      "REST",
    ],
  },

  // ------------------------------ Minor -------------------------------
  {
    name: "President",
    subtitle: "Real-Time Multiplayer Card Game",
    icon: "🃏",
    tier: "minor",
    categories: ["Web", "Game"],
    summary:
      "A real-time online version of the President card game for 4–15 players, with rooms, auth, and an auto-pass turn timer over live websockets.",
    overview:
      "A real-time online version of the President card game I built to play with friends, supporting 4–15 players over live websockets.",
    highlights: [
      "Shareable game rooms with sign-up/login and a ready-up flow before each match.",
      "Live gameplay synchronized across all players via Socket.IO, with an auto-pass turn timer to keep rounds moving.",
      "Persistent state and validation handled with better-sqlite3 and Zod schemas.",
    ],
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
    subtitle: "Offline Wi-Fi Direct File Sharing & Chat",
    icon: "📶",
    tier: "minor",
    categories: ["Mobile"],
    summary:
      "High-speed device-to-device file sharing and proximity group chat over Wi-Fi Direct — no internet connection required.",
    overview:
      "An Android app (similar to Zapya) that shares data between devices using Wi-Fi Direct at high speed, entirely offline.",
    highlights: [
      "High-speed peer-to-peer file transfer over Wi-Fi Direct, with no dependency on any internet connection.",
      "Lets users create groups and chat with people or groups in close physical proximity.",
    ],
    tech: ["Android", "Java", "Wi-Fi Direct", "P2P"],
  },
  {
    name: "Flappy Bird",
    subtitle: "Classic 2D Arcade Game in Java",
    icon: "🐤",
    tier: "minor",
    categories: ["Game"],
    summary:
      "A from-scratch implementation of the classic Flappy Bird — game loop, physics, collision detection, and scoring, built in Java.",
    overview:
      "A from-scratch implementation of the classic Flappy Bird, a 2D arcade game built in Java.",
    highlights: [
      "Hand-built game loop, gravity/physics, collision detection, and scoring.",
      "Pure Java implementation focused on core game-programming fundamentals.",
    ],
    tech: ["Java", "2D Game Loop"],
  },
  {
    name: "Pizza App",
    subtitle: "Android Ordering & Order Management",
    icon: "🍕",
    tier: "minor",
    categories: ["Mobile"],
    summary:
      "An Android app for ordering pizzas and managing orders end-to-end, from menu selection through order tracking.",
    overview:
      "An Android application for ordering pizzas and maintaining pizza orders end to end, from menu selection through order management.",
    highlights: [
      "Menu browsing, cart, and order placement flow.",
      "Order management and tracking for placed orders.",
    ],
    tech: ["Android", "Java"],
  },
  {
    name: "Bluetooth Keyboard",
    subtitle: "Phone-as-Keyboard for Windows",
    icon: "⌨️",
    tier: "minor",
    categories: ["Mobile"],
    summary:
      "An Android app that turns your phone into a Bluetooth keyboard for a Windows PC.",
    overview:
      "An Android app that connects to Windows over Bluetooth, letting the mobile keyboard act as a physical keyboard for the PC.",
    highlights: [
      "Pairs with Windows over Bluetooth and relays key input in real time.",
      "Turns a phone into a convenient wireless input device.",
    ],
    tech: ["Android", "Java", "Bluetooth"],
  },
  {
    name: "SMS Auto Responder",
    subtitle: "Template-Based Automatic SMS Replies",
    icon: "✉️",
    tier: "minor",
    categories: ["Mobile"],
    summary:
      "An Android app that automatically replies to known messages using configurable response templates.",
    overview:
      "An Android app that automatically replies to known messages using configured response templates, automating routine SMS responses.",
    highlights: [
      "Matches incoming messages against known patterns and replies automatically.",
      "Configurable templates for routine, repetitive responses.",
    ],
    tech: ["Android", "Java"],
  },
  {
    name: "Money Trader App",
    subtitle: "Proximity Wi-Fi Direct Money Transfer (Prototype)",
    icon: "💸",
    tier: "minor",
    categories: ["Mobile"],
    summary:
      "A prototype exploring offline peer-to-peer money transfer over Wi-Fi Direct between devices in close proximity.",
    overview:
      "A prototype application that could trade and transfer money using Wi-Fi Direct between devices in close proximity, exploring offline peer-to-peer value transfer.",
    highlights: [
      "Explored offline value transfer between nearby devices using Wi-Fi Direct.",
      "Prototype-stage investigation of peer-to-peer transfer flows.",
    ],
    tech: ["Android", "Java", "Wi-Fi Direct"],
  },

  // ----- Upwork projects: add entries here when details are ready -----
];

export const tierLabels: Record<ProjectTier, string> = {
  flagship: "Flagship Projects",
  major: "Other Major Projects",
  minor: "More Projects",
};
