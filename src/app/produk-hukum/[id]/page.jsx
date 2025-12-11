"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useSearchParams } from "next/navigation";

export default function RegulationDetail() {
  const searchParams = useSearchParams();
  const products = searchParams.getAll("products");
  console.log("cek data", products);

  const data = {
    judul: "Perubahan Rencana Kerja Organisasi Perangkat Daerah Tahun 2026",
    teu: "Indonesia. Bagian Hukum",
    nomor: "13",
    tahun: "2025",
    jenis: "Peraturan Bupati",
    singkatan: "Perbup",
    tempat: "Suwawa",
    tanggal: "2025-07-08",
    lokasi: "Suwawa",
    bidang: "Hukum Umum",
    bahasa: "Indonesia",
    status: "Berlaku",
    url_file: "https://example.com/dokumen/perbup-13-2025.pdf",
  };

  const rows = [
    { label: "Judul", value: data.judul },
    { label: "T.E.U", value: data.teu },
    { label: "Nomor Peraturan", value: data.nomor },
    { label: "Tahun Peraturan", value: data.tahun },
    { label: "Jenis/Bentuk Peraturan", value: data.jenis },
    { label: "Singkatan Bentuk Peraturan", value: data.singkatan },
    { label: "Tempat Penetapan", value: data.tempat },
    { label: "Tanggal Penetapan", value: data.tanggal },
    { label: "Lokasi", value: data.lokasi },
    { label: "Bidang Hukum", value: data.bidang },
    { label: "Bahasa", value: data.bahasa },
    { label: "Status", value: data.status, isStatus: true },
    { label: "Url File", value: data.url_file },
  ];

  console.log(rows);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Detail Produk Hukum
            </h1>
            <p className="text-gray-600">
              Informasi lengkap mengenai dokumen hukum
            </p>
          </div>

          {/* Detail Card */}
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
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
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

            {/* Action Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => window.history.back()}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors shadow-sm"
              >
                Kembali
              </button>
              {data.url_file ? (
                <a
                  href={data.url_file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Tidak Ada Dokumen
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
