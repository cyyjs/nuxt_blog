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
          name: "Tool",
          description: "常用工具客户端",
          url: "https://github.com/cyyjs/tool",
          git: "https://github.com/cyyjs/tool"
        }, {
          name: "Easy Mock",
          description: "可视化快速生成模拟数据的持久化服务。",
          url: "https://mock.cyyjs.top",
          git: "https://github.com/cyyjs/easy-mock"
        }, {
          name: "cityMultiple",
          description: "省市多选jQuery插件 ",
          url: "http://cyyjs.github.io/cityMultiple/",
          git: "https://github.com/cyyjs/cityMultiple"
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

