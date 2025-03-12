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
  computed: {
    futureEvents() {
      const currentDateTime = new Date();
      return this.events.filter(v=>v.startDate > currentDateTime);
    },
    pastEvents() {
      const currentDateTime = new Date();
      return this.events.filter(v=>v.startDate <= currentDateTime);
    },
  },
  components: {
    Event,
  },
};
</script>

<template>
  <div id="content">
    <details v-if="pastEvents.length !== 0" :open="futureEvents.length === 0">
      <summary><h1>Previous Events</h1></summary>
      <div class="events boarder">
        <Event
            v-for="event in pastEvents"
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
    </details>
    <details v-if="futureEvents.length !== 0" :open="pastEvents.length === 0">
      <summary><h1>Future Events</h1></summary>
      <div class="events boarder">
        <Event
            v-for="event in futureEvents"
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
    </details>
  </div>
</template>

<style scoped>
.warning {
  border: 10px solid red;
}
.events {
  width: 95%;
  margin: 0 auto;
}

details > summary > h1 {
  display: inline-block;
}

/*borders start*/
.events.boarder > .event {
  border-width: 0 1px 0 1px;
  padding: 0.5em 0.5em 0 1em;
}
.events.boarder > .event:first-child {
  border-top-width: 1px;

}
.events.boarder > .event:last-child {
  border-bottom-width: 1px;
}
.events > .event {
  border-style: solid;
  border-color: var(--color-border);
  border-width: 0;
}

.events > .event:first-child {
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
}
.events > .event:last-child {
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
.events > .event:last-child .desc {
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
/*borders end*/

.events > .event {
  background-color: var(--color-background-mute);
}
.events > .event:nth-child(even) {
  background-color: var(--color-background);
}
</style>
