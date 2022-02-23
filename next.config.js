module.exports = {
  experimental: {
    outputStandalone: true,
  },
  eslint: {
    dirs: ["src"],
  },
  i18n: {
    locales: ["am", "ar", "en", "fr"],
    defaultLocale: "en",
  },
  images: {
    domains: (process.env.IMAGE_DOMAINS || "dashboard.hurumap.org").split(","),
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about/project",
        permanent: true,
      },
    ];
  },
};
