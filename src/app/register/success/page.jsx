import Link from 'next/link';

export default function RegisterSuccess() {
    return (
        <main className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container text-center" style={{ marginTop: '1rem' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '5rem',
                    height: '5rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--brand-100)',
                    color: 'var(--brand-600)',
                    marginBottom: '1.5rem'
                }}>
                    <svg style={{ width: '2.5rem', height: '2.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>

                <h1 className="section-title" style={{ marginBottom: '1rem' }}>Pendaftaran Berhasil!</h1>
                <p className="section-desc" style={{ maxWidth: '36rem', margin: '0 auto 2rem' }}>
                    Terima kasih telah mendaftar layanan Samudra Wasesa. Data Anda telah kami terima.
                    Tim kami akan segera menghubungi Anda melalui WhatsApp untuk proses selanjutnya.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link href="/" className="btn btn-primary">
                        Kembali ke Beranda
                    </Link>
                    <a href="https://wa.me/6285366597833" target="_blank" className="btn btn-secondary">
                        Hubungi Support
                    </a>
                </div>
            </div>
        </main>
    );
}
