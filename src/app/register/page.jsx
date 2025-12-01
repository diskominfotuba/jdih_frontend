'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getPackages, registerUser } from '../../services/api';

export default function Register() {
    const router = useRouter();
    const [locationStatus, setLocationStatus] = useState('Mengambil lokasi secara otomatis...');
    const [locationValue, setLocationValue] = useState('');
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
    const [locationStatusColor, setLocationStatusColor] = useState('var(--slate-500)');

    const [packages, setPackages] = useState([]);
    const [loadingPackages, setLoadingPackages] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        nama_lengkap: '',
        no_whatsapp: '',
        nik: '',
        alamat: '',
        profile_ppp_id: '',
        category: 'retail', // Default to retail (Rumahan)
        npwp: '',
    });

    const [files, setFiles] = useState({
        foto_selvie: null,
        foto_ktp: null,
        foto_lokasi: null,
        foto_npwp: null,
    });

    useEffect(() => {
        // Fetch packages
        getPackages()
            .then(data => {
                setPackages(data);
                if (data.length > 0) {
                    setFormData(prev => ({ ...prev, profile_ppp_id: data[0].id }));
                }
            })
            .catch(err => console.error(err))
            .finally(() => setLoadingPackages(false));

        // Get Location
        if (!navigator.geolocation) {
            setLocationStatus('Geolocation tidak didukung oleh browser Anda.');
            setLocationStatusColor('#ef4444');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setCoordinates({ lat: latitude, lng: longitude });
                setLocationValue(`${latitude}, ${longitude}`);
                setLocationStatus('Lokasi berhasil terdeteksi otomatis.');
                setLocationStatusColor('#16a34a');
            },
            (error) => {
                let errorMessage = 'Gagal mengambil lokasi.';
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = 'Izin lokasi ditolak. Mohon izinkan akses lokasi.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = 'Informasi lokasi tidak tersedia.';
                        break;
                    case error.TIMEOUT:
                        errorMessage = 'Waktu permintaan lokasi habis.';
                        break;
                }
                setLocationStatus(errorMessage);
                setLocationStatusColor('#ef4444');
            }
        );
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files: fileList } = e.target;
        setFiles(prev => ({ ...prev, [name]: fileList[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!coordinates.lat || !coordinates.lng) {
            alert('Lokasi belum terdeteksi. Mohon tunggu atau izinkan akses lokasi.');
            return;
        }

        setSubmitting(true);

        try {
            const payload = new FormData();
            payload.append('category', formData.category);
            payload.append('profile_ppp_id', formData.profile_ppp_id);
            payload.append('nama_lengkap', formData.nama_lengkap);
            payload.append('alamat', formData.alamat);
            payload.append('no_whatsapp', formData.no_whatsapp);
            payload.append('nik', formData.nik);
            if (formData.npwp) payload.append('npwp', formData.npwp);

            payload.append('latitude', coordinates.lat);
            payload.append('longitude', coordinates.lng);

            if (files.foto_selvie) payload.append('foto_selvie', files.foto_selvie);
            if (files.foto_ktp) payload.append('foto_ktp', files.foto_ktp);
            if (files.foto_lokasi) payload.append('foto_lokasi', files.foto_lokasi);
            if (files.foto_npwp) payload.append('foto_npwp', files.foto_npwp);

            await registerUser(payload);
            // alert('Terima kasih! Pendaftaran berhasil dikirim.');
            router.push('/register/success');
        } catch (error) {
            alert('Gagal mengirim pendaftaran: ' + error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="register-section">
            <div className="container">
                <div className="register-card">
                    <div className="register-info">
                        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1rem' }}>Formulir Pendaftaran</h2>
                        <p style={{ color: 'var(--brand-100)', marginBottom: '2rem' }}>Lengkapi data diri Anda di bawah ini.
                            Lokasi Anda akan terdeteksi secara otomatis untuk memastikan ketersediaan jaringan.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <svg style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.75rem', color: 'var(--brand-300)' }}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                    </path>
                                </svg>
                                <a href="https://wa.me/6285366597833" target="_blank" rel="noopener noreferrer">+62 853-6659-7833</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <svg style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.75rem', color: 'var(--brand-300)' }}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <a href="mailto:helpdesk@samudrawasesa.co.id">helpdesk@samudrawasesa.co.id</a>
                            </div>
                        </div>
                    </div>
                    <div className="register-form">
                        <form onSubmit={handleSubmit}>

                            {/* Personal Info */}
                            <div className="form-grid md:grid-cols-2">
                                <div className="form-group md:col-span-2">
                                    <label className="form-label">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        name="nama_lengkap"
                                        required
                                        className="form-input"
                                        placeholder="Nama Sesuai KTP"
                                        value={formData.nama_lengkap}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Nomor WhatsApp</label>
                                    <input
                                        type="tel"
                                        name="no_whatsapp"
                                        required
                                        className="form-input"
                                        placeholder="0812..."
                                        value={formData.no_whatsapp}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">NIK</label>
                                    <input
                                        type="number"
                                        name="nik"
                                        required
                                        className="form-input"
                                        placeholder="16 Digit NIK"
                                        value={formData.nik}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">NPWP (Tidak wajib)</label>
                                    <input
                                        type="text"
                                        name="npwp"
                                        className="form-input"
                                        placeholder="Nomor NPWP"
                                        value={formData.npwp}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Address & Location */}
                            <div className="form-group">
                                <label className="form-label">Alamat Pemasangan</label>
                                <textarea
                                    rows="3"
                                    name="alamat"
                                    required
                                    className="form-textarea"
                                    placeholder="Alamat lengkap..."
                                    value={formData.alamat}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Lokasi Pemasangan (Auto-Detect)</label>
                                <div style={{ position: 'relative' }}>
                                    <input type="text" id="location-input" readOnly className="form-input"
                                        style={{ paddingLeft: '2.5rem' }} placeholder="Menunggu lokasi..." value={locationValue} />
                                    <div
                                        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, paddingLeft: '0.75rem', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                                        <svg style={{ width: '1.25rem', height: '1.25rem', color: 'var(--slate-400)' }} fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                            </path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p id="location-status"
                                    style={{ fontSize: '0.75rem', color: locationStatusColor, marginTop: '0.25rem' }}>
                                    {locationStatus}
                                </p>
                            </div>

                            {/* Package & Category */}
                            <div className="form-grid md:grid-cols-2">
                                <div className="form-group">
                                    <label className="form-label">Pilih Paket</label>
                                    <select
                                        name="profile_ppp_id"
                                        className="form-select"
                                        value={formData.profile_ppp_id}
                                        onChange={handleInputChange}
                                        disabled={loadingPackages}
                                    >
                                        {loadingPackages ? (
                                            <option>Memuat paket...</option>
                                        ) : (
                                            packages.map(pkg => (
                                                <option key={pkg.id} value={pkg.id}>
                                                    {pkg.name} - Rp {pkg.price.toLocaleString('id-ID')}
                                                </option>
                                            ))
                                        )}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Kategori</label>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                            <input
                                                type="radio"
                                                name="category"
                                                value="retail"
                                                checked={formData.category === 'retail'}
                                                onChange={handleInputChange}
                                                style={{ width: '1rem', height: '1rem', color: 'var(--brand-600)' }}
                                            />
                                            <span style={{ marginLeft: '0.5rem', color: 'var(--slate-700)' }}>Rumahan</span>
                                        </label>
                                        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                            <input
                                                type="radio"
                                                name="category"
                                                value="corporate"
                                                checked={formData.category === 'corporate'}
                                                onChange={handleInputChange}
                                                style={{ width: '1rem', height: '1rem', color: 'var(--brand-600)' }}
                                            />
                                            <span style={{ marginLeft: '0.5rem', color: 'var(--slate-700)' }}>Kantor</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* File Uploads */}
                            <div style={{ borderTop: '1px solid var(--slate-100)', paddingTop: '1rem', marginTop: '1rem' }}>
                                <p
                                    style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '1rem' }}>
                                    Upload Dokumen</p>

                                <div className="form-grid md:grid-cols-3">
                                    <div className="form-group">
                                        <label className="form-label" style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>Foto
                                            Selfie</label>
                                        <input
                                            type="file"
                                            name="foto_selvie"
                                            accept="image/*"
                                            className="file-input"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>Foto
                                            KTP</label>
                                        <input
                                            type="file"
                                            name="foto_ktp"
                                            accept="image/*"
                                            className="file-input"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>Foto
                                            Lokasi</label>
                                        <input
                                            type="file"
                                            name="foto_lokasi"
                                            accept="image/*"
                                            className="file-input"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>Foto
                                            NPWP (Tidak wajib)</label>
                                        <input
                                            type="file"
                                            name="foto_npwp"
                                            accept="image/*"
                                            className="file-input"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-full"
                                style={{ marginTop: '1rem' }}
                                disabled={submitting}
                            >
                                {submitting ? 'Mengirim...' : 'Kirim Pendaftaran'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
