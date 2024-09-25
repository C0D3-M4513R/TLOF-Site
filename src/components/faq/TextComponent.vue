<script>
export default {
  name: "TextComponent",
  props: {
    text: {
      type: [String, Array, Object],
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
    isText() {
      return typeof this.text === 'string'
    },
    isArray(){
      return typeof this.text == 'object' && Array.isArray(this.text);
    },
    isDynamicComponent(){
      return typeof this.text == 'object' &&
          typeof this.text.component !== 'undefined' &&
          this.text.component !== null;
    },
    innerText(){
      let endText = "";
      if (this.isText) {
        endText = this.text;
      } else if (this.isDynamicComponent) {
        if (typeof this.text.content === 'string') {
          endText = this.text.content;
        }
      }
      for (let replacement of this.replacements) {
        endText = endText.replace(replacement.from, replacement.to)
      }
      return endText
    }
  }
}
</script>

<template>
  <template v-if="isText">
    <a v-html="innerText"></a>
  </template>
  <TextComponent v-else-if="isArray" v-for="text of text" :text="text"></TextComponent>
  <component v-else-if="isDynamicComponent" :is="text.component" v-bind="text.props" v-html="innerText"></component>
</template>
