<script>
import UnderConstruction from "@/views/UnderConstruction.vue";

export default {
  head() {
    return {
      title: this.unhead.baseTitle,
      meta: [
        {
          property: 'og:title',
          content: this.unhead.baseTitle,
        },
        /*OpenGraph description. Mostly for Social Platforms*/
        {
          property: 'og:description',
          content: 'Psytrance, Bigroom and Harstyle VRChat Parties'
        },
        /*Description for Search Enginges*/
        {
          name: 'description',
          content: 'Psytrance, Bigroom and Harstyle VRChat Parties'
        },
        {
          property: 'og:image',
          content: this.global.imageUrl
        },
        {
          property: 'og:url',
          content: this.global.url
        },
        {
          name: 'theme-color',
          content: this.global.themeColor,
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url
      }
    };
  },
  components: {
    UnderConstruction,
  },
};
</script>

<template>
  <UnderConstruction></UnderConstruction>
</template>
