<script>
export default {
  props: {
    'clientName': String,
  }
};
</script>

<template>
  <section>
    <Container class="relative md:max-w-2xl mt-14">
      <img src="/images/svg/quote.svg" alt="quote" class="absolute h-40 opacity-10 left-8 md:-left-8 -top-20">
      <blockquote class="text-lg font-bold">
        <ContentSlot :use="$slots.default" />
      </blockquote>
      <div class="flex items-center mt-4 ml-auto">
        <div class="grow"></div>
        <div class="w-10 h-px mr-4"></div>
        <p class="text-neutral-500">
          {{ clientName }}
        </p>
      </div>
    </Container>
  </section>
</template>