<script>
export default {
  props: {
    /**
     * URL to the video to display.
     */
    'videoUrl': {
      type: String,
      required: false,
    },
    /**
     * Path to the image to display.
     */
    'imagePath': {
      type: String,
      required: false,
    },
    /**
     * Text to display at the bottom of the image/video.
     */
    'bottomText': {
      type: String,
      required: false,
    },
    /**
     * If true, the image/video will be displayed in a 16:9 ratio.
     */
    'landscapeRatio': {
      type: Boolean,
      required: false,
      default: true,
    },
  }
};
</script>

<template>
  <section class="py-20 bg-neutral-900 sm:py-28">
    <div class="container px-0 mx-auto sm:px-10">
      <div class="mb-10 sm:mb-14" :class="{ 'wrapper': landscapeRatio }">
        <iframe v-if="videoUrl" class="" :src="videoUrl">
        </iframe>
        <nuxt-img v-else :src="imagePath"></nuxt-img>
      </div>
      <div class="px-10 text-xs text-center text-neutral-100">
        <p>{{ bottomText }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>