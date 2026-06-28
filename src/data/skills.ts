export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Agents",
    skills: [
      "LangChain",
      "LangGraph",
      "Agentic Systems",
      "Multi Agent Orchestration",
      "Tool Calling",
      "RAG",
      "DeepSeek",
      "Pinecone",
    ],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "Kotlin", "SQL"],
  },
  {
    category: "Backend & Web",
    skills: ["NestJS", "Node.js", "Next.js", "React", "Angular", "REST APIs"],
  },
  {
    category: "Data Engineering",
    skills: [
      "AWS Redshift",
      "PostgreSQL",
      "ETL & Streaming Pipelines",
      "Schema Design",
      "Data Validation",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Linux", "CI/CD"],
  },
  {
    category: "Systems & Performance",
    skills: [
      "Concurrency & Backpressure",
      "Queue Architecture",
      "Performance Optimization",
    ],
  },
  {
    category: "Mobile",
    skills: ["Android SDK", "Jetpack", "Room", "MVVM", "Maps & Geolocation"],
  },
];
