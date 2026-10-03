/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local public/ images only — no remote hosts needed for MVP
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
