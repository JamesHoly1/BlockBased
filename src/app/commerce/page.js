import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function CommercePage() {
  // Sample commerce data
  const businesses = [
    {
      id: 1,
      name: "Coinbase Commerce",
      cashtag: "$COIN",
      price: "$145.67",
      change24h: "+8.3%",
      marketCap: "$32.1B",
      volume24h: "$890M",
      profileImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=64&h=64&fit=crop&crop=face",
      description: "Leading cryptocurrency exchange and payment processor. Making crypto accessible to everyone.",
      category: "Exchange",
      socialLinks: {
        twitter: "https://twitter.com/coinbase",
        telegram: "https://t.me/coinbase",
        website: "https://commerce.coinbase.com"
      }
    },
    {
      id: 2,
      name: "Shopify",
      cashtag: "$SHOP",
      price: "$67.89",
      change24h: "+12.7%",
      marketCap: "$89.4B",
      volume24h: "$1.2B",
      profileImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=64&h=64&fit=crop&crop=face",
      description: "E-commerce platform with integrated crypto payments. Powering millions of online stores.",
      category: "E-commerce",
      socialLinks: {
        twitter: "https://twitter.com/shopify",
        telegram: "https://t.me/shopify",
        website: "https://shopify.com"
      }
    },
    {
      id: 3,
      name: "Stripe",
      cashtag: "Private",
      price: "N/A",
      change24h: "N/A",
      marketCap: "$95B",
      volume24h: "$2.1B",
      profileImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop&crop=face",
      description: "Payment processing platform with crypto integration. Enabling businesses to accept digital payments.",
      category: "Payments",
      socialLinks: {
        twitter: "https://twitter.com/stripe",
        telegram: "https://t.me/stripe",
        website: "https://stripe.com"
      }
    },
    {
      id: 4,
      name: "Square",
      cashtag: "$SQ",
      price: "$78.45",
      change24h: "+5.9%",
      marketCap: "$45.2B",
      volume24h: "$567M",
      profileImage: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=64&h=64&fit=crop&crop=face",
      description: "Financial services and mobile payment company. Bringing crypto to small businesses.",
      category: "Payments",
      socialLinks: {
        twitter: "https://twitter.com/square",
        telegram: "https://t.me/square",
        website: "https://square.com"
      }
    },
    {
      id: 5,
      name: "PayPal",
      cashtag: "$PYPL",
      price: "$62.34",
      change24h: "+3.2%",
      marketCap: "$67.8B",
      volume24h: "$789M",
      profileImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=64&h=64&fit=crop&crop=face",
      description: "Digital payments platform with crypto support. Trusted by millions worldwide.",
      category: "Payments",
      socialLinks: {
        twitter: "https://twitter.com/paypal",
        telegram: "https://t.me/paypal",
        website: "https://paypal.com"
      }
    },
    {
      id: 6,
      name: "Overstock",
      cashtag: "$OSTK",
      price: "$23.67",
      change24h: "+15.4%",
      marketCap: "$1.2B",
      volume24h: "$45M",
      profileImage: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=64&h=64&fit=crop&crop=face",
      description: "Online retailer accepting cryptocurrency payments. Early adopter of crypto commerce.",
      category: "Retail",
      socialLinks: {
        twitter: "https://twitter.com/overstock",
        telegram: "https://t.me/overstock",
        website: "https://overstock.com"
      }
    },
    {
      id: 7,
      name: "Newegg",
      cashtag: "$NEGG",
      price: "$1.23",
      change24h: "+8.7%",
      marketCap: "$890M",
      volume24h: "$23M",
      profileImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=64&h=64&fit=crop&crop=face",
      description: "Electronics retailer with crypto payment options. Tech products for crypto enthusiasts.",
      category: "Retail",
      socialLinks: {
        twitter: "https://twitter.com/newegg",
        telegram: "https://t.me/newegg",
        website: "https://newegg.com"
      }
    },
    {
      id: 8,
      name: "BitPay",
      cashtag: "Private",
      price: "N/A",
      change24h: "N/A",
      marketCap: "$2.1B",
      volume24h: "$123M",
      profileImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=face",
      description: "Bitcoin payment service provider. Enabling businesses to accept crypto payments.",
      category: "Payments",
      socialLinks: {
        twitter: "https://twitter.com/bitpay",
        telegram: "https://t.me/bitpay",
        website: "https://bitpay.com"
      }
    },
    {
      id: 9,
      name: "Flexa",
      cashtag: "Private",
      price: "N/A",
      change24h: "N/A",
      marketCap: "$890M",
      volume24h: "$67M",
      profileImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=64&h=64&fit=crop&crop=face",
      description: "Digital payment network for crypto. Instant, fraud-free payments at existing merchants.",
      category: "Payments",
      socialLinks: {
        twitter: "https://twitter.com/flexa",
        telegram: "https://t.me/flexa",
        website: "https://flexa.network"
      }
    },
    {
      id: 10,
      name: "Crypto.com",
      cashtag: "$CRO",
      price: "$0.089",
      change24h: "+12.3%",
      marketCap: "$2.3B",
      volume24h: "$234M",
      profileImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=64&h=64&fit=crop&crop=face",
      description: "Cryptocurrency platform with payment cards and merchant services. Crypto for everyday use.",
      category: "Exchange",
      socialLinks: {
        twitter: "https://twitter.com/cryptocom",
        telegram: "https://t.me/cryptocom",
        website: "https://crypto.com"
      }
    },
    {
      id: 11,
      name: "Binance",
      cashtag: "$BNB",
      price: "$312.45",
      change24h: "+7.8%",
      marketCap: "$48.9B",
      volume24h: "$1.8B",
      profileImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=64&h=64&fit=crop&crop=face",
      description: "World's largest cryptocurrency exchange. Comprehensive crypto services and merchant solutions.",
      category: "Exchange",
      socialLinks: {
        twitter: "https://twitter.com/binance",
        telegram: "https://t.me/binance",
        website: "https://binance.com"
      }
    },
    {
      id: 12,
      name: "Kraken",
      cashtag: "Private",
      price: "N/A",
      change24h: "N/A",
      marketCap: "$10.2B",
      volume24h: "$456M",
      profileImage: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=64&h=64&fit=crop&crop=face",
      description: "Secure cryptocurrency exchange with institutional services. Trusted by millions of users.",
      category: "Exchange",
      socialLinks: {
        twitter: "https://twitter.com/krakenfx",
        telegram: "https://t.me/kraken",
        website: "https://kraken.com"
      }
    },
    {
      id: 13,
      name: "Gemini",
      cashtag: "Private",
      price: "N/A",
      change24h: "N/A",
      marketCap: "$7.8B",
      volume24h: "$234M",
      profileImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=64&h=64&fit=crop&crop=face",
      description: "Regulated cryptocurrency exchange and custodian. Institutional-grade crypto services.",
      category: "Exchange",
      socialLinks: {
        twitter: "https://twitter.com/gemini",
        telegram: "https://t.me/gemini",
        website: "https://gemini.com"
      }
    },
    {
      id: 14,
      name: "FTX",
      cashtag: "$FTT",
      price: "$0.00",
      change24h: "-100%",
      marketCap: "$0",
      volume24h: "$0",
      profileImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop&crop=face",
      description: "Former cryptocurrency exchange. Lessons learned in crypto business management.",
      category: "Exchange",
      socialLinks: {
        twitter: "https://twitter.com/ftx",
        telegram: "https://t.me/ftx",
        website: "https://ftx.com"
      }
    },
    {
      id: 15,
      name: "Coinbase Pro",
      cashtag: "$COIN",
      price: "$145.67",
      change24h: "+8.3%",
      marketCap: "$32.1B",
      volume24h: "$890M",
      profileImage: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=64&h=64&fit=crop&crop=face",
      description: "Advanced trading platform for institutional investors. Professional crypto trading solutions.",
      category: "Exchange",
      socialLinks: {
        twitter: "https://twitter.com/coinbasepro",
        telegram: "https://t.me/coinbasepro",
        website: "https://pro.coinbase.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-teal-400/30 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-slate-600 tracking-wider font-medium">Crypto-Friendly Businesses</p>
            </div>
            
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${montserrat.className} text-slate-800`}>
              Commerce
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed">
              Discover businesses and services that embrace cryptocurrency payments
            </p>
          </div>
        </div>
      </div>

      {/* Commerce Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <div key={business.id} className="group relative">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-teal-400/20 p-6 group-hover:border-teal-400/40 group-hover:bg-white/90 group-hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] shadow-lg">
                
                {/* Header with profile and basic info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img 
                      src={business.profileImage} 
                      alt={business.name}
                      className="w-16 h-16 rounded-xl object-cover border-2 border-teal-400/30 group-hover:border-teal-400/50 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className={`text-lg font-bold ${montserrat.className} text-slate-800 group-hover:text-slate-900 transition-colors duration-300`}>
                        {business.name}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                        {business.category}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {business.description}
                    </p>
                  </div>
                </div>

                {/* Social links and Share button */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <a 
                      href={business.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href={business.socialLinks.telegram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                    <a 
                      href={business.socialLinks.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </a>
                  </div>
                  
                  <button className="flex items-center space-x-1 bg-gradient-to-r from-slate-400/20 to-slate-300/20 hover:from-slate-400/30 hover:to-slate-300/30 border border-slate-400/30 hover:border-slate-400/50 rounded-lg px-3 py-2 text-sm text-slate-700 hover:text-slate-900 transition-all duration-200 shadow-sm">
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
  );
} 