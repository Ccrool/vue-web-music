<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import Layout from '@/layout/index'
export default {
  data() {
    return {

    }
  },
  components: {
    Layout
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  background-color: var(--body-bgcolor);
  font-size: $font-size;
}
</style>
