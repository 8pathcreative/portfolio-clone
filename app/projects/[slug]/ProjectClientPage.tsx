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

// Project data with expanded case study information
const projects = {
  fomalhaut: {
    id: "01",
    title: "Fomalhaut",
    category: "Digital Experience",
    year: "2023",
    client: "Stellar Industries",
    description:
      "A minimalist digital experience for Stellar Industries, focusing on their new product line. The project emphasizes clean typography and stark contrasts to highlight the product's innovative features.",
    services: ["UX Design", "UI Design", "Development", "Art Direction"],
    overview:
      "Stellar Industries approached us to create a digital experience for their new line of premium products. The goal was to create a minimalist yet impactful online presence that would showcase their products in a way that emphasized quality and innovation.",
    challenge:
      "The main challenge was to create a digital experience that would stand out in a crowded market while maintaining the brand's minimalist aesthetic. We needed to find a way to showcase complex product features in a simple, intuitive way that would appeal to both technical and non-technical audiences.",
    approach:
      "We began with extensive research into the target audience and competitive landscape. This informed our strategy to focus on a clean, minimalist design that would let the products speak for themselves. We created a series of wireframes and prototypes, testing each iteration with real users to ensure the experience was intuitive and engaging.",
    solution:
      "The final solution was a responsive website with a focus on large, high-quality product imagery and minimal text. We used subtle animations to guide users through the experience and highlight key product features. The site was built using Next.js for optimal performance and SEO.",
    results:
      "The new digital experience led to a 45% increase in time spent on the site and a 30% increase in product inquiries. The client reported positive feedback from customers who appreciated the clean, intuitive design and easy access to product information.",
    testimonial: {
      quote:
        "Majestico delivered a digital experience that perfectly captures our brand's essence. The minimalist design allows our products to shine while providing an intuitive user experience for our customers.",
      author: "Alex Chen",
      position: "Marketing Director, Stellar Industries",
    },
    process: [
      {
        title: "Discovery",
        description:
          "We conducted stakeholder interviews, competitive analysis, and user research to understand the brand, market, and target audience.",
      },
      {
        title: "Strategy",
        description:
          "Based on our research, we developed a digital strategy focused on simplicity, visual impact, and user-centered design.",
      },
      {
        title: "Design",
        description:
          "We created wireframes, visual designs, and interactive prototypes, refining each iteration based on client and user feedback.",
      },
      {
        title: "Development",
        description: "We built the site using Next.js, focusing on performance, accessibility, and responsive design.",
      },
      {
        title: "Launch",
        description:
          "We conducted thorough testing before launching the site, ensuring a smooth user experience across all devices and browsers.",
      },
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Fomalhaut project overview",
        caption: "Homepage design showcasing the minimalist aesthetic",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Fomalhaut mobile experience",
        caption: "Mobile experience with focus on product details",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Fomalhaut typography system",
        caption: "Typography system designed for clarity and impact",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Fomalhaut wireframes",
        caption: "Early wireframes exploring layout options",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Fomalhaut user testing",
        caption: "User testing session with interactive prototype",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Fomalhaut final design",
        caption: "Final design implementation on desktop",
      },
    ],
    nextProject: "sirius",
  },
  sirius: {
    id: "02",
    title: "Sirius",
    category: "Brand Identity",
    year: "2023",
    client: "Luminary Tech",
    description:
      "A comprehensive brand identity for Luminary Tech, a startup focused on AI-driven solutions. The identity system includes logo design, typography, color palette, and application guidelines.",
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Guidelines"],
    overview:
      "Luminary Tech needed a brand identity that would position them as a forward-thinking leader in AI technology while remaining approachable and trustworthy. Our task was to create a comprehensive identity system that would work across digital and physical touchpoints.",
    challenge:
      "The challenge was to create a brand identity that would convey technical sophistication without appearing cold or intimidating. We needed to balance innovation with accessibility, creating a visual language that would appeal to both technical decision-makers and end users.",
    approach:
      "We began with a series of brand workshops to understand Luminary Tech's values, vision, and competitive landscape. This informed our exploration of visual concepts, focusing on simplicity, clarity, and subtle references to AI and technology.",
    solution:
      "The final brand identity centered around a minimalist logo that subtly referenced neural networks through its geometric form. We developed a monochromatic color palette with strategic accent colors, a custom typography system, and comprehensive guidelines for application across all touchpoints.",
    results:
      "The new brand identity was successfully implemented across all digital and physical touchpoints, receiving positive feedback from stakeholders and customers. The client reported increased brand recognition and a stronger market position.",
    testimonial: {
      quote:
        "Majestico transformed our brand from a generic tech startup to a distinctive presence in the AI space. The identity system perfectly captures our balance of innovation and accessibility.",
      author: "Sarah Johnson",
      position: "CEO, Luminary Tech",
    },
    process: [
      {
        title: "Research",
        description:
          "We conducted brand workshops, market research, and competitive analysis to understand the brand's position and potential.",
      },
      {
        title: "Concept Development",
        description:
          "We explored multiple visual directions, refining concepts based on client feedback and strategic objectives.",
      },
      {
        title: "Identity Design",
        description:
          "We developed the logo, color palette, typography, and visual elements that would form the core of the brand identity.",
      },
      {
        title: "Application",
        description:
          "We applied the identity to key touchpoints, including website, business cards, presentations, and digital products.",
      },
      {
        title: "Guidelines",
        description:
          "We created comprehensive brand guidelines to ensure consistent application of the identity across all future touchpoints.",
      },
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Sirius brand identity",
        caption: "Core brand identity elements",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Sirius logo variations",
        caption: "Logo variations for different applications",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Sirius brand applications",
        caption: "Brand applied to business cards and stationery",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Sirius digital applications",
        caption: "Brand applied to website and digital products",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Sirius brand guidelines",
        caption: "Pages from the comprehensive brand guidelines",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Sirius brand in context",
        caption: "Brand identity in real-world contexts",
      },
    ],
    nextProject: "vega",
  },
  vega: {
    id: "03",
    title: "Vega",
    category: "Web Design",
    year: "2022",
    client: "Horizon Media",
    description:
      "A minimalist website redesign for Horizon Media, focusing on content presentation and user experience. The design uses negative space and typography to create a memorable digital presence.",
    services: ["Web Design", "UX Strategy", "Content Strategy", "Development"],
    overview:
      "Horizon Media, a boutique media agency, needed a website redesign that would better showcase their portfolio and services. The goal was to create a minimalist yet impactful digital presence that would reflect their sophisticated approach to media.",
    challenge:
      "The main challenge was to balance minimalism with the need to showcase a diverse portfolio of media projects. We needed to create a design that would be visually striking while providing an intuitive user experience and clear information architecture.",
    approach:
      "We began with a content audit and user research to understand what information was most important to Horizon's clients. This informed our approach to information architecture and content strategy, focusing on simplicity and visual impact.",
    solution:
      "The final design featured a minimalist black and white aesthetic with strategic use of negative space and typography. We created a custom content management system that allowed Horizon to easily update their portfolio and services. The site was built with performance and accessibility in mind.",
    results:
      "The redesigned website led to a 60% increase in portfolio views and a 40% increase in contact form submissions. The client reported that the new site better reflected their brand and had become a valuable tool for business development.",
    testimonial: {
      quote:
        "The redesigned website perfectly captures our aesthetic and approach. Majestico understood exactly what we needed and delivered a site that has become central to our client acquisition strategy.",
      author: "Michael Torres",
      position: "Creative Director, Horizon Media",
    },
    process: [
      {
        title: "Content Audit",
        description:
          "We analyzed existing content and user behavior to identify strengths, weaknesses, and opportunities for improvement.",
      },
      {
        title: "Information Architecture",
        description: "We developed a streamlined site structure focused on portfolio showcase and service offerings.",
      },
      {
        title: "Visual Design",
        description:
          "We created a minimalist design system emphasizing typography, negative space, and visual hierarchy.",
      },
      {
        title: "Development",
        description: "We built a custom CMS and responsive frontend, optimized for performance and accessibility.",
      },
      {
        title: "Testing & Refinement",
        description: "We conducted usability testing and made refinements based on user feedback before launch.",
      },
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Vega website homepage",
        caption: "Homepage featuring minimalist design approach",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Vega mobile experience",
        caption: "Responsive design optimized for mobile devices",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Vega content layout",
        caption: "Portfolio showcase with focus on visual content",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Vega wireframes",
        caption: "Initial wireframes exploring information architecture",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Vega typography system",
        caption: "Typography system designed for readability and impact",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Vega CMS",
        caption: "Custom CMS interface for content management",
      },
    ],
    nextProject: "altair",
  },
  altair: {
    id: "04",
    title: "Altair",
    category: "Digital Campaign",
    year: "2022",
    client: "Nova Collective",
    description:
      "A digital campaign for Nova Collective's annual conference. The project includes website design, social media assets, and email templates, all following a cohesive minimalist aesthetic.",
    services: ["Campaign Strategy", "Digital Design", "Social Media", "Email Marketing"],
    overview:
      "Nova Collective needed a comprehensive digital campaign for their annual technology conference. The goal was to increase attendance and engagement through a cohesive visual identity across all digital touchpoints.",
    challenge:
      "The challenge was to create a campaign that would stand out in a crowded conference market while maintaining consistency across multiple platforms and formats. We needed to balance information delivery with visual impact.",
    approach:
      "We developed a campaign strategy focused on a minimalist black and white aesthetic with strategic use of animation and interaction. This approach allowed us to create a distinctive visual identity that would work across all digital channels.",
    solution:
      "The final campaign included a conference website, social media assets, email templates, and digital advertising. All elements shared a cohesive visual language while being optimized for their specific platforms. We used subtle animations and interactions to enhance engagement.",
    results:
      "The campaign led to a 50% increase in conference registrations compared to the previous year. Social media engagement increased by 75%, and email open rates averaged 45%, well above industry standards.",
    testimonial: {
      quote:
        "Majestico's digital campaign transformed our conference marketing. The cohesive aesthetic across all platforms created a strong brand presence that significantly boosted our registration numbers.",
      author: "Elena Rivera",
      position: "Marketing Manager, Nova Collective",
    },
    process: [
      {
        title: "Strategy Development",
        description: "We created a comprehensive campaign strategy based on audience research and platform analysis.",
      },
      {
        title: "Visual Identity",
        description:
          "We developed a campaign identity that would work across all digital touchpoints while maintaining visual impact.",
      },
      {
        title: "Website Design",
        description:
          "We designed and built a conference website focused on information delivery and registration conversion.",
      },
      {
        title: "Asset Creation",
        description:
          "We created social media assets, email templates, and digital advertising materials following the campaign identity.",
      },
      {
        title: "Implementation & Analysis",
        description: "We implemented the campaign across all channels and provided ongoing analysis and optimization.",
      },
    ],
    images: [
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Altair campaign overview",
        caption: "Campaign identity and key visual elements",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Altair social media assets",
        caption: "Social media templates and content examples",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Altair email templates",
        caption: "Email design system and templates",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Altair conference website",
        caption: "Conference website homepage and key pages",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Altair digital advertising",
        caption: "Digital advertising examples across platforms",
      },
      {
        src: "/placeholder.svg?height=800&width=1200",
        alt: "Altair campaign results",
        caption: "Visual representation of campaign performance",
      },
    ],
    nextProject: "fomalhaut",
  },
}

export default function ProjectClientPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as keyof typeof projects

  // Check if project exists
  if (!projects[slug]) {
    notFound()
  }

  const project = projects[slug]
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

