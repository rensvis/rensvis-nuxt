<script>
export default {
};
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <ThePageHeader title="Oopsy"></ThePageHeader>
    <PageWrapper>
      <section>
        <VerticalSpacer></VerticalSpacer>
        <Container class="max-w-5xl">
          <p class="mb-4">Something is a little off here. Why don't you try any of the following?</p>
          <nav class="">
            <ul class="">
              <li class="mb-1">
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li class="mb-1">
                <NuxtLink to="/work">Work</NuxtLink>
              </li>
              <li class="mb-1">
                <NuxtLink to="/about">About</NuxtLink>
              </li>
            </ul>
          </nav>
        </Container>
        <VerticalSpacer></VerticalSpacer>
      </section>
    </PageWrapper>
    <TheFooter></TheFooter>
  </div>
</template>