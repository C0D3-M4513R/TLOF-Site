<script>
import angel from '@/assets/team-angel.webp';
import itsJustSage from '@/assets/team-its-just-sage.webp';
import shadowwolfvr from '@/assets/team-shadowwolfvr.webp';
import vaalde from '@/assets/team-vaalde.webp';
import KTZLRMZ from '@/assets/team-KTZLRMZ.webp';
import MotokoSusubo from '@/assets/team-MotokoSusubo.webp';
import Saya from '@/assets/team-Saya.webp';
import SnugglesPrime from '@/assets/team-SnugglesPrime.webp';

import Member from "@/components/team/Member.vue";

export default {
  name: "Team",
  head() {
    return {
      title: this.unhead.formattedTitle("Meet the Team"),
      meta: [
        {
          property: 'og:title',
          content: this.unhead.formattedTitle("Meet the Team"),
        },
        /*OpenGraph description. Mostly for Social Platforms*/
        {
          property: 'og:description',
          content: 'The Land of Future\'s Team'
        },
        /*Description for Search Enginges*/
        {
          name: 'description',
          content: 'The Land of Future\'s Team'
        },
        {
          property: 'og:image',
          content: this.global.imageUrl
        },
        {
          property: 'og:url',
          content: this.global.url + 'team'
        },
        {
          name: 'theme-color',
          content: '#770708'
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url + 'team'
      }
    };
  },
  data: function () {
    return {
      angel: angel,
      itsJustSage: itsJustSage,
      shadowwolfvr: shadowwolfvr,
      vaalde: vaalde,
      KTZLRMZ: KTZLRMZ,
      MotokoSusubo: MotokoSusubo,
      Saya: Saya,
      SnugglesPrime: SnugglesPrime,
    }
  },
  components: {
    Member
  }
}
</script>

<template>
  <div id="content">
    <h1>Meet the Team</h1>
    <div class="members">
      <Member
          name="Angelshooter"
          :image="angel"
          :roles="['Owner', 'Admin']"
          :description="['Creator & Owner of The Land of Future', 'Main DJ', 'Event Coordinator', 'and much, much more']"
          :socials="['https://www.youtube.com/@thelandoffuture', 'https://patreon.com/DJTheLandofFuture', 'https://twitter.com/TheLandofFuture', 'https://www.instagram.com/the_land_of_future/', 'https://www.tiktok.com/@thelandoffuture']"
      />
      <Member
          name="C0D3 M4513R"
          image="https://github.com/C0D3-M4513R.png?size=256"
          :roles="['Co-Admin', 'Security', 'DJ']"
          :description="['Helps Administrate when necessary', 'Created the WebPage', 'Co-Dj']"
          :socials="['https://github.com/C0D3-M4513R','https://twitter.com/C0D3M4513R', 'https://www.twitch.tv/c0d3_m4513r', 'https://www.youtube.com/channel/UC30moJmnYyVmD2RkhRjOxpw']"
      />
      <Member
          name="its just sage"
          :image="itsJustSage"
          :roles="['Security', 'Photograph']"
          :socials="['https://www.youtube.com/channel/UCc0nSwExRN75mM8bJr4nNyA']"
      />
      <Member
          name="ShadowsWolfVR"
          :image="shadowwolfvr"
          :roles="['Security']"
          :socials="[]"
      />
      <Member
          name="Vaalde"
          :image="vaalde"
          :roles="['Security','Special-Dancer']"
          :socials="[]"
      />
      <Member
          name="AliceD"
          image="https://github.com/4liceD.png?size=256"
          :roles="['DJ']"
          :socials="['https://github.com/4liceD', 'https://twitch.tv/4licedj', 'https://twitch.tv/4liced', 'https://twitter.com/4liceD_', 'https://www.youtube.com/channel/UCUhShRY32UCEg44pkTEmZMwa']"
      />
      <Member
          name="KTZLRMZ"
          :image="KTZLRMZ"
          :roles="['DJ']"
          :socials="['https://www.twitch.tv/maxe_killermiez']"
      />
      <Member
          name="MotokoSusubo"
          :image="MotokoSusubo"
          :roles="['DJ']"
          :socials="[]"
      />
      <Member
          name="Saya"
          :image="Saya"
          :roles="['DJ']"
          :socials="['https://ko-fi.com/sayavr', 'https://www.youtube.com/@DVJSaya', 'https://twitter.com/Saya2023Saya']"
      />
      <Member
          name="SnugglesPrime"
          :image="SnugglesPrime"
          :roles="['DJ']"
          :socials="['https://twitter.com/snugglesprime']"
      />
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

.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
