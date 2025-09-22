export type Feature = {
  title: string,
  description: string,
  icon: string
}

export const features: Feature[] = [
  {
    title: "comprehensive courses",
    description: "Access a wide range of carefully curated courses designed by industrial experts.",
    icon: "📚"
  },
  {
    title: "interactive learning",
    description: "Engage with interactive content,quizzes, and assignments to enhance your learning experience.",
    icon: "🎮"
  },
  {
    title: "progress tracking",
    description: "Monitor your progress and achievements with detailed analytics and personalized dashboards.",
    icon: "📊"
  },
  {
    title: "community support",
    description: "Join a vibrant community of learners and instructors to collaborate and share knowledge.",
    icon: "👥"
  },
]

export const frontendNavLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "courses",
    href: "/courses",
  },
  {
    title: "dashboard",
    href: "/dashboard",
  },
]