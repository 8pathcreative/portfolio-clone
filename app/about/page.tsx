"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Download, Mail, Linkedin, Github, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

// Skills data
const skills = [
  { category: "Design", items: ["Figma", "UI/UX", "Design Systems", "Wireframing", "Prototyping"] },
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Performance", items: ["Speed Optimization", "SEO", "Image Compression", "Web Vitals", "Lighthouse"] },
  {
    category: "Analytics",
    items: ["Google Analytics", "Hotjar", "A/B Testing", "User Research", "Data Visualization"],
  },
]

// Experience data
const experience = [
  {
    title: "Lead Design Engineer",
    company: "HealthTech Innovations",
    period: "2021 - Present",
    description:
      "Leading design and frontend development for healthcare applications focused on patient experience. Implemented performance optimizations resulting in 40% faster load times and improved SEO rankings.",
    technologies: ["React", "Next.js", "Figma", "Tailwind CSS", "Google Analytics"],
    category: "Healthcare",
  },
  {
    title: "Senior UX Engineer",
    company: "FinanceCore",
    period: "2018 - 2021",
    description:
      "Designed and developed responsive interfaces for financial services applications. Created a design system that reduced development time by 30% and ensured consistent user experience across products.",
    technologies: ["React", "JavaScript", "CSS", "Design Systems", "A/B Testing"],
    category: "Finance",
  },
  {
    title: "Frontend Developer",
    company: "TechStart",
    period: "2016 - 2018",
    description:
      "Worked in a fast-paced startup environment developing web applications. Specialized in optimizing image delivery and frontend performance, reducing load times by 60%.",
    technologies: ["JavaScript", "HTML", "CSS", "Cloudinary", "Performance Optimization"],
    category: "Startup",
  },
  {
    title: "UI Developer",
    company: "Global Solutions Inc.",
    period: "2014 - 2016",
    description:
      "Developed user interfaces for enterprise applications used by multinational corporations. Collaborated with cross-functional teams across different time zones and cultural contexts.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Accessibility"],
    category: "Enterprise",
  },
]

// Projects data
const projects = [
  {
    title: "Healthcare Patient Portal",
    description:
      "A responsive patient portal that improved engagement by 45% through intuitive design and optimized performance.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    title: "Financial Dashboard",
    description: "Real-time financial dashboard with data visualization that reduced decision-making time by 30%.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    title: "E-commerce Image Optimization",
    description:
      "Implemented Cloudinary-based image delivery system that reduced page load times by 60% and increased conversions.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
]

// Certifications data
const certifications = [
  {
    title: "Cloudinary Media Developer Expert",
    issuer: "Cloudinary",
    date: "2019",
    description: "Recognized for expertise in image and video optimization, transformation, and delivery.",
    link: "https://cloudinary.com/blog/announcing_cloudinary_s_media_developer_experts_program#neil_humphrey",
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "2020",
    description: "Certified in advanced analytics implementation and data analysis.",
    link: "#",
  },
  {
    title: "Web Performance Optimization",
    issuer: "Frontend Masters",
    date: "2021",
    description: "Advanced techniques for optimizing web application performance.",
    link: "#",
  },
]

export default function AboutPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [certificationsRef, certificationsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col">
        {/* Header */}
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-50 p-6 md:p-8 border-b border-zinc-800 flex justify-between items-center bg-black/90 backdrop-blur-sm"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft size={16} />
            <span>Back to home</span>
          </Link>

          <div className="text-right">
            <h1 className="text-xl font-medium">About Me</h1>
          </div>
        </motion.header>

        {/* Hero section */}
        <section className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Design Engineer workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Design Engineer</h2>
              <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
                Crafting exceptional digital experiences at the intersection of design and technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction section */}
        <motion.section
          ref={introRef}
          initial={{ opacity: 0, y: 30 }}
          animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Hello, I'm Neil</h2>
              <div className="space-y-6 text-lg text-zinc-300">
                <p>
                  I'm a design engineer with 9+ years of experience working across healthcare, finance, startups, and
                  multinational corporations. I bridge the gap between design and development, creating exceptional user
                  experiences that are both beautiful and performant.
                </p>
                <p>
                  My expertise lies in creating intuitive interfaces and implementing them with clean, efficient code. I
                  specialize in optimizing web performance, SEO, and image delivery systems that significantly improve
                  user experience and business metrics.
                </p>
                <p>
                  As a Cloudinary Media Developer Expert since 2019, I've helped numerous organizations implement
                  advanced image and video optimization strategies that reduce load times and enhance visual
                  experiences.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  <a href="#" className="inline-flex items-center gap-2">
                    <Download size={16} />
                    <span>Download Resume</span>
                  </a>
                </Button>

                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  <a href="#contact" className="inline-flex items-center gap-2">
                    <Mail size={16} />
                    <span>Contact Me</span>
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <div className="bg-zinc-900 p-6 rounded-sm">
                <h3 className="text-xl font-medium mb-6">At a Glance</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm text-zinc-500 mb-1">Experience</h4>
                    <p>9+ Years</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-500 mb-1">Industries</h4>
                    <p>Healthcare, Finance, Tech</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-500 mb-1">Location</h4>
                    <p>New York, NY</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-500 mb-1">Specializations</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">UI/UX</Badge>
                      <Badge variant="outline">Frontend</Badge>
                      <Badge variant="outline">Performance</Badge>
                      <Badge variant="outline">SEO</Badge>
                      <Badge variant="outline">Image Optimization</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills section */}
        <motion.section
          ref={skillsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-zinc-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * groupIndex }}
              >
                <h3 className="text-xl font-medium mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + 0.05 * skillIndex + 0.1 * groupIndex }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 p-6 bg-zinc-900"
          >
            <h3 className="text-xl font-medium mb-4">Cloudinary Media Developer Expert</h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-3/4">
                <p className="text-zinc-300 mb-4">
                  As a certified Cloudinary Media Developer Expert since 2019, I specialize in implementing advanced
                  image and video optimization strategies that significantly improve web performance and user
                  experience.
                </p>
                <Button asChild variant="link" className="text-white p-0">
                  <a
                    href="https://cloudinary.com/blog/announcing_cloudinary_s_media_developer_experts_program#neil_humphrey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <span>Learn more about the certification</span>
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
              <div className="w-full md:w-1/4">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Cloudinary Media Developer Expert Badge"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Experience section */}
        <motion.section
          ref={experienceRef}
          initial={{ opacity: 0, y: 30 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-zinc-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Experience</h2>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="bg-zinc-900">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="startup">Startup</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <ExperienceItem key={job.title} job={job} index={index} inView={experienceInView} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="healthcare" className="mt-6">
              <div className="space-y-12">
                {experience
                  .filter((job) => job.category.toLowerCase() === "healthcare")
                  .map((job, index) => (
                    <ExperienceItem key={job.title} job={job} index={index} inView={experienceInView} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="finance" className="mt-6">
              <div className="space-y-12">
                {experience
                  .filter((job) => job.category.toLowerCase() === "finance")
                  .map((job, index) => (
                    <ExperienceItem key={job.title} job={job} index={index} inView={experienceInView} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="startup" className="mt-6">
              <div className="space-y-12">
                {experience
                  .filter((job) => job.category.toLowerCase() === "startup")
                  .map((job, index) => (
                    <ExperienceItem key={job.title} job={job} index={index} inView={experienceInView} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="enterprise" className="mt-6">
              <div className="space-y-12">
                {experience
                  .filter((job) => job.category.toLowerCase() === "enterprise")
                  .map((job, index) => (
                    <ExperienceItem key={job.title} job={job} index={index} inView={experienceInView} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Projects section */}
        <motion.section
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-zinc-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <Link href={project.link}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 mb-4">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500"></div>
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-zinc-400">{project.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </motion.section>

        {/* Certifications section */}
        <motion.section
          ref={certificationsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-zinc-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-zinc-900 p-6"
              >
                <div className="mb-4">
                  <span className="text-sm text-zinc-500">{cert.date}</span>
                  <h3 className="text-xl font-medium">{cert.title}</h3>
                  <p className="text-zinc-400 text-sm">{cert.issuer}</p>
                </div>

                <p className="text-zinc-300 mb-4">{cert.description}</p>

                <Button asChild variant="link" className="text-white p-0">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact section */}
        <motion.section
          id="contact"
          ref={contactRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-zinc-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-lg text-zinc-300 mb-8">
                I'm always interested in new projects and opportunities. Feel free to reach out if you'd like to work
                together or just have a conversation.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <a href="mailto:hello@neilhumphrey.com" className="text-zinc-400 hover:text-white transition-colors">
                    hello@neilhumphrey.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Connect</h3>
                  <div className="flex gap-4">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <a href="#" className="p-2 border border-zinc-800 hover:border-white transition-colors">
                          <Linkedin size={20} />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto bg-zinc-900 border-zinc-800 text-white">
                        LinkedIn
                      </HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <a href="#" className="p-2 border border-zinc-800 hover:border-white transition-colors">
                          <Github size={20} />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto bg-zinc-900 border-zinc-800 text-white">
                        GitHub
                      </HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <a href="#" className="p-2 border border-zinc-800 hover:border-white transition-colors">
                          <Twitter size={20} />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto bg-zinc-900 border-zinc-800 text-white">
                        Twitter
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-6 md:p-8">
              <h3 className="text-xl font-medium mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-zinc-500 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full bg-zinc-800 border border-zinc-700 p-2 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-zinc-500 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-zinc-800 border border-zinc-700 p-2 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-zinc-500 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full bg-zinc-800 border border-zinc-700 p-2 text-white focus:outline-none focus:border-white transition-colors min-h-[120px]"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

// Experience Item Component
function ExperienceItem({ job, index, inView }: { job: any; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="grid grid-cols-1 md:grid-cols-4 gap-6"
    >
      <div>
        <span className="text-sm text-zinc-500 block">{job.period}</span>
        <h3 className="text-xl font-medium">{job.title}</h3>
        <p className="text-zinc-400">{job.company}</p>
      </div>

      <div className="md:col-span-3">
        <p className="text-zinc-300 mb-4">{job.description}</p>

        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech: string) => (
            <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

