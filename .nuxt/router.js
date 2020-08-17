import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9f5bb70e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _d29d082e = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _0bacaf63 = () => interopDefault(import('../pages/favorite/index.vue' /* webpackChunkName: "pages/favorite/index" */))
const _a73a7df6 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _6d0f6491 = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _5fec0184 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _9f5bb70e,
    name: "about"
  }, {
    path: "/blog",
    component: _d29d082e,
    name: "blog"
  }, {
    path: "/favorite",
    component: _0bacaf63,
    name: "favorite"
  }, {
    path: "/project",
    component: _a73a7df6,
    name: "project"
  }, {
    path: "/blog/:id",
    component: _6d0f6491,
    name: "blog-id"
  }, {
    path: "/",
    component: _5fec0184,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
