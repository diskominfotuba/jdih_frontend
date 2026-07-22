/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "services-opd.tulangbawangkab.go.id",
        pathname: "/api/stream/**",
      },
    ],
  },
};

export default nextConfig;
