<script setup lang="ts">
import { Swiper, SwiperSlide, } from 'swiper/vue';
import { Scrollbar, Mousewheel } from 'swiper';

interface ITestimonial {
  name: string;
  projectName: string;
  date: Date;
  text: string;
  stars: number;
  projectUrl: string;
  reviewUrl: string;
}

const testimonials: ITestimonial[] = [
  {
    name: 'Tjitske Kranenburg',
    projectName: 'De Veenderij',
    date: new Date('2023-07-01'),
    text: "Rens Vis Media made the website for our holiday farm De Veenderij. We are very satisfied with the creative end result and the pleasant cooperation!",
    stars: 5,
    projectUrl: 'https://de-veenderij.nl/',
    reviewUrl: 'https://g.co/kgs/c1Vbua'
  },
  {
    name: 'Debora Kerssies',
    projectName: 'Debora Consultancy',
    date: new Date('2022-09-01'),
    text: "Rens is a very skilled and pleasant web builder, he made my website fast, good and beautiful. I think it's great that Rens thinks along in good and pragmatic solutions so that you get real quality. I can definitely recommend Rens!",
    stars: 5,
    projectUrl: 'https://deboraconsultancy.nl/',
    reviewUrl: 'https://g.co/kgs/p9GHNo'
  },
];

const swiperOptions = {
  modules: [Scrollbar, Mousewheel],
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
  },
  autoplay: { // not used atm
    pauseOnMouseEnter: true,
    speed: 500, // animation speed
    delay: 5000, // animation delay
  },
  mousewheel: {
    invert: false,
    forceToAxis: true,
    releaseOnEdges: true,
    sensitivity: 2,
  },
};
</script>

<template>
  <section class="p-0 bg-neutral-900 text-white lg:h-[650px]">
    <div class="items-center h-full lg:flex">
      <div class="h-full lg:basis-1/3">
        <img src="/images/components/testimonials/workers.png" alt="Flex working"
          class="object-cover w-full h-[500px] sm:h-[600px] md:h-[800px] lg:h-full">
      </div>

      <div class="overflow-hidden lg:basis-2/3 fadein-transition">
        <div class="px-6 py-16 ml-auto mr-0 md:px-14 lg:px-16 container--s">
          <h2 class="mb-20 text-5xl text-bal" style="text-wrap:balance">Kind words from awesome clients.</h2>
          <swiper :modules="swiperOptions.modules" :slidesPerView="1.15" :spaceBetween="30" :centeredSlides="true"
            :mousewheel="swiperOptions.mousewheel" class="!overflow-visible">
            <swiper-slide v-for="testimonial in testimonials" v-bind:key="testimonial.name"
              class="block p-6 text-neutral-200 rounded-lg swiper-slide w-56 bg-[#1D1D1D] cursor-grab">
              <div class="flex flex-col sm:gap-4 sm:items-center sm:flex-row">
                <h4 class="mb-2 text-lg font-bold text-white">{{ testimonial.name }}</h4>
                <p class="mb-2 text-sm leading-6 text-neutral-400">
                  <span class="inline-block mr-4">
                    {{ testimonial.date.toLocaleDateString('en-EN', {
                      month: 'long',
                      year: 'numeric'
                    }) }}
                  </span>
                  <a target="_blank" :href="testimonial.reviewUrl" class="inline-block hover:text-amber-400"
                    aria-label="Google review">
                    <font-awesome-icon :icon="['fab', 'google']" class="mr-2" />
                    <font-awesome-icon v-for="index in testimonial.stars" :icon="['fas', 'star']" />
                    <font-awesome-icon v-for="index in (5 - testimonial.stars)" :icon="['fas', 'star']"
                      class="opacity-30 " />
                  </a>
                </p>
              </div>
              <p class="mb-2 text-neutral-300">{{ testimonial.text }}</p>
              <p class="text-sm font-bold text-neutral-400">
                <a target="_blank" :href="testimonial.projectUrl">
                  {{ testimonial.projectName }}
                  <font-awesome-icon class="ml-1" :icon="['fas', 'arrow-up-right-from-square']" />
                </a>
              </p>
            </swiper-slide>
          </swiper>
        </div>
      </div>



    </div>


  </section>
</template>

