/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['raw.githubusercontent.com', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/']
  }
}
