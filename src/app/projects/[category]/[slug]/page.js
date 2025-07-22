'use client';

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function ProjectProfile() {
  const params = useParams();
  const { category, slug } = params;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample project data - in a real app, this would come from an API
  const projectsData = {
    memes: {
      'dogecoin': {
        id: 1,
        name: "DogeCoin",
        cashtag: "$DOGE",
        price: "$0.082",
        change24h: "+12.5%",
        marketCap: "$11.8B",
        volume24h: "$890M",
        circulatingSupply: "141.2B DOGE",
        maxSupply: "Unlimited",
        allTimeHigh: "$0.731",
        allTimeLow: "$0.000085",
        profileImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=64&h=64&fit=crop&crop=face",
        description: "The original meme coin that started it all. Much wow, very crypto! Dogecoin was created as a joke based on the popular 'Doge' meme featuring a Shiba Inu dog. Despite its humorous origins, it has grown into one of the most recognized cryptocurrencies in the world.",
        longDescription: "Dogecoin (DOGE) is a peer-to-peer, open-source cryptocurrency. It is considered an altcoin and an almost sarcastic meme coin. Launched in December 2013, Dogecoin has the image of a Shiba Inu dog as its logo. While it was created seemingly as a joke, Dogecoin's blockchain still has merit. Its underlying technology is derived from Litecoin. Notable features of Dogecoin, which uses a scrypt algorithm, are its low price and unlimited supply.",
        category: "Memecoin",
        launchDate: "December 6, 2013",
        blockchain: "Dogecoin",
        consensus: "Proof of Work",
        socialLinks: {
          twitter: "https://twitter.com/dogecoin",
          telegram: "https://t.me/dogecoin",
          website: "https://dogecoin.com",
          reddit: "https://reddit.com/r/dogecoin",
          github: "https://github.com/dogecoin/dogecoin"
        },
        tradingViewSymbol: "BINANCE:DOGEUSD"
      },
      'shiba-inu': {
        id: 2,
        name: "Shiba Inu",
        cashtag: "$SHIB",
        price: "$0.0000141",
        change24h: "+2.4%",
        marketCap: "$8,305,340,813",
        volume24h: "$435,742,510",
        circulatingSupply: "589.7T SHIB",
        maxSupply: "1,000,000,000,000,000 SHIB",
        allTimeHigh: "$0.000086",
        allTimeLow: "$0.000000000056",
        profileImage: "/shiblogo.jpg",
        description: "The first memecoin to take on Doge",
        longDescription: "Shiba Inu (SHIB) is a decentralized cryptocurrency created in August 2020 by an anonymous person or group known as 'Ryoshi'. It is named after the Shiba Inu dog breed from Japan, which is also the breed featured in the Dogecoin logo. Shiba Inu is an Ethereum-based token that operates as a meme coin and has gained significant popularity in the cryptocurrency community.",
        category: "Memecoin",
        launchDate: "August 2020",
        blockchain: "Ethereum",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/shibatoken",
          telegram: "https://t.me/shibainuthedogecoin",
          website: "https://shibatoken.com",
          reddit: "https://reddit.com/r/shibainucoin",
          github: "https://github.com/shiba-inu"
        },
        tradingViewSymbol: "BINANCE:SHIBUSD"
      },
      'pepe': {
        id: 3,
        name: "Pepe",
        cashtag: "$PEPE",
        price: "$0.0000129",
        change24h: "+7.8%",
        marketCap: "$5,587,644,359",
        volume24h: "$6,122,403,846",
        circulatingSupply: "420.7T PEPE",
        maxSupply: "420,690,000,000,000 PEPE",
        allTimeHigh: "$0.00000431",
        allTimeLow: "$0.000000000001",
        profileImage: "/pepelogo.jpg",
        description: "The most memeable memecoin in existence",
        longDescription: "Pepe (PEPE) is a meme coin inspired by the popular Pepe the Frog meme. Launched in April 2023, it quickly gained viral attention and became one of the most talked-about cryptocurrencies. The token operates on the Ethereum blockchain and has no utility beyond being a meme coin, but its community-driven nature and viral marketing have made it a significant player in the crypto space.",
        category: "Memecoin",
        launchDate: "April 2023",
        blockchain: "Ethereum",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/pepecoineth",
          telegram: "https://t.me/pepecoineth",
          website: "https://pepe.vip",
          reddit: "https://reddit.com/r/pepecoin",
          github: "https://github.com/pepecoin"
        },
        tradingViewSymbol: "BINANCE:PEPEUSD"
      },
      'bonk': {
        id: 4,
        name: "Bonk",
        cashtag: "$BONK",
        price: "$0.0000345",
        change24h: "+5.2%",
        marketCap: "$2,667,427,059",
        volume24h: "$2,741,929,509",
        circulatingSupply: "77.3T BONK",
        maxSupply: "93,000,000,000,000 BONK",
        allTimeHigh: "$0.00000095",
        allTimeLow: "$0.000000000001",
        profileImage: "/bonklogo.jpg",
        description: "The community token of web3",
        longDescription: "Bonk (BONK) is a meme coin launched on the Solana blockchain in December 2022. It was created as a community-driven token with the goal of bringing fun and memes to the Solana ecosystem. Bonk has gained significant popularity and has become one of the most successful meme coins on Solana, known for its active community and viral marketing campaigns.",
        category: "Memecoin",
        launchDate: "December 2022",
        blockchain: "Solana",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/bonk_inu",
          telegram: "https://t.me/bonk_inu",
          website: "https://bonk.com",
          reddit: "https://reddit.com/r/bonk",
          github: "https://github.com/bonk"
        },
        tradingViewSymbol: "BINANCE:BONKUSD"
      },
      'kori': {
        id: 5,
        name: "Kori",
        cashtag: "$KORI",
        price: "$0.03402",
        change24h: "+5.4%",
        marketCap: "$34,476,750",
        volume24h: "$13,024,921",
        circulatingSupply: "1.0B KORI",
        maxSupply: "1,000,000,000 KORI",
        allTimeHigh: "$0.045",
        allTimeLow: "$0.001",
        profileImage: "/korilogo.jpg",
        description: "The most famous pom on the internet",
        longDescription: "Kori (KORI) is a meme coin inspired by the famous Pomeranian dog Kori, who gained internet fame through social media. The token represents the intersection of pet culture and cryptocurrency, appealing to both crypto enthusiasts and pet lovers. Kori aims to build a community around the love for pets while leveraging the viral nature of meme coins.",
        category: "Memecoin",
        launchDate: "2023",
        blockchain: "Ethereum",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/koricoin",
          telegram: "https://t.me/koricoin",
          website: "https://koricoin.com",
          reddit: "https://reddit.com/r/koricoin",
          github: "https://github.com/koricoin"
        },
        tradingViewSymbol: "BINANCE:KORIUSD"
      },
      'useless-coin': {
        id: 6,
        name: "Useless Coin",
        cashtag: "$USELESS",
        price: "$0.3264",
        change24h: "+5.8%",
        marketCap: "$326,943,501",
        volume24h: "$51,840,390",
        circulatingSupply: "1.0B USELESS",
        maxSupply: "1,000,000,000 USELESS",
        allTimeHigh: "$0.45",
        allTimeLow: "$0.01",
        profileImage: "/uselesscoin.png",
        description: "A useless bio for a useless coin",
        longDescription: "Useless Coin (USELESS) is a meme coin that embraces its 'useless' nature as part of its branding and community identity. Despite its name, the project has built a dedicated community around the concept of being intentionally 'useless' while still providing entertainment and community value in the crypto space.",
        category: "Memecoin",
        launchDate: "2023",
        blockchain: "Ethereum",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/uselesscoin",
          telegram: "https://t.me/uselesscoin",
          website: "https://uselesscoin.com",
          reddit: "https://reddit.com/r/uselesscoin",
          github: "https://github.com/uselesscoin"
        },
        tradingViewSymbol: "BINANCE:USELESSUSD"
      },
      'brett': {
        id: 7,
        name: "Brett",
        cashtag: "$BRETT",
        price: "$0.06226",
        change24h: "+1.9%",
        marketCap: "$617,087,304",
        volume24h: "$58,060,961",
        circulatingSupply: "9.9B BRETT",
        maxSupply: "10,000,000,000 BRETT",
        allTimeHigh: "$0.08",
        allTimeLow: "$0.01",
        profileImage: "/bretlogo.jpg",
        description: "Brett is the legendary character from Matt Furie's Boys' club comic. He has become the blue mascot of the blue chain",
        longDescription: "Brett (BRETT) is a meme coin based on the character Brett from Matt Furie's Boys' Club comic series. The token has become associated with the 'blue chain' community and represents the intersection of internet culture, memes, and cryptocurrency. Brett has gained popularity as a mascot for certain crypto communities.",
        category: "Memecoin",
        launchDate: "2023",
        blockchain: "Ethereum",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/brett",
          telegram: "https://t.me/brett",
          website: "https://brett.com",
          reddit: "https://reddit.com/r/brett",
          github: "https://github.com/brett"
        },
        tradingViewSymbol: "BINANCE:BRETTUSD"
      },
      'popcat': {
        id: 8,
        name: "Popcat",
        cashtag: "$POPCAT",
        price: "$0.4179",
        change24h: "+0.3%",
        marketCap: "$410,330,509",
        volume24h: "$144,267,108",
        circulatingSupply: "982M POPCAT",
        maxSupply: "1,000,000,000 POPCAT",
        allTimeHigh: "$0.55",
        allTimeLow: "$0.05",
        profileImage: "/popcatlogo.jpg",
        description: "The cat pops",
        longDescription: "Popcat (POPCAT) is a meme coin inspired by the popular Popcat internet meme. The token represents the viral nature of internet culture and has built a community around the simple yet catchy concept of 'the cat pops'. Popcat aims to bring fun and entertainment to the crypto space through its meme-based approach.",
        category: "Memecoin",
        launchDate: "2023",
        blockchain: "Ethereum",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/popcat",
          telegram: "https://t.me/popcat",
          website: "https://popcat.com",
          reddit: "https://reddit.com/r/popcat",
          github: "https://github.com/popcat"
        },
        tradingViewSymbol: "BINANCE:POPCATUSD"
      },
      'non-playable-coin': {
        id: 9,
        name: "Non-Playable Coin",
        cashtag: "$NPC",
        price: "$0.02372",
        change24h: "+1.4%",
        marketCap: "$190,723,496",
        volume24h: "$9,458,226",
        circulatingSupply: "8.0B NPC",
        maxSupply: "10,000,000,000 NPC",
        allTimeHigh: "$0.035",
        allTimeLow: "$0.005",
        profileImage: "/npclogo.jpg",
        description: "The first Memecoin-NFT hybrid.",
        longDescription: "Non-Playable Coin (NPC) is a unique project that combines meme coins with NFT functionality. It represents the first Memecoin-NFT hybrid, offering both the viral appeal of meme coins and the collectible nature of NFTs. NPC has pioneered the concept of combining these two popular crypto trends.",
        category: "Memecoin",
        launchDate: "2023",
        blockchain: "Ethereum",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/npccoin",
          telegram: "https://t.me/npccoin",
          website: "https://npccoin.com",
          reddit: "https://reddit.com/r/npccoin",
          github: "https://github.com/npccoin"
        },
        tradingViewSymbol: "BINANCE:NPCUSD"
      },
      'unicorn-fart-dust': {
        id: 10,
        name: "Unicorn Fart Dust",
        cashtag: "$UFD",
        price: "$0.04259",
        change24h: "+4.6%",
        marketCap: "$42,589,306",
        volume24h: "$5,855,759",
        circulatingSupply: "1.0B UFD",
        maxSupply: "1,000,000,000 UFD",
        allTimeHigh: "$0.06",
        allTimeLow: "$0.01",
        profileImage: "/ufdlogo.jpg",
        description: "It's Just Unicorn Fart Dust",
        longDescription: "Unicorn Fart Dust (UFD) is a whimsical meme coin that embraces the magical and fantastical theme of unicorns. The token represents the playful and imaginative side of the crypto community, appealing to those who enjoy fantasy themes and magical concepts in their investments.",
        category: "Memecoin",
        launchDate: "2023",
        blockchain: "Ethereum",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/ufdcoin",
          telegram: "https://t.me/ufdcoin",
          website: "https://ufdcoin.com",
          reddit: "https://reddit.com/r/ufdcoin",
          github: "https://github.com/ufdcoin"
        },
        tradingViewSymbol: "BINANCE:UFDUSD"
      }
    },
    infrastructure: {
      'uniswap': {
        id: 1,
        name: "Uniswap",
        cashtag: "$UNI",
        price: "$7.23",
        change24h: "+5.8%",
        marketCap: "$4.3B",
        volume24h: "$890M",
        circulatingSupply: "598.2M UNI",
        maxSupply: "1,000,000,000 UNI",
        allTimeHigh: "$44.97",
        allTimeLow: "$1.03",
        profileImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=64&h=64&fit=crop&crop=face",
        description: "The leading decentralized exchange protocol. Trade any token with automated market making.",
        longDescription: "Uniswap is a decentralized cryptocurrency exchange that facilitates automated trading of DeFi tokens. Uniswap is one of the largest DeFi protocols and is known for its role in facilitating automated trading of decentralized finance (DeFi) tokens. The protocol uses an automated market maker (AMM) model where users trade against a liquidity pool rather than against each other.",
        category: "DEX",
        launchDate: "November 2, 2018",
        blockchain: "Ethereum",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/Uniswap",
          telegram: "https://t.me/uniswap",
          website: "https://uniswap.org",
          reddit: "https://reddit.com/r/uniswap",
          github: "https://github.com/uniswap"
        },
        tradingViewSymbol: "BINANCE:UNIUSD"
      },
      'aave': {
        id: 2,
        name: "Aave",
        cashtag: "$AAVE",
        price: "$245.67",
        change24h: "+12.3%",
        marketCap: "$3.6B",
        volume24h: "$456M",
        circulatingSupply: "14.7M AAVE",
        maxSupply: "16,000,000 AAVE",
        allTimeHigh: "$661.69",
        allTimeLow: "$26.02",
        profileImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=64&h=64&fit=crop&crop=face",
        description: "Decentralized lending and borrowing protocol. Earn interest on deposits and borrow assets.",
        longDescription: "Aave is a decentralized finance protocol that allows people to lend and borrow crypto. Lenders earn interest by depositing digital assets into specially created liquidity pools. Borrowers can then use their crypto as collateral to take out a flash loan using this liquidity. Aave is one of the largest DeFi lending protocols and is known for its innovative features like flash loans.",
        category: "Lending",
        launchDate: "November 2017",
        blockchain: "Ethereum",
        consensus: "Proof of Stake",
        socialLinks: {
          twitter: "https://twitter.com/AaveAave",
          telegram: "https://t.me/Aavesome",
          website: "https://aave.com",
          reddit: "https://reddit.com/r/aave",
          github: "https://github.com/aave"
        },
        tradingViewSymbol: "BINANCE:AAVEUSD"
      }
    }
  };

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const projectData = projectsData[category]?.[slug];
      setProject(projectData);
      setLoading(false);
    }, 500);
  }, [category, slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-200 mb-4">Project Not Found</h1>
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const isPositive = project.change24h.startsWith('+');
  const accentColor = category === 'memes' ? 'purple' : 'orange';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-${accentColor}-400/10 to-${accentColor === 'purple' ? 'pink' : 'red'}-400/10 rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-${accentColor === 'purple' ? 'pink' : 'red'}-400/10 to-${accentColor}-400/10 rounded-full blur-3xl`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="text-slate-400 hover:text-slate-300">
              Home
            </Link>
            <span className="text-slate-400 mx-2">/</span>
            <Link href={`/${category}`} className="text-slate-400 hover:text-slate-300 capitalize">
              {category}
            </Link>
            <span className="text-slate-400 mx-2">/</span>
            <span className="text-slate-200">{project.name}</span>
          </div>

          {/* Project Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8 mb-12">
            <div className="flex items-center space-x-6">
              <img 
                src={project.profileImage} 
                alt={project.name}
                className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-400/30"
              />
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className={`text-4xl font-bold ${montserrat.className} text-slate-200`}>
                    {project.name}
                  </h1>
                  <span className={`text-lg text-${accentColor}-400 font-mono bg-${accentColor}-400/10 px-3 py-1 rounded-lg border border-${accentColor}-400/30`}>
                    {project.cashtag}
                  </span>
                </div>
                <p className="text-slate-400 text-lg">{project.description}</p>
              </div>
            </div>
            
            {/* Price Info */}
            <div className="lg:ml-auto text-right">
              <div className="text-3xl font-bold text-slate-200 mb-1">{project.price}</div>
              <div className={`text-lg font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {project.change24h}
              </div>
              <div className="text-slate-400 text-sm">24h Change</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Chart */}
          <div className="lg:col-span-2">
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-slate-400/20 p-6 mb-8">
              <h2 className="text-xl font-bold text-slate-200 mb-4">Price Chart</h2>
              <div className="h-96 bg-slate-800/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-slate-400">TradingView Chart</p>
                  <p className="text-slate-500 text-sm">Symbol: {project.tradingViewSymbol}</p>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-slate-400/20 p-6">
              <h2 className="text-xl font-bold text-slate-200 mb-4">About {project.name}</h2>
              <p className="text-slate-300 leading-relaxed">{project.longDescription}</p>
            </div>
          </div>

          {/* Right Column - Stats & Links */}
          <div className="space-y-6">
            {/* Market Stats */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-slate-400/20 p-6">
              <h3 className="text-lg font-bold text-slate-200 mb-4">Market Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Market Cap</span>
                  <span className="text-slate-200 font-medium">{project.marketCap}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">24h Volume</span>
                  <span className="text-slate-200 font-medium">{project.volume24h}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Circulating Supply</span>
                  <span className="text-slate-200 font-medium">{project.circulatingSupply}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Max Supply</span>
                  <span className="text-slate-200 font-medium">{project.maxSupply}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">All Time High</span>
                  <span className="text-green-400 font-medium">{project.allTimeHigh}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">All Time Low</span>
                  <span className="text-red-400 font-medium">{project.allTimeLow}</span>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-slate-400/20 p-6">
              <h3 className="text-lg font-bold text-slate-200 mb-4">Project Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Category</span>
                  <span className="text-slate-200 font-medium">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Launch Date</span>
                  <span className="text-slate-200 font-medium">{project.launchDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Blockchain</span>
                  <span className="text-slate-200 font-medium">{project.blockchain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Consensus</span>
                  <span className="text-slate-200 font-medium">{project.consensus}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-slate-400/20 p-6">
              <h3 className="text-lg font-bold text-slate-200 mb-4">Social Links</h3>
              <div className="space-y-3">
                {Object.entries(project.socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r from-${accentColor}-400 to-${accentColor === 'purple' ? 'pink' : 'red'}-400 rounded-lg flex items-center justify-center`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        {platform === 'twitter' && (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        )}
                        {platform === 'telegram' && (
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        )}
                        {platform === 'website' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        )}
                        {platform === 'reddit' && (
                          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                        )}
                        {platform === 'github' && (
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        )}
                      </svg>
                    </div>
                    <span className="text-slate-200 capitalize">{platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 