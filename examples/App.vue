<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus">
body, html
  margin 0
  font-size 18px
  height 100%
  overflow hidden
#app
  height 100%
.test-dock
  box-shadow 0 0 20px rgba(0, 0, 0, .2)
  .labo-dock-item
    color #999
    &.active
      color #333
</style>
