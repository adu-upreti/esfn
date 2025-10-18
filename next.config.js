/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["source.unsplash.com", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  // ✅ Ignore ESLint errors during Vercel build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

module.exports = nextConfig;
