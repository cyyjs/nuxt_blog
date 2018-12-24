import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/css/main.scss'

import _2d21d098 from '../layouts/blog.vue'
import _6f6c098b from '../layouts/default.vue'

const layouts = { "_blog": _2d21d098,"_default": _6f6c098b }

export default {
  head: {"title":"cyy blog","titleTemplate":"%s - Cyy's Blog","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, user-scalable=no"},{"http-equiv":"cleartype","content":"on"},{"http-equiv":"Cache-Control"},{"hid":"keywords","name":"keywords","content":"cyy,博客,前端,JavaScript, Node, Vue,nuxt, Electron"},{"name":"author","content":"cyy6543@gmail.com"},{"hid":"description","name":"description","content":"Cyy的个人博客，技术分享"},{"name":"domain_verify","content":"pmrgi33nmfuw4ir2ejqwy2lcoqxhi33qeiwcez3vnfsceorcgnrgcnzqheytamlfgvstimjzgbqwmmldmuzdozlfgnsdmyrrmjrcelbcoruw2zktmf3gkir2ge2tinjwgm2dsobvgy3tq7i"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Fat.alicdn.com\u002Ft\u002Ffont_955772_y0f2o0sf01a.css"}],"style":[],"script":[]},

  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
