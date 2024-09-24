<script>
export default {
  name: "NotFound",
  head() {
    return {
      title: this.unhead.formattedTitle("404"),
      meta: [
        {
          property: 'og:title',
          content: this.unhead.formattedTitle("404"),
        },
        /*OpenGraph description. Mostly for Social Platforms*/
        {
          property: 'og:description',
          content: 'Ketting, A fork of MinecraftForge with added Bukkit & Spigot patches'
        },
        /*Description for Search Enginges*/
        {
          name: 'description',
          content: 'Ketting, A fork of MinecraftForge with added Bukkit & Spigot patches'
        },
        {
          property: 'og:image',
          content: this.global.imageUrl
        },
        {
          property: 'og:url',
          content: this.global.url + '404/'
        },
        {
          name: 'theme-color',
          content: this.global.themeColor,
        },
      ]
    };
  },
  methods: {
    getRandomCaption() {
      const messages = [
        "Looks like this page went on a digital vacation!",
        "Well, this is awkward... Did someone misplace the page?",
        "Oops! This page seems to have vanished into the digital abyss.",
        "Houston, we have a problem. The page seems to have gone missing!",
        "Whoopsie daisy! This page seems to have slipped through the cracks.",
        "Looks like the page is playing hide and seek. Can you find it?",
        "Uh-oh! It seems this page has gone incognito.",
        "Where did this page wander off to...",
        "Sense of direction not found... for the page.",
        "Looks like this page took a detour through the cyber jungle!",
        "This page seems to have mastered the art of vanishing!",
        "Well, well, well... Looks like the page decided to take a digital vacation.",
        "Looks like the page went on a quest for the legendary WiFi signal.",
        "Where did this page run off to? It's playing hard to get!",
        "This page must be on a secret mission. Shh... don't blow its cover!",
        "This page is currently experiencing technical difficulties in locating itself.",
      ];

      return messages[Math.floor(Math.random() * messages.length)];
    }
  }
}
</script>

<template>
<div class="centered">
  <h1>404</h1>
  <h2>Page not found</h2>
  <p>{{ getRandomCaption() }}</p>
</div>
</template>

<style scoped>
.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  text-align: center;

  user-select: none;
}

h1 {
  font-size: 12rem;
}

h2 {
  font-size: 3.2rem;

  /*Ugly hack, but it works, so I'm not complaining*/
  margin-top: -50px;
  margin-bottom: 15px;
}

p {
  font-size: 2.2rem;
  padding: 0 20px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 8rem;
  }

  h2 {
    font-size: 2.4rem;
    margin-top: -30px;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.8rem;
  }
}
</style>
