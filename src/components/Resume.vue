<template>
  <div ref="resumeElement" class="resume_box">
    <div v-html="markdownData"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'Resume',
  props: {
    data: String
  },
  computed: {
    markdownData: function () {
      return marked(this.data)
    }
  },
  methods: {
    goBottom () {
      this.$refs.resumeElement.scrollTop = 100000
    },
    goTop () {
      this.$refs.resumeElement.scrollTop = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.resume_box {
  box-sizing: border-box;
}
</style>
