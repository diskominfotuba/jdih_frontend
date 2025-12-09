import React from "react";
import Navbar from "../../components/Navbar";

export default function SekilasSejarah() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Sekilas Sejarah
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sekilas tentang perjalanan dan perkembangan organisasi kami dari awal hingga saat ini.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-gray-800 leading-relaxed">

            {/* Card ringkas paragraf awal */}
            <div className="bg-white shadow-sm p-6 rounded-xl border">
              <p>
                Pembentukan Jaringan Dokumentasi dan Informasi Hukum Nasional (JDIHN),
                secara historis merupakan salah satu rekomendasi dari kegiatan
                pembangunan hukum nasional yaitu Seminar Hukum Nasional III tahun 1974
                di Surabaya yang diselenggarakan oleh Badan Pembinaan Hukum. Hasil
                seminar menilai dokumentasi hukum terhadap pembangunan hukum nasional
                masih sangat lemah karena belum mampu menyediakan dokumen dan informasi
                hukum serta sistem temu kembali dengan cepat dan tepat pada saat dibutuhan.
              </p>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm border">
              <p>Hasil lain dari Seminar Hukum Nasional III Tahun 1974, ditemukan faktor penyebab lemahnya dukungan dokumentasi hukum antara lain adalah:</p>
              <ul className="list-disc ml-8 space-y-1">
                <li>Dokumen hukum potensial, tersebar luas di instansi pemerintah di pusat sampai daerah dengan wilayah kepulauan yang sangat luas;</li>
                <li>Dokumen-dokumen hukum tersebut belum semuanya dikelola dengan baik dalam suatu sistem;</li>
                <li>Tenaga pengelola yang ada sangat kurang;</li>
                <li>Kurangnya perhatian terhadap keberadaan dokumentasi dan perpustakaan hukum.</li>
              </ul>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm border">
              <p>Seminar juga merekomendasikan:</p>
              <ul className="list-disc ml-8 space-y-1">
                <li>Membentuk kerja sama antar unit pengelola dokumen hukum dalam suatu Jaringan dokumentasi dan informasi hukum</li>
                <li>Perlu adanya suatu kebijakan nasional untuk mulai menyusun sistem jaringan dokumentasi dan informasi hukum dan agar segera dapat berfungsi.</li>
              </ul>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm border">
              <p>Dalam tahap permulaan ada dua hal yang perlu dilakukan:</p>
              <ul className="list-disc ml-8 space-y-1">
                <li>mempermudah pencarian dan penemuan kembali peraturan perundang- undangan, yurisprudensi, serta bahan-bahan lainnya</li>
                <li>Untuk dapat secepatnya mendayagunakan semua informasi yang ada Sistem Jaringan Dokumentasi dan Informasi Hukum perlu disusun dan dikembangkan. Ditentukan Pusat dan Anggota Jaringan serta menyediakan sarana yang diperlukan agar mulai berfungsi.</li>
              </ul>
            </div>

            {/* Paragraf panjang diformat dengan container agar nyaman dibaca */}
            <div className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
              <p>
                Pada tahun 1978 dilaksanakan Lokakarya tentang “Organisasi dan Komunikasi Sistem
                Jaringan Dokumentasi dan Informasi Hukum” di Jakarta, yang salah satu hasilnya adalah
                menunjuk BPHN sebagai Pusat Jaringan dan diberi tugas sebagai penyelenggara latihan
                pembinaan tenaga, tempat konsultasi, penelitian dan pengembangan sistem jaringan,
                serta koordinator kegiatan unit-unit jaringan dalam rangka pengembangan jaringan.
              </p>

              <p>
                Dalam rangka melaksanakan tugas sebagai Pusat JDIH, pada tahun 1988 BPHN mengeluarkan
                pedoman pengelolaaan dokumen hukum yang diberi nama ”Manual Unit Jaringan Dokumentasi
                dan Informasi Hukum” yang terdiri dari V modul yaitu:
              </p>

              <ul className="list-disc ml-8 space-y-1">
                <li>Modul I: Pedoman Prosedur Kerja Pusat Jaringan Dokumentasi dan Informasi Hukum.</li>
                <li>Modul II: Pedoman Pengumpulan Bahan (Kegiatan Prakatalogan).</li>
                <li>Modul III: Pedoman Pengolahan Sub-Modul IIIA: Pedoman Teknis Pengkatalogan Bahan Pustaka dan Pascakatalogan (berdasarkan UDC); Sub-Modul IIIB: Pedoman Teknis Pengkatalogan Peraturan Perundang-undangan; Sub-Modul IIIC: Pedoman Teknis Pengkatalogan Bahan Pustaka dan Pascakatalogan (berdasarkan DDC).</li>
                <li>Modul IV: Pedoman Peelayaan Informasi;</li>
                <li>Modul V: Sarana Kerja Unit Jaringan Dokumentasi dan Informasi Hukum</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
              <p>
                Pada Tahun 1999 terbit Kebijakan Nasional terkait pelaksanaan JDIHN, yaitu Keputusan
                Presiden Nomor 91 Tahun 1999 tentang Jaringan Dokumentasi dan Informasi Hukum Nasional
                dalam Lembaran Negara No. 135. Kemudian dalam upaya menjamin terciptanya Pengelolaan
                Dokumentasi dan Informasi Hukum yang terpadu dan terintegrasi maka Keputusan Presiden
                tersebut direvitalisasi dan diganti dengan Peraturan Presiden Nomor 33 Tahun 2012
                tentang Jaringan Dokumentasi dan Informasi Hukum Nasional yang salah satu tugasnya adalah
                melakukan pembinaan, pengembangan dan monitoring pada anggota JDIHN yang terdiri dari:
              </p>

              <ul className="list-disc ml-8 space-y-1">
                <li>Biro Hukum dan/atau unit kerja yang tugas dan fungsinya menyelenggarakan kegiatan yang berkaitan dengan dokumen hukum pada:</li>
                <ul className="list-decimal ml-8 space-y-1">
                  <li>Kementerian Negara;</li>
                  <li>Sekretariat Lembaga Negara;</li>
                  <li>Lembaga Pemerintah Non Kementerian;</li>
                  <li>Pemerintah Provinsi;</li>
                  <li>Pemerintah Kabupaten/Kota; dan</li>
                  <li>Sekretariat Dewan Perwakilan Rakyat Daerah Tingkat Provinsi dan Kabupaten/Kota.</li>
                </ul>
                <li>Perpustakaan pada perguruan tinggi negeri dan perguruan tinggi swasta;</li>
                <li>Lembaga Lain yang bergerak di bidang pengembangan dokumentasi dan informasi hukum yang ditetapkan olen Menteri.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
              <p>Selain itu, amanat pada Peraturan Presiden Nomor 33 Tahun 2012 menegaskan bahwa tujuan dari JDIHN adalah:</p>
              <ul className="list-disc ml-8 space-y-1">
                <li>menjamin terciptanya Pengelolaan Dokumentasi dan Informasi Hukum yang terpadu dan terintegrasi di berbagai instansi pemerintah dan institusi lainnya;</li>
                <li>menjamin ketersediaan dokumentasi dan informasi hukum yang lengkap dan akurat, serta dapat diakses secara cepat dan mudah;</li>
                <li>mengembangkan kerja sama yang efektif antara Pusat jaringan dan Anggota jaringan serta antar sesama Anggota jaringan dalam rangka penyediaan dokumentasi dan informasi hukum; dan</li>
                <li>meningkatkan kualitas pembangunan hukum nasional dan pelayanan kepada publik sebagai salah satu wujud ketatapemerintahan yang baik, transparan, efektif, efisien, dan bertanggung jawab.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
              <p>
                Untuk menyesuaikan dengan perkembangan ilmu pengetahuan dan teknologi, Manual Unit Jaringan
                Dokumentasi dan Informasi Hukum juga telah direvisi dan dikembangkan oleh Pusat JDIHN dan
                dijadikan lampiran yang tidak terpisahkan dari Peraturan Menteri Hukum dan HAM Nomor 02 Tahun
                2013 Tentang Standardisasi Pengelolaan Teknis Dokumentasi Dan Informasi Hukum, yang selanjutnya
                dicabut dengan Peraturan Menteri Hukum dan HAM Nomor 8 Tahun 2019 Tentang Standar Pengelolaan
                Dokumen dan Informasi Hukum, ini dimaksudkan sebagai pedoman yang wajib digunakan oleh Anggota
                JDIHN. Standar Pengelolaan Dokumen dan Informasi Hukum meliputi:
              </p>

              <ul className="list-disc ml-8 space-y-1">
                <li>Standar Pembuatan Abstrak Peraturan Perundang-undangan;</li>
                <li>Standar Pengolahan Dokumen dan Informasi Hukum;</li>
                <li>Standar Laporan Evaluasi Pengelolaan Jaringan Dokumentasi dan Informasi Hukum Nasional</li>
              </ul>
            </div>

            <p className="bg-white p-6 rounded-xl shadow-sm border">
              Sejarah pembentukan JDIHN di atas menunjukkan betapa pentingnya kerjasama pengelolaan dokumen
              dan informasi hukum untuk mempercepat pembangunan hukum nasional yang berkualitas. Oleh karena
              itu, untuk membangun akses informasi hukum yang terintegrasi, secara nasional semua Anggota JDIHN
              wajib mengelola dokumen dan informasi hukum yang ada dalam kewenangannya dengan menggunakan
              modul/standar yang ada dan meningkatkan akselerasinya dengan memanfaatkan kecanggihan teknologi
              informasi dan komunikasi.
            </p>

          </div>
        </div>
      </main>
    </div>
  );
};
