module.exports = {
  /*
    ** Headers of the page
    */
  head: {
    title: 'Cyyjs',
    titleTemplate: "%s - Cyyjs", // title is now "My Example App - Yay!"
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'Cache-Control' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'cyyjs, 博客, 前端, JavaScript, Node.js, Vue, nuxt, Electron'
      },
      { name: 'author', content: 'cyyjs@cyyjs.com' },
      {
        hid: 'description',
        name: 'description',
        content: 'Cyy的个人博客，技术分享'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://i.alibt.top/picgo/logo/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_955772_f8vajunptqc.css' }
    ],
    script: [
      // { src: '/js/drift.js', async: true, defer: true } // 在线聊天
    ],
  },
  css: [
    { src: '~assets/css/main.scss', lang: 'scss' } // 指定 scss 而非 sass
  ],
  
  /*
    ** Customize the progress bar color
    */
  loading: { color: '#3B8070' },
  /*
    ** Build configuration
    */
  router: {
    linkActiveClass: 'active-link'
  },
  plugins: [
    '~plugins/mplugin',
    { src: '~plugins/statistics.js', ssr: false }
    // { src: '~plugins/ba.js', ssr: false }
  ],
  build: {
    /*
        ** Run ESLint on save
        */
    vendor: ['~/plugins/axios'],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL
  }
}
