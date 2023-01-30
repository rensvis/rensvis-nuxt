export default {
  modules: ["@nuxt/content", "@nuxt/image-edge"],
  content: {},
  components: true,
  // cant get this to work
  // components: {
  //   dirs: ["~/components", "~/components/templates"],
  // },
  css: ["~/assets/css/main.scss"],
  plugins: ["~/plugins/swiper.client.js"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
