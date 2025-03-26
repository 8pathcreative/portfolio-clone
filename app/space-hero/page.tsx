"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SpaceHeroPage() {
  // State to manage mobile nav
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // State to ensure client-side rendering
  const [isClient, setIsClient] = useState(false);

  // This ensures the component only renders on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return a minimal placeholder during server-side rendering
  if (!isClient) {
    return <div className="min-h-screen bg-black"></div>;
  }

  return (
    <section 
      className="px-4 md:px-20 pt-8 pb-16 bg-center bg-no-repeat bg-cover relative min-h-screen" 
      style={{ backgroundImage: "url('https://res.cloudinary.com/nkh/image/upload/v1739331534/backgrounds/shooting-star-2024127_1280.png')" }}
    >
      <div>
        <nav className="relative bg-black p-4 rounded-2xl mb-32">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="#" className="inline-block">
                <div className="h-7 bg-gray-800 rounded flex items-center justify-center px-4 text-white">
                  CONSULTY
                </div>
              </Link>
              <span className="hidden xl:block px-2 py-1 bg-orange-50 border border-orange-100 rounded-3xl text-orange-500 text-xs font-medium tracking-tight">We are hiring!</span>
            </div>
            <ul className="hidden xl:flex items-center gap-2">
              <li>
                <Link href="#" className="inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 rounded-full">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm font-medium tracking-tight">Products</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M12.848 6L8.18132 10.6667L3.51465 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </Link>
              </li>
              <li><Link href="#" className="inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-sm font-medium tracking-tight rounded-full">Case Studies</Link></li>
              <li><Link href="#" className="inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 text-white text-sm font-medium tracking-tight rounded-full">Support</Link></li>
              <li>
                <Link href="#" className="inline-block py-2 px-3 hover:bg-gray-900 transition duration-200 rounded-full">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm font-medium tracking-tight">Resources</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M12.848 6L8.18132 10.6667L3.51465 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="hidden xl:flex gap-3">
              <Link href="#" className="rounded-full border border-gray-700 px-5 py-3 h-14 hover:bg-gray-900 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center transition duration-200 text-white text-sm font-semibold tracking-tight">Sign In</Link>
              <Link href="#" className="rounded-full border border-gray-200 bg-white px-5 py-3 h-14 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center gap-2 transition duration-200">
                <span className="text-sm font-semibold tracking-tight">Get A Free Consultation</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
            </div>
            <button 
              onClick={() => setMobileNavOpen(!mobileNavOpen)} 
              className="xl:hidden"
            >
              <svg className="navbar-burger text-white" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path d="M37 32H19M37 24H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileNavOpen && (
          <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
            <div 
              onClick={() => setMobileNavOpen(false)} 
              className="fixed inset-0 bg-black opacity-20"
            ></div>
            <nav className="relative p-8 w-full h-full bg-white overflow-y-auto">
              <div className="flex items-center justify-between">
                <Link href="#" className="inline-block">
                  <div className="h-7 bg-gray-800 rounded flex items-center justify-center px-4 text-white">
                    CONSULTY
                  </div>
                </Link>
                <button onClick={() => setMobileNavOpen(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col gap-12 py-12">
                <li>
                  <Link href="#" className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium tracking-tight">Products</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M12.848 6L8.18132 10.6667L3.51465 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li><Link href="#" className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full">Case Studies</Link></li>
                <li><Link href="#" className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full">Support</Link></li>
                <li>
                  <Link href="#" className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium tracking-tight">Resources</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M12.848 6L8.18132 10.6667L3.51465 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col gap-4">
                <Link href="#" className="rounded-full border border-gray-700 px-5 py-3 h-14 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center transition duration-200 text-sm font-semibold tracking-tight">Sign In</Link>
                <Link href="#" className="rounded-full bg-black px-5 py-3 h-14 hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 inline-flex items-center justify-center gap-2 transition duration-200">
                  <span className="text-white text-sm font-semibold tracking-tight">Get A Free Consultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 6.66666H7.33333C4.38781 6.66666 2 9.05447 2 12V13.3333M14 6.66666L10 10.6667M14 6.66666L10 2.66666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Hero Content */}
      <h1 className="font-heading tracking-tight text-white text-center text-5xl md:text-7xl font-medium max-w-lg md:max-w-5xl mx-auto mb-6">Navigating complex paths to unleash your success</h1>
      <p className="text-white tracking-tight mb-10 text-center text-xl text-opacity-80 max-w-xl mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-32">
        <Link href="#" className="bg-orange-500 h-16 rounded-full px-6 py-4 inline-flex items-center justify-center gap-2 tracking-tight hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 transition duration-200">
          <span className="text-white font-bold tracking-tight">Get A Free Consultation</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 6.66667H7.33333C4.38781 6.66667 2 9.05449 2 12V13.3333M14 6.66667L10 10.6667M14 6.66667L10 2.66667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </Link>
        <Link href="#" className="rounded-full border border-gray-200 bg-white px-6 py-4 h-16 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 inline-flex items-center justify-center transition duration-200 font-bold tracking-tight">Explore Case Studies</Link>
      </div>
      
      {/* Bottom Tabs */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3">
          <Link href="#" className="inline-block w-full py-3 border-b-2 border-white">
            <p className="text-white font-semibold">Strategic Road mapping</p>
          </Link>
        </div>
        <div className="w-full lg:w-1/3">
          <Link href="#" className="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
            <p className="text-white font-semibold lg:text-center">Collaborative Ideation</p>
          </Link>
        </div>
        <div className="w-full lg:w-1/3">
          <Link href="#" className="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
            <p className="text-white font-semibold lg:text-right">Data-Driven Insights</p>
          </Link>
        </div>
      </div>
    </section>
  );
} 