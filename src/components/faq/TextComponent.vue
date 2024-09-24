<script>
export default {
  name: "TextComponent",
  props: {
    text: {
      type: [String, Array, Object],
      required: true
    },
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
    }
  }
}
</script>

<template>
  <template v-if="isText">
    <a v-html="text"></a>
  </template>
  <TextComponent v-else-if="isArray" v-for="text of text" :text="text"></TextComponent>
  <component v-else-if="isDynamicComponent" :is="text.component" v-bind="text.props" v-html="text.content"></component>
</template>
