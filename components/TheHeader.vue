<script>
export default {
  data() {
    return {
      isMobileMenuVisible: false
    };
  },
  methods: {
    toggleMobileMenu() {
      console.log('toggleMobileMenu');
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
      if (this.isMobileMenuVisible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  },
};

</script>
<template>
  <header class="header flex items-center pt-12 pb-12 px-5 md:pt-36 md:pb-28 md:px-10 lg:px-20 md:text-lg">
    <NuxtLink to="/">
      <div class="">
        <span class="block font-bold">Rens Vis</span>
        <span class="block">Frontend Developer, KPN</span>
      </div>
    </NuxtLink>
    <nav class="ml-auto hidden sm:block">
      <ul class="flex">
        <li class="mx-7">
          <NuxtLink to="/work">Work</NuxtLink>
        </li>
        <li class="ml-7">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="sm:hidden ml-auto">
      <div class="hamburger" v-on:click="toggleMobileMenu" :class="{'hamburger--open': isMobileMenuVisible}">
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
      </div>
    </div>
    <div class="mobile-menu text-xl sm:hidden" :class="{ 'mobile-menu--visible': isMobileMenuVisible }">
      <ul class="flex">
        <li class="mx-7">
          <NuxtLink to="/" v-on:click="toggleMobileMenu">Home</NuxtLink>
        </li>
        <li class="mx-7">
          <NuxtLink to="/work" v-on:click="toggleMobileMenu">Work</NuxtLink>
        </li>
        <li class="ml-7">
          <NuxtLink to="/about" v-on:click="toggleMobileMenu">About</NuxtLink>
        </li>
      </ul>
    </div>

  </header>
</template>

<style scoped lang="scss">
.hamburger {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 101;
  position: relative;


  &__line {
    width: 30px;
    height: 2px;
    background-color: #000;
    margin: 3px 0;
    transition: all 0.3s ease;

    &:nth-of-type(2) {
      width: 20px;
    }
  }

  &--open {
    .hamburger__line {
      &:nth-of-type(1) {
        transform: rotate(45deg) translateY(1px);
        margin: 0;
      }

      &:nth-of-type(2) {
        transform: rotate(-45deg) translateY(-1px);
        width: 30px;
        margin: 0;
      }
    }
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 100;
  transform: translateX(100%);
  transition: all 0.3s ease;

  &--visible {
    transform: translateX(0);
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 20px 0;
    }
  }
}
</style>