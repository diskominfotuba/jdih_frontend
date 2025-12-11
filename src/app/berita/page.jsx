"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import BeritaSkeleton from "../../components/BeritaSkeleton";

//SERVICE
import { PostService } from "../../services/PostService";
import { formatDate } from "@/helpers/formatDate";

function BeritaContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [searchQuery, setSearchQuery] = useState(search ? search : "");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  //STATE DATA
  const [posts, setPosts] = useState([]);
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

  //GET DATA BERITA
  const getBerita = async (page = 1) => {
    setLoading(true);
    try {
      const params = {
        page: page,
        search: searchQuery,
        category: selectedCategory === "Semua" ? "" : selectedCategory,
      };

      const response = await PostService.get(params);

      if (response.data.success) {
        setPosts(response.data.data);
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
    getBerita(1);
  }, [selectedCategory]);

  const handleSearch = (e) => {
    e.preventDefault();
    getBerita(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.last_page) {
      getBerita(newPage);
    }
  };

  const categories = ["Semua", "Berita", "Pengumuman", "Artikel"];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Berita & Artikel
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Informasi terkini dan artikel terbaru dari Pemerintah Kabupaten
              Tulang Bawang.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-9">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pencarian
                </label>
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Cari berita atau artikel..."
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
                  Kategori
                </label>
                <select
                  className="w-full text-gray-900 px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <BeritaSkeleton key={index} />
              ))}
            </div>
          )}

          {/* Post List */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <Link
                    href={`/berita/${post.id}`}
                    key={post.id}
                    className="block group"
                    onClick={() => {
                      // Store post data in sessionStorage for detail page
                      sessionStorage.setItem(
                        `post-${post.id}`,
                        JSON.stringify(post)
                      );
                    }}
                  >
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200 h-full flex flex-col">
                      {/* Image */}
                      <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden">
                        {post.thumbnail ? (
                          <Image
                            fill
                            unoptimized
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg
                              className="w-16 h-16 text-blue-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                            {post.category?.name || "Berita"}
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
                            {formatDate(post.created_at, "long")}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-grow">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center text-primary font-medium text-sm mt-auto">
                          Baca Selengkapnya
                          <svg
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-white rounded-xl border border-gray-100">
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
                    Tidak ada berita ditemukan
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Coba ubah kata kunci pencarian atau filter Anda.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Pagination */}
          {!loading && posts.length > 0 && (
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

                {/* Page Numbers */}
                {Array.from(
                  { length: Math.min(5, pagination.last_page) },
                  (_, i) => {
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

export default function Berita() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <BeritaSkeleton key={index} />
              ))}
            </div>
          </div>
        </main>
      </div>
    }>
      <BeritaContent />
    </Suspense>
  );
}