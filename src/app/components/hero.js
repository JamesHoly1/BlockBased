import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Hero() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          
          {/* First Question - Are you a Meme? */}
          <div className="text-center">
            <h2 className={`text-[46px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[88px] text-slate-100 drop-shadow-lg font-bold leading-[0.95] tracking-tight ${montserrat.className}`}>
              <span className="text-slate-100 drop-shadow-lg">Are you a</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 drop-shadow-lg">Memecoin</span><span className="text-slate-100 drop-shadow-lg ml-2">?</span>
            </h2>
          </div>

          {/* Second Question - Are you crypto Infrastructure? */}
          <div className="text-center">
            <h2 className={`text-[46px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[88px] font-bold leading-[0.95] tracking-tight ${montserrat.className}`}>
              <span className="text-slate-100 drop-shadow-lg">Blockchain</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 inline-block drop-shadow-lg">Infrastructur</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 drop-shadow-lg">e</span><span className="text-slate-100 drop-shadow-lg ml-2">?</span>
            </h2>
          </div>

          {/* Third Question - Do you accept Crypto? */}
          <div className="text-center">
            <h2 className={`text-[46px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[88px] font-bold leading-[0.95] tracking-tight ${montserrat.className}`}>
              <span className="text-slate-100 drop-shadow-lg">Do you accept</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 inline-block drop-shadow-lg pb-2">Crypto</span><span className="text-slate-100 drop-shadow-lg ml-2">?</span>
            </h2>
          </div>

          {/* Arrow */}
          <div className="flex justify-center pt-8 sm:pt-12">
            <div className="text-green-400 text-6xl sm:text-7xl lg:text-8xl">
              ↓
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 