import * as Swiper from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Swiper);
});
