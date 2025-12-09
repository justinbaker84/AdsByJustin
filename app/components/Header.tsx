'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="text-3xl font-bold text-black hover:text-blue-600 transition cursor-pointer">Ads By Justin</div>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Trade Secrets Dropdown */}
          <div className="relative pb-2" onMouseEnter={() => handleMouseEnter('trade-secrets')} onMouseLeave={handleMouseLeave}>
            <button
              className="text-xl text-gray-800 font-medium hover:text-blue-600 transition"
            >
              Trade Secrets
            </button>
            {openDropdown === 'trade-secrets' && (
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  <Link href="/trade-secrets/google-ads">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      Google Ads Trade Secrets
                    </button>
                  </Link>
                  <Link href="/trade-secrets/facebook-ads">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      Facebook Ads Trade Secrets
                    </button>
                  </Link>
                  <Link href="/trade-secrets/tik-tok-ads">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      TikTok Ads Trade Secrets
                    </button>
                  </Link>
                  <Link href="/trade-secrets/cro">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      CRO Trade Secrets
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Case Studies Dropdown */}
          <div className="relative pb-2" onMouseEnter={() => handleMouseEnter('case-studies')} onMouseLeave={handleMouseLeave}>
            <button
              className="text-xl text-gray-800 font-medium hover:text-blue-600 transition"
            >
              Case Studies
            </button>
            {openDropdown === 'case-studies' && (
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  <Link href="/case-studies/launch-financial">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      Launch Financial Case Study
                    </button>
                  </Link>
                  <Link href="/case-studies/hangover-iv">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      Hangover IV Case Study
                    </button>
                  </Link>
                  <Link href="/case-studies/itrees">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      iTrees Case Study
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Me Dropdown */}
          <div className="relative pb-2" onMouseEnter={() => handleMouseEnter('about-me')} onMouseLeave={handleMouseLeave}>
            <button
              className="text-xl text-gray-800 font-medium hover:text-blue-600 transition"
            >
              About Me
            </button>
            {openDropdown === 'about-me' && (
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  <Link href="/about-me/background">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      My Background
                    </button>
                  </Link>
                  <Link href="/about-me/my-process">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      My Process
                    </button>
                  </Link>
                  <Link href="/about-me/my-ideal-client">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      My Ideal Client
                    </button>
                  </Link>
                  <Link href="/about-me/pricing">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      Pricing
                    </button>
                  </Link>
                  <Link href="/about-me/what-to-expect">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      What To Expect
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Contact Button */}
        <Link href="/contact">
          <button className="bg-blue-600 text-white font-medium text-lg px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Contact
          </button>
        </Link>
      </div>
    </header>
  );
}
