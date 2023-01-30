<script>
export default {
  data() {
    return {
      category: '',
    };
  },
  methods: {
    setCategory(category) {
      this.category = category;
    },
  },
};
</script>

<template>
  <ThePageHeader title="Work"></ThePageHeader>
  <PageWrapper>
    <Container>
      <Spacer></Spacer>
      <PageIntro>Here's a quick look at projects I'm proud off.</PageIntro>
      <Spacer></Spacer>
      <div class="flex flex-wrap flex-col items-start lg:flex-row">
        <button class="text-4xl lg:mr-8 mb-3" :class="{ 'font-bold': this.category === '' }"
          v-on:click="setCategory('')">All</button>
        <button class="text-4xl lg:mx-8 mb-3" :class="{ 'font-bold': this.category === 'website' }"
          v-on:click="setCategory('website')">Websites</button>
        <button class="text-4xl lg:mx-8 mb-3" :class="{ 'font-bold': this.category === 'app' }"
          v-on:click="setCategory('app')">Apps</button>
        <button class="text-4xl lg:mx-8 mb-3" :class="{ 'font-bold': this.category === 'content' }"
          v-on:click="setCategory('content')">Content</button>
      </div>
      <Spacer></Spacer>

      <ContentQuery path="/work" :where="{
        type: { $contains: category }
      }" v-slot="{ data }">
        <ContentRenderer :value="data">
          <ul class="case-list">
            <li v-for="article in data" :key="article.slug" class="case-list__item">
              <NuxtLink :to="article._path">
                <article class="bg-black h-96 p-10 flex items-end justify-center">
                  <h2 class="text-white text-center">
                    {{ article.title }}
                  </h2>
                </article>
              </NuxtLink>
            </li>
            <!-- <h1>{{ data }}</h1> -->
          </ul>
        </ContentRenderer>
      </ContentQuery>


    </Container>
  </PageWrapper>
</template>

<style lang="scss" scoped>
$offset: 35px;

.case-list {
  --case-list-offset: 30px;
  padding-top: calc(var(--case-list-offset));
  padding-bottom: 100px;

  @media screen and (min-width: 1280px) {
    --case-list-offset: 50px;
  }

  @media screen and (min-width: 1536px) {
    --case-list-offset: 70px;
  }


  @media screen and (min-width: 1024px) {

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  // @media screen and (max-width: 1024px) {}
}

.case-list__item {
  @media screen and (min-width: 1024px) {
    flex-shrink: 0;
    flex-basis: calc(50% - var(--case-list-offset)/2);
    margin-bottom: 0px;

    &:nth-child(odd) {
      margin-top: calc(var(--case-list-offset) * -1);
    }

    &:nth-child(even) {
      margin-top: var(--case-list-offset);
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
}
</style>