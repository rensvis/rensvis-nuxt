<script>
</script>

<template>
  <section class="px-10 py-24 text-center text-white bg-black">
    <h2 class="">Let's work together.</h2>
    <p>I can't wait to hear your hot new idea.</p>
  </section>

  <footer class="flex justify-between px-10 pt-10 pb-10 md:pt-28 md:text-lg">
    <div class="items-center xs:flex">
      <div class="w-20 h-px mb-2 mr-4 bg-black xs:mb-0"></div>
      <p class="">copyright © {{ new Date().getFullYear() }} Rens Vis</p>
    </div>
    <div class="">

      <nav class="hidden sm:block">
        <ul class="flex">
          <li class="mx-3 md:mx-5">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="mx-3 md:mx-5">
            <NuxtLink to="/work">Work</NuxtLink>
          </li>
          <li class="ml-3 md:ml-5">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped lang="scss">

</style>