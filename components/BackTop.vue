<template>
  <div class="back-top">
    <ul>
      <li v-show="scrollTop > 300" class="tooltip" data-title="返回顶部" @click="toTop">
        <img src="~assets/img/back-top.svg" alt="">
      </li>
      <!-- <li data-title="关注公众号" @click.stop="showCode = !showCode"  class="tooltip wxcode-btn"><img src="~assets/img/head.svg" alt=""> </li> -->
    </ul>
    <div :class="['wxcode', showCode ? 'wxcode-show': ''] ">
      <img id="wxcode" src="~assets/img/qrcode.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scrollTop: 0,
      showCode: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll)
      window.addEventListener('click', this.clickBody)
    })
  },
  methods: {
    toTop () {
      let scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop
      const step = scrollTop / 20
      let timer
      const fn = () => {
        if (scrollTop > step) {
          scrollTop -= step
          document.documentElement.scrollTop = scrollTop
          document.body.scrollTop = scrollTop
          timer = requestAnimationFrame(fn)
        } else {
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
          cancelAnimationFrame(timer)
        }
      }
      timer = requestAnimationFrame(fn)
    },
    onScroll () {
      this.scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop
    },
    clickBody (e) {
      if (e.target.id === 'wxcode') {
        return false
      }
      if (this.showCode) {
        this.showCode = false
      }
    }
  }
}
</script>
