import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container text-center">
                <p className="footer-text">&copy; 2025 Samudra Wasesa Provider. All rights reserved.</p>
                <p className="footer-text">JL. Lintas Asia Bawang Latak, Lk. Lingai, Menggala Tengah, Menggala, Tulang Bawang, Lampung</p>
                <p className="footer-text mt-2"><Link href="/kebijakan-privasi">Kebijakan Privasi</Link></p>
            </div>
        </footer>
    );
}