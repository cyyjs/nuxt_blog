<template>
    <div class="sidebar">
        <div class="sidebar-head">
            <div class="head">
                <switch-theme>
                    <img src="~assets/img/logo.svg" alt="head">
                </switch-theme>
            </div>
        </div>
        <nav class="nav-links" @click="$emit('toggle-sidebar')">
            <nuxt-link class="nav-item" to="/"><i class="iconfont icon-zhuye"></i> Home</nuxt-link>
            <nuxt-link class="nav-item" to="/blog"><i class="iconfont icon-wenzhang1"></i> Blog</nuxt-link>
            <nuxt-link class="nav-item" to="/favorite"><i class="iconfont icon-shoucang"></i> Favorite</nuxt-link>
            <nuxt-link class="nav-item" to="/about"><i class="iconfont icon-wo"></i> About</nuxt-link>
            <a class="nav-item" target="_blank" href="https://github.com/cyyjs"><i class="iconfont icon-st-github"></i> GitHub</a>
        </nav>
    </div>
</template>
<script>
import SwitchTheme from '~/components/SwitchTheme';
export default {
  components: {
    SwitchTheme
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
    .sidebar-head {
        text-align: center;
        padding: 2.6rem 0;
        margin-bottom: 20px;
        background-color: #efefef;
        .head {
            display: inline-block;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 5px solid #fff;
            box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
            transition: 0.2s ease-in-out;
            padding: 20px;
            background: #adb;
        }
    }
}
.nav-item {
    display: block;
    line-height: 1.25rem;
    font-size: 1.2em;
    padding: 0.8rem 0 0.8rem 2.5rem;
    font-weight: 600;
    & .iconfont {
        font-size: 1.2em;
        margin-right: 10px;
    }
    &.nuxt-link-exact-active {
        color: #46bd87;
        background-color: rgba(238, 238, 238, 0.3);
    }
}
</style>

