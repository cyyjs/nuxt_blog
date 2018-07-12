export default ({ app: { router }, store }) => {
  /*
      ** 每次路由变更时进行pv统计
      */
  router.afterEach((to, from) => {
    var _hmt = _hmt || []
    ;(function() {
      if (document.getElementById('baidu_hm')) {
        document
          .getElementsByTagName('head')[0]
          .removeChild(document.getElementById('baidu_hm'))
      }
      var hm = document.createElement('script')
      hm.id = 'baidu_hm'
      hm.src = 'https://hm.baidu.com/hm.js?88c2ed27bf67e687fcc2b0a17c2bbbe0'
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
  })
}
