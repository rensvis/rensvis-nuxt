<script>
export default {
  props: {
    /**
     * URL to the video to display.
     */
    'video': {
      type: Object,
      required: false,
    },
    /**
     * Path to and alt of the image to display.
     */
    'image': {
      type: Object,
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
  <section class="px-8 py-20 sm:py-28 sm:px-20 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 sm:mb-14" :class="{ 'wrapper': landscapeRatio }">
        <iframe v-if="video" class="" :src="video.url" :title="video.title">
        </iframe>
        <nuxt-img v-else :src="image.path" :alt="image.alt"></nuxt-img>
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