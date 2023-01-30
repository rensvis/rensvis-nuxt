<script>
</script>

<template>
  <div class="px-10">
    <div class="container sm:ml-auto sm:max-w-md sm:text-right font-bold">
      <div class="content-block">
        <ContentSlot :use="$slots.default" />
      </div>
    </div>
  </div>
</template>