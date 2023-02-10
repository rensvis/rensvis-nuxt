<!-- <script setup>
const title = ref('Rens Vis');
const description = ref('Rens Vis, Designer & Developer');
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
});
</script> -->

<script>
export default {
};
</script>

<template>
  <div>

    <Head>
      <Title>Rens Vis</Title>
      <Meta name="description" content="Rens Vis, Designer & Developer" />
    </Head>

    <ThePageHeader :showImage="true"></ThePageHeader>
    <PageWrapper>
      <Container class="">
        <VerticalSpacer></VerticalSpacer>
        <VerticalSpacer></VerticalSpacer>
        <h2 class="mb-20 text-5xl">Recent work.</h2>
        <ContentQuery path="/work" :limit="3" :sort="{ date: -1, featured: -1 }" v-slot="{ data }">
          <ContentRenderer :value="data">
            <ul class="content-list">
              <li class="content-list__item">
                <WorkItemCard :title="data[0].title" :image="data[0].image" :route="data[0]._path">
                </WorkItemCard>
              </li>
              <li class="content-list__item">
                <WorkItemCard :title="data[1].title" :image="data[1].image" :route="data[1]._path">
                </WorkItemCard>
              </li>
              <li class="content-list__item">
                <WorkItemCard :title="data[2].title" :image="data[2].image" :route="data[2]._path">
                </WorkItemCard>
              </li>
            </ul>
          </ContentRenderer>
        </ContentQuery>

        <NuxtLink class="flex items-center justify-end mt-10 ml-auto text-xl" to="/work">
          <span>View all work</span>
          <ClientOnly>
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-2" />
          </ClientOnly>
        </NuxtLink>
      </Container>

      <VerticalSpacer></VerticalSpacer>

      <section class="bg-white">
        <VerticalSpacer></VerticalSpacer>
        <Container class="">
          <h2 class="mb-20 text-5xl">What I do.</h2>

          <div class="justify-between lg:flex content-block">
            <div class="basis-[30%] mb-10 lg:mb-0 shrink-0 grow-0">
              <h3 class="mb-10 text-2xl font-semibold">Design work</h3>
              <p>Let's bring your idea to life in a <strong>bold design</strong> that is uniquely yours. Think
                logos, branding and more!</p>
            </div>
            <div class="basis-[30%] mb-10 lg:mb-0 shrink-0 grow-0">
              <h3 class="mb-10 text-2xl font-semibold">Websites and apps</h3>
              <p>I'll help you create a <strong>lasting online presence</strong> by building an awesome custom website,
                app or webshop. Your users will thank you.
              </p>
            </div>
            <div class="basis-[30%] mb-10 lg:mb-0 shrink-0 grow-0">
              <h3 class="mb-10 text-2xl font-semibold">Content</h3>
              <p>Step up your content game with some <strong>stunning visuals</strong>. Video is my specialty.</p>
            </div>
          </div>

        </Container>
        <VerticalSpacer></VerticalSpacer>
      </section>


    </PageWrapper>
  </div>
</template>

<style lang="scss" scoped>
.content-list {
  &__item {
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 768px) {
  .content-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    --spacing: 20px;

    @media screen and (min-width: 1024px) {
      --spacing: 25px;
    }

    @media screen and (min-width: 1280px) {
      --spacing: 30px;
    }

    @media screen and (min-width: 1536px) {
      --spacing: 35px;
    }

    &__item {

      flex: calc(50% - var(--spacing) / 2) 0 1;

      &:first-child {
        flex: 100% 0 0;
        margin-bottom: var(--spacing);
      }
    }
  }
}
</style>