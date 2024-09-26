<script>
import UnderConstruction from "@/views/UnderConstruction.vue";
import Member from "@/components/team/Member.vue";
export default {
  name: "Team",
  head() {
    return {
      title: this.unhead.formattedTitle("Partners"),
      meta: [
        {
          property: 'og:title',
          content: this.unhead.formattedTitle("Partners of The Land of Future"),
        },
        /*OpenGraph description. Mostly for Social Platforms*/
        {
          property: 'og:description',
          content: 'Partners of The Land of Future'
        },
        /*Description for Search Engines*/
        {
          name: 'description',
          content: 'Partners of The Land of Future'
        },
        {
          property: 'og:image',
          content: this.global.imageUrl
        },
        {
          property: 'og:url',
          content: this.global.url + 'partners/'
        },
        {
          name: 'theme-color',
          content: this.global.themeColor,
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url + 'partners/'
      }
    };
  },
  components: {
    UnderConstruction
  }
}
</script>

<template>
<UnderConstruction></UnderConstruction>
</template>

<style scoped>

</style>