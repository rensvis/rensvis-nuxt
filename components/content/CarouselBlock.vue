<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, } from 'swiper';

// import { Pagination } from "swiper";


export default {
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          640: {
            slidesPerView: 1.3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1.4,
            spaceBetween: 30
          },

          1024: {
            slidesPerView: 1.5,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 1.5,
            spaceBetween: 30
          },
          1536: {
            slidesPerView: 2,
            spaceBetween: 60
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
  <section class="py-20 bg-neutral-900 md:py-24">
    <div class="content-block">
      <div class="max-w-5xl px-10 mx-auto">

      </div>

      <swiper :slidesPerView="1.15" :spaceBetween="20" :centeredSlides="true" :modules="modules" :pagination="{
        dynamicBullets: true,
        clickable: true
      }" :breakpoints="swiperOptions.breakpoints">
        <swiper-slide>
          <nuxt-img src="/images/pages/home/surface-tablet.jpg" class="object-cover aspect-videoo"></nuxt-img>
        </swiper-slide>
        <swiper-slide>
          <nuxt-img src="/images/pages/home/surface-tablet.jpg" class="object-cover aspect-videoo"></nuxt-img>

        </swiper-slide>

        <!-- If we need pagination -->
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