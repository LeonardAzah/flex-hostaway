import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/**"
      ),
    ],
  },
};

export default nextConfig;
