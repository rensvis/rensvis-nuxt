import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUpRightFromSquare,
  faArrowRight,
  faEnvelope,
  faPhone,
  faQuoteLeft,
  faPlus,
  faArrowUpRightFromSquare,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUpRightFromSquare,
  faArrowRight,
  faEnvelope,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGithub,
  faPhone,
  faQuoteLeft,
  faPlus,
  faArrowUpRightFromSquare,
  faGoogle,
  faStar,
  faStarHalfAlt
);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
