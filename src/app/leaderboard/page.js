"use client";

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import Header from "../components/header.js";
import leaderboard from './data';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function LeaderboardPage() {
  // Sort leaderboard by points descending
  const sorted = [...leaderboard].sort((a, b) => b.points - a.points);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/85 via-black/75 to-black/85">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-green-400/20 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-green-300/80 tracking-wider font-medium">Community Leaderboard</p>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${montserrat.className} text-slate-200`}>
              BlockBased Leaderboard
            </h1>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto font-light leading-relaxed mb-4">
              Your interactions with BlockBased will earn you points, the top 100 will receive ecosystem rewards.
            </p>
            <div className="text-green-400 font-semibold text-lg">Top community shillers and supporters</div>
          </div>

          {/* Participation Rules Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* How to Earn Points */}
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-green-400/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className={`text-2xl font-bold ${montserrat.className} text-slate-200`}>
                  How to Earn Points
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${montserrat.className} text-slate-200`}>
                      Engage with our posts
                    </h3>
                    <p className="text-slate-300 text-sm">Like, Share and Comment on BlockBased content</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.828 11H20a2 2 0 010 4H7.828l5.586 5.586a2 2 0 11-2.828 2.828L1.414 12l9.172-9.172a2 2 0 012.828 2.828L7.828 11z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${montserrat.className} text-slate-200`}>
                      Mention us to others
                    </h3>
                    <p className="text-slate-300 text-sm">Tag BlockBased when talking to other people</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${montserrat.className} text-slate-200`}>
                      Create content
                    </h3>
                    <p className="text-slate-300 text-sm">Memes, Threads, and other creative content</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${montserrat.className} text-slate-200`}>
                      Spread the word
                    </h3>
                    <p className="text-slate-300 text-sm">Tell meme projects about BlockBased</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Update Schedule & Rewards */}
            <div className="space-y-6">
              {/* Update Schedule */}
              <div className="bg-gradient-to-br from-blue-400/10 to-purple-400/10 backdrop-blur-xl rounded-2xl border border-blue-400/30 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${montserrat.className} text-slate-200`}>
                    Update Schedule
                  </h3>
                </div>
                <p className="text-slate-300">
                  The Leaderboard will be updated every <span className="text-blue-400 font-semibold">2 hours</span>
                </p>
              </div>

              {/* Points System */}
              <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 backdrop-blur-xl rounded-2xl border border-green-400/30 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${montserrat.className} text-slate-200`}>
                    Points System
                  </h3>
                </div>
                <p className="text-slate-300">
                  Each engagement/mention = <span className="text-green-400 font-semibold">5 points</span>
                </p>
              </div>

              {/* Rewards */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 backdrop-blur-xl rounded-2xl border border-yellow-400/30 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${montserrat.className} text-slate-200`}>
                    Rewards
                  </h3>
                </div>
                <p className="text-slate-300">
                  The top <span className="text-yellow-400 font-semibold">100</span> will receive ecosystem rewards
                </p>
              </div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-green-400/20 p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-3xl font-bold ${montserrat.className} text-slate-200`}>
                Current Rankings
              </h2>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-400">Live updates every 2hrs</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-green-400/20">
                    <th className="py-4 px-6 text-left text-green-400 font-semibold text-lg">Rank</th>
                    <th className="py-4 px-6 text-left text-green-400 font-semibold text-lg">Name</th>
                    <th className="py-4 px-6 text-left text-green-400 font-semibold text-lg">X Username</th>
                    <th className="py-4 px-6 text-left text-green-400 font-semibold text-lg">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((user, i) => (
                    <tr key={user.xUsername} className="border-b border-slate-700/30 hover:bg-green-400/5 transition-all duration-200">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          {i < 3 ? (
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                              i === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                              i === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                              'bg-gradient-to-r from-amber-600 to-amber-700'
                            }`}>
                              {i + 1}
                            </div>
                          ) : (
                            <span className="text-xl font-bold text-slate-300">{i + 1}</span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-slate-200 font-semibold text-lg">{user.name}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-green-200 font-mono text-lg">{user.xUsername}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-green-400 font-bold text-xl">{user.points}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {sorted.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${montserrat.className} text-slate-200`}>
                  No participants yet
                </h3>
                <p className="text-slate-400">Be the first to start earning points!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 