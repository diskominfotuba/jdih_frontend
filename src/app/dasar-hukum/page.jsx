import React from "react";
import Navbar from "../../components/Navbar";

export default function DasarHukum() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Dasar Hukum
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dasar hukum yang menjadi landasan pembentukan dan pengelolaan
              Jaringan Dokumentasi dan Informasi Hukum (JDIH).
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <ol className="list-decimal ml-6 space-y-4 text-gray-800 leading-relaxed">
              <li className=" transition">
                Peraturan Presiden Nomor 33 Tahun 2012 tentang Jaringan Dokumentasi dan Jaringan Informasi Hukum Nasional
              </li>
              <li className=" transition">
                Peraturan Menteri Hukum dan Hak Asasi Manusia Nomor 8 Tahun 2019 tentang Standar Pengelolaan Dokumen Dan Informasi Hukum
              </li>
              <li className=" transition">
                Peraturan Menteri Hukum dan Hak Asasi Manusia Nomor 30 Tahun 2013 tentang Jaringan Dokumentasi dan Informasi Hukum di Lingkungan Kementerian Hukum dan Hak Asasi Manusia.
              </li>
            </ol>
          </div>

        </div>
      </main>
    </div>
  );
}
