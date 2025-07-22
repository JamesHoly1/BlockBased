"use client";

import Header from "../components/header.js";
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function HowToGetListed() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/85 via-black/75 to-black/85">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-slate-400/80 tracking-wider font-medium">Getting Listed</p>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${montserrat.className} text-slate-200`}>
              How to Get Listed
            </h1>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto font-light leading-relaxed">
              BlockBased is the only exclusive memecoin aggregator. Only memecoins that truly deserve a place will be found on BlockBased.
            </p>
          </div>

          {/* Introduction Card */}
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-3 ${montserrat.className} text-slate-200`}>
                  Our Philosophy
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  There are memecoins that don&apos;t get the attention they deserve. We want to change that. To use market cap doesn&apos;t matter, only activity.
                  You are not required to have a certain marketcap, and we do not take payment for listings. 
                  We focus on quality, community engagement, and genuine value rather than financial requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Requirements Checklist */}
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-8 mb-8">
            <h2 className={`text-2xl font-bold mb-6 ${montserrat.className} text-slate-200`}>
              How to Get Listed
            </h2>
            
            <div className="space-y-6">
              {/* Requirement 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${montserrat.className} text-slate-200`}>
                    Active Community
                  </h3>
                  <p className="text-slate-300">
                    Projects must have an active community with at least <span className="text-purple-400 font-semibold">10 active participants</span>.
                  </p>
                </div>
              </div>

              {/* Requirement 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${montserrat.className} text-slate-200`}>
                    Active Team Engagement
                  </h3>
                  <p className="text-slate-300">
                    Project&apos;s must have an active team that posts regularly on <span className="text-green-400 font-semibold">X</span>.
                  </p>
                </div>
              </div>

              {/* Requirement 3 */}
              <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${montserrat.className} text-slate-200`}>
                    BlockBased Engagement
                  </h3>
                  <p className="text-slate-300">
                    It isn&apos;t mandatory to engage with BlockBased, but it would definitely help to get noticed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fast Track Section */}
          <div className="bg-gradient-to-br from-purple-400/10 to-pink-400/10 backdrop-blur-xl rounded-2xl border border-purple-400/30 p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-3 ${montserrat.className} text-slate-200`}>
                  Fast Track
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  <span className="text-yellow-400 font-semibold">100 votes on Crypto Billboards</span> (Coming soon)
                </p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-gradient-to-br from-red-400/10 to-orange-400/10 backdrop-blur-xl rounded-2xl border border-red-400/30 p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-3 ${montserrat.className} text-slate-200`}>
                  Important!
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Just because your project got listed, we will remove it if the project doesn&apos;t maintain consistency. 
                  That being said, projects that have been removed can be relisted again.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 hover:from-purple-400/30 hover:to-pink-400/30 border border-purple-400/30 hover:border-purple-400/50 rounded-lg px-6 py-3 text-slate-200 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 