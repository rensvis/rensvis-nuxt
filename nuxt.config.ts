export default {
  modules: ["@nuxt/content", "@nuxt/image-edge", "@vueuse/nuxt"],
  content: {},
  components: true,
  css: [
    "~/assets/css/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  plugins: ["~/plugins/swiper.client.js", "~/plugins/font-awesome.js"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
};
