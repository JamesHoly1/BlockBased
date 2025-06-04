import Image from "next/image";
import Header from "./components/header.js";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
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
        <h2 className={`text-[44px] sm:text-[70px] w-4/5 sm:w-2/3 text-center leading-[60px] sm:leading-[80px] ${montserrat.className}`}>The Central Hub for <span className="text-slate-400">Everything</span> Crypto</h2>
        <div className="flex flex-col justify-center gap-4" >
          <ol className="list-inside list-decimal text-md/6 text-center">
            <li className={`text-lg mb-2 tracking-[-.01em] ${montserrat.className}`}>
              Follow @blockbased_ on X
            </li>
            <li className={`text-lg mb-2 tracking-[-.01em] ${montserrat.className}`}>
              Turn notifs on & engage
            </li>
            <li className={`text-lg mb-2 tracking-[-.01em] ${montserrat.className}`}>
              Share us everywhere using #BlockBasedLaunch
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
