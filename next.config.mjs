/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: 'tailwindui.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
