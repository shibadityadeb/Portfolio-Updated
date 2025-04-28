"use client"

import { motion } from "framer-motion"
import { BriefcaseIcon, GraduationCap } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead the frontend development team in building and maintaining a large-scale SaaS platform. Implemented new features, optimized performance, and mentored junior developers.",
    type: "work",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description:
      "Developed and maintained multiple web applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality products.",
    type: "work",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "WebCraft Agency",
    period: "2016 - 2018",
    description:
      "Created responsive websites and web applications for various clients. Worked with HTML, CSS, JavaScript, and jQuery.",
    type: "work",
  },
  {
    id: 4,
    title: "Master's in Computer Science",
    company: "University of Technology",
    period: "2014 - 2016",
    description:
      "Specialized in Web Technologies and Software Engineering. Thesis on 'Optimizing React Applications for Performance'.",
    type: "education",
  },
  {
    id: 5,
    title: "Bachelor's in Computer Science",
    company: "State University",
    period: "2010 - 2014",
    description: "Graduated with honors. Focused on programming fundamentals, data structures, and algorithms.",
    type: "education",
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
        {/* Timeline line */}
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
