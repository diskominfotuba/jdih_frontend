import React from "react";
import Navbar from "../../components/Navbar";

export default function VisidanMisi() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Visi dan Misi
            </h1>
          </div>

          <div className="space-y-8 text-gray-800 leading-relaxed">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <p >
                Jaringan Dokumentasi dan Informasi Hukum atau disingakat JDIH adalah: 
                Wadah pendayagunaan bersama atas dokumen hukum secara tertib, terpadu, 
                dan berkesinambungan. Merupakan sarana pemberian pelayanan informasi hukum 
                secara lengkap akurat, mudah, dan cepat
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 border-l-4 border-secondary-600 pl-3">
                Visi
              </h2>
              <p className="pl-3">
                Masyarakat memperoleh kepastian hukum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 border-l-4 border-secondary-600 pl-3">
                Misi
              </h2>
               <p className="pl-3">
                Mewujudkan peraturan Perundang-Undangan yang berkualitas.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
