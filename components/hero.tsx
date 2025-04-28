"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Linkedin, Github, Instagram } from "lucide-react"

// ✅ Custom SVG Components for LeetCode and Codeforces
const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.5 12L12 20.5C9 23.5 9 28 12 31L20.5 39.5"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.5 12L38 20.5C41 23.5 41 28 38 31L29.5 39.5"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 25H32"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CodeforcesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" fill="none" />
    <path
      d="M40 200V56l176-16v48l-144 16v96l144-16v48l-176-16z"
      stroke="currentColor"
      strokeWidth="12"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

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
          Shibaditya Deb
        </h1>

        {/* Social Links */}
        <div className="flex space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/in/shibadityadeb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/shibadityadeb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://leetcode.com/u/Shibaditya_deb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <LeetCodeIcon className="h-6 w-6" />
            <span className="sr-only">LeetCode</span>
          </a>
          <a
            href="https://codeforces.com/profile/shibaditya.deb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <CodeforcesIcon className="h-6 w-6" />
            <span className="sr-only">Codeforces</span>
          </a>
          <a
            href="https://www.instagram.com/shivaditya_dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

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

        {/* Buttons */}
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition-colors"
            onClick={handleScroll}
          >
            View My Work
          </motion.button>

          {/* Updated Download Resume Button */}
          <motion.a
            href="/resume-shibaditya-deb.pdf"
            download="Shibaditya_Deb_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-purple-500 hover:bg-purple-900/20 rounded-md font-medium transition-colors flex items-center"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-purple-400" />
      </div>

      <div ref={scrollRef}></div>
    </section>
  )
}
