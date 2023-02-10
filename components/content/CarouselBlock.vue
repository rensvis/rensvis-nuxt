<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, } from 'swiper';

// import { Pagination } from "swiper";


export default {
  props: {
    imagePaths: {
      type: Array,
      required: true,
    },
    orientation: {
      type: String,
      default: 'landscape',
      required: false,
    },
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1.3,
            spaceBetween: 30
          },

          1024: {
            slidesPerView: 1.4,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 1.4,
            spaceBetween: 30
          },
          1536: {
            slidesPerView: 1.6,
            spaceBetween: 40
          }
        }
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
};
</script>

<template>
  <section class="py-8 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 md:py-24">
    <div class="content-block">
      <swiper :slidesPerView="1.15" :spaceBetween="20" :centeredSlides="true" :modules="modules" :pagination="{
        dynamicBullets: true,
        clickable: true
      }" :breakpoints="swiperOptions.breakpoints">
        {{ imagePaths }}
        <swiper-slide v-for="imagePath in imagePaths" v-bind:key="imagePath">
          <nuxt-img :src="imagePath" class="object-cover w-full"
            :class="{ 'aspect-[5/3]': orientation === 'landscape', 'aspect-[3/5]': orientation === 'portrait' }"
            height="1000"></nuxt-img>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.swiper {
  padding: 40px 0;
}

.swiper-slide {
  // height: 200px;
  width: 600px;
  background: grey;
  cursor: grab;
  user-select: none;
}
</style>