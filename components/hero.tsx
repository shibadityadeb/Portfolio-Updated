"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-[calc(100vh-8rem)] flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          John Doe
        </h1>
        <h2 className="text-2xl font-semibold mb-6 text-gray-300">Full Stack Developer</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl mb-6 text-gray-300">
            I'm a passionate full-stack developer with expertise in React, Node.js, and cloud technologies. With 5+
            years of experience building scalable web applications, I focus on creating elegant solutions to complex
            problems.
          </p>
          <p className="text-lg mb-8 text-gray-400">
            My approach combines technical excellence with user-centered design principles. I'm constantly learning new
            technologies and methodologies to stay at the forefront of web development.
          </p>
        </div>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition-colors"
            onClick={handleScroll}
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-purple-500 hover:bg-purple-900/20 rounded-md font-medium transition-colors"
          >
            Download Resume
          </motion.button>
        </div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-purple-400" />
      </div>
      <div ref={scrollRef}></div>
    </section>
  )
}
