/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  experimental: {
    inlineCss: true, // removes render-blocking CSS requests
    optimizePackageImports: ["lucide-react", "react-icons/fa", "swiper"],
  },
  async headers() {
    return [
      {
        source: "/:all*(webp|avif|png|jpg|jpeg|svg|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    localPatterns: [
      {
        pathname: "/**", // allow ALL public images
        search: "",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:slug.html",
        destination: "/categories/:slug",
        permanent: true, // SEO 301 redirect
      },
    ];
  },
};

export default nextConfig;