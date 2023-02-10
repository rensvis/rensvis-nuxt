<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imagePath: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <NuxtLink :to="route" class="">
    <HoverCard>
      <article class="relative flex items-end p-10 bg-black shadow-2xl h-fit">
        <nuxt-img class="absolute inset-0 z-0 object-cover w-full h-full" :src="imagePath" format="webp" quality="85" />
        <div class="absolute inset-0 bg-black bg-opacity-25"></div>
        <h2 class="relative z-10 text-3xl text-white md:text-4xl">
          {{ title }}
        </h2>
      </article>
    </HoverCard>
  </NuxtLink>
</template>

<style lang="scss" scoped>
article {
  height: 400px;
}
</style>