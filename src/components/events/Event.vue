<script>
import TextComponent from "@/components/faq/TextComponent.vue";
export const isServer = typeof window === 'undefined';
import fs from 'fs';

export default {
  name: "Event",
  components: {TextComponent},
  props: {
    name: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    poster: {
      type: [ String, Array ],
      required: false,
    },
    club: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    links: {
      type: Array,
      required: false
    },
  },
  computed: {
    startDateIso(){
      return this.startDate.toISOString();
    },
    humanStartDate() {
      let date = this.startDate.toLocaleString();
      if (isServer) date += " UTC";
      return date;
    },
    optionalLink(){
      if (!fs.existsSync(`../../assets/events/${this.startDateIso}`)) return null;
      console.log(this.startDateIso, " exists")
      return {name: 'Event', params: {datetime: this.startDateIso}};
    },
    posterArray(){
      if (Array.isArray(this.poster)) return this.poster;
      if (typeof this.poster === 'string') return [this.poster];
      return [];
    }
  }
}
</script>

<template>
  <div class="event">
    <component :is="optionalLink == null?'a':'router-link'" :to="optionalLink">
      <div class="container">
        <div class="description">
          <h1>{{name}} - {{humanStartDate}}</h1>
          <h2 v-if="club">at {{club}}</h2>
          <h3 v-if="description">{{description}}</h3>
        </div>
        <img class="poster" v-for="poster of posterArray" :src="poster" alt="Poster"/>
      </div>
    </component>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  column-gap: .75em;
  row-gap: .75em;
}
.description {
  flex-grow: 1;
}

.poster {
  height: 10em;
}

.event {
  min-height: 10em;
}
</style>