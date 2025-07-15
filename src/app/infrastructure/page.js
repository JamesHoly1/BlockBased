import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function InfrastructurePage() {
  // Redirect to home page - page not accessible yet
  redirect('/');
  // Sample infrastructure data
  const infrastructure = [
    {
      id: 1,
      name: "Uniswap",
      cashtag: "$UNI",
      price: "$7.23",
      change24h: "+5.8%",
      marketCap: "$4.3B",
      volume24h: "$890M",
      profileImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=64&h=64&fit=crop&crop=face",
      description: "The leading decentralized exchange protocol. Trade any token with automated market making.",
      socialLinks: {
        twitter: "https://twitter.com/Uniswap",
        telegram: "https://t.me/uniswap",
        website: "https://uniswap.org"
      }
    },
    {
      id: 2,
      name: "Aave",
      cashtag: "$AAVE",
      price: "$245.67",
      change24h: "+12.3%",
      marketCap: "$3.6B",
      volume24h: "$456M",
      profileImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=64&h=64&fit=crop&crop=face",
      description: "Decentralized lending and borrowing protocol. Earn interest on deposits and borrow assets.",
      socialLinks: {
        twitter: "https://twitter.com/AaveAave",
        telegram: "https://t.me/Aavesome",
        website: "https://aave.com"
      }
    },
    {
      id: 3,
      name: "Compound",
      cashtag: "$COMP",
      price: "$67.89",
      change24h: "+8.7%",
      marketCap: "$2.1B",
      volume24h: "$234M",
      profileImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop&crop=face",
      description: "Algorithmic interest rate protocol. Supply assets to earn interest and borrow against collateral.",
      socialLinks: {
        twitter: "https://twitter.com/compoundfinance",
        telegram: "https://t.me/compoundfinance",
        website: "https://compound.finance"
      }
    },
    {
      id: 4,
      name: "Chainlink",
      cashtag: "$LINK",
      price: "$14.56",
      change24h: "+15.2%",
      marketCap: "$8.4B",
      volume24h: "$789M",
      profileImage: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=64&h=64&fit=crop&crop=face",
      description: "Decentralized oracle network. Connecting smart contracts with real-world data.",
      socialLinks: {
        twitter: "https://twitter.com/chainlink",
        telegram: "https://t.me/chainlinknews",
        website: "https://chain.link"
      }
    },
    {
      id: 5,
      name: "Polygon",
      cashtag: "$MATIC",
      price: "$0.89",
      change24h: "+23.4%",
      marketCap: "$8.9B",
      volume24h: "$567M",
      profileImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=64&h=64&fit=crop&crop=face",
      description: "Layer 2 scaling solution for Ethereum. Fast, secure, and low-cost transactions.",
      socialLinks: {
        twitter: "https://twitter.com/0xPolygon",
        telegram: "https://t.me/polygonofficial",
        website: "https://polygon.technology"
      }
    },
    {
      id: 6,
      name: "Arbitrum",
      cashtag: "$ARB",
      price: "$1.23",
      change24h: "+18.9%",
      marketCap: "$1.6B",
      volume24h: "$345M",
      profileImage: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=64&h=64&fit=crop&crop=face",
      description: "Ethereum Layer 2 rollup. Scalable, secure, and EVM-compatible smart contracts.",
      socialLinks: {
        twitter: "https://twitter.com/arbitrum",
        telegram: "https://t.me/arbitrum",
        website: "https://arbitrum.io"
      }
    },
    {
      id: 7,
      name: "Optimism",
      cashtag: "$OP",
      price: "$2.45",
      change24h: "+31.2%",
      marketCap: "$2.3B",
      volume24h: "$456M",
      profileImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=64&h=64&fit=crop&crop=face",
      description: "Layer 2 scaling solution. Fast, cheap, and secure Ethereum transactions.",
      socialLinks: {
        twitter: "https://twitter.com/optimismFND",
        telegram: "https://t.me/optimism",
        website: "https://optimism.io"
      }
    },
    {
      id: 8,
      name: "Synthetix",
      cashtag: "$SNX",
      price: "$3.67",
      change24h: "+9.8%",
      marketCap: "$890M",
      volume24h: "$123M",
      profileImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=face",
      description: "Decentralized synthetic asset protocol. Trade real-world assets on blockchain.",
      socialLinks: {
        twitter: "https://twitter.com/synthetix_io",
        telegram: "https://t.me/synthetix",
        website: "https://synthetix.io"
      }
    },
    {
      id: 9,
      name: "Curve Finance",
      cashtag: "$CRV",
      price: "$0.56",
      change24h: "+7.3%",
      marketCap: "$670M",
      volume24h: "$234M",
      profileImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=64&h=64&fit=crop&crop=face",
      description: "Decentralized exchange for stablecoins. Efficient stablecoin trading with low slippage.",
      socialLinks: {
        twitter: "https://twitter.com/CurveFinance",
        telegram: "https://t.me/curvefi",
        website: "https://curve.fi"
      }
    },
    {
      id: 10,
      name: "Balancer",
      cashtag: "$BAL",
      price: "$4.23",
      change24h: "+14.7%",
      marketCap: "$456M",
      volume24h: "$89M",
      profileImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=64&h=64&fit=crop&crop=face",
      description: "Automated portfolio manager and DEX. Customizable liquidity pools and trading.",
      socialLinks: {
        twitter: "https://twitter.com/BalancerLabs",
        telegram: "https://t.me/balancer",
        website: "https://balancer.fi"
      }
    },
    {
      id: 11,
      name: "Yearn Finance",
      cashtag: "$YFI",
      price: "$8,234",
      change24h: "+22.1%",
      marketCap: "$234M",
      volume24h: "$67M",
      profileImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=64&h=64&fit=crop&crop=face",
      description: "DeFi yield aggregator. Automatically optimize yield farming strategies.",
      socialLinks: {
        twitter: "https://twitter.com/iearnfinance",
        telegram: "https://t.me/yearnfinance",
        website: "https://yearn.finance"
      }
    },
    {
      id: 12,
      name: "MakerDAO",
      cashtag: "$MKR",
      price: "$1,234",
      change24h: "+11.5%",
      marketCap: "$1.2B",
      volume24h: "$45M",
      profileImage: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=64&h=64&fit=crop&crop=face",
      description: "Decentralized autonomous organization. Creator of the DAI stablecoin.",
      socialLinks: {
        twitter: "https://twitter.com/MakerDAO",
        telegram: "https://t.me/makerdao",
        website: "https://makerdao.com"
      }
    },
    {
      id: 13,
      name: "SushiSwap",
      cashtag: "$SUSHI",
      price: "$1.45",
      change24h: "+18.9%",
      marketCap: "$89M",
      volume24h: "$23M",
      profileImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=64&h=64&fit=crop&crop=face",
      description: "Decentralized exchange and yield farming protocol. Community-driven DeFi platform.",
      socialLinks: {
        twitter: "https://twitter.com/SushiSwap",
        telegram: "https://t.me/sushiswap",
        website: "https://sushi.com"
      }
    },
    {
      id: 14,
      name: "1inch",
      cashtag: "$1INCH",
      price: "$0.67",
      change24h: "+9.2%",
      marketCap: "$67M",
      volume24h: "$12M",
      profileImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop&crop=face",
      description: "DEX aggregator. Find the best trading routes across multiple exchanges.",
      socialLinks: {
        twitter: "https://twitter.com/1inch",
        telegram: "https://t.me/OneInchNetwork",
        website: "https://1inch.io"
      }
    },
    {
      id: 15,
      name: "PancakeSwap",
      cashtag: "$CAKE",
      price: "$2.34",
      change24h: "+25.6%",
      marketCap: "$45M",
      volume24h: "$8M",
      profileImage: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=64&h=64&fit=crop&crop=face",
      description: "Decentralized exchange on BNB Chain. Trade, farm, and earn with CAKE.",
      socialLinks: {
        twitter: "https://twitter.com/pancakeswap",
        telegram: "https://t.me/pancakeswap",
        website: "https://pancakeswap.finance"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900">
      {/* Header */}
      <div className="relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-red-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-slate-400/80 tracking-wider font-medium">DeFi & Infrastructure</p>
            </div>
            
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${montserrat.className} text-slate-200`}>
              Infrastructure
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300/90 max-w-5xl mx-auto font-light leading-relaxed">
              Discover the leading DeFi protocols and blockchain infrastructure projects
            </p>
          </div>
        </div>
      </div>

      {/* Infrastructure Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructure.map((project) => (
            <Link href={`/projects/infrastructure/${project.name.toLowerCase().replace(/\s+/g, '-')}`} key={project.id} className="group relative">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-orange-400/20 p-6 group-hover:border-orange-400/40 group-hover:bg-gradient-to-br group-hover:from-black/70 group-hover:to-black/50 transition-all duration-500 group-hover:scale-[1.02]">
                
                {/* Header with profile and basic info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img 
                      src={project.profileImage} 
                      alt={project.name}
                      className="w-16 h-16 rounded-xl object-cover border-2 border-orange-400/30 group-hover:border-orange-400/50 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className={`text-lg font-bold ${montserrat.className} text-slate-200 group-hover:text-white transition-colors duration-300`}>
                        {project.name}
                      </h3>
                      <span className="text-sm text-orange-400 font-mono bg-orange-400/10 px-2 py-1 rounded-md">
                        {project.cashtag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Price and stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-slate-400/10">
                    <div className="text-sm text-slate-400 mb-1">Price</div>
                    <div className="text-lg font-bold text-slate-200">{project.price}</div>
                    <div className={`text-sm font-medium ${project.change24h.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {project.change24h}
                    </div>
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-slate-400/10">
                    <div className="text-sm text-slate-400 mb-1">Market Cap</div>
                    <div className="text-lg font-bold text-slate-200">{project.marketCap}</div>
                    <div className="text-sm text-slate-400">Vol: {project.volume24h}</div>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <a 
                      href={project.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href={project.socialLinks.telegram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                    <a 
                      href={project.socialLinks.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 bg-gradient-to-r from-orange-400/20 to-red-400/20 hover:from-orange-400/30 hover:to-red-400/30 border border-orange-400/30 hover:border-orange-400/50 rounded-lg px-3 py-2 text-sm text-slate-200 hover:text-white transition-all duration-200">
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