<template>
    <div class="toc" v-if="show">
        <ul class="toc-list">
            <li v-for="(m,i) in data.list" :key="i">
                <a
                    :href="'#'+m.anchor"
                    @click.prevent="jump(m.anchor)"
                    :class="[active1==m.anchor?'active1':'']"
                >{{m.content}}</a>
                <ul v-if="m.children">
                    <li v-for="(n,j) in m.children" :key="j">
                        <a
                            :href="'#'+n.anchor"
                            @click.prevent="jump(n.anchor)"
                            :class="[active2==n.anchor?'active2':'']"
                        >{{n.content}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active1: '',
      active2: '',
      scrollTop: 0,
      anchor: [],
      scrollLock: false
    }
  },
  computed: {
    show() {
      return this.list.length
    },
    data() {
      if (!this.show) {
        return this.list
      }
      let list = [this.list[0]]
      let children = []
      let activeIndex = 0;
      for (let i = 1; i < this.list.length; i++) {
        let item = this.list[i]
        if (item.level > 3) {
          continue
        }
        if (list[activeIndex].level === item.level) {
          activeIndex++
          list.push(item)
        } else {
          list[activeIndex].children = list[activeIndex].children || []
          list[activeIndex].children.push(item)
          children.push({
            p: list[activeIndex].anchor,
            v: item.anchor
          })
        }
      }
      return { list, children }
    }
  },
  watch: {
    $route() {
      let hash = decodeURI(this.$route.hash.slice(1))
      let child = this.data.children.find(i => i.v === hash)
      if (child) {
        this.active1 = child.p
        this.active2 = child.v
      } else {
        this.active1 = hash
        this.active2 = ''
      }
    }
  },
  methods: {
    jump(anchor) {
      window.removeEventListener('scroll', this.onScroll)
      let jump = document.querySelector('#' + anchor)
      let jumpTop = jump.offsetTop - 65
      let scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop - jumpTop == 0) {
        return false
      }
      let step = Math.abs(scrollTop - jumpTop) / 20
      let add = jumpTop > scrollTop
      let timer
      let fn = () => {
        if (add) {
          if (scrollTop < jumpTop && jumpTop - scrollTop > step) {
            scrollTop += step
            document.documentElement.scrollTop = scrollTop
            document.body.scrollTop = scrollTop
            timer = requestAnimationFrame(fn)
          } else {
            document.documentElement.scrollTop = jumpTop
            document.body.scrollTop = jumpTop
            cancelAnimationFrame(timer)
            window.addEventListener('scroll', this.onScroll)
          }
        } else {
          if (scrollTop > jumpTop && scrollTop - jumpTop > step) {
            scrollTop -= step
            document.documentElement.scrollTop = scrollTop
            document.body.scrollTop = scrollTop
            timer = requestAnimationFrame(fn)
          } else {
            document.documentElement.scrollTop = jumpTop
            document.body.scrollTop = jumpTop
            cancelAnimationFrame(timer)
            window.addEventListener('scroll', this.onScroll)
          }
        }
      }
      timer = requestAnimationFrame(fn)
      this.$router.push('#' + anchor)
    },
    setAnchorTop() {
      let list = []
      let p = ''
      for (let i = 0; i < this.list.length; i++) {
        let item = this.list[i]
        if (item.level === 2) {
          p = item.anchor
        }
        let jump = document.querySelector('#' + item.anchor)
        let jumpTop = jump.offsetTop - 65
        list.push({
          p,
          top: jumpTop,
          anchor: item.anchor
        })
      }
      this.$set(this, 'anchor', list)
    },
    getScrolled() {
      let scrolled =
                document.documentElement.scrollTop || document.body.scrollTop
      let anchor = []
      let index;
      for (let i = 0; i < this.anchor.length; i++) {
        if (this.anchor[i].top > scrolled) {
          index = i
          break
        }
      }

      if (index > 0) {
        if (this.anchor[index].top - scrolled < this.anchor[index - 1].top - scrolled) {
          return this.anchor[index]
        } else {
          return this.anchor[index - 1]
        }
      } else if (index === 0) {
        return this.anchor[0]
      } else {
        return this.anchor[this.anchor.length - 1]
      }
    },
    onScroll() {
      let scrolled =
                document.documentElement.scrollTop || document.body.scrollTop
      let anchors = this.getScrolled(scrolled)
      if (anchors.p !== anchors.anchor) {
        this.active2 = anchors.anchor
      } else {
        this.active2 = ''
      }
      this.active1 = anchors.p || anchors.anchor
    }
  },
  mounted() {
    this.active1 = this.list[0] && this.list[0].anchor
    this.$nextTick(function () {
      this.setAnchorTop()
      window.addEventListener('scroll', this.onScroll)
    })
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/config";
@media (max-width: 719px) {
    .toc {
        display: none;
    }
}
.toc {
    width: 200px;
    position: relative;
    margin-right: 20px;
    .toc-list {
        width: 200px;
        background: #fff;
        position: fixed;
        top: 79px;
        bottom: 20px;
        padding-top: 20px;
        a {
            font-weight: 450;
            display: block;
            transition: color 0.3s;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        & > li > a {
            padding: 3px 10px;
        }
        li li a {
            padding: 2px 10px 2px 20px;
            font-weight: 400;
        }
    }
}
.active1 {
    color: $accentColor;
    border-left: 2px solid $accentColor;
}
.active2 {
    color: $accentColor;
}
</style>
