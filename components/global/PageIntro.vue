<script>
</script>

<template>
  <Container>
    <div class="ml-auto font-bold  sm:max-w-md sm:text-right">
      <div class="content-block">
        <ContentSlot :use="$slots.default" />
      </div>
    </div>
  </Container>
</template>