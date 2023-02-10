<!-- <script setup>
// const { path } = useRoute();
const array = ['/work/be-resilient', '/work/petito', '/work/piccy'];
const path = array[Math.floor(Math.random() * array.length)];
const { data } = await useAsyncData('home', () => queryContent('/').where({ _path: path }).findOne());
const articleData = data;
</script> -->

<script>
export default {
  async setup() {
    const route = useRoute();
    const { path } = route;
    const { data } = await useAsyncData('home', () => queryContent('/').where({ _path: path }).findOne());
    const articleData = data;
    return { articleData };
  },
  data() {
    return {
      /**
       * store the current route path to exclude it from the related articles (and not update on route change
       * to avoid rebuild)
       */
      routePath: this.$route.path,
    };
  }
};
</script>

<template>
  <div>

    <ThePageHeader :title="articleData?.title + '.'"></ThePageHeader>
    <PageWrapper>
      <article class="">
        <ContentDoc />
      </article>

      <!-- related articles -->
      <Container class="max-w-md text-center">
        <h2 class="mb-10">Related work</h2>
      </Container>
      <!-- TODO: add date sorting -->
      <ContentQuery path="/work" :where="{
        _path: { $ne: routePath }
      }" :limit="2" v-slot="{ data }">
        <ContentRenderer :value="data">
          <Container class=" md:flex">

            <WorkItemCard class="block mb-10 sm:basis-1/2 md:mr-3 md:mb-0" :title="data[0].title" :image="data[0].image"
              :route="data[0]._path"></WorkItemCard>

            <WorkItemCard class="block sm:basis-1/2 md:ml-3 md:mt-20" :title="data[1].title" :image="data[1].image"
              :route="data[1]._path"></WorkItemCard>

          </Container>
        </ContentRenderer>
      </ContentQuery>

      <VerticalSpacer></VerticalSpacer>

    </PageWrapper>
  </div>
</template>