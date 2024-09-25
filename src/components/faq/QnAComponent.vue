<script setup>
import { faLink } from "@fortawesome/free-solid-svg-icons";
import TextComponent from "@/components/faq/TextComponent.vue";
</script>
<script>
export default {
  name: "QnAComponent",
  data() {
    return {
      showCopyIcon: false,
      copyNotification: false,
      mobile: false
    }
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    desc: {
      type: [String, Array],
      required: true
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
  mounted() {
    this.mobile = window.innerWidth <= 1280;
  },
  methods: {
    copyToClipboard(event) {
      const url = this.global.url + 'faq/' + this.id + '/';
      navigator.clipboard.writeText(url);
      this.copyNotification = true;
      setTimeout(() => {
        this.copyNotification = false;
      }, 2000);
      event.preventDefault();
    }
  },
  computed: {
    showIcon() {
      return this.mobile || this.showCopyIcon;
    }
  }
}
</script>

<template>
  <div class='qna'>
    <details class="detail" :open="expanded ? '': null">
      <summary @mouseover="showCopyIcon = true" @mouseleave="showCopyIcon = false">
        {{ question }}
        <font-awesome-icon class="copy-icon" v-if="showIcon" :icon="faLink" @click="copyToClipboard"/>
      </summary>
      <div class="desc">
        <TextComponent :text="desc" :replacements="replacements"></TextComponent>
      </div>
    </details>
    <div v-if="copyNotification" class="notification-banner">
      Link copied to clipboard!
    </div>
  </div>
</template>

<style scoped>
.qna {
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s;
}
.qna:hover {
  background-color: var(--color-background-mute);
}

/*borders start*/
.qna {
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
}

.qna:first-child {
  border-top: 1px solid var(--color-border);
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
}
.qna:last-child {
  border-bottom: 1px solid var(--color-border);
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
.qna:last-child .desc {
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
/*borders end*/

details {
  cursor: pointer;
  user-select: none;
}

summary {
  font-size: 1.5rem;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
}

.desc {
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  background-color: var(--color-background-soft);
  transition: background-color 0.2s;
}
.qna:hover .desc {
  background-color: var(--color-background-mute);
}

.desc:deep(a[href]) {
  color: var(--color-primary);
}
.desc:deep(a[href]:hover) {
  color: var(--color-primary-dark);
}

.copy-icon {
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: auto;
}

.copy-icon {
  color: var(--color-link-secondary);
}
.copy-icon:hover {
  color: var(--color-link-secondary-hover);
}

.notification-banner {
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  font-size: 0.8rem;
  background-color: var(--color-background-mute);
  border-radius: 5px;
  z-index: 9999;
}
</style>
