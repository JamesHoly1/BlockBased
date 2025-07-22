"use client";

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import Header from "../components/header.js";
import leaderboard from './data';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function LeaderboardPage() {
  const sorted = [...leaderboard].sort((a, b) => b.points - a.points);
  const top2and3 = sorted.slice(1, 3);
  const rest = sorted.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/85 via-black/75 to-black/85">
      <Header />
      <section className="pt-30 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${montserrat.className} text-green-300 drop-shadow-xl`}>
            Leaderboard
          </h1>
          <p className="text-lg sm:text-xl text-slate-300/90 max-w-2xl mx-auto font-light leading-relaxed mb-4">
            Your interactions with us will earn you points. The top 100 will receive ecosystem rewards.
          </p>
          <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-2 border border-green-400/20 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-300 tracking-wider font-medium">Top community shillers and supporters</span>
          </div>
        </div>

        {/* Rules & Rewards */}
        <div className="max-w-2xl mx-auto flex flex-col gap-8 mb-6">
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-green-400/20 p-6 flex flex-col justify-between">
            <h2 className={`text-2xl font-bold mb-4 ${montserrat.className} text-slate-200 flex items-center`}>
              <span className="mr-2">How to Earn Points</span>
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-green-400">5 points</span> — Engage with our posts (Like, Retweet, Comment)
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.828 11H20a2 2 0 010 4H7.828l5.586 5.586a2 2 0 11-2.828 2.828L1.414 12l9.172-9.172a2 2 0 012.828 2.828L7.828 11z" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-green-400">5 points</span> — Mention us to others (Tag the project)
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-green-400">20 points</span> — Create content (Memes, Threads, etc)
                </div>
              </li>
            </ul>
            <div className="mt-6 text-xs text-slate-400">
              Leaderboard updates every <span className="text-blue-400 font-semibold">4 hours</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 backdrop-blur-xl rounded-2xl border border-yellow-400/30 p-6 flex flex-col justify-between">
            <h2 className={`text-2xl font-bold mb-4 ${montserrat.className} text-yellow-300 flex items-center`}>
              <span className="mr-2">Rewards</span>
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402-2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </h2>
            <ul className="space-y-4 text-left mt-2">
              <li className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div><span className="text-yellow-400 font-semibold">Top 100</span> win exclusive rewards</div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>Access to any future airdrops, merch, and more</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Top 2 and 3 Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {top2and3.map((user, i) => (
            <div key={user.xUsername} className={`rounded-2xl p-6 flex flex-col items-center shadow-lg border-2 ${
              i === 0 ? 'bg-gradient-to-br from-gray-400/20 to-gray-700/10 border-gray-400' :
              'bg-gradient-to-br from-amber-700/20 to-amber-400/10 border-amber-600'
            }`}>
              <div className="mb-2">
                <span className={`inline-block w-12 h-12 rounded-full text-white font-bold text-2xl flex items-center justify-center ${
                  i === 0 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                  'bg-gradient-to-r from-amber-600 to-amber-700'
                }`}>
                  {i + 2}
                </span>
              </div>
              <div className="text-lg font-bold text-slate-200 mb-1">{user.name}</div>
              <div className="text-green-200 font-mono mb-1">{user.xUsername}</div>
              <div className="text-green-400 font-bold text-xl">{user.points} pts</div>
            </div>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-green-400/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold ${montserrat.className} text-green-300`}>
              Current Rankings
            </h2>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-400">Live updates every 4hrs</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-green-400/20">
                  <th className="py-2 px-4 text-green-400 text-lg">Rank</th>
                  <th className="py-2 px-4 text-green-400 text-lg">Name</th>
                  <th className="py-2 px-4 text-green-400 text-lg">X Username</th>
                  <th className="py-2 px-4 text-green-400 text-lg">Points</th>
                </tr>
              </thead>
              <tbody>
                {rest.map((user, i) => (
                  <tr key={user.xUsername} className="border-b border-slate-700/30 hover:bg-green-400/5 transition-all">
                    <td className="py-3 px-4 font-bold text-xl text-green-300">{i + 2}</td>
                    <td className="py-3 px-4 text-slate-200 font-semibold">{user.name}</td>
                    <td className="py-3 px-4 text-green-200 font-mono">{user.xUsername}</td>
                    <td className="py-3 px-4 text-green-400 font-bold text-lg">{user.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {rest.length === 0 && (
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
      </section>
    </div>
  );
} 