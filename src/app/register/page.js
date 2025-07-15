'use client';

import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Register() {
  const [socialFields, setSocialFields] = useState([{ platform: '', handle: '' }]);

  const addSocialField = () => {
    setSocialFields([...socialFields, { platform: '', handle: '' }]);
  };

  const removeSocialField = (index) => {
    setSocialFields(socialFields.filter((_, i) => i !== index));
  };

  return (
    <div className="relative min-h-screen bg-[url('/blockbg7.png')] bg-cover bg-center bg-fixed">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <main className="w-full max-w-2xl mx-auto py-12 sm:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className={`text-3xl sm:text-4xl font-semibold mb-4 ${montserrat.className}`}>
              Apply to be Listed
            </h1>
            <p className="text-slate-300/90 text-sm sm:text-base">
              Join our platform and get your project or business listed on BlockBased
            </p>
          </div>

          {/* Registration Form */}
          <form className="space-y-8 bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-400/20">
            <div className="space-y-6">
              {/* Project/Business Name */}
              <div>
                <label htmlFor="projectName" className="block text-sm font-medium text-slate-300 mb-2">
                  Project/Business Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  className="w-full px-4 py-3 bg-black/40 border border-slate-400/20 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/30 focus:border-transparent transition-all placeholder:text-slate-500"
                  placeholder="Enter your project name"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-4 py-3 bg-black/40 border border-slate-400/20 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/30 focus:border-transparent transition-all"
                >
                  <option value="">Select a category</option>
                  <option value="meme">Meme Project</option>
                  <option value="infrastructure">Infrastructure (L1/L2/DeFi)</option>
                  <option value="business">Crypto-Friendly Business</option>
                </select>
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-slate-300 mb-2">
                  Website
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-400">https://</span>
                  </div>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className="w-full pl-20 pr-4 py-3 bg-black/40 border border-slate-400/20 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/30 focus:border-transparent transition-all placeholder:text-slate-500"
                    placeholder="your-website.com"
                  />
                </div>
              </div>

              {/* Social Media */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Social Media
                </label>
                <div className="space-y-3">
                  {socialFields.map((field, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="flex-1 flex gap-3">
                        <select
                          name={`socialPlatform${index + 1}`}
                          className="w-1/3 px-4 py-3 bg-black/40 border border-slate-400/20 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/30 focus:border-transparent transition-all"
                        >
                          <option value="">Platform</option>
                          <option value="x">X (Twitter)</option>
                          <option value="telegram">Telegram</option>
                          <option value="discord">Discord</option>
                          <option value="instagram">Instagram</option>
                          <option value="tiktok">TikTok</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="flex-1 relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-slate-400">@</span>
                          </div>
                          <input
                            type="text"
                            name={`socialHandle${index + 1}`}
                            className="w-full pl-8 pr-4 py-3 bg-black/40 border border-slate-400/20 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/30 focus:border-transparent transition-all placeholder:text-slate-500"
                            placeholder="username"
                          />
                        </div>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeSocialField(index)}
                          className="p-3 text-slate-400 hover:text-slate-300 transition-colors"
                          title="Remove social media"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSocialField}
                    className="text-sm text-slate-400 hover:text-slate-300 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add another social media
                  </button>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="w-full px-4 py-3 bg-black/40 border border-slate-400/20 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/30 focus:border-transparent transition-all placeholder:text-slate-500 resize-none"
                  placeholder="Tell us about your project"
                />
              </div>

              {/* Contact Email */}
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-slate-300 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact"
                  name="contact"
                  className="w-full px-4 py-3 bg-black/40 border border-slate-400/20 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/30 focus:border-transparent transition-all placeholder:text-slate-500"
                  placeholder="Enter your contact email"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-400/20 to-slate-300/20 hover:from-slate-400/30 hover:to-slate-300/30 text-slate-300 rounded-lg border border-slate-400/20 transition-all duration-300 font-medium"
              >
                Submit Application
              </button>
              <Link
                href="/"
                className="flex-1 px-6 py-3 text-center text-slate-300 hover:text-slate-200 rounded-lg border border-slate-400/20 hover:border-slate-400/30 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
} 