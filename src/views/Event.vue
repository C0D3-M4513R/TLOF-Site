<script>
import {eventImages} from "@/data/events/eventImages.js";
import {events} from "@/data/events/eventsPosters.js"
import Event from "@/components/events/Event.vue";
export const isServer = typeof window === 'undefined';

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
          content: 'Pictures for the Event ' + this.localEventDate,
        },
        /*Description for Search Engines*/
        {
          name: 'description',
          content: 'Pictures for the Event ' + this.localEventDate,
        },
        {
          property: 'og:image',
          content: this.global.imageUrl
        },
        {
          property: 'og:url',
          content: this.global.url + "events/" + this.$route.params.datetime + "/"
        },
        {
          name: 'theme-color',
          content: this.global.themeColor,
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url + "events/" + this.$route.params.datetime + "/"
      }
    };
  },
  data(){
    const eventDate = new Date(this.$route.params.datetime);
    return {
      event: events.filter(event => event.startDate.getTime() === eventDate.getTime())[0],
      images: eventImages[eventDate.toISOString()]
    }
  },
  computed: {
    eventDate(){
      return new Date(this.$route.params.datetime);
    },
    localEventDate(){
      let date = this.eventDate.toLocaleString();
      if (isServer) date += " UTC";
      return date;
    },
  },
  components: {
    Event,
  },
};
</script>

<template>
  <div id="wrapper">
    <div class="heading">
      <div>
        <h1>Images for {{event.name}} on {{localEventDate}}</h1>
        <h2 v-if="event.club">at {{event.club}}</h2>
        <h3 v-if="event.description">{{event.description}}</h3>
      </div>
    </div>
    <div class="contents">
      <img v-for="image in images" :src="image" alt="Event Image">
    </div>
  </div>
</template>

<style scoped>
.heading {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contents {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: .5em;
}
.contents > img {
  max-width: 45%;
}
</style>
