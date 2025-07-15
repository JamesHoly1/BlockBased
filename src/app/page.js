import Hero from "./components/hero.js";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[url('/blockbg7.png')] bg-cover bg-center bg-fixed">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />
      
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Apply to be Listed Section */}
        <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-l from-orange-400/5 to-red-400/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-green-400/3 to-emerald-400/3 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center">
              {/* Logo */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/60 via-cyan-400/50 to-white/30 rounded-2xl blur-3xl animate-pulse"></div>
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-42 lg:h-42 rounded-[40px] border-2 border-blue-400/60 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-blue-400/20">
                    <Image
                      src="/blockbasedicon.svg"
                      alt="BlockBased Logo"
                      width={80}
                      height={80}
                      className="w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
              
              {/* Coming Soon Title */}
              <h2 className={`text-[46px] sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent leading-tight`}>
                Coming soon
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-200/95 max-w-5xl mx-auto font-medium leading-relaxed drop-shadow-lg mb-8 sm:mb-10 lg:mb-12 px-4">
                where quality is curated — from memes to infrastructure to crypto commerce.
              </p>
              
              {/* Application Button */}
              <Link
                href="https://forms.gle/mxczjpp6CgLuNoRe8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 text-xl sm:text-2xl font-semibold text-white border border-white/40 hover:border-orange-400/80 rounded-lg backdrop-blur-sm transition-all duration-300 hover:text-orange-300 hover:bg-white/5"
              >
                <span className="relative z-10 flex items-center">
                  Apply Now
                  <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
