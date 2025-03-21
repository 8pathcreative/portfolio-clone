import ProjectClientPage from "./ProjectClientPage"

// Project data
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
    images: [
      { src: "/placeholder.svg?height=800&width=1200", alt: "Fomalhaut project overview" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Fomalhaut mobile experience" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Fomalhaut typography system" },
    ],
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
    images: [
      { src: "/placeholder.svg?height=800&width=1200", alt: "Sirius brand identity" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Sirius logo variations" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Sirius brand applications" },
    ],
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
    images: [
      { src: "/placeholder.svg?height=800&width=1200", alt: "Vega website homepage" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Vega mobile experience" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Vega content layout" },
    ],
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
    images: [
      { src: "/placeholder.svg?height=800&width=1200", alt: "Altair campaign overview" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Altair social media assets" },
      { src: "/placeholder.svg?height=800&width=1200", alt: "Altair email templates" },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectClientPage params={params} />
}

