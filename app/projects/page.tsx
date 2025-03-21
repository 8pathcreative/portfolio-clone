import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col md:flex-row h-screen">
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

            <h2 className="text-2xl font-bold mb-8">Projects</h2>

            <nav className="space-y-6">
              <Link href="/projects/fomalhaut" className="block group">
                <span className="text-xs text-zinc-500 block">01</span>
                <h3 className="text-xl font-medium group-hover:underline">Fomalhaut</h3>
                <p className="text-sm text-zinc-400">Digital Experience</p>
              </Link>

              <Link href="/projects/sirius" className="block group">
                <span className="text-xs text-zinc-500 block">02</span>
                <h3 className="text-xl font-medium group-hover:underline">Sirius</h3>
                <p className="text-sm text-zinc-400">Brand Identity</p>
              </Link>

              <Link href="/projects/vega" className="block group">
                <span className="text-xs text-zinc-500 block">03</span>
                <h3 className="text-xl font-medium group-hover:underline">Vega</h3>
                <p className="text-sm text-zinc-400">Web Design</p>
              </Link>

              <Link href="/projects/altair" className="block group">
                <span className="text-xs text-zinc-500 block">04</span>
                <h3 className="text-xl font-medium group-hover:underline">Altair</h3>
                <p className="text-sm text-zinc-400">Digital Campaign</p>
              </Link>
            </nav>
          </div>

          <div className="mt-auto pt-8 border-t border-zinc-800 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Majestico</p>
          </div>
        </div>

        {/* Right content area */}
        <div className="w-full md:w-3/4 p-8 md:p-16 flex items-center justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Selected Works</h1>
            <p className="text-lg text-zinc-400">
              Explore our portfolio of minimalist design projects. Each project represents our commitment to simplicity,
              elegance, and purposeful design. Click on a project to view more details.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

