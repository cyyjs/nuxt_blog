<template>
  <a class="nav-item icon-theme" @click="changeTheme"><i :class="['iconfont', themeList[themeIndex]]"></i> {{ hideText?'':themeText[themeIndex]}}</a>
</template>

<script>
export default {
  props: {
    hideText: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      themeList: [
        'icon-themelightdark', // 自动
        'icon-ai250', // 浅色
        'icon-lkingboyewanyueliang' // 深色
      ],
      themeText: [
        '自动',
        '浅色',
        '深色'
      ],
      themeIndex: 0,
      darkMode: null
    }
  },
  mounted () {
    // 获取MediaQueryList对象
    this.darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    if (!this.darkMode) {
      return
    }
    let isDark = sessionStorage.getItem('dark')
    if (!isDark) {
      this.themeIndex = this.darkMode.matches ? 2 : 1
    } else if (isDark === 'true'){
      this.themeIndex = 2
    } else {
      this.themeIndex = 1
    }
    this.toggleDarkClass(this.themeIndex) 
    // 监听主题切换事件 
    this.darkMode.addEventListener('change', e => { 
      this.toggleDarkClass(e.matches ? 2 : 1) 
    });
  },
  methods: {
    toggleDarkClass(type) {
      if (type === 2) {
        document.body.classList.add('dark');
        sessionStorage.setItem('dark', 'true')
        this.themeIndex = 2
      } else if(type === 1){
        document.body.classList.remove('dark');
        sessionStorage.setItem('dark', 'false')
        this.themeIndex = 1
      } else {
        const isDark = this.darkMode && this.darkMode.matches
        if (isDark) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
        sessionStorage.removeItem('dark')
        this.themeIndex = 0
      }
    },
    changeTheme() {
      if (this.themeIndex < 2) {
        this.themeIndex++;
      } else {
        this.themeIndex = 1;
      }
      this.toggleDarkClass(this.themeIndex)
    }
  }
}
</script>

<style>

</style>