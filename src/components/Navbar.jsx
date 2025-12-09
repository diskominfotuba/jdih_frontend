"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsProfileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* Placeholder for Logo */}
              <div className="w-10 h-10 bg-primary-500 text-gray-800 rounded-full flex items-center justify-center font-bold">
                TB
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-800 leading-none">
                  JDIH
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Kabupaten Tulang Bawang
                </span>
              </div>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="text-gray-900 font-bold hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                BERANDA
              </Link>
              <Link
                href="/produk-hukum"
                onClick={handleLinkClick}
                className="text-gray-900 font-bold hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                PRODUK HUKUM
              </Link>
              <Link
                href="/berita"
                onClick={handleLinkClick}
                className="text-gray-900 font-bold hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                BERITA
              </Link>
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="text-gray-900 font-bold hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  PROFIL
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                    <Link
                      href="/sekilas-sejarah"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sekilas Sejarah
                    </Link>
                    <Link
                      href="/dasar-hukum"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dasar Hukum
                    </Link>
                    <Link
                      href="/visi-dan-misi"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Visi dan Misi
                    </Link>
                    <Link
                      href="/struktur.pdf"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Struktur Organisasi
                    </Link>
                    <Link
                      href="/sop.pdf"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      SOP
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/kontak"
                onClick={handleLinkClick}
                className="text-gray-900 font-bold hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                KONTAK
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="bg-primary text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Beranda
            </Link>
            <Link
              href="/produk-hukum"
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              Produk Hukum
            </Link>
            <Link
              href="/berita"
              onClick={handleLinkClick}
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Berita
            </Link>
            <div ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="w-full text-left text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                <div className="flex justify-between">
                  Profil
                  <svg
                    className={`h-5 w-5 transform ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
              {isProfileOpen && (
                <div className="pl-4">
                  <Link
                    href="/sekilas-sejarah"
                    onClick={handleLinkClick}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  >
                    Sekilas Sejarah
                  </Link>
                  <Link
                    href="/dasar-hukum"
                    onClick={handleLinkClick}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  >
                    Dasar Hukum
                  </Link>
                  <Link
                    href="/visi-dan-misi"
                    onClick={handleLinkClick}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  >
                    Visi dan Misi
                  </Link>
                  <Link
                    href="/struktur.pdf"
                    onClick={handleLinkClick}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  >
                    Struktur Organisasi
                  </Link>
                  <Link
                    href="/sop.pdf"
                    onClick={handleLinkClick}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  >
                    SOP
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/kontak"
              onClick={handleLinkClick}
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
