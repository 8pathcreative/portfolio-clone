"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient"
import { HoverEffect } from "@/components/ui/aceternity/card-hover-effect"
import { Navbar } from "@/components/navbar"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"

// Project data
const projects = [
  {
    id: "01",
    title: "Fomalhaut",
    category: "Digital Experience",
    image: "/placeholder.svg?height=600&width=800",
    slug: "fomalhaut",
    description: "A minimalist digital experience focusing on clean typography and stark contrasts.",
  },
  {
    id: "02",
    title: "Sirius",
    category: "Brand Identity",
    image: "/placeholder.svg?height=600&width=800",
    slug: "sirius",
    description: "Comprehensive brand identity including logo design, typography, and application guidelines.",
  },
  {
    id: "03",
    title: "Vega",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    slug: "vega",
    description: "Minimalist website redesign focusing on content presentation and user experience.",
  },
  {
    id: "04",
    title: "Altair",
    category: "Digital Campaign",
    image: "/placeholder.svg?height=600&width=800",
    slug: "altair",
    description: "Digital campaign including website design, social media assets, and email templates.",
  },
]

// Feature cards data
const features = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive interfaces with a focus on user experience and visual appeal.",
    link: "#",
  },
  {
    title: "Frontend Development",
    description: "Building responsive websites using React, Next.js, and modern CSS frameworks.",
    link: "#",
  },
  {
    title: "Performance Optimization",
    description: "Improving web vitals and page speed for better user experience and SEO rankings.",
    link: "#",
  },
  {
    title: "Image Optimization",
    description: "Implementing advanced image delivery systems to reduce load times and enhance visuals.",
    link: "#",
  },
  {
    title: "SEO Strategy",
    description: "Optimizing websites for search engines to improve visibility and organic traffic.",
    link: "#",
  },
  {
    title: "Analytics Implementation",
    description: "Setting up tracking and reporting to measure performance and user behavior.",
    link: "#",
  },
]

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col relative"
      >
        <Spotlight className="hidden md:block" />

        {/* Main content */}
        <div className="flex flex-1 flex-col md:flex-row">
          {/* Column 1 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col"
          >
            <div className="p-4">
              <h2 className="text-sm font-medium">Design</h2>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <h1 className="text-[8rem] md:text-[12rem] leading-none font-bold tracking-tighter">N</h1>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col"
          >
            <div className="p-4">
              <h2 className="text-sm font-medium">Engineer</h2>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <h1 className="text-[8rem] md:text-[12rem] leading-none font-bold tracking-tighter">E</h1>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col"
          >
            <div className="p-4">
              <h2 className="text-sm font-medium">Portfolio</h2>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <h1 className="text-[8rem] md:text-[12rem] leading-none font-bold tracking-tighter">I</h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={heroInView ? { width: 64 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="h-1 bg-white mt-4"
                ></motion.div>
              </div>
            </div>
          </motion.div>

          {/* Column 4 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full md:w-1/4 flex flex-col"
          >
            <div className="p-4">
              <h2 className="text-sm font-medium">Creative</h2>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <h1 className="text-[8rem] md:text-[12rem] leading-none font-bold tracking-tighter">L</h1>
            </div>
          </motion.div>
        </div>

        {/* Footer with scroll down */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center pb-8"
        >
          <Link
            href="#features"
            className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="text-xs">down to explore</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ArrowDown size={16} />
            </motion.div>
          </Link>
        </motion.div>

        {/* Background gradient */}
        <BackgroundGradient
          containerClassName="absolute inset-0 -z-10"
          className="w-full h-full"
          animate={true}
          size="large"
          interactive={false}
          firstColor="45, 45, 45"
          secondColor="45, 45, 180"
          thirdColor="45, 180, 180"
          fourthColor="180, 45, 180"
          fifthColor="45, 45, 45"
        />
      </motion.div>

      {/* Features Section */}
      <motion.div
        id="features"
        ref={featuresRef}
        initial={{ opacity: 0 }}
        animate={featuresInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="min-h-screen bg-black py-24 px-4 md:px-16 relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Services & Expertise</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Specialized in creating exceptional digital experiences with a focus on performance, usability, and visual
              design.
            </p>
          </motion.div>

          <HoverEffect items={features} />
        </div>

        <BackgroundGradient
          containerClassName="absolute inset-0 -z-10"
          className="w-full h-full"
          animate={true}
          size="large"
          interactive={false}
          firstColor="45, 45, 45"
          secondColor="45, 45, 180"
          thirdColor="45, 180, 45"
          fourthColor="180, 45, 45"
          fifthColor="45, 45, 45"
        />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        ref={projectsRef}
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="min-h-screen bg-black py-24 px-4 md:px-16 relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={projectsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Selected Projects</h2>
            <p className="text-lg text-zinc-400 max-w-2xl">
              Explore my portfolio of design and development work. Each project represents my commitment to simplicity,
              performance, and purposeful design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 40, opacity: 0 }}
                animate={projectsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="group"
              >
                <CardContainer className="w-full">
                  <CardBody className="w-full h-auto aspect-[4/3] relative">
                    <CardItem translateZ="100" className="w-full">
                      <Link href={`/projects/${project.slug}`}>
                        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 mb-4 rounded-xl">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-all duration-500 group-hover:brightness-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500"></div>
                        </div>
                      </Link>
                    </CardItem>

                    <CardItem translateZ="50" className="w-full">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-xs text-zinc-500 block">{project.id}</span>
                          <h3 className="text-xl font-medium">{project.title}</h3>
                          <p className="text-sm text-zinc-400">{project.category}</p>
                        </div>
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Button variant="link" asChild className="text-white p-0">
                            <Link href={`/projects/${project.slug}`}>View Project</Link>
                          </Button>
                        </motion.div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={projectsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-24 text-center"
          >
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </motion.div>
        </div>

        <Spotlight className="hidden md:block" />
      </motion.div>
    </div>
  )
}

