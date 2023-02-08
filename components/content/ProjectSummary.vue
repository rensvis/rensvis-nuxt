<script lang="ts">
export default {
  props: {
    customerName: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
  }
};
</script>

<template>
  <div class="px-10">
    <div class="container sm:ml-auto sm:max-w-xl">
      <div v-if="customerName" class="justify-end text-lg lg:text-xl content-block sm:flex">
        <div class="mb-4 sm:mb-0 sm:mr-12">
          <span class="block text-neutral-400">Client</span>
          <span class="block">{{ customerName }}</span>
        </div>
        <div class="mb-4 sm:mb-0 sm:mr-12">
          <span class="block text-neutral-400">Year</span>
          <span class="block">{{ date }}</span>
        </div>
        <div class="mb-4 sm:mb-0 ">
          <span class="block text-neutral-400">Result</span>
          <a :href="url" target="_blank" class="flex items-center">
            <span>
              Check it live
            </span>
            <LazyClientOnly>
              <font-awesome-icon icon="fa-solid fa-up-right-from-square" class="ml-2" />
            </LazyClientOnly>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>