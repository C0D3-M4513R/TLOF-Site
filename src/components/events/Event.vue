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
      type: String,
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
        <img class="poster" v-if="poster" :src="poster" alt="Poster"/>
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
.poster {
  float: right;
  height: 9em;
}
.event {
  height: 10em;
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
  pointer-events: none; /* prevents click events */
  user-select: none; /* prevents text selection */
}
details[disabled],
details.disabled {
  cursor: default;
}

</style>