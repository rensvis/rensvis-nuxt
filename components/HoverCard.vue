<script setup lang="ts">
const target = ref(null);

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATION = 7;

  if (typeof navigator === 'undefined') return;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator?.userAgent);
  if (isSafari) return;


  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2); // handle x-axis
  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); // handle y-axis
  // on page load width is 0, so we need to set a default value
  const perspectiveValue = elementWidth.value === 0 ? 700 : elementWidth.value;
  return `perspective(${perspectiveValue}px) rotateX(${(isOutside.value) ? 0 : rX}deg) rotateY(${(isOutside.value) ? 0 : rY}deg)`;
});

</script>


<template>
  <div class="relative z-10 hover-card" ref="target"
    :style="{ transform: cardTransform, transition: 'transform 0.25s ease-out' }">
    <ContentSlot :use="$slots.default" />
  </div>

</template>

<style lang="scss" scoped>

</style>