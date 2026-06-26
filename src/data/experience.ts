export interface ExperienceItem {
  role: string;
  focus: string;
  location: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior AI Data Engineer & Technical Lead",
    focus: "Enterprise Data Pipelines, Warehousing & Production AI",
    location: "Islamabad, Pakistan",
    highlights: [
      "Architected and delivered DDR (Distribution Data Reporting), a production-grade data ingestion platform processing distributor datasets with automated validation, transformation, and exception resolution before publishing clean data to AWS Redshift.",
      "Engineered a memory-bounded, multi-stage streaming pipeline (extraction → structuring → validation → exception checking → insertion) using producer–consumer workers with bounded queues and backpressure.",
      "Maximized AWS Redshift insert throughput with a custom concurrency limiter (semaphore) and adaptive, query-size-aware batching against Redshift's 16 MB statement limit.",
      "Designed and deployed a conversational AI assistant that lets business stakeholders query company databases in natural language.",
      "Built an AI-powered agentic developer assistant from specialized, collaborating agents — reducing boilerplate and base-template generation from hours to minutes.",
      "Designed, optimized, and maintained large-scale PostgreSQL and Redshift schemas for enterprise clients, resolving foreign-key dependencies and restructuring tables for analytics and AI query performance.",
      "Delivered workflow-automation applications for multinational pharmaceutical clients — agreement management, approval chains, dynamic calculations, and automated status notifications.",
      "Established code-review standards, QA checklists, and engineering best practices, and mentored engineers across data engineering, backend, and AI integration.",
    ],
  },
  {
    role: "Android Software Engineer",
    focus: "5G Network Drive-Test Tooling",
    location: "Islamabad, Pakistan",
    highlights: [
      "Designed, developed, and deployed an Android application for 5G network quality testing in live field environments, owning the full product lifecycle.",
      "Integrated Google Maps APIs for real-time device location tracking and routing, enabling precise geospatial monitoring during network tests.",
      "Automated device-level test actions — call initiation, SMS dispatch, upload/download tests, and performance logging — eliminating manual test execution.",
      "Built background services to continuously capture network performance metrics and securely transmit telemetry to a central server for automated reporting.",
      "Optimized for continuous GPS tracking and background sync while maintaining minimal battery consumption for long field sessions.",
    ],
  },
];
