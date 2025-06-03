import Image from "next/image";
import Header from "./components/header.js";
import { Montserrat } from 'next/font/google';
import { Open_Sans } from 'next/font/google';



const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
});


export default function Home() {
  return (
    <div className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 p-2 sm:p-10 bg-[url('/blockbg.png')]`}>
      <main className="flex flex-col gap-12 sm:gap-18 row-start-2 items-center">
        <Image
            className=""
            src="/blockbasedicon.svg"
            alt="BlockBased logo"
            width={70}
            height={70}
            priority
        />
        <h2 className={`text-[46px] sm:text-[70px] text-gray-200 w-4/5 sm:w-2/3 text-center leading-[60px] sm:leading-[80px] ${montserrat.className}`}>The Central Hub for Everything Crypto</h2>
        <div className="flex flex-col justify-center gap-4" >
          <ol className="list-inside list-decimal text-md/6 text-center">
            <li className={`text-lg mb-2 tracking-[-.01em] pl-4 ${montserrat.className}`}>
              Follow @blockbased_ on X
            </li>
            <li className={`text-lg mb-2 tracking-[-.01em] pl-4 ${montserrat.className}`}>
              Engage & spread the word
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
