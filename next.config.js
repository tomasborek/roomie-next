const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
});
