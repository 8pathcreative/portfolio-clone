import ProjectClientPage from "./ProjectClientPage"
import { projects } from "../project-data"

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectClientPage params={params} />
}

