<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData('home', () => queryContent('/').where({ _path: path }).findOne());
</script>

<template>
  <ThePageHeader :title="data?.title + '.'"></ThePageHeader>
  <PageWrapper>
    <article class="">
      <ContentDoc />
    </article>
  </PageWrapper>
</template>