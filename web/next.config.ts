import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/donate',
        destination: 'https://www.paypal.com/donate/?hosted_button_id=JG5GT99FFDQ4L',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
