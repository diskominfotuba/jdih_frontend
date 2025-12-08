"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

//SERVICE
import { ProductService } from "../../services/ProductService";
import { formatDate } from "@/helpers/formatDate";

export default function ProdukHukum() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [searchQuery, setSearchQuery] = useState(search ? search : "");
  const [selectedType, setSelectedType] = useState("Semua");
  const [selectedYear, setSelectedYear] = useState("Semua");

  //STATE DATA
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
    from: 0,
    to: 0,
    has_next: false,
  });

  //STATE LOADING
  const [loading, setLoading] = useState(false);

  //GET DATA PRODUK HUKUM
  const getProduk = async (page = 1) => {
    setLoading(true);
    try {
      const params = {
        page: page,
        search: searchQuery,
        type: selectedType === "Semua" ? "" : selectedType,
        year: selectedYear === "Semua" ? "" : selectedYear,
      };

      const response = await ProductService.get(params);

      if (response.data.success) {
        setProducts(response.data.data);
        setPagination(response.data.pagination);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //RUN GET DATA
  useEffect(() => {
    getProduk(1);
  }, [selectedType, selectedYear]);

  const handleSearch = (e) => {
    e.preventDefault();
    getProduk(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.last_page) {
      getProduk(newPage);
    }
  };

  const types = [
    "Semua",
    "Peraturan Daerah",
    "Peraturan Bupati",
    "Keputusan Bupati",
    "Instruksi Bupati",
  ];
  const years = ["Semua", "2025", "2024", "2023", "2022"];

  // FILTER LOGIC REMOVED - HANDLED SERVER SIDE
  const filteredProducts = products; // Just point to products now based on server response

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Produk Hukum
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai dokumen hukum resmi Pemerintah Kabupaten Tulang
              Bawang dengan mudah dan cepat.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pencarian
                </label>
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Cari judul atau nomor peraturan..."
                    className="w-full text-gray-900 pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-3 top-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </form>
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis Peraturan
                </label>
                <select
                  className="w-full text-gray-900 px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white"
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                    // Optionally trigger fetch immediately on select change, or let user hit separate filter button.
                    // For now, let's keep it manual or add a useEffect if desired.
                    // Given the previous code didn't have a specific submit, often filter changes trigger fetch immediately.
                    // However, due to closure issues with hooks inside getProduk params, calling getProduk here might use stale state.
                    // Better to use useEffect on selectedType/selectedYear changes BUT that might trigger too many fetches.
                    // Safest for now: User changes it, then maybe hits enter? No, simple dropdown usually triggers.
                    // Let's settle on: modifying state, then simple useEffect monitoring them?
                    // I will just modify state here. Let's add a "Terapkan" button or just useEffect?
                    // Previous client-side logic was instant. A useEffect on filters is best UX.
                  }}
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tahun
                </label>
                <select
                  className="w-full text-gray-900 px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="space-y-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  href={`/produk-hukum/${product.id}`}
                  key={product.id}
                  className="block group"
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-blue-200">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                            {product.bentuk_peraturan}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {formatDate(product.created_at, "long")}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {product.judul}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium">
                          Nomor peraturan {product.nomor_peraturan}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-full md:w-auto">
                        <div className="flex items-center justify-center w-full md:w-auto px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                          Detail
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
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
                <h3 className="text-lg font-medium text-gray-900">
                  Tidak ada produk hukum ditemukan
                </h3>
                <p className="text-gray-500 mt-1">
                  Coba ubah kata kunci pencarian atau filter Anda.
                </p>
              </div>
            )}
          </div>

          {/* Pagination (Dynamic) */}
          {products.length > 0 && (
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(pagination.current_page - 1)}
                  disabled={pagination.current_page === 1}
                  className="p-2 rounded-lg cursor-pointer border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Logic to show limited page numbers if there are many */}
                {Array.from(
                  { length: Math.min(5, pagination.last_page) },
                  (_, i) => {
                    // Simple logic: always show first 5 or logic to center current?
                    // Let's implement a simple sliding window or just list all if small.
                    // For robustness with large numbers:
                    let p = i + 1;
                    if (pagination.last_page > 5) {
                      if (pagination.current_page > 3) {
                        p = pagination.current_page - 2 + i;
                      }
                      if (p > pagination.last_page) {
                        p = pagination.last_page - (4 - i);
                      }
                    }
                    if (p > 0 && p <= pagination.last_page) {
                      return (
                        <button
                          key={p}
                          onClick={() => handlePageChange(p)}
                          className={`px-4 py-2 cursor-pointer rounded-lg border font-medium ${
                            pagination.current_page === p
                              ? "border-primary bg-primary text-white"
                              : "border-gray-200 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    }
                    return null;
                  }
                )}

                {pagination.last_page > 5 &&
                  pagination.current_page < pagination.last_page - 2 && (
                    <span className="px-2 text-gray-400">...</span>
                  )}

                <button
                  onClick={() => handlePageChange(pagination.current_page + 1)}
                  disabled={!pagination.has_next}
                  className="p-2 rounded-lg cursor-pointer border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
