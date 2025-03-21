"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-black text-white border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 md:p-16">
          {/* Column 1: Logo and brief description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold">Neil Humphrey</h2>
            </Link>
            <p className="text-zinc-400 text-sm mb-6">
              Design engineer specializing in creating exceptional digital experiences at the intersection of design and
              technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Image Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Contact</h3>
            <address className="not-italic text-zinc-400">
              <p>New York, NY</p>
              <p className="mt-2">
                <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
                  hello@example.com
                </a>
              </p>
              <p className="mt-2">
                <a href="tel:+12125551234" className="hover:text-white transition-colors">
                  +1 (212) 555-1234
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center py-6 border-t border-zinc-800">
          <a
            href="#top"
            className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            <span className="text-xs">back to top</span>
          </a>
        </div>

        {/* Copyright and legal */}
        <div className="border-t border-zinc-800 p-6 text-center text-zinc-500 text-sm">
          <div className="mb-2">© {currentYear} Neil Humphrey. All rights reserved.</div>
          <div className="flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

