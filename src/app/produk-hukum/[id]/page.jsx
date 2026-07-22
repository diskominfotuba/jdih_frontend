"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";

export default function RegulationDetail() {
  const params = useParams();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // State untuk kontrol Modal dan Iframe Survei
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const URL_SURVEI_MENPAN =
    "https://surveidigital.spbe.go.id/embed/survey/eyJzdXJ2ZXlfaWQiOjIsInNlcnZpY2VfaWQiOjc4MSwiaG9zdCI6Imh0dHBzOi8vamRpaC50dWxhbmdiYXdhbmdrYWIuZ28uaWQiLCJrZXkiOiJiUnR4dVRJTyJ9/embed/view/?jenis_layanan=JDIH";

  useEffect(() => {
    const storedData = sessionStorage.getItem("productDetail");

    if (storedData) {
      try {
        const productData = JSON.parse(storedData);
        setData(productData);
      } catch (error) {
        console.error("Error parsing data:", error);
      }
    }

    setLoading(false);
  }, [params.id]);

  // Efek untuk mengunci scroll body saat modal terbuka
  useEffect(() => {
    if (showSurveyModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSurveyModal]);

  // Fungsi untuk membuka modal survei (dengan Lazy Loading Iframe)
  const handleOpenSurvey = () => {
    if (iframeSrc === "about:blank") {
      setIframeSrc(URL_SURVEI_MENPAN);
    }
    setShowSurveyModal(true);
  };

  // Fungsi untuk menutup modal survei
  const handleCloseSurvey = () => {
    setShowSurveyModal(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-28 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat data...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-28 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-16 h-16 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Data tidak ditemukan
            </h3>
            <p className="text-gray-500 mb-4">
              Silakan kembali ke halaman list untuk memilih produk hukum.
            </p>
            <button
              onClick={() => router.push("/produk-hukum")}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Kembali ke List
            </button>
          </div>
        </main>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const rows = [
    { label: "Judul", value: data.judul },
    { label: "TEU", value: data.teu || "Indonesia. Bagian Hukum" },
    { label: "Tahun", value: data.tahun || "2025" },
    { label: "Singkatan", value: data.singkatan || "Perbup" },
    { label: "Tempat Diundangkan", value: data.tempat || "Suwawa" },
    { label: "Lokasi Diundangkan", value: data.lokasi || "Suwawa" },
    { label: "Bidang", value: data.bidang || "Hukum Umum" },
    { label: "Bahasa", value: data.bahasa || "Indonesia" },
    { label: "Nomor Peraturan", value: data.nomor_peraturan },
    { label: "Jenis/Bentuk Peraturan", value: data.bentuk_peraturan || "-" },
    { label: "Tanggal Dibuat", value: formatDate(data.created_at) },
    { label: "Status", value: data.status || "berlaku", isStatus: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Detail Produk Hukum
            </h1>
            <p className="text-gray-600">
              Informasi lengkap mengenai dokumen hukum
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-gray-100">
                    {rows.map((row, index) => (
                      <tr
                        key={index}
                        className="group hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 pr-4 w-1/3 align-top">
                          <span className="font-medium text-gray-500 text-sm uppercase tracking-wider">
                            {row.label}
                          </span>
                        </td>
                        <td className="py-4 pl-4 w-2/3 align-top">
                          {row.isStatus ? (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 capitalize">
                              {row.value}
                            </span>
                          ) : (
                            <span className="text-gray-900 font-medium text-lg leading-relaxed">
                              {row.value}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => router.back()}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors shadow-sm cursor-pointer"
              >
                Kembali
              </button>

              {data.url_file ? (
                <a
                  href={data.url_file}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleOpenSurvey}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-800 font-medium transition-colors shadow-sm flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Unduh Dokumen
                </a>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg font-medium cursor-not-allowed shadow-sm flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Tidak Ada Dokumen
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Floating Button Survei (Kanan Bawah) */}
      <button
        onClick={handleOpenSurvey}
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-blue-800 text-white font-medium px-5 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2.5 cursor-pointer text-sm sm:text-base"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <span>Survei Layanan</span>
      </button>

      {/* Modal Popup Survei */}
      {showSurveyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={handleCloseSurvey}
        >
          <div
            className="bg-white w-full max-w-2xl h-[88vh] sm:h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center flex-shrink-0">
              <h3 className="text-base font-semibold text-gray-800">
                Berikan Penilaian Terbaik Anda...
              </h3>
              <button
                onClick={handleCloseSurvey}
                className="text-gray-400 hover:text-red-500 text-2xl font-bold leading-none p-1 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                &times;
              </button>
            </div>

            {/* Body Modal (Iframe) */}
            <div className="flex-grow w-full h-full relative overflow-hidden bg-white">
              <iframe
                src={iframeSrc}
                className="w-full h-full border-0 block"
                allowFullScreen
                title="Survei Layanan SPBE"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}