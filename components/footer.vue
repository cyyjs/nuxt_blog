<template>
  <footer>
    <a href="https://github.com/cyyjs" target="_blank">
      <img src="~assets/img/github.png" alt="" class="github">
    </a>
    Copyright © 2018-present <a href="mailto:cyyjs@cyyjs.top">Cyyjs</a>
    <div class="link">
      <label for="">友情链接:</label>
      <a href="https://kalacloud.com" target="_blank">卡拉云后台系统</a>
    </div>
  </footer>
</template>
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

  }
}
.github {
    vertical-align: middle;
    text-decoration: none;
    width: 22px;
    height: 22px;
}
</style>
