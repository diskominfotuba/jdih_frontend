import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Samudra Wasesa - Internet Cepat Tanpa Batas',
  description: 'Layanan internet provider tercepat dan terstabil di Indonesia. Paket internet murah untuk rumah dan kantor.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
