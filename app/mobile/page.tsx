"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Project data
const projects = [
  {
    id: "01",
    title: "Fomalhaut",
    category: "Digital Experience",
    image: "/placeholder.svg?height=600&width=800",
    slug: "fomalhaut",
  },
  {
    id: "02",
    title: "Sirius",
    category: "Brand Identity",
    image: "/placeholder.svg?height=600&width=800",
    slug: "sirius",
  },
  {
    id: "03",
    title: "Vega",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    slug: "vega",
  },
  {
    id: "04",
    title: "Altair",
    category: "Digital Campaign",
    image: "/placeholder.svg?height=600&width=800",
    slug: "altair",
  },
]

export default function MobilePage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col"
      >
        <div className="grid grid-cols-2 flex-1">
          {/* Top row */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-4 border-r border-b border-zinc-800"
          >
            <h2 className="text-sm font-medium">HLF</h2>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-4 border-b border-zinc-800"
          >
            <h2 className="text-sm font-medium">S</h2>
          </motion.div>

          {/* Middle row with logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={heroInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-2 flex items-center justify-center py-24"
          >
            <div className="flex flex-col items-center">
              <div className="flex">
                <span className="text-8xl font-bold tracking-tighter">N</span>
                <span className="text-8xl font-bold tracking-tighter">E</span>
                <span className="text-8xl font-bold tracking-tighter">I</span>
                <span className="text-8xl font-bold tracking-tighter">L</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={heroInView ? { width: 64 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-1 bg-white mt-4"
              ></motion.div>
            </div>
          </motion.div>

          {/* Bottom row */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-4 border-r border-t border-zinc-800"
          >
            <h2 className="text-sm font-medium">B</h2>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="p-4 border-t border-zinc-800"
          >
            <h2 className="text-sm font-medium">C</h2>
          </motion.div>
        </div>

        {/* Footer with scroll down */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center pb-8 pt-4"
        >
          <Link
            href="#projects"
            className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="text-xs">down to explore</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ArrowDown size={16} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        ref={projectsRef}
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="min-h-screen bg-black py-16 px-4"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={projectsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Selected Projects</h2>
          <p className="text-sm text-zinc-400">Explore our portfolio of minimalist design work.</p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 40, opacity: 0 }}
              animate={projectsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 mb-4">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>

                <div>
                  <span className="text-xs text-zinc-500 block">{project.id}</span>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-sm text-zinc-400">{project.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={projectsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            View All Projects
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

