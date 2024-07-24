/** @type {import('next').NextConfig} */
const nextConfig = {
 experimental: {
    swcMinify: true,
 },

 images: {
    domains: ["sneakers.by", "ike.by", "coolshoes.by"],
 },
};

export default nextConfig;
