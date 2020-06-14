<template>
  <div id="app">
    <Voice ref="voiceBox" :data="voiceString"></Voice>
    <Resume ref="resumeBox" :data="resumeString"></Resume>
  </div>
</template>

<script>
import Voice from './components/Voice.vue'
import VoiceConfig from './config/voice'
import Resume from './components/Resume.vue'
import ResumeConfigCN from './config/resume/chinese'

export default {
  name: 'App',
  components: {
    Voice,
    Resume
  },
  data () {
    return {
      voiceString: '',
      resumeString: '',
      duration: 30
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.typeVoice(0).then(() => {
        this.typeResume().then(() => {
          this.typeVoice(1).then(() => {
            this.$nextTick(() => {
              this.$refs.resumeBox.goTop()
            })
          })
        })
      })      
    },
    typeVoice (round) {
      return this._typeString(VoiceConfig[round], this.$refs.voiceBox, 1)
    },
    typeResume () {
      return this._typeString(ResumeConfigCN, this.$refs.resumeBox, 2)
    },
    _typeString (src, ref, type) {
      return new Promise((resolve) => {
        let index = 0
        const _doType = function () {
          if (index >= src.length) {
            resolve()
            return
          }
          if (type === 1) {
            this.voiceString += src.charAt(index)
          } else {
            this.resumeString += src.charAt(index)
          }
          index++
          if (src.substring(index - 1, index) === '\n') {
            this.$nextTick(() => {
              ref.goBottom()
            })
          }
          setTimeout(_doType, this.duration)
        }.bind(this)

        _doType()
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
