<script>
import QnA from '@/components/faq/QnAComponent.vue';
import {questionsAndAnswers} from "@/data/faq/questions.js";

export default {
  name: "Faq",
  head() {
    return {
      title: this.unhead.formattedTitle("FAQ"),
      meta: [
        {
          property: 'og:title',
          content: this.ogTitle
        },

        /*OpenGraph description. Mostly for Social Platforms*/
        {
          property: 'og:description',
          content: this.ogDescription
        },
        /*Description for Search Engines*/
        {
          name: 'description',
          content: this.ogDescription
        },
        {
          property: 'og:image',
          content: this.global.imageUrl
        },
        {
          property: 'og:url',
          content: this.global.url + 'faq/'
        },
        {
          name: 'theme-color',
          content: this.global.themeColor,
        },
      ],
      link: {
        rel: 'canonical',
        href: this.global.url + 'faq/'
      }
    };
  },
  data() {
    return {
      questionsAndAnswers
    };
  },
  components: {
    QnA
  },
  methods: {
    replacePlaceholders(str) {
      let newStr = str;
      newStr = newStr.replace('%GITHUB_URL%', this.global.githubUrl);
      newStr = newStr.replace('%FEATHER_INSTALL_URL%', this.global.featherInstallUrl);
      return newStr;
    },
    expanded(id) {
      return this.$route.params.id === id;
    }
  },
  computed: {
    ogTitle() {
      if (this.$route.params.id) {
        const qna = this.questionById;
        if (qna)
          return qna.question;
      }
      return this.unhead.formattedTitle("FAQ");
    },
    ogDescription() {
      if (this.$route.params.id) {
        const qna = this.questionById;
        if (typeof qna.safe === 'string') {
          return this.replacePlaceholders(qna.safe);
        } else if (typeof qna.answer === 'string')
          return this.replacePlaceholders(qna.answer);
      }
      return 'The Land of Future: FAQ';
    },
    questionById() {
      return this.questionsAndAnswers.find(q => q.id === this.$route.params.id);
    },
  }
}
</script>

<template>
  <div id="content">
    <h1>FAQ</h1>
    <div class="questions">
      <QnA
          class="question"
          v-for="qna in questionsAndAnswers"
          :id="qna.id"
          :key="qna.id"
          :question="qna.question"
          :desc="qna.answer"
          :expanded="expanded(qna.id)"
          :replacements="[{from: '%DISCORD_URL%', to: global.discordUrl}]"
      />
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

.questions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.question {
  width: 65vw;
}
</style>
