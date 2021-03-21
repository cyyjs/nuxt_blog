<template>
    <div class="about">
        <h1>Project</h1>
        <div class="production">
            <div class="item" v-for="(p, i) in productions" :key="i">
                <div class="content">
                    <a target="_blank" :href="p.url">{{p.name}}</a>
                    <div>{{p.description}}</div>
                    <div class="github">
                        GitHub：
                        <a :href="p.git" target="_blank">{{p.git}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Project'
    }
  },
  data() {
    return {
      productions: [
        {
          name: "CEditor",
          description: "基于Hexo的博客发布客户端",
          url: "http://ceditor.cyyjs.top/",
          git: "https://github.com/cyyjs/ceditor"
        }, {
          name: "CVC",
          description: "日历、省市选择、时段选择、拖放排序Vue组件",
          url: "https://cyyjs.github.io/cvc",
          git: "https://github.com/cyyjs/cvc"
        }, {
          name: "electron-dev-runner",
          description: "在Electron开发环境使用的启动工具,支持TS、Vite、自动重启",
          url: "https://github.com/cyyjs/electron-dev-runner",
          git: "https://github.com/cyyjs/electron-dev-runner"
        }, {
          name: "electron-router",
          description: "electron主进程与渲染进程ipc通信工具。",
          url: "https://github.com/cyyjs/electron-router",
          git: "https://github.com/cyyjs/electron-router"
        }, {
          name: "gitlab-repo-db",
          description: "基于Gitlab 仓库文件存储的数据库",
          url: "https://github.com/cyyjs/gitlab-repo-db",
          git: "https://github.com/cyyjs/gitlab-repo-db"
        }, {
          name: "ctm-cli",
          description: "基于模板快速创建项目的脚手架工具",
          url: "https://github.com/cyyjs/ctm-cli",
          git: "https://github.com/cyyjs/ctm-cli"
        }, {
          name: "npm-extensions",
          description: "npm包快速搜索chrome插件",
          url: "https://chrome.google.com/webstore/detail/npm-%E6%90%9C%E7%B4%A2%E5%B7%A5%E5%85%B7/nokkfeigeiimdbmjfangcilebeginckf",
          git: "https://github.com/cyyjs/npm-extensions"
        }, {
          name: "scss2css-vscode",
          description: "VSCode SCSS转CSS插件 ",
          url: "https://cyyjs.github.io/scss2css-vscode/",
          git: "https://github.com/cyyjs/scss2css-vscode"
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
.github {
    font-size: 0.8rem;
    color: #666;
}
.github a {
    display: inline-block;
}
</style>

