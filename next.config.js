/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    formats: ["image/jpeg, image/png"],
  },
};
