'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on a link
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24 relative z-50">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <div className="flex flex-col">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
                <span className="text-[#8BC34A]">Metro</span> Building Solutions
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium tracking-wide mt-0.5">
                Remodeling & Construction
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            <Link href="/" className="text-gray-700 hover:text-[#8BC34A] transition-colors font-semibold text-sm xl:text-base relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8BC34A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#8BC34A] transition-colors font-semibold text-sm xl:text-base relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8BC34A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-[#8BC34A] transition-colors font-semibold text-sm xl:text-base relative group">
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8BC34A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#8BC34A] transition-colors font-semibold text-sm xl:text-base relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8BC34A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-[#8BC34A] transition-colors font-semibold text-sm xl:text-base relative group">
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8BC34A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#8BC34A] transition-colors font-semibold text-sm xl:text-base relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8BC34A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Get Quote Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="btn-cinematic text-white px-4 xl:px-6 py-2.5 xl:py-3 font-bold inline-flex items-center text-sm xl:text-base"
            >
              Get Quote
              <svg className="w-4 h-4 xl:w-5 xl:h-5 ml-2 icon-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-gray-700 p-2 -mr-2 relative z-50"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed bg-black/50 z-40" 
            style={{ 
              top: '80px',
              left: 0,
              right: 0,
              bottom: 0
            }}
            onClick={() => setIsMenuOpen(false)}
            onTouchStart={() => setIsMenuOpen(false)}
            aria-hidden="true"
          ></div>
        )}

        {/* Mobile Menu */}
        <nav
          className={`lg:hidden fixed left-0 right-0 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
          style={{ 
            top: '80px',
            maxHeight: 'calc(100vh - 80px)'
          }}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-[#8BC34A] hover:bg-gray-50 transition-all font-medium py-3 px-4 text-base border-b border-gray-100"
              >
                Homepage
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-[#8BC34A] hover:bg-gray-50 transition-all font-medium py-3 px-4 text-base border-b border-gray-100"
              >
                About
              </Link>
              <Link
                href="/gallery"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-[#8BC34A] hover:bg-gray-50 transition-all font-medium py-3 px-4 text-base border-b border-gray-100"
              >
                Gallery
              </Link>
              <Link
                href="/services"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-[#8BC34A] hover:bg-gray-50 transition-all font-medium py-3 px-4 text-base border-b border-gray-100"
              >
                Services
              </Link>
              <Link
                href="/faq"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-[#8BC34A] hover:bg-gray-50 transition-all font-medium py-3 px-4 text-base border-b border-gray-100"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-[#8BC34A] hover:bg-gray-50 transition-all font-medium py-3 px-4 text-base border-b border-gray-100"
              >
                Contact
              </Link>
              {/* Get Quote Button - Only in Mobile Drawer */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="btn-cinematic text-white px-6 py-3.5 font-bold inline-flex items-center justify-center text-base w-full"
                >
                  Get Quote
                  <svg className="w-5 h-5 ml-2 icon-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
