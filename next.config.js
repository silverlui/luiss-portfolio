const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
}

module.exports = withNextra(nextConfig)
