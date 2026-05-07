/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // For Docker/Static environments if needed, or keep standard
  },
};

export default nextConfig;
