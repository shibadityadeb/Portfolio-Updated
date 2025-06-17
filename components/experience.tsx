"use client"

import { motion } from "framer-motion"
import { BriefcaseIcon, GraduationCap } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Finnancial Analyst Intern",
    company: "Awesome Advertising",
    period: "Nov 2024 - Dec 2024",
    description:"Gained practical experience in financial analysis, stock market strategies, and portfolio building through live sessions, research, trend analysis, and networking, showcasing analytical excellence and a commitment to refining skills.",
    type: "work",
  },
  {
    id: 2,
    title: "Software Engineer Intern", 
    company: "Kiran Foundation",
    period: "Apr 2025 - July 2025",
    description:"As a Software Development Intern at Kiran Foundation, I’m working on app development for a digital platform that enhances education, community empowerment, and accessibility, contributing to a cause that makes a meaningful impact." ,
      type: "work",
  },
  
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Experience
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl">My professional journey and educational background.</p>
      </motion.div>

      <div className="relative">
        
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-600 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 md:pr-12 md:pl-0 pl-12 mb-4 md:mb-0">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    {exp.type === "work" ? (
                      <BriefcaseIcon className="h-5 w-5 text-purple-400 mr-2" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-purple-400 mr-2" />
                    )}
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  </div>
                  <p className="text-purple-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-purple-500 border-4 border-gray-900 transform -translate-x-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
