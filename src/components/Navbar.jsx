'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <Link href="/">Samudra Wasesa<span className="text-brand">.</span></Link>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ width: '1.5rem', height: '1.5rem' }}
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="nav-links hidden md:flex">
                        <Link href="/" className="nav-link">Beranda</Link>
                        <Link href="/#pricing" className="nav-link">Paket & Harga</Link>
                        <Link href="/#features" className="nav-link">Keunggulan</Link>
                        <Link href="/register" className="btn btn-primary">Daftar Sekarang</Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu md:hidden">
                        <Link href="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Beranda</Link>
                        <Link href="/#pricing" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Paket & Harga</Link>
                        <Link href="/#features" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Keunggulan</Link>
                        <Link href="/register" className="btn btn-primary btn-full" onClick={() => setIsOpen(false)}>Daftar Sekarang</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
