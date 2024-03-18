/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/privacyPolicy',
        destination: '/privacy_policy.html',
      },
    ]
  }
};

export default nextConfig;
