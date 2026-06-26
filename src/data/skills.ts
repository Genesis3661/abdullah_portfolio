export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "Kotlin"],
  },
  {
    category: "Backend & Web",
    skills: ["NestJS", "Node.js", "REST APIs", "Angular"],
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
    category: "AI & Agents",
    skills: [
      "LangChain",
      "LangGraph",
      "DeepSeek",
      "Pinecone",
      "RAG",
      "Agentic Systems",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Linux", "CI/CD"],
  },
  {
    category: "Mobile",
    skills: [
      "Android SDK",
      "Jetpack",
      "Room",
      "MVVM",
      "Maps & Geolocation",
    ],
  },
  {
    category: "Systems & Performance",
    skills: [
      "Concurrency & Backpressure",
      "Queue Architecture",
      "Performance Optimization",
    ],
  },
];
