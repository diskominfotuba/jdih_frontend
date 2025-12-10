import logo from "../assets/jdih.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo + Deskripsi */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-32 md:w-auto">
                <Image
                  src={logo}
                  alt="Logo"
                  width={180}
                  height={180}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Jaringan Dokumentasi dan Informasi Hukum (JDIH) Kabupaten Tulang
              Bawang adalah wadah pendayagunaan bersama atas dokumen hukum
              secara tertib, terpadu, dan berkesinambungan.
            </p>
          </div>

          {/* Tentang */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Tentang
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/produk-hukum"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Produk Hukum
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  href="/profil"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Profil
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Pintasan */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Pintasan
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https.jdihn.go.id/"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  JDIHN
                </a>
              </li>
              <li>
                <a
                  href="https.jdih.lampungprov.go.id/"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  JDIHN LAMPUNG
                </a>
              </li>
              <li>
                <a
                  href="https.jdih-tulangbawangkab.go.id/"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  JDIHN TULANG BAWANG
                </a>
              </li>
              <li>
                <a
                  href="https.dprd.tulangbawangkab.go.id"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  JDIHN DPRD TULANG BAWANG
                </a>
              </li>
            </ul>
          </div>

          {/* Jenis Dokumen */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Jenis Dokumen
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Peraturan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Monografi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Artikel/Majalah Hukum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Putusan
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Kontak Kami
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>JL.Cemara Komplek Perkantoran Pemda Tulang Bawang</span>
              </li>

              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>0726 7575156</span>
              </li>

              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26 2.22 0L21 8M5 19h14a2 2 0 002-2V7H5a2 2 0 00-2 2v10z"
                  />
                </svg>
                <span className="break-all">hukumtuba@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} JDIH Kabupaten Tulang Bawang. All
            rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.4-3.62 3.52-3.62 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.75h2.59l-.41 2.9h-2.18v7.03C18.34 21.26 22 17.1 22 12.07z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12a2.9 2.9 0 0 1-2.9 2.9zM17.25 6A1.25 1.25 0 1 1 16 7.25 1.25 1.25 0 0 1 17.25 6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
