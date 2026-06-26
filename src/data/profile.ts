export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export const profile = {
  name: "Muhammad Abdullah",
  shortName: "Abdullah",
  title: "Senior AI Data Engineer & Technical Lead",
  yearsExperience: "5+",
  tagline:
    "Building enterprise data pipelines, warehouse architectures, and production AI systems — end-to-end ETL, conversational AI, and agentic developer tools.",
  about: [
    "I'm a Senior AI Data Engineer and Technical Lead with 5+ years architecting and shipping production systems that move and make sense of data at scale. My core focus is end-to-end ETL, warehouse architecture, and AI systems that put real-time decision-making in the hands of business users.",
    "I've built memory-bounded streaming pipelines, throughput-optimized AWS Redshift ingestion, conversational analytics, and agentic developer tooling — alongside leading engineers, setting code-review and QA standards, and translating business requirements into technical roadmaps.",
  ],
  location: "Islamabad, Pakistan",
  email: "malik3661@live.com",
  phone: "92-330-9519366",
  // Drop your CV PDF into /public/abdullah-cv.pdf to enable the download button.
  resumePath: "/abdullah-cv.pdf",
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/Genesis3661",
      handle: "Genesis3661",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-abdullah3661",
      handle: "muhammad-abdullah3661",
    },
    email: {
      label: "Email",
      href: "mailto:malik3661@live.com",
      handle: "malik3661@live.com",
    },
  },
} as const;
