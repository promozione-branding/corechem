/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Important for Next 15 static images
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
        source: '/:slug.html',
        destination: '/categories/:slug',
        permanent: true, // SEO 301 redirect
      },
    ];
  },
};

export default nextConfig;