import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container text-center">
          <h1 className="hero-title">
            Penuhi kebutuhan Internet Anda dengan
            <span className="text-brand"> Samudra Wasesa</span>
          </h1>
          <p className="hero-subtitle">
            Layanan internet terpercaya untuk kebutuhan digital Anda. Nikmati koneksi stabil dan
            dukungan Tim teknisi profesional kami yang siap membantu Anda dengan layanan terbaik.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/register" className="btn btn-primary btn-lg">
              Daftar Sekarang
            </Link>
            <Link href="#pricing" className="btn btn-secondary btn-lg">
              Lihat Paket
            </Link>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">1 Gbps</div>
              <div className="stat-label">Kecepatan Hingga</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">1000+</div>
              <div className="stat-label">Pelanggan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-white">
        <div className="container">
          <h2 className="section-title">Pilihan Paket Internet</h2>
          <p className="section-desc">Harga transparan, tanpa biaya tersembunyi.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Paket Basic Small Home */}
            <div className="pricing-card">
              <h3 className="card-title">Paket Standar Untuk Rumahan</h3>
              <div className="card-price">
                <span className="price-amount">Rp 250rb</span>
                <span className="price-period">/bulan</span>
              </div>
              <p className="card-desc">Broadband High Speed Internet Akses 20 Mbps. <br /><span
                style={{ fontSize: '0.75rem' }}>Termasuk Pajak 11%</span></p>

              <ul className="feature-list">
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  Distribusi IP Dinamis
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  SLA 98% Wireless Radio
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  SLA 99,4% Fiber Optik
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  Un-Limited tanpa Quota
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  24/7 Support System
                </li>
              </ul>
              <Link href="/register" className="btn btn-secondary btn-full"
                style={{ marginTop: '2rem', borderColor: 'var(--brand-600)', color: 'var(--brand-600)' }}>
                Pilih Paket
              </Link>
            </div>

            {/* Paket Kemerdekaan (Popular) */}
            <div className="pricing-card popular">
              <div className="popular-badge">MOST POPULAR</div>
              <h3 className="card-title">Paket Kemerdekaan</h3>
              <div className="card-price">
                <span className="price-amount">Rp 150rb</span>
                <span className="price-period">/bulan</span>
              </div>
              <p className="card-desc">Broadband High Speed Internet Akses 10 Mbps. <br /><span
                style={{ fontSize: '0.75rem', color: 'var(--brand-300)' }}>Termasuk Pajak 11%</span></p>

              <ul className="feature-list">
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  Distribusi IP Dinamis
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  SLA 98% Wireless Radio
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  SLA 99,4% Fiber Optik
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  Un-Limited tanpa Quota
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  24/7 Support System
                </li>
              </ul>
              <Link href="/register" className="btn btn-primary btn-full"
                style={{ marginTop: '2rem', backgroundColor: 'var(--brand-500)' }}>
                Pilih Paket
              </Link>
            </div>

            {/* Paket Office */}
            <div className="pricing-card">
              <h3 className="card-title">Paket Kantor</h3>
              <div className="card-price">
                <span className="price-amount" style={{ fontSize: '1.8rem' }}>Hubungi Kami</span>
              </div>
              <p className="card-desc">High Speed Internet Broadband Dedicated.</p>

              <ul className="feature-list">
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  Distribusi IP Dinamis
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  SLA 98% Wireless Radio
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  SLA 99,4% Fiber Optik
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  Un-Limited tanpa Quota
                </li>
                <li className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  24/7 Support System
                </li>
              </ul>
              <a href="https://wa.me/6285366597833" target="_blank" className="btn btn-secondary btn-full"
                style={{ marginTop: '2rem', borderColor: 'var(--brand-600)', color: 'var(--brand-600)' }}>
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-slate-50">
        <div className="container">
          <h2 className="section-title">Mengapa Memilih Kami?</h2>
          <p className="section-desc">Kami berkomitmen memberikan layanan terbaik untuk Anda.</p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon-box">
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Koneksi Super Cepat</h3>
              <p style={{ color: 'var(--slate-600)' }}>Nikmati kecepatan internet tanpa batas untuk streaming, gaming,
                dan bekerja.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon-box">
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Stabil & Terpercaya</h3>
              <p style={{ color: 'var(--slate-600)' }}>Jaringan fiber optik kami menjamin koneksi stabil di segala
                cuaca.</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon-box">
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z">
                  </path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Support 24/7</h3>
              <p style={{ color: 'var(--slate-600)' }}>Tim teknis kami siap membantu Anda kapanpun Anda membutuhkan
                bantuan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center bg-slate-50">
        <div className="container">
          <h2 className="section-title">Siap untuk Internet Lebih Cepat?</h2>
          <Link href="/register" className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem' }}>
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </main>
  );
}
