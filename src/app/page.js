import Image from "next/image";
import Header from "./components/header.js";
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[url('/blockbg7.png')] bg-cover bg-center bg-fixed">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto py-12 sm:py-16">
          {/* Logo */}
          <div className="relative group mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-400/10 to-slate-300/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <Image
              className="relative transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              src="/blockbasedicon.svg"
              alt="BlockBased logo"
              width={76}
              height={76}
              priority
            />
          </div>
          
          {/* Content */}
          <div className="space-y-8 text-center">
            <h2 className={`text-4xl sm:text-6xl font-semibold leading-[1.1] tracking-tight ${montserrat.className}`}>
              The Discovery <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 inline-block mt-1">Layer</span> of Crypto
            </h2>
            <p className="text-base sm:text-lg text-slate-300/90 max-w-xl mx-auto font-light leading-relaxed">
              Your gateway to memes, infrastructure, and crypto commerce. From L1s to DeFi, we curate quality across the ecosystem.
            </p>
          </div>

          {/* Registration Button */}
          <div className="mt-16">
            <Link
              href="/register"
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-slate-300/20 group-hover:from-slate-400/30 group-hover:to-slate-300/30 rounded-lg blur-md transition-all duration-300" />
              <div className="relative px-10 py-4 bg-black/40 backdrop-blur-sm rounded-lg border border-slate-400/20 transition-all duration-300 group-hover:border-slate-400/30 group-hover:bg-black/50">
                <div className="flex flex-col items-center">
                  <span className="text-slate-300 font-medium text-lg">Apply to be Listed</span>
                  <p className="text-xs text-slate-400 mt-2 tracking-wide">For Projects & Businesses</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Launch Status */}
          <p className="text-xs text-slate-400/70 mt-8 tracking-wider font-light">BlockBased is launching soon</p>
        </main>
      </div>
    </div>
  );
}
