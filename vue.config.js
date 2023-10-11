
module.exports = {
  css: {
    extract: { ignoreOrder: true },
  },
  configureWebpack: {
    output: {
      crossOriginLoading: "anonymous",
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: "GDG Indore - Devfest 2022",
    workboxPluginMode: "InjectManifest",
    themeColor: "black",
    msTileColor: "black",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      background_color: "#ffffff",
    },
    workboxOptions: {
      swSrc: "./src/sw.js",
      swDest: "service-worker.js",
    },
  },
}