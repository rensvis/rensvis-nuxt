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
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  image: {
    provider: "netlify",
  },
};
