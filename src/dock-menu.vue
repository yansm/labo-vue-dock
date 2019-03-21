<template>
  <div class="labo-dock-area" >
    <transition :name="transName">
      <keep-alive v-if="$router.options.keepAlive">
        <router-view ref="routerView" class="labo-dock-scroll" :style="{height: `calc(100% - ${height})`, top: positionTop}"/>
      </keep-alive>
      <router-view v-else ref="routerView" class="labo-dock-scroll" :style="{height: `calc(100% - ${height})`, top: positionTop}"/>
    </transition>
    <div class="labo-dock-box" :class="{[areaClass]: !!areaClass}" :style="{height}">
      <div class="labo-dock-item"
        :class="{active: $route.path === item.path, [item.itemClass]: !!item.itemClass, [dockClass]: !!dockClass}" 
        :key="idx" 
        @click="handleClick(item.path)"
        v-for="(item, idx) of dock"
      >
        {{item.text}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transName: '',
      positionTop: 'unset'
    }
  },
  created() {
    console.log(this.$router)
    console.log(this.$route)
    console.log(this)
  },
  props: {
    dock: {
      default: []
    },
    height: {
      default: '60px'
    },
    areaClass: {
      default: ''
    },
    dockClass: {
      default: ''
    },
    position: {
      default: 'bottom'
    }
  },
  methods: {
    handleClick(path) {
      const curPath = this.$route.path
      this.positionTop = this.$refs.routerView.$el.offsetTop
      if (this.dock.findIndex(d => d.path === curPath) < this.dock.findIndex(d => d.path === path)) {
        this.transName = 'labo-dock-trans-left'
      } else {
        this.transName = 'labo-dock-trans-right'
      }
      this.$router.push(path)
    }
  }
}
</script>
<style lang="stylus" scoped>
.labo-dock-area
  box-sizing border-box
  height 100%
  *
    box-sizing border-box
.labo-dock-scroll
  height 100%
  overflow auto
  -webkit-overflow-scrolling touch
  transition transform .5s
.labo-dock-box
  position absolute
  bottom 0
  left 0
  right 0
  display flex
  z-index 99
  >div
    flex 1
.labo-dock-item
  display flex
  flex-direction column
  align-items center
  justify-content center
  font-size 16px
  outline none
  -webkit-tap-highlight-color transparent

</style>
<style lang="stylus">
.labo-dock-trans-left-enter-active,.labo-dock-trans-left-leave-active,
.labo-dock-trans-right-enter-active,.labo-dock-trans-right-leave-active
  position absolute
  width 100%
  left 0
  will-change transform

.labo-dock-trans-left-enter-active
  transform translate3d(100%, 0, 0)
.labo-dock-trans-right-enter-active
  transform translate3d(-100%, 0, 0)
.labo-dock-trans-left-leave-active,.labo-dock-trans-right-leave-active
  transform translate3d(0, 0, 0)

.labo-dock-trans-right-leave-to
  transform translate3d(100%, 0, 0)
.labo-dock-trans-left-leave-to
  transform translate3d(-100%, 0, 0)
.labo-dock-trans-left-enter-to,.labo-dock-trans-right-enter-to
  transform translate3d(0, 0, 0)
</style>


