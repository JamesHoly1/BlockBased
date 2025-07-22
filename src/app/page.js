"use client";

import Header from "./components/header.js";
import Image from "next/image";
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const featuredMemes = [
    {
      id: 1,
      name: "Useless Coin",
      cashtag: "$USELESS",
      profileImage: "/uselesscoin.png",
      description: "A useless bio for a useless coin"
    },
    {
      id: 2,
      name: "Brett",
      cashtag: "$BRETT",
      profileImage: "/bretlogo.jpg",
      description: "Brett is the legendary character from Matt Furie's Boys club comic. He has become the blue mascot of the blue chain"
    },
    {
      id: 3,
      name: "Popcat",
      cashtag: "$POPCAT",
      profileImage: "/popcatlogo.jpg",
      description: "The cat pops"
    },
    {
      id: 10,
      name: "Bonk",
      cashtag: "$BONK",
      profileImage: "/bonklogo.jpg",
      description: "The dog coin that took Solana by storm."
    },
    {
      id: 11,
      name: "Pepe",
      cashtag: "$PEPE",
      profileImage: "/pepelogo.jpg",
      description: "The most viral frog in crypto."
    },
    {
      id: 4,
      name: "Kori",
      cashtag: "$KORI",
      profileImage: "/korilogo.jpg",
      description: "The most famous pom on the internet"
    },
    {
      id: 5,
      name: "Non-Playable Coin",
      cashtag: "$NPC",
      profileImage: "/npclogo.jpg",
      description: "You are not the main character, but you can own the coin"
    },
    {
      id: 6,
      name: "Unicorn Fart Dust",
      cashtag: "$UFD",
      profileImage: "/ufdlogo.jpg",
      description: "Magical dust for magical gains"
    },
    {
      id: 7,
      name: "Shiba Inu",
      cashtag: "$SHIB",
      profileImage: "/shiblogo.jpg",
      description: "The dogecoin killer, community-driven token"
    },
    {
      id: 12,
      name: "Pudgy Penguins",
      cashtag: "$PENGU",
      profileImage: "/penguinlogo.jpg",
      description: "Spreading good vibes across the meta"
    },
    {
      id: 9,
      name: "Dogecoin",
      cashtag: "$DOGE",
      profileImage: "/dogecoinlogo.png",
      description: "An open source peer-to-peer cryptocurrency, favored by shibas worldwide"
    },
    {
      id: 8,
      name: "SPX6900",
      cashtag: "$SPX",
      profileImage: "/spx6900logo.png",
      description: 'Imagine the power of the whole entire stock market put inside little tiny crypto coins'
    }
  ];
  return (
    <div className="bg-gradient-to-b from-black/85 via-black/75 to-black/85 h-screen w-screen overflow-hidden">
      {/* Header */}
      <Header />
      {/* Memecoins Section */}
      <section className="flex flex-col justify-center items-center h-full w-full px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl w-full flex flex-col items-center justify-center">
          <div className="max-w-4xl w-full text-center flex flex-col items-center justify-center">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 ${montserrat.className} text-slate-200 flex items-center`}>
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 ml-1">Memecoins</span>
            </h2>
            <p className="text-xl text-slate-300/90 max-w-3xl font-light leading-relaxed mb-8 text-center">
              The only premium memecoin aggregator
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-3 mb-2">
            {featuredMemes.slice(0, 12).map((coin) => (
              <div key={coin.id} className="group block">
                <div className="relative bg-gradient-to-br from-black/70 to-black/60 backdrop-blur-lg rounded-xl border border-purple-400/10 p-4 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <Image 
                      src={coin.profileImage} 
                      alt={coin.name}
                      width={80}
                      height={80}
                      className="w-12 h-12 sm:w-12 sm:h-12 rounded-lg object-cover border border-purple-400/20 transition-colors duration-200"
                    />
                    <div className="flex-1 min-w-0 hidden sm:block">
                      <div className="flex items-center space-x-1">
                        <h3 className={`text-base font-semibold ${montserrat.className} text-slate-200 transition-colors duration-200`}>
                          {coin.name}
                        </h3>
                        <span className="text-xs text-purple-400 font-mono bg-purple-400/10 px-1.5 py-0.5 rounded">
                          {coin.cashtag}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs line-clamp-1 mt-0.5">
                        {coin.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center w-full mt-6 mb-1">
            <div className="text-sm text-slate-400 mb-1 text-center">
              <div className="block sm:inline">We will be launching soon, find out <a href="/how-to-get-listed" className="text-purple-400 hover:underline">how to get listed?</a></div>
              <span className="hidden sm:inline mx-1">&middot;</span>
              <div className="block sm:inline mt-1 sm:mt-0"><a href="/leaderboard" className="text-green-400 hover:text-green-300 hover:underline font-semibold">Join our community leaderboard</a></div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
