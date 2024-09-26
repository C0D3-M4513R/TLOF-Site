<script>
import {partners} from "@/data/partners/partners.js";
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
  data(){
    return {partners};
  },
  components: {
    Member,
  }
}
</script>

<template>
  <div id="content">
    <h1>Meet Partners of The Land of Future</h1>
    <div class="partners">
      <template v-for="partner of partners" :key="partner.name">
        <Member v-if="partner.linksBack" :name="partner.name" :image="partner.logo" :socials="partner.socials"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: 20px auto;
}

.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
