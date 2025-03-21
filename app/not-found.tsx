import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link href="/" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors">
        Return Home
      </Link>
    </div>
  )
}

