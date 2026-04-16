import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/services/training-certification',
        destination: '/services/training-and-certification',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
