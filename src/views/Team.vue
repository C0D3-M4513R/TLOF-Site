<script>
import Member from "@/components/team/Member.vue";
const team_path = "assets/team/team-";
const teamLogos = Object.fromEntries(
    Object.entries(import.meta.glob('@/assets/team/team-*.webp',{eager: true})).map(([k, v], _) => [k.slice(k.lastIndexOf(team_path) + team_path.length, -5), v.default])
);

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
          content: this.global.url + 'team/'
        },
        {
          name: 'theme-color',
          content: this.global.themeColor,
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url + 'team/'
      }
    };
  },
  data: function () {
    return teamLogos;
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
          :socials="[global.tlofVRChatUrl, global.discordUrl, global.tlofYoutubeUrl, 'https://patreon.com/DJTheLandofFuture', 'https://twitter.com/TheLandofFuture', 'https://www.instagram.com/the_land_of_future/', 'https://www.tiktok.com/@thelandoffuture']"
      />
      <Member
          name="C0D3 M4513R"
          image="https://github.com/C0D3-M4513R.png?size=256"
          :roles="['Co-Admin', 'Security', 'DJ']"
          :description="['Helps Administrate when necessary', 'Created the WebPage', 'Co-Dj']"
          :socials="['https://github.com/C0D3-M4513R', 'https://ko-fi.com/c0d3_m4513r','https://twitter.com/C0D3M4513R', 'https://www.twitch.tv/c0d3_m4513r', 'https://www.youtube.com/channel/UC30moJmnYyVmD2RkhRjOxpw']"
      />
      <Member
          name="Fissy"
          :image="fissy"
          :roles="['Photograph']"
      />
      <Member
          name="TouchMeSama"
          :image="TouchMeSama"
          :roles="['Special Dancer']"
          :socials="['https://www.youtube.com/@touch_me_sama3773']"
      />
      <Member
          name="Trylobot"
          :image="Trylobot"
          :roles="['Special Dancer']"
      />
      <Member
          name="Smis"
          :image="Smis"
          :roles="['Special Dancer']"
          :socials="['https://www.twitch.tv/scalie_smis']"
      />
      <Member
          name="Werty"
          :image="Werty"
          :roles="['Special Dancer']"
      />
      <Member
          name="BlackWiddow"
          :image="BlackWiddow"
          :roles="['Livestream Team']"
      />
      <Member
          name="Hotdog Milkwater"
          :image="$data['hotdog-milkwater']"
          :roles="['Poster Creator']"
      />
      <template v-if="false">
        <Member
            name="AviDie"
            :image="AviDie"
            :roles="['Special Dancer']"
            :socials="['https://www.instagram.com/avidie_bimbo/']"
        />
        <Member
            name="AliceD"
            image="https://github.com/4liceD.png?size=256"
            :roles="['DJ']"
            :socials="['https://github.com/4liceD', 'https://twitch.tv/4licedj', 'https://twitch.tv/4liced', 'https://twitter.com/4liceD_', 'https://www.youtube.com/channel/UCUhShRY32UCEg44pkTEmZMwa']"
        />
        <Member
            name="Saya"
            :image="Saya"
            :roles="['DJ']"
            :socials="['https://ko-fi.com/sayavr', 'https://www.youtube.com/@DVJSaya', 'https://twitter.com/Saya2023Saya', 'https://vrc.group/SAYA.8833']"
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
        />
        <Member
            name="SnugglesPrime"
            :image="SnugglesPrime"
            :roles="['DJ']"
            :socials="['https://twitter.com/snugglesprime']"
        />
        <Member
            name="Willow"
            :image="willow"
            :roles="['Photograph']"
        />
        <Member
            name="its just sage"
            :image="$data['its-just-sage']"
            :roles="['Security', 'Photograph']"
            :socials="['https://www.youtube.com/channel/UCc0nSwExRN75mM8bJr4nNyA']"
        />
        <Member
            name="ShadowsWolfVR"
            :image="shadowwolfvr"
            :roles="['Security']"
        />
        <Member
            name="Vaalde"
            :image="vaalde"
            :roles="['Security','Special Dancer']"
        />
        <Member
            name="Joy-vr"
            :image="$data['Joy-vr']"
        />
        <Member
            name="SHATAXE"
            :image="SHATAXE"
            :roles="['World Creator']"
        />
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

.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
