import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function LeaderboardPage() {
  // Redirect to home page - page not accessible yet
  redirect('/');
  // Sample leaderboard data
  const leaderboard = [
    {
      id: 1,
      rank: 1,
      username: "CryptoWhale",
      handle: "@cryptowhale",
      points: 15420,
      tweets: 89,
      followers: "125K",
      profileImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=64&h=64&fit=crop&crop=face",
      description: "Top crypto influencer and early BlockBased adopter. Sharing insights daily!",
      badges: ["Verified", "Top Contributor"],
      socialLinks: {
        twitter: "https://twitter.com/cryptowhale",
        telegram: "https://t.me/cryptowhale",
        website: "https://cryptowhale.com"
      }
    },
    {
      id: 2,
      rank: 2,
      username: "DeFiQueen",
      handle: "@defiqueen",
      points: 12890,
      tweets: 67,
      followers: "89K",
      profileImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=64&h=64&fit=crop&crop=face",
      description: "DeFi enthusiast and BlockBased community leader. Building the future of finance!",
      badges: ["Verified", "Community Leader"],
      socialLinks: {
        twitter: "https://twitter.com/defiqueen",
        telegram: "https://t.me/defiqueen",
        website: "https://defiqueen.com"
      }
    },
    {
      id: 3,
      rank: 3,
      username: "MemeLord",
      handle: "@memelord",
      points: 11230,
      tweets: 156,
      followers: "234K",
      profileImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop&crop=face",
      description: "Meme coin expert and viral content creator. Making crypto fun and accessible!",
      badges: ["Verified", "Content Creator"],
      socialLinks: {
        twitter: "https://twitter.com/memelord",
        telegram: "https://t.me/memelord",
        website: "https://memelord.com"
      }
    },
    {
      id: 4,
      rank: 4,
      username: "TechGuru",
      handle: "@techguru",
      points: 9870,
      tweets: 45,
      followers: "67K",
      profileImage: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=64&h=64&fit=crop&crop=face",
      description: "Blockchain developer and technical analyst. Deep dives into crypto fundamentals.",
      badges: ["Verified", "Developer"],
      socialLinks: {
        twitter: "https://twitter.com/techguru",
        telegram: "https://t.me/techguru",
        website: "https://techguru.com"
      }
    },
    {
      id: 5,
      rank: 5,
      username: "TradingPro",
      handle: "@tradingpro",
      points: 8760,
      tweets: 78,
      followers: "156K",
      profileImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=64&h=64&fit=crop&crop=face",
      description: "Professional trader and market analyst. Sharing profitable trading strategies.",
      badges: ["Verified", "Trader"],
      socialLinks: {
        twitter: "https://twitter.com/tradingpro",
        telegram: "https://t.me/tradingpro",
        website: "https://tradingpro.com"
      }
    },
    {
      id: 6,
      rank: 6,
      username: "CryptoArtist",
      handle: "@cryptoartist",
      points: 7650,
      tweets: 92,
      followers: "45K",
      profileImage: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=64&h=64&fit=crop&crop=face",
      description: "NFT artist and digital creator. Bridging art and blockchain technology.",
      badges: ["Verified", "Artist"],
      socialLinks: {
        twitter: "https://twitter.com/cryptoartist",
        telegram: "https://t.me/cryptoartist",
        website: "https://cryptoartist.com"
      }
    },
    {
      id: 7,
      rank: 7,
      username: "BlockchainBabe",
      handle: "@blockchainbabe",
      points: 6540,
      tweets: 123,
      followers: "78K",
      profileImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=64&h=64&fit=crop&crop=face",
      description: "Crypto educator and community builder. Making blockchain accessible to everyone.",
      badges: ["Verified", "Educator"],
      socialLinks: {
        twitter: "https://twitter.com/blockchainbabe",
        telegram: "https://t.me/blockchainbabe",
        website: "https://blockchainbabe.com"
      }
    },
    {
      id: 8,
      rank: 8,
      username: "DegenApe",
      handle: "@degenape",
      points: 5430,
      tweets: 234,
      followers: "112K",
      profileImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=face",
      description: "High-risk, high-reward trader. Living life on the edge of DeFi!",
      badges: ["Verified", "Degen"],
      socialLinks: {
        twitter: "https://twitter.com/degenape",
        telegram: "https://t.me/degenape",
        website: "https://degenape.com"
      }
    },
    {
      id: 9,
      rank: 9,
      username: "StableCoinKing",
      handle: "@stablecoinking",
      points: 4320,
      tweets: 56,
      followers: "34K",
      profileImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=64&h=64&fit=crop&crop=face",
      description: "Stablecoin expert and yield farming specialist. Conservative DeFi strategies.",
      badges: ["Verified", "Stablecoin Expert"],
      socialLinks: {
        twitter: "https://twitter.com/stablecoinking",
        telegram: "https://t.me/stablecoinking",
        website: "https://stablecoinking.com"
      }
    },
    {
      id: 10,
      rank: 10,
      username: "CryptoNewbie",
      handle: "@cryptonewbie",
      points: 3210,
      tweets: 89,
      followers: "23K",
      profileImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=64&h=64&fit=crop&crop=face",
      description: "New to crypto but learning fast! Sharing my journey and discoveries.",
      badges: ["Rising Star", "Learner"],
      socialLinks: {
        twitter: "https://twitter.com/cryptonewbie",
        telegram: "https://t.me/cryptonewbie",
        website: "https://cryptonewbie.com"
      }
    },
    {
      id: 11,
      rank: 11,
      username: "MiningMaster",
      handle: "@miningmaster",
      points: 2980,
      tweets: 34,
      followers: "19K",
      profileImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=64&h=64&fit=crop&crop=face",
      description: "Crypto mining expert and hardware specialist. Building mining rigs and sharing knowledge.",
      badges: ["Verified", "Miner"],
      socialLinks: {
        twitter: "https://twitter.com/miningmaster",
        telegram: "https://t.me/miningmaster",
        website: "https://miningmaster.com"
      }
    },
    {
      id: 12,
      rank: 12,
      username: "Web3Wizard",
      handle: "@web3wizard",
      points: 2650,
      tweets: 67,
      followers: "28K",
      profileImage: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=64&h=64&fit=crop&crop=face",
      description: "Web3 developer and smart contract expert. Building the decentralized future.",
      badges: ["Verified", "Developer"],
      socialLinks: {
        twitter: "https://twitter.com/web3wizard",
        telegram: "https://t.me/web3wizard",
        website: "https://web3wizard.com"
      }
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 ${montserrat.className}`}>
      {/* Hero Section */}
      <div className="relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-slate-400/80 tracking-wider font-medium">Community Competition</p>
            </div>
            
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${montserrat.className} text-slate-200`}>
              Leaderboard
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300/90 max-w-3xl mx-auto font-light leading-relaxed">
              Compete with the best crypto influencers and earn rewards for your social media engagement
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-l from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            {/* Section Badge */}
            <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-blue-400/20 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-slate-300/90 tracking-wider font-medium">How to Earn Points</span>
            </div>
            
            <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${montserrat.className} text-slate-200 drop-shadow-lg`}>
              Get Rewarded
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300/95 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              Get rewarded for promoting BlockBased and building the crypto community
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-blue-400/20 p-8 group-hover:border-blue-400/40 group-hover:bg-gradient-to-br group-hover:from-black/70 group-hover:to-black/50 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-400/25">
                    <span className="text-2xl">🐦</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className={`text-xl font-bold ${montserrat.className} text-slate-200 group-hover:text-white transition-colors duration-300`}>
                      Tweet About BlockBased
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      Share your thoughts, reviews, or experiences with BlockBased on Twitter
                    </p>
                    <div className="text-2xl font-bold text-blue-400">+100 points</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-green-400/20 p-8 group-hover:border-green-400/40 group-hover:bg-gradient-to-br group-hover:from-black/70 group-hover:to-black/50 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-green-400/25">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className={`text-xl font-bold ${montserrat.className} text-slate-200 group-hover:text-white transition-colors duration-300`}>
                      Engage with Community
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      Like, retweet, and comment on BlockBased-related content
                    </p>
                    <div className="text-2xl font-bold text-green-400">+25 points</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-8 group-hover:border-purple-400/40 group-hover:bg-gradient-to-br group-hover:from-black/70 group-hover:to-black/50 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-purple-400/25">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className={`text-xl font-bold ${montserrat.className} text-slate-200 group-hover:text-white transition-colors duration-300`}>
                      Create Viral Content
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      Create memes, videos, or threads that go viral
                    </p>
                    <div className="text-2xl font-bold text-purple-400">+500 points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${montserrat.className} text-slate-200 drop-shadow-lg`}>
            Top Performers
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300/95 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            See who&apos;s leading the BlockBased community
          </p>
        </div>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {leaderboard.map((user) => (
            <Link 
              href={`/profile/${user.handle.replace('@', '')}`} 
              key={user.id}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-blue-400/20 p-6 group-hover:border-blue-400/40 group-hover:bg-gradient-to-br group-hover:from-black/70 group-hover:to-black/50 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="flex items-center gap-6">
                  {/* Rank */}
                  <div className="flex-shrink-0">
                    {user.rank <= 3 ? (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                        user.rank === 1 ? 'bg-yellow-500/20 text-yellow-400 border-2 border-yellow-400' :
                        user.rank === 2 ? 'bg-slate-400/20 text-slate-300 border-2 border-slate-400' :
                        'bg-orange-500/20 text-orange-400 border-2 border-orange-400'
                      }`}>
                        {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-slate-400/10 flex items-center justify-center text-xl font-bold text-slate-200 border border-slate-400/20">
                        #{user.rank}
                      </div>
                    )}
                  </div>

                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <img 
                      src={user.profileImage} 
                      alt={user.username}
                      className="w-16 h-16 rounded-xl object-cover border-2 border-blue-400/30 group-hover:border-blue-400/50 transition-colors duration-300"
                    />
                  </div>

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className={`text-lg font-bold ${montserrat.className} text-slate-200 group-hover:text-white transition-colors duration-300`}>
                        {user.username}
                      </h3>
                      <span className="text-slate-400">{user.handle}</span>
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-3">
                      {user.description}
                    </p>
                    <div className="flex items-center gap-4">
                      {user.badges.map((badge, badgeIndex) => (
                        <span 
                          key={badgeIndex}
                          className="px-2 py-1 text-xs font-medium bg-blue-400/10 text-blue-300 rounded-md border border-blue-400/20"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 text-sm mt-2">
                      <span className="text-slate-400">
                        <span className="text-slate-200 font-medium">{user.tweets}</span> tweets
                      </span>
                      <span className="text-slate-400">
                        <span className="text-slate-200 font-medium">{user.followers}</span> followers
                      </span>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="flex-shrink-0 text-right">
                    <div className="text-3xl font-bold text-slate-200 mb-1">
                      {user.points.toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-400">points</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 text-slate-400 group-hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-l from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 ${montserrat.className} text-slate-200 drop-shadow-lg`}>
            Ready to Join the Competition?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300/95 mb-8 sm:mb-10 font-light leading-relaxed drop-shadow-md">
            Start earning points today and climb the BlockBased leaderboard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/25">
              Connect Twitter
            </button>
            <button className="bg-black/30 backdrop-blur-sm hover:bg-black/50 text-slate-200 hover:text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-2xl text-lg border border-slate-400/20 hover:border-slate-400/40 transition-all duration-300 hover:scale-105">
              View Rules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 