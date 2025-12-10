"use client";

import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import bannerImage from "../assets/banner_jdih_tuba.jpg";
import jdihNasional from "../assets/jdih_nasional.png";
import jdihLampung from "../assets/jdih_lampung.png";
import tulangBawang from "../assets/tulang.png";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

//SERVICE
import { ProductService } from "../services/ProductService";

//HELPER
import { formatDate } from "../helpers/formatDate";
import { PostService } from "@/services/PostService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  //STATE DATA
  const [products, setProducts] = useState([]);
  const [news, setNews] = useState([]);
  const [chartData, setChartData] = useState(null);

  //STATE LOADING
  const [loading, setLoading] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [loadingChart, setLoadingChart] = useState(true);

  //STATE ERROR
  const [error, setError] = useState(null);
  const router = useRouter();

  //GET DATA PRODUK
  const getData = async () => {
    setLoading(true);
    try {
      const response = await ProductService.get();
      setProducts(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  //GET DATA BERITA
  const getNews = async () => {
    setLoadingPost(true);
    try {
      const response = await PostService.get();
      setNews(response.data.data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoadingPost(false);
    }
  };

  //GET DATA FOR CHART
  const getChartData = async () => {
    setLoadingChart(true);
    try {
      const response = await ProductService.get({ per_page: 1000 });
      const products = response.data.data;

      const countsByYear = products.reduce((acc, product) => {
        const year = new Date(product.created_at).getFullYear();
        if (year) {
          acc[year] = (acc[year] || 0) + 1;
        }
        return acc;
      }, {});

      const sortedYears = Object.keys(countsByYear).sort();

      const data = {
        labels: sortedYears,
        datasets: [
          {
            label: "Jumlah Produk Hukum",
            data: sortedYears.map((year) => countsByYear[year]),
            backgroundColor: "#00235C",
            borderColor: "rgba(0, 35, 92, 1)",
            borderWidth: 1,
            borderRadius: 5,
          },
        ],
      };
      setChartData(data);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    } finally {
      setLoadingChart(false);
    }
  };

  //RUN GET DATA
  useEffect(() => {
    getData();
    getNews();
    getChartData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/produk-hukum?search=${searchQuery}`);
  };

  const categories = [
    {
      title: "Peraturan",
      count: products?.length || 0,
      icon: "📜",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Monografi Hukum",
      count: 0,
      icon: "⚖️",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Artikel Hukum",
      count: news.length || 0,
      icon: "📝",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Yurisprudensi",
      count: 0,
      icon: "📢",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Jumlah Produk Hukum per Tahun",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={bannerImage}
              alt="JDIH Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/80 to-blue-900/85" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              JDIH Kabupaten Tulang Bawang
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
              Wadah informasi hukum yang terintegrasi, lengkap, dan mudah
              diakses untuk masyarakat Tulang Bawang.
            </p>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Cari produk hukum (contoh: pajak daerah)..."
                  className="w-full px-6 py-4 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-lg text-lg placeholder:text-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute cursor-pointer right-2 top-2 bg-yellow-500 text-white p-2.5 rounded-full transition-colors shadow-md"
                >
                  <svg
                    className="w-6 h-6"
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
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Categories / Statistics */}
        <section className="relative -mt-20 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300 border-b-4 border-primary shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${cat.color}`}
                    >
                      {cat.icon}
                    </div>
                    <span className="text-3xl font-bold text-gray-800">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Dokumen Tersedia</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Produk Hukum Terbaru
                </h2>
                <p className="mt-2 text-gray-600">
                  Update dokumen hukum terkini dari Pemerintah Kabupaten Tulang
                  Bawang
                </p>
              </div>
              <Link
                href="/produk-hukum"
                className="hidden md:flex items-center text-gray-900 font-medium hover:text-blue-600 transition-all group"
              >
                Lihat Semua
                <svg
                  className="w-5 h-5 ml-1 transform transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            
            <div className="grid gap-6">
              {products.map((product) => (
                <Link
                  href={`/produk-hukum/${product.id}`}
                  key={product.id}
                  className="block group"
                >
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center group-hover:border-blue-200 transition-colors">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {product.bentuk_peraturan}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDate(product.created_at, "long")}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {product.judul}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Nomor Peraturan {product.nomor_peraturan}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-4 md:mt-0">
                      <div className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 group-hover:bg-gray-50 group-hover:text-primary transition-colors shadow-sm">
                        <svg
                          className="w-4 h-4 mr-2"
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
                        Unduh
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <a
                href="#"
                className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors"
              >
                Lihat Semua
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Berita Terkini
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item) => (
                <Link
                  href={`/berita/${item.id}`}
                  key={item.id}
                  className="block group"
                  onClick={() => {
                    sessionStorage.setItem(
                      `post-${item.id}`,
                      JSON.stringify(item)
                    );
                  }}
                >
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="h-48 bg-gray-200 relative">
                      {item.thumbnail ? (
                        <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                          Image Placeholder
                        </div>
                      ) : (
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item.category.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDate(item.created_at, "long")}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors flex-grow">
                        {item.title}
                      </h3>
                      <div className="text-primary font-medium hover:text-blue-800 text-sm flex items-center mt-auto">
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
              ))}
            </div>
          </div>
        </section>

        {/* Grafik Produk Hukum */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Grafik Produk Hukum
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              {loadingChart ? (
                <div className="text-center text-gray-500">
                  Memuat data grafik...
                </div>
              ) : chartData ? (
                <Bar options={chartOptions} data={chartData} />
              ) : (
                <div className="text-center text-gray-500">
                  Data tidak tersedia.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Link Terkait */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Link Terkait
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {[
                {
                  img: jdihNasional,
                  title: "JDIHN",
                  href: "https.jdihn.go.id/",
                },
                {
                  img: jdihLampung,
                  title: "JDIH LAMPUNG",
                  href: "https.jdih.lampungprov.go.id/",
                },
                {
                  img: tulangBawang,
                  title: "JDIH TULANG BAWANG",
                  href: "https.jdih-tulangbawangkab.go.id/",
                },
                {
                  img: tulangBawang,
                  title: "JDIH DPRD TULANG BAWANG",
                  href: "https.dprd.tulangbawangkab.go.id",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white w-full max-w-[240px] p-6 rounded-xl shadow-md hover:bg-[#00235C] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-between min-h-[240px] text-center cursor-pointer"
                >
                  <div className="w-28 h-28 flex items-center justify-center mb-2">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-[13px] font-semibold text-gray-900 leading-tight transition-all group-hover:text-white">
                    {item.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
