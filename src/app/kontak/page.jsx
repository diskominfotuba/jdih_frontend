import React from "react";
import Navbar from "../../components/Navbar";

export default function Kontak() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
              Kontak Kami
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Untuk informasi lebih lanjut, silakan hubungi kami melalui kontak berikut.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 space-y-6 border border-gray-100">

            <p className="text-lg font-semibold text-gray-800">
              Untuk informasi lebih lanjut, silakan hubungi kami melalui:
            </p>

            <ul className="space-y-4 text-gray-700">

              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <span className="text-2xl">📧</span>
                <span className="text-base">Email: info@example.com</span>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <span className="text-2xl">📞</span>
                <span className="text-base">Telepon: (123) 456-7890</span>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <span className="text-2xl">📍</span>
                <span className="text-base">Alamat: Jl. Contoh No. 123, Kota Contoh</span>
              </li>

            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
