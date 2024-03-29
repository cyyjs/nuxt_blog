/*
** 只在生成模式的客户端中使用
*/
// if (!process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
/*
    ** Google 统计分析脚本
    */
// ; (function (i, s, o, g, r, a, m) {
//     i['GoogleAnalyticsObject'] = r
//     ; (i[r] =
//             i[r] ||
//             function () {
//                 ; (i[r].q = i[r].q || []).push(arguments)
//             }),
//     (i[r].l = 1 * new Date())
//     ; (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
//     a.async = 1
//     a.src = g
//     m.parentNode.insertBefore(a, m)
// })(
//     window,
//     document,
//     'script',
//     'https://www.google-analytics.com/analytics.js',
//     'ga'
// )

// ga('create', 'UA-98939871-4', 'auto')
// }

export default ({ app: { router }, store }) => {
  /*
    ** 每次路由变更时进行pv统计
    */

  router.afterEach((to, from) => {
    /*
        ** 告诉 GA 增加一个 PV
        */
    // ga('set', 'page', to.fullPath)
    // ga('send', 'pageview')

    // 百度统计
    if (document.getElementById('baidu_hm')) {
      try {
        document
          .getElementsByTagName('head')[0]
          .removeChild(document.getElementById('baidu_hm'))
      } catch (error) {
        document.getElementById('baidu_hm').remove()
      }
    }
    const hm = document.createElement('script')
    hm.id = 'baidu_hm'
    hm.src = 'https://hm.baidu.com/hm.js?88c2ed27bf67e687fcc2b0a17c2bbbe0'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })
}
