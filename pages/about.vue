<template>
    <div class="about">
        <h1>关于我</h1>
        <h3>个人作品</h3>
        <div class="production">
            <div class="item" v-for="(p, i) in productions" :key="i">
                <img class="logo" :src="p.logo">
                <div class="content">
                    <a target="_blank" :href="p.url">{{p.name}}</a>
                    <div>{{p.description}}</div>
                    <div class="platform">支持平台：{{p.platform}}</div>
                </div>
            </div>
        </div>
        <h3>公众号</h3>
        <div class="img">
            <img src="~assets/img/qrcode.jpg" alt="">
            <p>关注微信公众号，了解更多。</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            productions: [
                {
                    name: '智能识图',
                    logo: 'https://cyyjs.github.io/static/captionBot120.png',
                    description: '智能识别图像，汽车、菜肴、身份证、驾照等',
                    url: 'http://m3w.cn/znst',
                    platform: 'Android、微信小程序'
                },
                {
                    name: 'EBlog',
                    logo: 'https://cyyjs.github.io/static/eblog120.png',
                    description: '技术文章分享',
                    url: 'http://m3w.cn/eblog',
                    platform: 'Android'
                },
                {
                    name: 'CEditor',
                    logo: 'https://cyyjs.github.io/static/ceditor256.png',
                    description: '基于Hexo的博客发布客户端',
                    url: 'http://ceditor.alibt.top/',
                    platform: 'macOS、Windows'
                }
            ]
        }
    }
}
</script>
<style scoped>
h1 {
    padding: 20px;
    text-align: center;
}
h3 {
    padding-left: 20px;
}
p {
    margin: 20px;
}
.production {
    text-align: left;
    line-height: 30px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
}
.item {
    margin-bottom: 20px;
    display: flex;
    width: 50%;
}
.img {
    margin-top: 20px;
}
@media (max-width: 719px) {
    .item {
        width: 100%;
    }
    .img {
        text-align: center;
    }
}
a {
    color: #46bd87;
    display: block;
    font-weight: bold;
}
.logo {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    margin-right: 20px;
}
.platform {
    font-size: 0.8rem;
    color: #666;
}
</style>

