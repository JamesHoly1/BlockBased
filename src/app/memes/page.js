"use client";

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function MemesPage() {
  // Redirect to home page - page not accessible yet
  redirect('/');
  
  const [marketCapFilter, setMarketCapFilter] = useState('all');

  // Sample memecoin data
  const memecoins = [
    {
      id: 1,
      name: "Useless Coin",
      cashtag: "$USELESS",
      price: "$0.3264",
      change24h: "+5.8%",
      marketCap: "$326,943,501",
      volume24h: "$51,840,390",
      profileImage: "/uselesscoin.png",
      description: "A useless bio for a useless coin",
      socialLinks: {
        twitter: "https://twitter.com/uselesscoin",
        telegram: "https://t.me/uselesscoin",
        website: "https://uselesscoin.com"
      }
    },
    {
      id: 2,
      name: "Brett",
      cashtag: "$BRETT",
      price: "$0.06226",
      change24h: "+1.9%",
      marketCap: "$617,087,304",
      volume24h: "$58,060,961",
      profileImage: "/bretlogo.jpg",
      description: "Brett is the legendary character from Matt Furie's Boys' club comic. He has become the blue mascot of the blue chain",
      socialLinks: {
        twitter: "https://twitter.com/brett",
        telegram: "https://t.me/brett",
        website: "https://brett.com"
      }
    },
    {
      id: 3,
      name: "Popcat",
      cashtag: "$POPCAT",
      price: "$0.4179",
      change24h: "+0.3%",
      marketCap: "$410,330,509",
      volume24h: "$144,267,108",
      profileImage: "/popcatlogo.jpg",
      description: "The cat pops",
      socialLinks: {
        twitter: "https://twitter.com/popcat",
        telegram: "https://t.me/popcat",
        website: "https://popcat.com"
      }
    },
    {
      id: 4,
      name: "Non-Playable Coin",
      cashtag: "$NPC",
      price: "$0.02372",
      change24h: "+1.4%",
      marketCap: "$190,723,496",
      volume24h: "$9,458,226",
      profileImage: "/npclogo.jpg",
      description: "The first Memecoin-NFT hybrid",
      socialLinks: {
        twitter: "https://twitter.com/npccoin",
        telegram: "https://t.me/npccoin",
        website: "https://npccoin.com"
      }
    },
    {
      id: 5,
      name: "Kori",
      cashtag: "$KORI",
      price: "$0.03402",
      change24h: "+5.4%",
      marketCap: "$34,476,750",
      volume24h: "$13,024,921",
      profileImage: "/korilogo.jpg",
      description: "The most famous pom on the internet",
      socialLinks: {
        twitter: "https://twitter.com/koricoin",
        telegram: "https://t.me/koricoin",
        website: "https://koricoin.com"
      }
    },
    {
      id: 6,
      name: "Unicorn Fart Dust",
      cashtag: "$UFD",
      price: "$0.04259",
      change24h: "+4.6%",
      marketCap: "$42,589,306",
      volume24h: "$5,855,759",
      profileImage: "/ufdlogo.jpg",
      description: "It's Just Unicorn Fart Dust",
      socialLinks: {
        twitter: "https://twitter.com/ufdcoin",
        telegram: "https://t.me/ufdcoin",
        website: "https://ufdcoin.com"
      }
    },
    {
      id: 7,
      name: "Pepe",
      cashtag: "$PEPE",
      price: "$0.0000129",
      change24h: "+7.8%",
      marketCap: "$5,587,644,359",
      volume24h: "$6,122,403,846",
      profileImage: "/pepelogo.jpg",
      description: "The most memeable memecoin in existence",
      socialLinks: {
        twitter: "https://twitter.com/pepecoineth",
        telegram: "https://t.me/pepecoineth",
        website: "https://pepe.vip"
      }
    },
    {
      id: 8,
      name: "DogeCoin",
      cashtag: "$DOGE",
      price: "$0.082",
      change24h: "+12.5%",
      marketCap: "$11.8B",
      volume24h: "$890M",
      profileImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=64&h=64&fit=crop&crop=face",
      description: "The original meme coin that started it all. Much wow, very crypto!",
      socialLinks: {
        twitter: "https://twitter.com/dogecoin",
        telegram: "https://t.me/dogecoin",
        website: "https://dogecoin.com"
      }
    },
    {
      id: 9,
      name: "Shiba Inu",
      cashtag: "$SHIB",
      price: "$0.000023",
      change24h: "+8.3%",
      marketCap: "$13.6B",
      volume24h: "$456M",
      profileImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=64&h=64&fit=crop&crop=face",
      description: "The dogecoin killer. Woof! Building the future of decentralized finance.",
      socialLinks: {
        twitter: "https://twitter.com/shibatoken",
        telegram: "https://t.me/shibainuthedogecoin",
        website: "https://shibatoken.com"
      }
    },
    {
      id: 10,
      name: "Floki",
      cashtag: "$FLOKI",
      price: "$0.000089",
      change24h: "+23.1%",
      marketCap: "$2.8B",
      volume24h: "$234M",
      profileImage: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=64&h=64&fit=crop&crop=face",
      description: "Viking-themed meme coin with real utility. Valhalla awaits!",
      socialLinks: {
        twitter: "https://twitter.com/realflokiinu",
        telegram: "https://t.me/FlokiInu",
        website: "https://floki.com"
      }
    },
    {
      id: 11,
      name: "Bonk",
      cashtag: "$BONK",
      price: "$0.000034",
      change24h: "+67.8%",
      marketCap: "$1.9B",
      volume24h: "$567M",
      profileImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=64&h=64&fit=crop&crop=face",
      description: "Solana's favorite dog coin. Bonk the competition!",
      socialLinks: {
        twitter: "https://twitter.com/bonk_inu",
        telegram: "https://t.me/bonk_inu",
        website: "https://bonk.com"
      }
    },
    {
      id: 12,
      name: "WIF",
      cashtag: "$WIF",
      price: "$2.34",
      change24h: "+34.7%",
      marketCap: "$2.3B",
      volume24h: "$789M",
      profileImage: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=64&h=64&fit=crop&crop=face",
      description: "Dog with a hat. Need we say more?",
      socialLinks: {
        twitter: "https://twitter.com/dogwifhat",
        telegram: "https://t.me/dogwifhat",
        website: "https://dogwifhat.com"
      }
    },
    {
      id: 13,
      name: "Book of Meme",
      cashtag: "$BOME",
      price: "$0.012",
      change24h: "+89.2%",
      marketCap: "$1.2B",
      volume24h: "$456M",
      profileImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=64&h=64&fit=crop&crop=face",
      description: "The holy grail of meme coins. Blessed by the meme gods!",
      socialLinks: {
        twitter: "https://twitter.com/bookofmeme",
        telegram: "https://t.me/bookofmeme",
        website: "https://bookofmeme.com"
      }
    },
    {
      id: 14,
      name: "Meme",
      cashtag: "$MEME",
      price: "$0.023",
      change24h: "+12.8%",
      marketCap: "$890M",
      volume24h: "$123M",
      profileImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=face",
      description: "The most generic meme coin name ever. Pure meme energy!",
      socialLinks: {
        twitter: "https://twitter.com/memecoin",
        telegram: "https://t.me/memecoin",
        website: "https://memecoin.com"
      }
    },
    {
      id: 15,
      name: "Cat in a dogs world",
      cashtag: "$MEW",
      price: "$0.0045",
      change24h: "+56.3%",
      marketCap: "$670M",
      volume24h: "$234M",
      profileImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=64&h=64&fit=crop&crop=face",
      description: "The cat that's taking over the dog world. Meow!",
      socialLinks: {
        twitter: "https://twitter.com/catcoin",
        telegram: "https://t.me/catcoin",
        website: "https://catcoin.com"
      }
    },
    {
      id: 16,
      name: "Degen Ape",
      cashtag: "$DAPE",
      price: "$0.00012",
      change24h: "+78.9%",
      marketCap: "$234M",
      volume24h: "$67M",
      profileImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=64&h=64&fit=crop&crop=face",
      description: "Ape together strong! The most degen of them all!",
      socialLinks: {
        twitter: "https://twitter.com/degenape",
        telegram: "https://t.me/degenape",
        website: "https://degenape.com"
      }
    },
    {
      id: 17,
      name: "Moon",
      cashtag: "$MOON",
      price: "$0.000045",
      change24h: "+123.4%",
      marketCap: "$123M",
      volume24h: "$45M",
      profileImage: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=64&h=64&fit=crop&crop=face",
      description: "To the moon! Literally!",
      socialLinks: {
        twitter: "https://twitter.com/mooncoin",
        telegram: "https://t.me/mooncoin",
        website: "https://mooncoin.com"
      }
    },
    {
      id: 18,
      name: "Lambo",
      cashtag: "$LAMBO",
      price: "$0.000023",
      change24h: "+45.6%",
      marketCap: "$89M",
      volume24h: "$23M",
      profileImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=64&h=64&fit=crop&crop=face",
      description: "When lambo? Now!",
      socialLinks: {
        twitter: "https://twitter.com/lambocoin",
        telegram: "https://t.me/lambocoin",
        website: "https://lambocoin.com"
      }
    },
    {
      id: 19,
      name: "Diamond Hands",
      cashtag: "$DIAMOND",
      price: "$0.000067",
      change24h: "+34.2%",
      marketCap: "$67M",
      volume24h: "$12M",
      profileImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop&crop=face",
      description: "💎🙌 Diamond hands forever!",
      socialLinks: {
        twitter: "https://twitter.com/diamondhands",
        telegram: "https://t.me/diamondhands",
        website: "https://diamondhands.com"
      }
    },
    {
      id: 20,
      name: "HODL",
      cashtag: "$HODL",
      price: "$0.000089",
      change24h: "+67.8%",
      marketCap: "$45M",
      volume24h: "$8M",
      profileImage: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=64&h=64&fit=crop&crop=face",
      description: "HODL the line! Never sell!",
      socialLinks: {
        twitter: "https://twitter.com/hodlcoin",
        telegram: "https://t.me/hodlcoin",
        website: "https://hodlcoin.com"
      }
    },
    {
      id: 21,
      name: "Bonk",
      cashtag: "$BONK",
      price: "$0.0000345",
      change24h: "+5.2%",
      marketCap: "$2,667,427,059",
      volume24h: "$2,741,929,509",
      profileImage: "/bonklogo.jpg",
      description: "The community token of web3",
      socialLinks: {
        twitter: "https://twitter.com/bonk_inu",
        telegram: "https://t.me/bonk_inu",
        website: "https://bonk.com"
      }
    },
    {
      id: 22,
      name: "Shiba Inu",
      cashtag: "$SHIB",
      price: "$0.0000141",
      change24h: "+2.4%",
      marketCap: "$8,305,340,813",
      volume24h: "$435,742,510",
      profileImage: "/shiblogo.jpg",
      description: "The first memecoin to take on Doge",
      socialLinks: {
        twitter: "https://twitter.com/shibatoken",
        telegram: "https://t.me/shibainuthedogecoin",
        website: "https://shibatoken.com"
      }
    }
  ];

  // Filter memecoins based on market cap
  const filteredMemecoins = memecoins.filter(coin => {
    if (marketCapFilter === 'all') return true;
    
    // Convert market cap to number (handle B, M, K suffixes)
    let marketCapValue = coin.marketCap.replace(/[$,]/g, '');
    if (marketCapValue.includes('B')) {
      marketCapValue = parseFloat(marketCapValue.replace('B', '')) * 1000000000;
    } else if (marketCapValue.includes('M')) {
      marketCapValue = parseFloat(marketCapValue.replace('M', '')) * 1000000;
    } else if (marketCapValue.includes('K')) {
      marketCapValue = parseFloat(marketCapValue.replace('K', '')) * 1000;
    } else {
      marketCapValue = parseFloat(marketCapValue);
    }
    
    switch (marketCapFilter) {
      case 'under-100m':
        return marketCapValue < 100000000;
      case '100m-1b':
        return marketCapValue >= 100000000 && marketCapValue < 1000000000;
      case '1b-10b':
        return marketCapValue >= 1000000000 && marketCapValue < 10000000000;
      case 'over-10b':
        return marketCapValue >= 10000000000;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900">
      {/* Header */}
      <div className="relative">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-slate-400/80 tracking-wider font-medium">Crypto Memes</p>
            </div>
            
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${montserrat.className} text-slate-200`}>
              Memecoins
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300/90 max-w-3xl mx-auto font-light leading-relaxed">
              Discover the most viral and trending memecoins in the crypto space
            </p>
          </div>
        </div>
      </div>

      {/* Memecoins Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-8">
        {/* Filter Section */}
        <div className="mb-8 flex justify-center">
          <div className="bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-xl rounded-2xl border border-purple-400/30 p-6 shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <label htmlFor="marketCapFilter" className="text-sm text-slate-300 font-medium">
                  Market Cap Filter
                </label>
              </div>
              <select
                id="marketCapFilter"
                value={marketCapFilter}
                onChange={(e) => setMarketCapFilter(e.target.value)}
                className="bg-black/60 border border-purple-400/40 rounded-xl px-4 py-2 text-slate-200 focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 min-w-[200px]"
              >
                <option value="all">All Market Caps</option>
                <option value="under-100m">Under $100M</option>
                <option value="100m-1b">$100M - $1B</option>
                <option value="1b-10b">$1B - $10B</option>
                <option value="over-10b">Over $10B</option>
              </select>
              <div className="text-xs text-slate-400 bg-slate-400/10 px-3 py-1 rounded-full">
                {filteredMemecoins.length} results
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMemecoins.map((coin) => (
            <Link href={`/projects/memes/${coin.name.toLowerCase().replace(/\s+/g, '-')}`} key={coin.id} className="group relative">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-6 group-hover:border-purple-400/40 group-hover:bg-gradient-to-br group-hover:from-black/70 group-hover:to-black/50 transition-all duration-500 group-hover:scale-[1.02]">
                
                {/* Header with profile and basic info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <Image 
                      src={coin.profileImage} 
                      alt={coin.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-xl object-cover border-2 border-purple-400/30 group-hover:border-purple-400/50 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className={`text-lg font-bold ${montserrat.className} text-slate-200 group-hover:text-white transition-colors duration-300`}>
                        {coin.name}
                      </h3>
                      <span className="text-sm text-purple-400 font-mono bg-purple-400/10 px-2 py-1 rounded-md">
                        {coin.cashtag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-1">
                      {coin.description}
                    </p>
                  </div>
                </div>

                {/* Price and stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-slate-400/10">
                    <div className="text-sm text-slate-400 mb-1">Price</div>
                    <div className="text-lg font-bold text-slate-200">{coin.price}</div>
                    <div className={`text-sm font-medium ${coin.change24h.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {coin.change24h}
                    </div>
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-slate-400/10">
                    <div className="text-sm text-slate-400 mb-1">Market Cap</div>
                    <div className="text-lg font-bold text-slate-200">{coin.marketCap}</div>
                    <div className="text-sm text-slate-400">Vol: {coin.volume24h}</div>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <a 
                      href={coin.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-r from-black to-gray-800 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <Image src="/xlogo.svg" alt="X (Twitter)" width={16} height={16} className="w-4 h-4" />
                    </a>
                    <a 
                      href={coin.socialLinks.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 hover:from-purple-400/30 hover:to-pink-400/30 border border-purple-400/30 hover:border-purple-400/50 rounded-lg px-3 py-2 text-sm text-slate-200 hover:text-white transition-all duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>Vote</span>
                    </button>
                    <button className="flex items-center space-x-1 bg-gradient-to-r from-slate-400/20 to-slate-300/20 hover:from-slate-400/30 hover:to-slate-300/30 border border-slate-400/30 hover:border-slate-400/50 rounded-lg px-3 py-2 text-sm text-slate-200 hover:text-white transition-all duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 