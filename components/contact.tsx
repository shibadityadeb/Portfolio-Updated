"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send form data to server action
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "From Portfolio Connect",
        }),
      })

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Message sent successfully!" })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus({ success: false, message: "Failed to send message. Please try again." })
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "An error occurred. Please try again later." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Contact
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl">
          Feel free to reach out to me for any inquiries or opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
          <div className="space-y-6">
            <a
              href="mailto:shibadityaadeb.official@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-400">shibadityaadeb.official@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/shibadityadeb/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-gray-400">linkedin.com/in/shibadityadeb</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white min-h-[150px]"
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isSubmitting}
            >
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitStatus && (
              <div
                className={`mt-4 p-3 rounded-md ${submitStatus.success ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"}`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
