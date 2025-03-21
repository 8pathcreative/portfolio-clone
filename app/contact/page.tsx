"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left sidebar with navigation */}
        <div className="w-full md:w-1/4 border-r border-zinc-800 p-8 flex flex-col justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity mb-12"
            >
              <ArrowLeft size={16} />
              <span>Back to home</span>
            </Link>

            <h2 className="text-2xl font-bold mb-8">Contact</h2>

            <nav className="space-y-6">
              <Link href="/projects" className="block group">
                <h3 className="text-xl font-medium group-hover:underline">Projects</h3>
              </Link>

              <Link href="/about" className="block group">
                <h3 className="text-xl font-medium group-hover:underline">About</h3>
              </Link>

              <Link href="/contact" className="block group">
                <h3 className="text-xl font-medium group-hover:underline">Contact</h3>
              </Link>
            </nav>
          </div>

          <div className="mt-auto pt-8 border-t border-zinc-800 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Majestico</p>
          </div>
        </div>

        {/* Right content area */}
        <div className="w-full md:w-3/4 p-8 md:p-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Get in Touch</h1>
            <p className="text-lg text-zinc-400 mb-12">
              We're always interested in new projects and collaborations. Feel free to reach out to discuss your ideas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                <ul className="space-y-4 text-zinc-300">
                  <li>
                    <span className="block text-sm text-zinc-500">Email</span>
                    <a href="mailto:info@majestico.co" className="hover:underline">
                      info@majestico.co
                    </a>
                  </li>
                  <li>
                    <span className="block text-sm text-zinc-500">Phone</span>
                    <a href="tel:+12125551234" className="hover:underline">
                      +1 (212) 555-1234
                    </a>
                  </li>
                  <li>
                    <span className="block text-sm text-zinc-500">Address</span>
                    <address className="not-italic">
                      123 Design Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </address>
                  </li>
                </ul>

                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm text-zinc-500 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      className="bg-zinc-900 border-zinc-800 focus-visible:ring-zinc-700"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-zinc-500 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-zinc-900 border-zinc-800 focus-visible:ring-zinc-700"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-zinc-500 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      className="bg-zinc-900 border-zinc-800 focus-visible:ring-zinc-700 min-h-[120px]"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

