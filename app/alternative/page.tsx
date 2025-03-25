"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, BarChart2, Users, BellRing, Award } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-white text-gray-900 w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full py-4 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">Driven</h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-700 hover:text-blue-600">Product</Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">AI Capabilities</Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">Transparency</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:block text-gray-700 hover:text-blue-600">Book a Demo</Link>
          <Link href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Demo
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
              Experience the future of automated sales compensation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Driven is your AI assistant that designs transparent sales compensation strategies, sets optimal targets, increases motivation, and boosts overall sales performance.
            </p>
            <Link 
              href="#" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          <div className="w-full bg-gray-100 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Driven uses:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 h-5 w-5" />
                    <span>CRM Data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 h-5 w-5" />
                    <span>Market Data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 h-5 w-5" />
                    <span>Cultural Data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 h-5 w-5" />
                    <span>Budget Data</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">To provide:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                    <span>AI-Generated compensation plans that fit your company</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                    <span>AI-Powered Recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                    <span>Automated Calculations so you can ditch your spreadsheets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Team Performance Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Control your team sales performance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Finally real-time access to commission spending. No longer guessing what the impact will be of adjustments to your compensation plan. Make smart decisions with our benchmarking and forecasting AI model.
              </p>
              <Link 
                href="#" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
              <div className="border-b pb-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Sales Performance Dashboard</h3>
                  <span className="text-sm text-gray-500">Last 30 days</span>
                </div>
              </div>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <BarChart2 className="h-24 w-24 text-blue-300" />
                <span className="text-gray-400 italic ml-2">Performance Graph Visualization</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Current Gross</p>
                  <p className="text-xl font-bold">$168,492</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Commission Earnings</p>
                  <p className="text-xl font-bold">$24,730</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Insights Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tailored insights for every sales rep
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Driven demystifies your compensation plan - motivating sales reps to go for that extra mile.
              </p>
              <Link 
                href="#" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Sales Rep Dashboard</h3>
                  <p className="text-sm text-gray-500">Personal performance tracker</p>
                </div>
              </div>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 italic">Sales Rep Performance Visualization</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Target Completion</p>
                  <p className="text-xl font-bold">76%</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Potential Earnings</p>
                  <p className="text-xl font-bold">$32,450</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Potential Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Unlock full AI Potential
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <BellRing className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Missed revenue alerts</h3>
              <p className="text-gray-600 text-sm">Get notified when reps are missing potential revenue opportunities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Automatic target recommendations</h3>
              <p className="text-gray-600 text-sm">AI-powered suggestions for optimal performance targets.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Budget adjustments</h3>
              <p className="text-gray-600 text-sm">Automatic budget optimization based on performance data.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Benchmark alerts</h3>
              <p className="text-gray-600 text-sm">Stay informed about industry standards and team performance.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <BellRing className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">AI Suggestion</h4>
                  <p className="text-sm text-gray-700">Optimize payroll allocation for Q3 to increase sales performance by 18%</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">Apply</button>
                    <button className="text-xs text-gray-500">Dismiss</button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Action Completed</h4>
                  <p className="text-sm text-gray-700">Updated commission structure for Enterprise sales team</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-6 italic">
                "The automation features have saved us countless hours and eliminated errors in our commission calculations. I can't imagine going back to spreadsheets!"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-semibold">Thomas Vanhumbeeck</p>
                  <p className="text-sm text-gray-500">CEO, FixForm</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-6 italic">
                "Driven took the guesswork out of our sales compensation. Our team is more motivated, targets make sense, and performance has never been better."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-semibold">Steve Declercq</p>
                  <p className="text-sm text-gray-500">Co-founder, Bizzy</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-6 italic">
                "I recommend Driven to all my clients that struggle with sales compensation. It simplifies complex commission structures, ensures fairness, and keeps teams motivated—all with precision."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-semibold">Mark Collins</p>
                  <p className="text-sm text-gray-500">Rewards Manager Consultant, Collins LLC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wiki Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                An AI-generated wiki that answers every question
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Driven automagically brings your compensation plan to life by pouring it into a wiki page. As a result, sales reps and HR are informed through strong visuals and FAQ.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 italic">Compensation Plan Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Sales Compensation with AI
          </h2>
          <p className="text-xl mb-8">
            No more spreadsheets. Schedule your free AI Compensation Audit!
          </p>
          <Link 
            href="#" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Free Sales Compensation Audit
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Driven</h3>
              <p className="text-gray-400">
                Dok-Noord 4D 101<br />
                9000 Gent<br />
                Belgium
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Documentation</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Support</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Twitter</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">LinkedIn</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2023 Driven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 