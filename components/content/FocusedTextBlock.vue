<script>
export default {
  props: {
    heading: {
      type: String,
      default: null
    },
  }
};
</script>

<template>
  <section>
    <Container class="max-w-5xl">
      <div class="container mx-auto content-block">
        <div class="md:flex">
          <h2 class="mb-4 mr-10 shrink-0">
            {{ heading }}
          </h2>
          <ContentSlot :use="$slots.default" />
        </div>
      </div>
    </Container>
  </section>
</template>