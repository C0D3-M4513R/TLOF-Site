<script>
import MainSection from '@/components/home/sections/Main.vue';
import AboutSection from '@/components/home/sections/About.vue';
import StatsSection from '@/components/home/sections/Stats.vue';

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
          content: '#770708'
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url
      }
    };
  },
  components: {
    MainSection,
    AboutSection,
    StatsSection,
  },
};
</script>

<template>
  <main>
    <MainSection id="heading" />
    <AboutSection />
    <StatsSection />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
}

section {
  background-color: var(--color-background-mute);
  padding: 40px;
}
section:nth-child(even) {
  background-color: var(--color-background);
}

section h1 {
  font-size: 3em;
  margin-bottom: 10px;
}
section h2,
section h3 {
  margin-bottom: 20px;
  color: var(--color-text);
}
section h2 {
  font-size: 2.2em;
}
section h3 {
  font-size: 1.5em;
}

@media (max-width: 768px) {
  section h1 {
    font-size: 2.5em;
  }
  section h2 {
    font-size: 1.8em;
  }
  section h3 {
    font-size: 1.2em;
  }
}
</style>
