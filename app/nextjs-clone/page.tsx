"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Icons used throughout the page
const Icons = {
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.75 8.75L16.25 11.25M16.25 11.25L13.75 13.75M16.25 11.25H3.75"></path>
    </svg>
  ),
  Terminal: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5H11M19 5H15M5 10H8M12 10H9M19 10H16M5 15H19M5 19H19"></path>
    </svg>
  ),
  Star: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
    </svg>
  ),
  Code: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 7l-2 10"></path>
    </svg>
  ),
  Grid: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 00-1 1v6a1 1 0 001 1h3a1 1 0 001-1v-6a1 1 0 00-1-1h-3z"></path>
    </svg>
  ),
};

// Feature card component
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300">
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mb-4">
        <div className="w-5 h-5 text-white">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function NextJsHomePage() {
  // State to ensure client-side rendering
  const [isClient, setIsClient] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // This ensures the component only renders on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return a minimal placeholder during server-side rendering
  if (!isClient) {
    return <div className="min-h-screen bg-white"></div>;
  }

  return (
    <div className="flex flex-col min-h-screen text-black">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full flex-none border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center">
              <Link href="#" className="flex items-center">
                <div className="w-8 h-8 mr-3">
                  <svg viewBox="0 0 180 180" fill="none">
                    <mask id="mask0_408_139" style={{ maskType: 'alpha' }} height="180" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
                      <circle cx="90" cy="90" r="90" fill="black"></circle>
                    </mask>
                    <g mask="url(#mask0_408_139)">
                      <circle cx="90" cy="90" r="90" fill="black"></circle>
                      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"></path>
                      <rect fill="url(#paint1_linear_408_139)" height="72" width="12" x="115" y="54"></rect>
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_408_139" x1="109" x2="144.5" y1="116.5" y2="160.5">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_408_139" x1="121" x2="120.799" y1="54" y2="106.875">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="font-semibold text-xl">Next.js</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Docs</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Showcase</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Blog</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Analytics</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Templates</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Enterprise</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="#" 
                className="hidden md:flex items-center justify-center rounded-full bg-black px-4 py-1.5 text-sm text-white transition hover:bg-gray-700"
              >
                Deploy
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-6">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Docs</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Showcase</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Blog</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Analytics</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Templates</Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-black">Enterprise</Link>
              <Link 
                href="#" 
                className="flex items-center justify-center rounded-full bg-black px-4 py-1.5 text-sm text-white transition hover:bg-gray-700"
              >
                Deploy
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-auto">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32 border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                The React Framework for the Web
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
                >
                  Learn Next.js
                </Link>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-5xl rounded-2xl bg-gray-900 p-4 shadow-2xl">
              <div className="rounded-lg bg-gray-900 overflow-hidden">
                <div className="flex bg-gray-800 px-4 py-2 items-center">
                  <div className="flex space-x-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <pre className="p-4 text-gray-100 overflow-x-auto">
                  <code>
                    <span className="text-gray-500">// app/page.tsx</span>
                    {'\n'}
                    <span className="text-purple-400">export default function</span> <span className="text-yellow-300">Page</span>() {'{'}
                    {'\n  '}
                    <span className="text-purple-400">return</span> (
                    {'\n    '}<span className="text-blue-300">{'<div>'}</span>
                    {'\n      '}<span className="text-blue-300">{'<h1>'}</span>Hello, Next.js!<span className="text-blue-300">{'</h1>'}</span>
                    {'\n    '}<span className="text-blue-300">{'</div>'}</span>
                    {'\n  '});
                    {'\n}'}
                  </code>
                </pre>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="Fast Refresh"
                description="Fast Refresh is a hot module replacement experience that gives you instantaneous feedback on edits."
                icon={<Icons.Terminal className="w-full h-full" />}
              />
              <FeatureCard
                title="Zero Config"
                description="Automatic compilation and bundling. Optimized for production from the start."
                icon={<Icons.Code className="w-full h-full" />}
              />
              <FeatureCard
                title="Hybrid Rendering"
                description="Static and dynamic rendering on a per-page basis. No need to deploy multiple apps."
                icon={<Icons.Grid className="w-full h-full" />}
              />
            </div>
          </div>
        </section>

        {/* "What's in Next.js?" Section */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What's in Next.js?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to build your React application in one place.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "App Router",
                  description: "App Router: A new paradigm for building applications with React using React Server Components."
                },
                {
                  title: "Turbopack",
                  description: "An incremental bundler optimized for JavaScript and TypeScript, written in Rust."
                },
                {
                  title: "API Routes",
                  description: "Create API endpoints inside Next.js applications. A solution for site rendering."
                },
                {
                  title: "Edge Runtime",
                  description: "Run code at the network edge, closer to your users, for optimal performance and reliability."
                },
                {
                  title: "Image Optimization",
                  description: "Automatic image optimization with instant builds. Supporting modern image formats."
                },
                {
                  title: "Internationalization",
                  description: "Built-in internationalization features for applications that span languages and countries."
                },
              ].map((feature, index) => (
                <div key={index} className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition duration-300">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* "Get Started in Seconds" Section */}
        <section className="py-20 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Started in Seconds</h2>
              <p className="mt-4 text-lg text-gray-600">
                Start a new Next.js app with one command
              </p>
            </div>

            <div className="mt-10 rounded-lg bg-black p-4 md:p-8">
              <pre className="text-gray-100 overflow-x-auto">
                <code>
                  npx create-next-app@latest
                </code>
              </pre>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "App",
                  description: "A minimalist template with the App Router.",
                  stars: "2.1K"
                },
                {
                  title: "Tailwind CSS + TypeScript",
                  description: "A template with Tailwind CSS and TypeScript.",
                  stars: "1.8K"
                },
                {
                  title: "Shadcn UI",
                  description: "Start building your UI with Shadcn's accessible components.",
                  stars: "3.2K"
                },
              ].map((template, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{template.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Icons.Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {template.stars}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700"
                  >
                    View template
                    <Icons.ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community and Companies Section */}
        <section className="py-20 sm:py-32 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by the World's Best</h2>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-center justify-center py-4">
                  <div className="h-8 w-24 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

            <div className="mt-20 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join a Vibrant Community</h2>
              <p className="mt-4 text-lg text-gray-600">
                Get help, contribute, or follow along with the latest news and announcements.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
                >
                  GitHub
                </Link>
                <Link
                  href="#"
                  className="rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
                >
                  Discord
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Docs</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Learn</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Showcase</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">More</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Commerce</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact Sales</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">GitHub</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Releases</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Telemetry</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">About Vercel</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Enterprise</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Security</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Next.js Conf</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Trademark Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">DPA</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">SLA</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 flex justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Vercel, Inc.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 