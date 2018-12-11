import Vue from 'vue'
class Util {
    static dateFormat(date) {
        date = date instanceof Date ? date : new Date(date)
        const y = date.getFullYear()
        const m = ('00' + (date.getMonth() + 1)).slice(-2)
        const d = ('00' + date.getDate()).slice(-2)
        if (y && m && d) {
            return `${y}年${m}月${d}日`
        } else {
            return ''
        }
    }
}
const MPlugin = {
    install(Vue, option) {
        Vue.prototype.$get = (url, query) => {
            if (query) {
                let paramsArray = []
                //拼接参数
                Object.keys(query).forEach(key =>
                    paramsArray.push(key + '=' + params[key])
                )
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                } else {
                    url += '&' + paramsArray.join('&')
                }
            }
            return new Promise((res, rej) => {
                fetch(url, params)
                    .then(res => {
                        return res.json()
                    })
                    .then(d => res(d))
                    .catch(e => rej(e))
            })
        }
        Vue.prototype.$util = Util
    }
}
Vue.use(MPlugin)
