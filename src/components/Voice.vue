<template>
  <div ref="vioceElement" class="vioce_box">
    <div class="style_box" v-html="styleData"></div>
    <pre class="highlight_text" v-html="highlightData"></pre>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Vocie',
  props: {
    data: String
  },
  computed: {
    highlightData: function () {
      return Prism.highlight(this.data, Prism.languages.css)
    },
    styleData: function () {
      return `<style>${this.data}</style>`
    }
  },
  methods: {
    goBottom () {
      this.$refs.vioceElement.scrollTop = 100000
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.vioce_box {
  box-sizing: border-box;
  margin: 0 auto;
  width: 45vw;
  .style_box {
    display: none;
  }

  & .highlight_text {
    &::after {
      content: ' ';
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkyMTIyMDk1MTU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExODMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODUxLjIgNjY1LjZoNTEuMmwtMTIuOCAxMTUuMiA5Ni03MC40IDI1LjYgNDQuOC0xMDguOCA1MS4yIDEwOC44IDUxLjItMjUuNiAzOC40LTk2LTcwLjQgMTIuOCAxMTUuMmgtNTEuMmwxMi44LTExNS4yTDc2OCA4OTZsLTI1LjYtNDQuOCAxMDguOC01MS4yLTEwOC44LTUxLjIgMjUuNi00NC44IDk2IDcwLjQtMTIuOC0xMDguOHpNMTI4IDIxNy42bDEyMS42IDQyOC44YzYuNCAxMi44IDEyLjggMTkuMiAyNS42IDI1LjZsMjQzLjIgNjRjMTIuOCAwIDI1LjYgMCAzMi02LjRsMTg1LjYtMTkyYzYuNC02LjQgMTIuOC0xOS4yIDYuNC0zMmwtNzAuNC0yMzYuOGMtNi40LTEyLjgtMTIuOC0xOS4yLTI1LjYtMjUuNkwyMTcuNiAxMzQuNCAxMjggMjE3LjZ6IG00ODAgODMuMmw1Ny42IDE5OC40TDUxMiA2NjUuNmwtMTk4LjQtNTcuNi0xMDIuNC0zNDUuNiAxNDcuMiAxNDcuMmMtNi40IDI1LjYgNi40IDU3LjYgMjUuNiA3Ni44IDEyLjggMTIuOCAzMiAxOS4yIDUxLjIgMTkuMiAxOS4yIDAgMzguNC02LjQgNTEuMi0yNS42IDEyLjgtMTIuOCAxOS4yLTMyIDE5LjItNTEuMiAwLTE5LjItNi40LTM4LjQtMjUuNi01MS4yLTEyLjgtMTkuMi00NC44LTI1LjYtNzAuNC0xOS4yTDI2Mi40IDIxNy42bDM0NS42IDgzLjJ6IG0tNTcuNiA0NDhjMC02LjQgMC0xOS4yIDEyLjgtMjUuNmwxNzIuOC0xNzkuMmMxMi44LTEyLjggMzguNC0xMi44IDUxLjIgMCAxMi44IDEyLjggMTIuOCAzOC40IDAgNTEuMmwtMTcyLjggMTc5LjJjLTEyLjggMTIuOC0zOC40IDEyLjgtNTEuMiAwLTYuNC02LjQtMTIuOC0xMi44LTEyLjgtMjUuNnogbTI1LjYgMjUuNiIgcC1pZD0iMTE4NCIgZmlsbD0iI2Q0MjM3YSI+PC9wYXRoPjwvc3ZnPg==');
      background-repeat: no-repeat;
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
      transform: rotate(0);
    }
    50% {
      opacity: 0;
      transform: rotate(30deg);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg);
    }
  }
}

</style>
