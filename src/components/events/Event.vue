<script>
import TextComponent from "@/components/faq/TextComponent.vue";

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
    images: {
      type: [String, Array],
      required: false
    },
    expanded: {
      type: Boolean,
      required: true
    },
    replacements: {
      type: Array,
      default: [],
      required: false,
      validator(value) {
        for (value of value) {
          if (typeof value.from !== 'string' || typeof value.to !== 'string') {
            return false;
          }
        }
        return true;
      }
    }
  },
  computed: {
    humanStartDate() {
      return this.startDate.toLocaleString()
    }
  }
}
</script>

<template>
  <div class="event">
    <details class="detail" :open="expanded ? '': null" :disabled="images?null:''">
      <summary :tabindex="images ? null : '-1'">
        <img class="poster" v-if="Array.isArray(poster)" v-for="poster of poster" :src="poster" alt="Poster"/>
        <img class="poster" v-else-if="poster" :src="poster" alt="Poster"/>
        <h1>{{name}} - {{humanStartDate}}</h1>
        <h2 v-if="club">at {{club}}</h2>
        <h3 v-if="description">{{description}}</h3>
      </summary>
      <div class="desc" v-if="images">
        <TextComponent :text="images" :replacements="replacements"></TextComponent>
      </div>
    </details>
  </div>
</template>

<style scoped>
.poster:not(:last-of-type) {
  margin-left: 0.5em;
}

.poster {
  float: right;
  height: 9em;
}
.event {
  min-height: 10em;
}
details {
  cursor: pointer;
}
details > summary {
  list-style: none;
}
details[disabled] summary,
details.disabled summary {
  cursor: default;
  pointer-events: none;
}
details[disabled],
details.disabled {
  cursor: default;
}
@media (max-width: 1000px) {
   details > summary {
     display: flex;
     flex-direction: row;
     flex-flow: wrap;
   }
  details > summary > h1 {
    order: 1;
  }
  details > summary > h2 {
    order: 2;
  }
  details > summary > h3 {
    order: 3;
  }
  details > summary > h1,
  details > summary > h2,
  details > summary > h3 {
    min-width: 100%;
  }
  .poster {
    order: 1337;
  }
  .poster:not(:first-of-type) {
    margin-left: 0.5em;
  }
  .poster:not(:last-of-type) {
    margin-left: 0;
  }
}
</style>