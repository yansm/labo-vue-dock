<template>
  <div>
    <h2>pageB</h2>
    <button @click="show = true">fullscreen mask test</button>
    <div class="mask" v-if="show" @click="show = false"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
<style lang="stylus" scoped>
  h2
    color #999
    font-size 30px
    font-weight 200
    padding 0 20px
    border-bottom 1px solid #ccc
    margin 0
    line-height 2
  button
    padding 10px 20px
    background #108ee9
    border none 
    color #fff
    display block
    outline none
    margin 40px auto
  .mask
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    background rgba(0,0,0,.3)
</style>
