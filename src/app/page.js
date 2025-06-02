import Image from "next/image";
import Header from "./components/header.js";
import { Goldman } from 'next/font/google';

const goldman = Goldman({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
    <div className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 p-10 bg-[url('/blockbg.png')] ${goldman.className}`}>
      <Header />
      <main className="flex flex-col gap-18 row-start-2 items-center">
        <h2 className="text-7xl text-gray-200 w-2/3 text-center ">The central hub for everything crypto.</h2>
        <ol className="list-inside list-decimal text-md/6 text-center">
          <li className="mb-2 tracking-[-.01em] pl-4">
            Follow @blockbased_ on X.
          </li>
          <li className="tracking-[-.01em] pl-4">
            Turn notifs on and share.
          </li>
        </ol>
      </main>
    </div>
  );
}
