import type { Metadata } from "next"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import BackgroundAnimation from "@/components/background-animation"

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "My professional portfolio showcasing my skills and experience",
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}
