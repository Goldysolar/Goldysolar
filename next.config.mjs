/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'localhost:3000',
    'localhost:3001',
    '127.0.0.1:3000',
    '127.0.0.1:3001',
    '172.20.10.11:3000',
    '172.20.10.11:3001',
    '172.20.10.11',
  ],
};

export default nextConfig;
