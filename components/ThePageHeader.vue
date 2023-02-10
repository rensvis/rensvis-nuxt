<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Designer &<br> Developer.',
    },
    showImage: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      routeName: this.$route.name,
      isMobileMenuVisible: false,
    };
  },
  watch: {
    $route() {
      this.routeName = this.$route.name;
    },
  },
};

</script>

<template>
  <div class="bg-white">
    <section>
      <Container class="-mb-5 md:-mb-8 lg:-mb-12 xl:-mb-14" :class="{ '-mb-10': routeName === 'index' }">
        <div class="flex flex-col justify-between md:flex-row md:items-end">
          <h1 class="text-5xl font-bold md:text-7xl lg:text-8xl 2xl:text-9xl shrink" v-html="title">
          </h1>
          <nuxt-img v-if="showImage" class="mt-10 ml-auto shrink-0 md:ml-10 md:mt-0 w-[240px] h-[320px]"
            src="/images/pages/home/rens-black-white.jpg" alt="Rens in black and white" />
        </div>
      </Container>
    </section>
  </div>
</template>
