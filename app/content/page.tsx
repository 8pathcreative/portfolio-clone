import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Content section */}
        <div className="w-full md:w-3/4 p-8 md:p-16 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">MAJESTICO</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              A minimalist design studio focused on creating unique digital experiences. We blend simplicity with
              sophistication to craft memorable brand identities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div>
                <h3 className="text-xl font-medium mb-4">Services</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>Brand Identity</li>
                  <li>Web Design</li>
                  <li>Digital Experiences</li>
                  <li>Art Direction</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Contact</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>info@majestico.co</li>
                  <li>+1 (000) 000-0000</li>
                  <li>New York, NY</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-full md:w-1/4 border-l border-zinc-800 p-8">
          <h3 className="text-xl font-medium mb-4">Projects</h3>
          <ul className="space-y-4">
            <li className="border-b border-zinc-800 pb-4">
              <span className="text-xs text-zinc-500">01</span>
              <h4 className="text-lg font-medium">Fomalhaut</h4>
              <p className="text-sm text-zinc-400">Digital Experience</p>
            </li>
            <li className="border-b border-zinc-800 pb-4">
              <span className="text-xs text-zinc-500">02</span>
              <h4 className="text-lg font-medium">Sirius</h4>
              <p className="text-sm text-zinc-400">Brand Identity</p>
            </li>
            <li className="border-b border-zinc-800 pb-4">
              <span className="text-xs text-zinc-500">03</span>
              <h4 className="text-lg font-medium">Vega</h4>
              <p className="text-sm text-zinc-400">Web Design</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer with back to top */}
      <div className="flex justify-center py-8 border-t border-zinc-800">
        <Link href="/" className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <ArrowUp size={16} />
          <span className="text-xs">back to top</span>
        </Link>
      </div>
    </div>
  )
}

