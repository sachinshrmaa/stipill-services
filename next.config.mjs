/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Load the markdown parser from node_modules instead of bundling it.
    serverComponentsExternalPackages: ["gray-matter"],
  },
};

export default nextConfig;
