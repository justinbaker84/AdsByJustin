'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <div className="text-3xl font-bold text-black hover:text-blue-600 transition cursor-pointer">Ads By Justin</div>
        </Link>

        {/* Center Navigation - Desktop */}
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
                      Google Ads
                    </button>
                  </Link>
                  <Link href="/trade-secrets/facebook-ads">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      Facebook Ads
                    </button>
                  </Link>
                  <Link href="/trade-secrets/tik-tok-ads">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      TikTok Ads
                    </button>
                  </Link>
                  <Link href="/trade-secrets/cro">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      Conversion Rate
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
                      Launch Financial
                    </button>
                  </Link>
                  <Link href="/case-studies/hangover-iv">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      Hangover IV
                    </button>
                  </Link>
                  <Link href="/case-studies/itrees">
                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">
                      iTrees
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

        {/* Contact Button - Desktop Only */}
        <Link href="/contact" className="hidden md:block">
          <button className="bg-blue-600 text-white font-medium text-lg px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Contact
          </button>
        </Link>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            {/* Trade Secrets */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('trade-secrets')}
                className="w-full flex justify-between items-center text-xl font-medium text-gray-800 py-2"
              >
                Trade Secrets
                <svg
                  className={`w-5 h-5 transition-transform ${mobileDropdown === 'trade-secrets' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === 'trade-secrets' && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/trade-secrets/google-ads" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">Google Ads</div>
                  </Link>
                  <Link href="/trade-secrets/facebook-ads" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">Facebook Ads</div>
                  </Link>
                  <Link href="/trade-secrets/tik-tok-ads" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">TikTok Ads</div>
                  </Link>
                  <Link href="/trade-secrets/cro" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">Conversion Rate</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Case Studies */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('case-studies')}
                className="w-full flex justify-between items-center text-xl font-medium text-gray-800 py-2"
              >
                Case Studies
                <svg
                  className={`w-5 h-5 transition-transform ${mobileDropdown === 'case-studies' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === 'case-studies' && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/case-studies/launch-financial" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">Launch Financial</div>
                  </Link>
                  <Link href="/case-studies/hangover-iv" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">Hangover IV</div>
                  </Link>
                  <Link href="/case-studies/itrees" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">iTrees</div>
                  </Link>
                </div>
              )}
            </div>

            {/* About Me */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('about-me')}
                className="w-full flex justify-between items-center text-xl font-medium text-gray-800 py-2"
              >
                About Me
                <svg
                  className={`w-5 h-5 transition-transform ${mobileDropdown === 'about-me' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === 'about-me' && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/about-me/background" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">My Background</div>
                  </Link>
                  <Link href="/about-me/my-process" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">My Process</div>
                  </Link>
                  <Link href="/about-me/my-ideal-client" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">My Ideal Client</div>
                  </Link>
                  <Link href="/about-me/pricing" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">Pricing</div>
                  </Link>
                  <Link href="/about-me/what-to-expect" onClick={closeMobileMenu}>
                    <div className="py-2 text-gray-700">What To Expect</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <div className="pt-4">
              <Link href="/contact" onClick={closeMobileMenu}>
                <button className="w-full bg-blue-600 text-white font-medium text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
