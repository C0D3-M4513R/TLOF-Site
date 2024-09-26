<script>
import UnderConstruction from "@/views/UnderConstruction.vue";
import Event from "@/components/events/Event.vue";
import {events} from "@/data/events/events.js";

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
          content: 'Past and Future Events by The Land of Future'
        },
        /*Description for Search Enginges*/
        {
          name: 'description',
          content: 'Past and Future Events by The Land of Future'
        },
        {
          property: 'og:image',
          content: this.global.imageUrl
        },
        {
          property: 'og:url',
          content: this.global.url + "events/"
        },
        {
          name: 'theme-color',
          content: this.global.themeColor,
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url + "events/"
      }
    };
  },
  data(){
    return {
      events,
    }
  },
  methods: {
    expanded(startDateTime) {
      const dateTime = this.$route.params.dateTime;
      if (typeof dateTime === 'undefined') return false;
      return new Date(dateTime) === startDateTime;
    }
  },
  components: {
    Event,
    UnderConstruction,
  },
};
</script>

<template>
  <UnderConstruction/>
  <div class="events">
    <Event
        v-for="event in events"
        class="event"
        :key="event.startDate.toISOString()"
        :name="event.name"
        :start-date="event.startDate"
        :poster="event.poster"
        :description="event.description"
        :club="event.club"
        :expanded="expanded(event.startDate)"
    />
  </div>
</template>

<style scoped>
.events {
  padding-top: 50px;
}
/*borders start*/
.events > .event {
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
}

.events > .event:first-child {
  border-top: 1px solid var(--color-border);
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
}
.events > .event:last-child {
  border-bottom: 1px solid var(--color-border);
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
.events > .event:last-child .desc {
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
.events > .event {
  background-color: var(--color-background-mute);
  padding: 20px;
}
.events > .event:nth-child(even) {
  background-color: var(--color-background);
}
/*borders end*/
</style>
