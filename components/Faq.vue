<script lang="ts" setup>
const faqs = [
  {
    question: "How much do you charge for a website?",
    answer: "That totally depends on the size and complexity of your project. I will always give you a quote before we start working together. Feel free to reach out to get a quote, no strings attached."
  },
  {
    question: "Can I update my website content myself?",
    answer: "Absolutely! All the websites I create come with a user-friendly content management system (CMS) that allows you to update and add content easily."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Depending on the complexity and size of the project, it can take anywhere from a few days to a few weeks. I can give a more accurate timeline after understanding your specific needs."
  },
  {
    question: "Do you provide website maintenance after the project is finished?",
    answer: "Yes, I offer various website maintenance packages depending on your needs. This could include updates, backups, bug fixing, and content changes."
  },
  // {
  //   question: "Are your websites mobile-friendly?",
  //   answer: "Yes, all of the websites I build are responsive and optimized for mobile devices to ensure a seamless user experience across all devices."
  // },
  // {
  //   question: "Do you build web shops too?",
  //   answer: "Yes, I have experience in designing e-commerce websites and can create a custom solution to fit your online sales needs."
  // },
  {
    question: "Will my website be SEO friendly?",
    answer: "Absolutely! I design all websites with SEO best practices in mind to ensure your site is well-positioned on search engines and will out-compete your competition."
  },
  {
    question: "Do you use Wordpress?",
    answer: "Many of the projects in <a target='_blank' href='/work'>my showcase</a> are built with Wordpress. If a project really requires it I can build a custom Wordpress site. If not I prefer to use a more modern approach using tools like Nuxt.js in combination with a CMS named <a target='_blank' href='https://www.sanity.io/'>Sanity</a>. This makes your website faster, more secure, easier to maintain and provides a much nicer content management experience."
  },
];


</script>

<template>
  <div class="">
    <div v-for="(faq, index) in faqs" v-bind:key="faq.question" class="faq-entry">
      <input :id="`chk-${index}`" type="checkbox" hidden>
      <label :for="`chk-${index}`"
        class="flex items-center justify-between gap-2 text-lg font-bold cursor-pointer faq-question">
        <p>
          {{ faq.question }}
        </p>
        <font-awesome-icon class="faq-plus" :icon="['fas', 'plus']" />
      </label>
      <div class="faq-answer">
        <div class="faq-answer__content styled-text text-neutral-700">
          <p class="py-4">
            <span v-html="faq.answer"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.faq-entry {
  position: relative;
  padding: 24px 0;

  // media query for mobile
  @media (min-width: 800px) {
    &:hover {
      .faq-plus {
        transform: rotate(10deg) scale(1.05);
      }
    }
  }

  input:checked {
    &~.faq-answer {
      grid-template-rows: 1fr;
    }

    &~.faq-question {
      .faq-plus {
        transform: rotate(45deg);
      }
    }
  }

  &:not(:last-child) {
    border-bottom: solid 1px rgb(97, 97, 97);
  }
}

.faq-question {
  .faq-plus {
    transition: transform 0.2s ease-in-out;
  }
}

.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s ease-in-out;

  &__content {
    overflow: hidden;
    grid-row: span 2;
  }
}
</style>