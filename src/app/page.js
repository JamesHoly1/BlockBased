import Image from "next/image";
import Header from "./components/header.js";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Home() {
  return (
    <div className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 p-2 sm:p-10 bg-[url('/blockbg7.png')]`}>
      <main className="flex flex-col p-2 gap-12 sm:gap-18 row-start-2 items-center">
        <Image
            className=""
            src="/blockbasedicon.svg"
            alt="BlockBased logo"
            width={70}
            height={70}
            priority
        />
        <h2 className={`text-[44px] sm:text-[70px] w-4/5 sm:w-2/3 text-center leading-[60px] sm:leading-[80px] ${montserrat.className}`}>The Discovery <span className="text-slate-400">Layer</span> of Crypto</h2>
        <h4 className={`text-md text-center border border-gray-400/50 rounded-lg py-1.5 px-2 ${montserrat.className}`}>Coming soon</h4>
      </main>
    </div>
  );
}
