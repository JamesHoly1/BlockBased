import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
});

export default function BillboardsPage() {
  // Redirect to home page - page not accessible yet
  redirect('/');
  // Sample data for 15 crypto billboards
  const billboards = [
    {
      id: 1,
      name: "Ethereum",
      cashtag: "$ETH",
      price: "$2,847.32",
      votes: 1247,
      profileImage: "🔷",
      post: "The future of decentralized finance is here! Ethereum continues to lead the charge with groundbreaking DeFi protocols and NFT innovations. Layer 2 solutions are scaling us to new heights! 🚀 #DeFi #NFTs #Ethereum"
    },
    {
      id: 2,
      name: "Solana",
      cashtag: "$SOL",
      price: "$98.45",
      votes: 892,
      profileImage: "☀️",
      post: "Speed and efficiency at its finest! Solana's lightning-fast transactions and low fees are revolutionizing the crypto space. The ecosystem is growing stronger every day! ⚡ #Solana #Fast #Efficient"
    },
    {
      id: 3,
      name: "Bitcoin",
      cashtag: "$BTC",
      price: "$43,567.89",
      votes: 2156,
      profileImage: "₿",
      post: "Digital gold continues to prove its worth! Bitcoin's store of value proposition gets stronger with each passing day. The king of crypto reigns supreme! 👑 #Bitcoin #StoreOfValue #DigitalGold"
    },
    {
      id: 4,
      name: "Uniswap",
      cashtag: "$UNI",
      price: "$7.23",
      votes: 567,
      profileImage: "🦄",
      post: "Decentralized trading at its best! Uniswap's automated market maker is changing how we think about liquidity and trading. The future of DEX is now! 💧 #Uniswap #DEX #Trading"
    },
    {
      id: 5,
      name: "Polygon",
      cashtag: "$MATIC",
      price: "$0.89",
      votes: 734,
      profileImage: "🔺",
      post: "Scaling Ethereum to new heights! Polygon's Layer 2 solutions are making DeFi accessible to everyone with lightning-fast transactions and minimal fees! 🚀 #Polygon #Scaling #Ethereum"
    },
    {
      id: 6,
      name: "Chainlink",
      cashtag: "$LINK",
      price: "$14.56",
      votes: 445,
      profileImage: "🔗",
      post: "Connecting the real world to blockchain! Chainlink's oracle network is the backbone of DeFi, providing reliable data feeds that power the entire ecosystem! 🌐 #Chainlink #Oracle #Data"
    },
    {
      id: 7,
      name: "Aave",
      cashtag: "$AAVE",
      price: "$245.67",
      votes: 378,
      profileImage: "👻",
      post: "Lending and borrowing reimagined! Aave's innovative DeFi protocols are democratizing access to financial services. The future of lending is decentralized! 💰 #Aave #Lending #DeFi"
    },
    {
      id: 8,
      name: "Cardano",
      cashtag: "$ADA",
      price: "$0.52",
      votes: 923,
      profileImage: "🟣",
      post: "Research-driven blockchain innovation! Cardano's peer-reviewed approach is setting new standards for blockchain development and sustainability! 📚 #Cardano #Research #Innovation"
    },
    {
      id: 9,
      name: "Polkadot",
      cashtag: "$DOT",
      price: "$6.78",
      votes: 612,
      profileImage: "🔴",
      post: "Interoperability is the future! Polkadot's multi-chain network is connecting blockchains and enabling seamless cross-chain communication! 🌉 #Polkadot #Interoperability #MultiChain"
    },
    {
      id: 10,
      name: "Avalanche",
      cashtag: "$AVAX",
      price: "$23.45",
      votes: 489,
      profileImage: "❄️",
      post: "Speed meets security! Avalanche's consensus mechanism delivers lightning-fast finality while maintaining robust security. The perfect balance! ⚡ #Avalanche #Speed #Security"
    },
    {
      id: 11,
      name: "Cosmos",
      cashtag: "$ATOM",
      price: "$8.92",
      votes: 356,
      profileImage: "🌌",
      post: "The internet of blockchains! Cosmos is building the infrastructure for a truly interconnected blockchain ecosystem. The future is interconnected! 🌐 #Cosmos #Interoperability #Blockchain"
    },
    {
      id: 12,
      name: "Terra",
      cashtag: "$LUNA",
      price: "$67.34",
      votes: 789,
      profileImage: "🌍",
      post: "Algorithmic stablecoins are the future! Terra's innovative approach to stablecoins is revolutionizing how we think about digital money! 💎 #Terra #Stablecoins #Algorithmic"
    },
    {
      id: 13,
      name: "Algorand",
      cashtag: "$ALGO",
      price: "$1.23",
      votes: 423,
      profileImage: "🔵",
      post: "Pure proof of stake excellence! Algorand's innovative consensus mechanism delivers security, scalability, and decentralization without compromise! 🎯 #Algorand #PoS #Innovation"
    },
    {
      id: 14,
      name: "Tezos",
      cashtag: "$XTZ",
      price: "$3.45",
      votes: 298,
      profileImage: "🍞",
      post: "Self-amending blockchain! Tezos' on-chain governance allows the protocol to evolve and improve over time. The future of blockchain governance! 🗳️ #Tezos #Governance #Evolution"
    },
    {
      id: 15,
      name: "Filecoin",
      cashtag: "$FIL",
      price: "$5.67",
      votes: 345,
      profileImage: "📁",
      post: "Decentralized storage revolution! Filecoin is building the foundation for a decentralized web where data is stored securely and efficiently! 💾 #Filecoin #Storage #Decentralized"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[url('/blockbg7.png')] bg-cover bg-center bg-fixed">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />
      
      <div className="relative pt-16">
        {/* Crypto Billboards Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {billboards.map((billboard) => (
                <div key={billboard.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl rounded-xl border border-slate-400/20 p-6 group-hover:border-blue-400/40 group-hover:bg-gradient-to-br group-hover:from-black/60 group-hover:to-black/40 transition-all duration-500 group-hover:scale-[1.02]">
                    {/* Header with profile image, name, cashtag, price, and votes */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-xl">
                          {billboard.profileImage}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-200">{billboard.name}</h3>
                          <p className="text-blue-400 font-medium">{billboard.cashtag}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-200">{billboard.price}</div>
                        <div className="flex items-center space-x-1 text-sm text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>{billboard.votes.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Post content */}
                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                      <p className="text-slate-300 text-sm leading-relaxed">{billboard.post}</p>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>Vote</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-slate-400/10 hover:bg-slate-400/20 rounded-lg text-slate-300 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 