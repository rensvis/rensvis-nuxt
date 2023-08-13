<script setup lang="ts">
const logos = [
  {
    alt: 'KPN logo',
    src: '/images/pages/home/kpn-logo.png',
    url: 'https://kpn.com',
    ariaLabel: 'KPN website'
  },
  {
    alt: 'Nationale Nederlanden logo',
    src: '/images/pages/home/nn-logo.png',
    url: 'https://nn.nl',
    ariaLabel: 'Nationale Nederlanden website'
  },
  {
    alt: 'Team Rockstars IT logo',
    src: '/images/pages/home/teamrockstars-logo.png',
    url: 'https://teamrockstars.nl',
    ariaLabel: 'Team Rockstars IT website'
  },
  {
    alt: 'Calco logo',
    src: '/images/pages/home/calco-logo.png',
    url: 'https://calco.nl',
    ariaLabel: 'Calco website'
  },
];
</script>

<template>
  <div>

    <Head>
      <Title>Rens Vis, designer & developer</Title>
      <Meta name="description" content="Websites with wow-factor" />
    </Head>

    <ThePageHeader :showImage="true"></ThePageHeader>

    <PageWrapper>

      <VerticalSpacer></VerticalSpacer>

      <Container>
        <div class="flex flex-wrap items-center justify-center gap-3 mb-3 md:gap-6">
          <a v-for="logo of logos" target="_blank" :href="logo.url" :aria-label="logo.ariaLabel">
            <img :src="logo.src" :alt="logo.alt"
              class="object-contain h-10 max-w-[100px] sm:h-12 sm:max-w-[120px] md:h-16 md:max-w-[150px] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all">
          </a>
        </div>
        <p class="text-xs text-center sm:text-sm text-neutral-400" style="text-wrap:balance">Some company's I've worked
          for.</p>
      </Container>

      <VerticalSpacer></VerticalSpacer>

      <Container class="">
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
            <div class="basis-[30%] mb-10 lg:mb-0 shrink-0 grow-0" style="text-wrap:balance">
              <h3 class="mb-10 text-2xl font-semibold">Design that stands out</h3>
              <p>No standard templates here. Let's bring your idea to life in a <span class="font-semibold">bold
                  design</span> that is uniquely yours.
                Think logos, branding and more! 🖌️</p>
            </div>
            <div class="basis-[30%] mb-10 lg:mb-0 shrink-0 grow-0" style="text-wrap:balance">
              <h3 class="mb-10 text-2xl font-semibold">Next level websites</h3>
              <p>I'll help you create a <span class="font-semibold">lasting online presence</span> by building an awesome
                custom website, app or webshop. Your users will thank you. 🙏
              </p>
            </div>
            <div class="basis-[30%] mb-10 lg:mb-0 shrink-0 grow-0" style="text-wrap:balance">
              <h3 class="mb-10 text-2xl font-semibold">Unbeatable SEO</h3>
              Beautiful websites with no traffic are lonely places. <span class="font-semibold">Boost your website's
                visibility</span> with expert SEO techniques. I know
              Google's secret. 🔍
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