export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export const profile = {
  name: "Muhammad Abdullah",
  shortName: "Abdullah",
  title: "Senior Full Stack Engineer",
  specialization: "Specializing in AI-Powered Applications",
  yearsExperience: "5+",
  // Compact stack line shown under the hero specialization.
  stack: ["TypeScript", "NestJS", "Next.js", "LangChain", "AWS", "Agentic AI"],
  tagline:
    "I build AI-powered applications and the production systems behind them — agentic developer tools, conversational analytics, enterprise data pipelines, and cloud-native backends.",
  about: [
    "I'm a Senior Full Stack Engineer with 5+ years building production software end to end, and my focus today is AI-powered applications. I design and ship agentic developer tools, conversational analytics, and the data and backend systems that make them work reliably in production.",
    "I've built multi-agent coding assistants, natural-language interfaces over enterprise data warehouses, and memory-bounded streaming pipelines feeding AWS Redshift — while leading engineers, setting code-review and QA standards, and turning business requirements into technical roadmaps.",
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
