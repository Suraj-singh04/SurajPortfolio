/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If your repository is not a custom domain and is named "SurajPortfolio", 
  // you might need to uncomment and update the basePath below to your repo name:
  // basePath: "/SurajPortfolio",
};

export default nextConfig;
