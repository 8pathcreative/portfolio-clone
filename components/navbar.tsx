"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { TextReveal } from "@/components/ui/aceternity/text-reveal"
import { Spotlight } from "@/components/ui/aceternity/spotlight"

const menuItems = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <>
      {/* Fixed navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-zinc-800" : "bg-transparent",
        )}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">
            Neil Humphrey
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none z-50 relative"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
          >
            <Spotlight className="hidden md:block" />
            <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
              <ul className="space-y-12 py-16">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <Link href={item.href} onClick={toggleMenu} className="group flex items-center">
                      <span className="text-zinc-500 group-hover:text-white transition-colors mr-4 text-sm">
                        0{index + 1}
                      </span>
                      <TextReveal text={item.title} className="text-4xl md:text-7xl text-white" delay={0.2 * index} />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute bottom-16 left-6"
              >
                <div className="flex space-x-6 text-zinc-500">
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

