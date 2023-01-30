<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Designer &<br> Developer.',
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
      console.log(this.$route);
      this.routeName = this.$route.name;
    },
  },
};

</script>

<template>
  <!-- hero -->
  <section class="container mx-auto px-10 -mb-5 md:-mb-8 lg:-mb-12 xl:-mb-14"
    :class="{ '-mb-10': routeName === 'index' }">
    <div class="flex flex-col md:flex-row md:items-end justify-between">
      <h1 class="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold shrink" v-html="title">
      </h1>
      <nuxt-img v-if="routeName === 'index'" class="shrink-0 ml-auto md:ml-10 mt-10 md:mt-0" format="webp" width="240"
        quality="50" src="/images/pages/home/rens-black-white.jpg" />
    </div>
  </section>
</template>
