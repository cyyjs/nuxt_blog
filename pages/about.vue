<template>
    <div class="about">
        <h1>关于我</h1>
        <h3>技能标签</h3>
        <div class="skill">
            <div class="skill-title">前端</div>
            <div>
                <span class="skill-item" v-for="skill in skills1" :key="skill">{{skill}}</span>
            </div>
        </div>

        <div class="skill">
            <div class="skill-title">服务端</div>
            <div>
                <span class="skill-item" v-for="skill in skills2" :key="skill">{{skill}}</span>
            </div>
        </div>
        <div class="skill">
            <div class="skill-title">数据库</div>
            <div>
                <span class="skill-item" v-for="skill in skills3" :key="skill">{{skill}}</span>
            </div>
        </div>
        <div class="skill">
            <div class="skill-title">客户端</div>
            <div>
                <span class="skill-item" v-for="skill in skills4" :key="skill">{{skill}}</span>
            </div>
        </div>

        <div class="skill">
            <div class="skill-title">其他</div>
            <div>
                <span class="skill-item" v-for="skill in skills5" :key="skill">{{skill}}</span>
            </div>
        </div>

        <h3>GitHub</h3>
        <p>
            <a href="https://github.com/cyyjs" target="_blank">https://github.com/cyyjs</a>
        </p>
        <h3>技术栈</h3>
        <p>
            <a target="_blank" href="https://stackshare.io/cyyjs">stackshare</a>
        </p>
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
            <img src="~assets/img/qrcode.jpg" alt>
            <p>关注微信公众号，了解更多。</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            skills1: ["HTML", "CSS", "JS", "ES6/7", "Vue", "Webpack", "SCSS"],
            skills2: ["Node.js", "koa", "express", "Think.js", "Nuxt.js"],
            skills3: ["Mongodb", "MySQL", "Redis", "memcached"],
            skills4: ["Electron", "微信小程序", "uniapp"],
            skills5: ["Git", "Docker", "Nginx"],
            productions: [
                {
                    name: "博客系统",
                    logo: "https://qn.alibt.top/4d9a0059-bba8-4e0e-b6e5-f7912d2fe7f7.png",
                    description: "个人博客",
                    url: "http://alibt.top",
                    platform: "Web、H5"
                },
                {
                    name: "智能识图",
                    logo: "https://cyyjs.github.io/static/captionBot120.png",
                    description: "智能识别图像，汽车、菜肴、身份证、驾照等",
                    url: "http://m3w.cn/znst",
                    platform: "Android、微信小程序"
                },
                {
                    name: "EBlog",
                    logo: "https://cyyjs.github.io/static/eblog120.png",
                    description: "技术文章分享",
                    url: "http://m3w.cn/eblog",
                    platform: "Android"
                },
                {
                    name: "CEditor",
                    logo: "https://cyyjs.github.io/static/ceditor256.png",
                    description: "基于Hexo的博客发布客户端",
                    url: "http://ceditor.alibt.top/",
                    platform: "macOS、Windows"
                }
            ]
        };
    }
};
</script>
<style scoped>
.about {
    background-color: #fff;
    padding: 10px;
    margin-top: 75px;
}
@media (max-width: 720px) {
    .about {
        margin-top: 0;
    }
}
h1 {
    padding: 20px;
    text-align: center;
}
h3 {
    padding-left: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

p {
    margin: 20px;
}
.skill {
    padding: 0 20px 10px 20px;
    display: flex;
}
.skill > div:last-child {
    flex: 1;
    text-align: left;
}
.skill-title {
    font-weight: 500;
    text-align: right;
    padding-right: 10px;
    line-height: 30px;
    width: 70px;
}
.skill-item {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #46bd87;
    color: #fff;
    display: inline-block;
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
    flex-shrink: 0;
}
.platform {
    font-size: 0.8rem;
    color: #666;
}
</style>

