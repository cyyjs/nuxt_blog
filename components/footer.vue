<template>
  <footer>
    <a href="https://github.com/cyyjs" target="_blank">
      <img src="~assets/img/github.png" alt="" class="github">
    </a>
    Copyright © 2018-present <a href="mailto:cyyjs@cyyjs.top">Cyyjs</a>
    <div class="link">
      <label for="">友情链接:</label>
      <a v-for="item in links" :key="item.url" :href="item.url" target="_blank">{{item.name}}</a>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      links: [{
        name: '卡拉云后台系统',
        url: 'https://kalacloud.com'
      }, {
        name: '东隅已逝|桑榆非晚',
        url: 'https://h1z3y3.me/'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
footer {
    padding: 3.5rem 0;
    text-align: center;
    color: #4e6e8e;
    margin: auto;
    margin-top: 10px;
    background-color: #fff;
}
.link {
  margin-top: 10px;
  font-size: 14px;
  label {
    font-weight: bold;
  }
  a {
    color: #666;
    &::after {
      content: '|';
      margin: 0 10px;
    }
    &:last-child::after {
      content: '';
    }
    &:hover {
      color: #46bd87;
    }
  }
}
.github {
    vertical-align: middle;
    text-decoration: none;
    width: 22px;
    height: 22px;
}
</style>
