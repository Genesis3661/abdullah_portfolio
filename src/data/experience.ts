export interface ExperienceItem {
  role: string;
  focus: string;
  location: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Full Stack Engineer & Technical Lead",
    focus: "AI Powered Applications, Data Platforms & Enterprise Systems",
    location: "Islamabad, Pakistan",
    highlights: [
      "Built an AI powered agentic developer assistant from specialized, collaborating agents aligned to internal codebases, databases, and engineering standards, reducing boilerplate and base template generation from hours to minutes.",
      "Designed and deployed a conversational AI assistant that lets business stakeholders query company databases in natural language, turning multi day reporting requests into instant answers.",
      "Architected and delivered DDR (Distribution Data Reporting), a production grade data ingestion platform with automated validation, transformation, and exception resolution before publishing clean data to AWS Redshift.",
      "Engineered a memory bounded, multi stage streaming pipeline (extraction → structuring → validation → exception checking → insertion) using producer and consumer workers with bounded queues and backpressure.",
      "Maximized AWS Redshift insert throughput with a custom concurrency limiter (semaphore) and adaptive, query size aware batching against Redshift's 16 MB statement limit.",
      "Designed, optimized, and maintained large scale PostgreSQL and Redshift schemas for enterprise clients, resolving foreign key dependencies and restructuring tables for analytics and AI query performance.",
      "Built and maintained scalable, cloud native backend services (NestJS, Node.js, TypeScript, Docker, REST) across Linux staging and production environments.",
      "Delivered workflow automation applications for multinational pharmaceutical clients, covering agreement management, approval chains, dynamic calculations, and automated status notifications.",
      "Established code review standards, QA checklists, and engineering best practices, and mentored engineers across full stack, data engineering, and AI integration.",
    ],
  },
  {
    role: "Android Software Engineer",
    focus: "5G Network Drive Test Tooling",
    location: "Islamabad, Pakistan",
    highlights: [
      "Designed, developed, and deployed an Android application for 5G network quality testing in live field environments, owning the full product lifecycle from requirements to production release.",
      "Integrated Google Maps APIs for real time device location tracking and route guidance, enabling precise geospatial monitoring during active network tests.",
      "Automated device level test actions (call initiation, SMS dispatch, upload/download tests, and performance logging), eliminating manual test execution as devices roamed across the city.",
      "Built background services to continuously capture network performance metrics and securely transmit telemetry to a central server for automated reporting and analysis.",
      "Optimized continuous GPS tracking, network logging, and background sync while maintaining minimal battery consumption for long field sessions.",
      "Collaborated with backend teams on secure REST endpoints and integrated push notifications to coordinate field testers in real time during city wide test runs.",
    ],
  },
];
