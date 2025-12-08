"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                className="text-gray-900 font-bold hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                BERANDA
              </Link>
              <Link
                href="/produk-hukum"
                className="text-gray-900 font-bold hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                PRODUK HUKUM
              </Link>
              <Link
                href="/berita"
                className="text-gray-900 font-bold hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                BERITA
              </Link>
              <Link
                href="#"
                className="text-gray-900 font-bold hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                PROFIL
              </Link>
              <Link
                href="#"
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
              className="bg-primary text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Beranda
            </Link>
            <Link
              href="/produk-hukum"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              Produk Hukum
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Berita
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Profil
            </Link>
            <Link
              href="#"
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
