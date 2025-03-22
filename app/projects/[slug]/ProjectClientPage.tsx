"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ExternalLink, ChevronDown } from "lucide-react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects, type ProjectSlug } from "../project-data"

export default function ProjectClientPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as ProjectSlug]
  
  if (!project) {
    notFound()
  }

  const nextProject = projects[project.nextProject as keyof typeof projects]

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [overviewRef, overviewInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [nextRef, nextInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeSection, setActiveSection] = useState("overview")

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col">
        {/* Header with navigation */}
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-50 p-6 md:p-8 border-b border-zinc-800 flex justify-between items-center bg-black/90 backdrop-blur-sm"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft size={16} />
            <span>Back to projects</span>
          </Link>

          <div className="text-right">
            <span className="text-xs text-zinc-500 block">{project.id}</span>
            <h1 className="text-xl font-medium">{project.title}</h1>
          </div>
        </motion.header>

        {/* Project hero */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-full h-[70vh] relative"
        >
          <Image
            src={project.images[0].src || "/placeholder.svg"}
            alt={project.images[0].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-4"
          >
            <span className="text-sm text-zinc-300 mb-2">{project.category}</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-4">{project.title}</h2>
            <p className="text-lg md:text-xl text-zinc-200 max-w-2xl text-center">{project.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center"
          >
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <a
                href="#overview"
                className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                <span className="text-xs">Scroll to explore</span>
                <ChevronDown size={16} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Project details navigation */}
        <div className="sticky top-[73px] z-40 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
          <nav className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
            <ul className="flex space-x-8 min-w-max">
              <li>
                <a
                  href="#overview"
                  className={`text-sm hover:text-white transition-colors ${activeSection === "overview" ? "text-white" : "text-zinc-400"}`}
                  onClick={() => setActiveSection("overview")}
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className={`text-sm hover:text-white transition-colors ${activeSection === "process" ? "text-white" : "text-zinc-400"}`}
                  onClick={() => setActiveSection("process")}
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className={`text-sm hover:text-white transition-colors ${activeSection === "gallery" ? "text-white" : "text-zinc-400"}`}
                  onClick={() => setActiveSection("gallery")}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className={`text-sm hover:text-white transition-colors ${activeSection === "results" ? "text-white" : "text-zinc-400"}`}
                  onClick={() => setActiveSection("results")}
                >
                  Results
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Overview section */}
        <motion.section
          id="overview"
          ref={overviewRef}
          initial={{ opacity: 0, y: 30 }}
          animate={overviewInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Project Overview</h2>
              <p className="text-lg text-zinc-300 mb-8">{project.overview}</p>

              <Tabs defaultValue="challenge" className="w-full">
                <TabsList className="mb-6 bg-zinc-900">
                  <TabsTrigger value="challenge">Challenge</TabsTrigger>
                  <TabsTrigger value="approach">Approach</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                </TabsList>
                <TabsContent value="challenge" className="text-zinc-300">
                  <p>{project.challenge}</p>
                </TabsContent>
                <TabsContent value="approach" className="text-zinc-300">
                  <p>{project.approach}</p>
                </TabsContent>
                <TabsContent value="solution" className="text-zinc-300">
                  <p>{project.solution}</p>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="bg-zinc-900 p-6 rounded-sm">
                <h3 className="text-xl font-medium mb-6">Project Details</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm text-zinc-500 mb-1">Client</h4>
                    <p>{project.client}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-500 mb-1">Year</h4>
                    <p>{project.year}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-500 mb-1">Category</h4>
                    <p>{project.category}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-500 mb-1">Services</h4>
                    <ul className="space-y-1">
                      {project.services.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Process section */}
        <motion.section
          id="process"
          ref={processRef}
          initial={{ opacity: 0, y: 30 }}
          animate={processInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-zinc-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {project.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className="mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium">{step.title}</h3>
                </div>
                <p className="text-zinc-400">{step.description}</p>

                {index < project.process.length - 1 && (
                  <div className="hidden lg:block absolute top-4 left-4 w-[calc(100%+2rem)] h-px bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={processInView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                      className="h-full bg-white"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gallery section */}
        <motion.section
          id="gallery"
          ref={galleryRef}
          initial={{ opacity: 0 }}
          animate={galleryInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-zinc-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Project Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {project.images.map((image, index) => (
              <motion.div
                key={`gallery-${index}`}
                initial={{ opacity: 0, y: 40 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 mb-3">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }} className="h-full w-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                  </motion.div>
                </div>
                <p className="text-sm text-zinc-400">{image.caption}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Results & Testimonial section */}
        <motion.section
          id="results"
          ref={testimonialRef}
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-zinc-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Results</h2>
              <p className="text-lg text-zinc-300 mb-8">{project.results}</p>

              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="#" className="inline-flex items-center gap-2">
                  <span>Visit Project</span>
                  <ExternalLink size={16} />
                </Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={testimonialInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-zinc-900 p-8 md:p-10"
            >
              <div className="text-4xl font-serif text-zinc-500 mb-4">"</div>
              <blockquote className="text-xl md:text-2xl font-light mb-6">{project.testimonial.quote}</blockquote>
              <div>
                <p className="font-medium">{project.testimonial.author}</p>
                <p className="text-sm text-zinc-400">{project.testimonial.position}</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Next project section */}
        <motion.section
          ref={nextRef}
          initial={{ opacity: 0, y: 30 }}
          animate={nextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 border-t border-zinc-800"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm text-zinc-500 uppercase">Next Project</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Continue Exploring</h2>
            </div>

            <Link href={`/projects/${project.nextProject}`} className="group block">
              <div className="relative aspect-[21/9] overflow-hidden bg-zinc-900 mb-6">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.7 }} className="h-full w-full">
                  <Image
                    src={nextProject.images[0].src || "/placeholder.svg"}
                    alt={nextProject.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-sm text-zinc-300 block mb-2">{nextProject.category}</span>
                      <h3 className="text-3xl md:text-5xl font-bold">{nextProject.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex justify-center items-center">
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2"
                >
                  <span className="text-lg">View Project</span>
                  <ArrowRight size={18} />
                </motion.div>
              </div>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

