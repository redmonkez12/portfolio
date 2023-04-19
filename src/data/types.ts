export type Level = "newbie" | "junior" | "intermediate" | "advanced" | "guru" | "side project";

export type Project = {
  title: string;
  description: string;
  image: string;
  level?: Level;
  github?: string;
  page?: string;
};
