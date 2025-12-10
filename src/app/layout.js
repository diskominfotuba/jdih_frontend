import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'JDIH Kabupaten Tulang Bawang',
  description: 'Jaringan Dokumentasi dan Informasi Hukum Kabupaten Tulang Bawang',
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
