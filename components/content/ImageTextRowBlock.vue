<script>
export default {
  props: {
    imagePath: String,
    imagePosition: {
      type: String,
      default: 'left',
      required: false,
    },
    stretchImage: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<template>
  <section class="md:flex md:items-center">
    <div class="basis-1/2" :class="{ 'md:order-2': imagePosition === 'right' }">
      <nuxt-img class="object-cover mb-10 md:mb-0 w-full h-[20rem] sm:h-[30rem] md:h-[40rem] xl:h-[50rem] shadow-2xl"
        :class="{ 'md:max-w-md': !stretchImage, 'ml-auto': imagePosition === 'left' }" format="webp" quality="85"
        height="800" :src="imagePath" />
    </div>
    <div class="basis-1/2 ">
      <div class="px-10 content-block md:p-10 lg:p-20 md:max-w-xl" :class="{ 'ml-auto': imagePosition === 'right' }">
        <ContentSlot :use="$slots.default" />
      </div>
    </div>
  </section>
</template>