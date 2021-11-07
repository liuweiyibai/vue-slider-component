<template>
  <VueSlider
    v-model="value"
    :width="400"
    :min="1"
    :max="100"
    :interval="1"
    dragOnClick
    :dotSize="25"
    :lazy="true"
  >
    <template #dot="{value}">
      {{ value }}
    </template>
  </VueSlider>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import VueSlider from '../lib/vue-slider'

@Options({
  components: {
    VueSlider,
  },
})
export default class App extends Vue {
  value = [10, 20]
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(210, 29%, 24%);
  margin: 100px auto;
}
.vue-slider-dot {
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3498db;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}
</style>
