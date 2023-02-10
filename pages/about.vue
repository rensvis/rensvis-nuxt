<script>
export default {
};
</script>

<template>
  <div>

    <Head>
      <Title>About - Rens Vis</Title>
      <Meta name="description"
        content="Hey there! I'm a web designer and developer based in the beachy town of Katwijk aan Zee, The Netherlands. I'm all about creativity and having an active lifestyle, whether it's traveling and surfing or building amazing websites and apps." />
    </Head>

    <ThePageHeader title="About"></ThePageHeader>
    <PageWrapper>
      <section>
        <VerticalSpacer></VerticalSpacer>
        <Container class="max-w-5xl md:flex">
          <div class="px-6 mb-10 text-center shrink-0 md:mr-8 h-fit md:mb-0">
            <nuxt-img class="object-cover object-top w-40 max-w-full mx-auto mb-6 rounded-full aspect-square"
              src="/images/pages/about/rens-flowers.jpg" alt="Rens in a field of flowers" />
            <h2 class="mb-1 text-2xl font-semibold ">Rens Vis</h2>
            <p class="mb-3">Web Designer / Developer</p>
            <div class="flex justify-center text-xl">
              <a href="https://github.com/rensvis" target="_blank" aria-label="GitHub"
                class="flex items-center mx-2 md:my-0">
                <ClientOnly>
                  <font-awesome-icon icon="fa-brands fa-github" class="" />
                </ClientOnly>
              </a>
              <a href="https://www.linkedin.com/in/rens-vis-9218a9174/" target="_blank" aria-label="LinkedIn"
                class="flex items-center mx-2 md:my-0">
                <ClientOnly>
                  <font-awesome-icon icon="fa-brands fa-linkedin" class="" />
                </ClientOnly>
              </a>
              <a href="https://www.instagram.com/rensvis" target="_blank" aria-label="Instagram"
                class="flex items-center mx-2 md:my-0">
                <ClientOnly>
                  <font-awesome-icon icon="fa-brands fa-instagram" class="" />
                </ClientOnly>
              </a>
            </div>
          </div>
          <div class="md:ml-8 content-block">
            <p>
              Hey there! I'm a web designer and developer based in the beachy town of Katwijk aan Zee, The
              Netherlands. I'm all about <strong>creativity</strong> and having an <strong>active lifestyle</strong>,
              whether it's
              traveling and surfing
              or building amazing websites and apps.
            </p>
            <p>
              My love for software development started back in 2019, when I was lucky enough to be a part of a
              traineeship program via Calco and I've been hooked ever since. I've had the opportunity to work for some
              pretty
              awesome companies like Nationale Nederlanden and KPN (current), and I'm a part of an amazing consultancy
              agency called Team Rockstars IT.
            </p>
            <p>
              I specialize in creating <strong>great looking interfaces</strong> that offer a unique and <strong>optimal
                user experience</strong>. I
              love working with tools like Angular, Vue/Nuxt, Flutter, and Wordpress, and when it comes to design,
              Figma is my go-to.
            </p>
            <p class="!mb-0">
              When I'm not coding, you can find me exploring the world with a camera in my hand, or simply
              enjoying the Dutch beach life. I love the thrill of adventure and trying new things, and I bring that
              same excitement and drive to my work.
            </p>
          </div>
        </Container>
        <VerticalSpacer></VerticalSpacer>
      </section>
    </PageWrapper>
  </div>
</template>