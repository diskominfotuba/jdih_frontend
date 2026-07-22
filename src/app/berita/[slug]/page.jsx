"use client";

import Navbar from "../../../components/Navbar";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { formatDate } from "@/helpers/formatDate";

export default function BeritaDetail() {
    const params = useParams();
    const router = useRouter();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Get post data from sessionStorage or localStorage
        const storedPost = sessionStorage.getItem(`post-${params.slug}`);
        if (storedPost) {
            setPost(JSON.parse(storedPost));
        } else {
            // If no data found, redirect to berita list
            router.push("/berita");
        }
    }, [params.slug, router]);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col bg-gray-50">
                <Navbar />
                <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        <p className="mt-4 text-gray-600">Memuat data...</p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                        <a href="/" className="hover:text-primary transition-colors">
                            Beranda
                        </a>
                        <svg
                            className="w-4 h-4"
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
                        <a href="/berita" className="hover:text-primary transition-colors">
                            Berita
                        </a>
                        <svg
                            className="w-4 h-4"
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
                        <span className="text-gray-900 font-medium">Detail</span>
                    </nav>

                    {/* Article Header */}
                    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Featured Image */}
                        {post.image && (
                            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                    {post.category?.name || "Berita"}
                                </span>
                                <div className="flex items-center text-gray-500">
                                    <svg
                                        className="w-5 h-5 mr-2"
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
                                    <span className="text-sm">
                                        {formatDate(post.created_at, "long")}
                                    </span>
                                </div>
                                {post.author && (
                                    <div className="flex items-center text-gray-500">
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        <span className="text-sm">{post.author}</span>
                                    </div>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                {post.title}
                            </h1>

                            {/* Excerpt */}
                            {post.excerpt && (
                                <div className="text-lg text-gray-600 mb-8 pb-8 border-b border-gray-200 italic">
                                    {post.excerpt}
                                </div>
                            )}

                            {/* Content */}
                            <div
                                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                                dangerouslySetInnerHTML={{ __html: post.content || post.body }}
                            />

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                                        Tags:
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </article>

                    {/* Back Button */}
                    <div className="mt-8">
                        <button
                            onClick={() => router.push("/berita")}
                            className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-primary hover:text-primary transition-all"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
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
                            Kembali ke Daftar Berita
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
