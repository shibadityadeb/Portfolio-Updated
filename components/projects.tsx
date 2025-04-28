"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Dream Campus",
    description:
      "I created Dream Campus to set a benchmark for sleek, responsive web design. Focused on delivering the best UI/UX experience, the platform helps students seamlessly explore colleges and career options across all devices with ease.",
    technologies: ["React + Vite", "HTML", "CSS", "JavaScript", "JSON Server", "AI Chatbot"],
    github: "https://github.com/shibadityadeb/Dream-Campus",
    live: "https://dream-campus.vercel.app/",
  },
  {
    id: 2,
    title: "Shift Booking App",
    description:
      "Shift Booking App is a mobile platform built to offer a seamless, intuitive experience for booking available time slots. Users can easily view and reserve slots in real time, featuring smooth navigation and a sleek, responsive interface.",
    technologies: ["React Native", "TypeScript", "Expo Go"],
    github: "https://github.com/shibadityadeb/Shift-Booking-app",
    live: "https://github.com/shibadityadeb/Shift-Booking-app#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Weather App offers real-time weather updates with dynamic icons and backgrounds. It features a sleek UI, search functionality, and AI-enhanced design for a smooth user experience, providing essential weather details like temperature, humidity, and wind speed.",
    technologies: ["React + Vite", "OpenWeatherMap API"],
    github: "https://github.com/shibadityadeb/Weather-App-Project",
    live: "https://onlineweathercheck.netlify.app/",
  },
  {
    id: 4,
    title: "Sentence Construction Game",  
    description:
      "Sentence Construction Tool is a React-based app that challenges users to complete sentences using interactive word options. It features a timer, scoring system, and feedback screen with correct/incorrect answers, offering a fun and engaging way to test sentence skills.",
    technologies: ["React + Vite", "Tailwind CSS", "JSON Server", "React Router"],
    github: "https://github.com/shibadityadeb/Sentence-constructor",
    live: "https://sentence-constructor.vercel.app/",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl">
          Here are some of my recent projects. Each project includes links to the GitHub repository and the live demo.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
