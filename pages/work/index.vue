<script>

export default {
  data() {
    return {
      category: ''
    };
  },
  methods: {
    setCategory(category) {
      this.category = category;
    }
  }
};
</script>

<template>
  <div>
    <ThePageHeader title="Work"></ThePageHeader>
    <PageWrapper>
      <VerticalSpacer></VerticalSpacer>
      <PageIntro>Here's a quick look at projects I'm proud off.</PageIntro>
      <VerticalSpacer></VerticalSpacer>
      <Container class="flex flex-col flex-wrap items-start lg:flex-row">
        <button class="mb-3 text-4xl lg:mr-8" :class="{ 'font-bold': category === '' }"
          v-on:click="setCategory('')">All</button>
        <button class="mb-3 text-4xl lg:mx-8" :class="{ 'font-bold': category === 'website' }"
          v-on:click="setCategory('website')">Websites</button>
        <button class="mb-3 text-4xl lg:mx-8" :class="{ 'font-bold': category === 'app' }"
          v-on:click="setCategory('app')">Apps</button>
        <button class="mb-3 text-4xl lg:mx-8" :class="{ 'font-bold': category === 'content' }"
          v-on:click="setCategory('content')">Content</button>
      </Container>
      <VerticalSpacer></VerticalSpacer>

      <section>
        <Container class="">
          <ContentQuery path="/work" :sort="{ date: -1 }" :where="{
            type: { $contains: category }
          }" v-slot="{ data }">
            <ContentRenderer :value="data">
              <!-- <div v-if="loading" class="max-w-md px-4 py-10 mx-auto text-center loader">
            <span v-for="i in 10" v-bind:key="i" class="loader__part">/</span>
          </div> -->
              <TransitionGroup tag="ul" name="filter-articles" class="case-list">
                <li v-for="article in data" :key="article._path" class="case-list__item">
                  <WorkItemCard :title="article.title" :image="article.image" :route="article._path">
                  </WorkItemCard>
                </li>
              </TransitionGroup>
            </ContentRenderer>
          </ContentQuery>
        </Container>
      </section>
    </PageWrapper>
  </div>
</template>

<style lang="scss" scoped>
.case-list {
  --case-list-offset: 30px;
  padding-bottom: 100px;
  position: relative; // important for animation


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

  &__item {
    margin-bottom: var(--case-list-offset);
    width: 100%;
    position: relative;
    z-index: 3;

    @media screen and (min-width: 1024px) {
      flex-shrink: 0;
      flex-grow: 0;
      width: calc(50% - var(--case-list-offset)/2);
    }

  }

  // animations
  /* 1. declare transition */
  .filter-articles-move,
  .filter-articles-enter-active,
  .filter-articles-leave-active {
    transition: all .6s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .filter-articles-move {
    z-index: 2;
  }

  .filter-articles-enter-active {
    z-index: 1;
  }

  .filter-articles-leave-active {
    z-index: 0;
  }

  /* 2. declare enter from and leave to state */
  .filter-articles-enter-from,
  .filter-articles-leave-to {
    opacity: 0;
    transform: scale(0.5) skew(20deg, 20deg);
  }

  /* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
  .filter-articles-leave-active {
    position: absolute;
  }
}

// loader
// .loader {
//   --load-dur: .5s;
//   --load-char-count: 10;

//   &__part {
//     animation: loadingCharBlink var(--load-dur) infinite;
//   }

//   @for $i from 1 to 10 {
//     &__part:nth-child(#{$i}) {
//       animation-delay: calc(#{$i} * var(--load-dur) / var(--load-char-count));
//     }
//   }

//   @keyframes loadingCharBlink {
//     0% {
//       opacity: 1;
//     }

//     5% {
//       opacity: 0;
//     }

//     10% {
//       opacity: 1;
//     }

//     100% {
//       opacity: 1;
//     }
//   }
// }
</style>