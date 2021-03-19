<template>
    <header class="navbar">
        <sidebar-button @toggle-sidebar="$emit('toggle-sidebar')"/>
        <nuxt-link to="/">
            <logo-img class="logo can-hide"/>
        </nuxt-link>
        <div class="links">
            <search-box></search-box>
            <nav class="nav-links can-hide">
                <nuxt-link class="nav-item" to="/"><i class="iconfont icon-zhuye"></i> Home</nuxt-link>
                <nuxt-link :class="['nav-item',activeClass]" to="/blog"><i class="iconfont icon-wenzhang1"></i> Blog</nuxt-link>
                <nuxt-link class="nav-item" to="/favorite"><i class="iconfont icon-shoucang"></i> Favorite</nuxt-link>
                <nuxt-link class="nav-item" to="/about"><i class="iconfont icon-wo"></i> About</nuxt-link>
                <a class="nav-item" target="_blank" href="https://github.com/cyyjs"><i class="iconfont icon-st-github"></i> GitHub</a>
                <switch-theme></switch-theme>
            </nav>
        </div>
    </header>
</template>
<script>
import SidebarButton from '~/components/nav/SidebarButton'
import SearchBox from '~/components/nav/SearchBox'
import SwitchTheme from '~/components/SwitchTheme'
import LogoImg from './Logo'
export default {
  components: { SidebarButton, SearchBox, SwitchTheme, LogoImg },
  computed: {
    activeClass() {
      return this.$route.path.startsWith('/blog')
        ? 'nuxt-link-exact-active'
        : ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/config';
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    right: 0;
    height: 3.6rem;
    box-sizing: border-box;
    padding: 0.7rem 1.5rem;
    line-height: 2.2rem;
    .logo {
        height: 2.2rem;
        min-width: 2.2rem;
        margin-right: 0.8rem;
        vertical-align: top;
    }
    .site-name {
        font-size: 1.3rem;
        font-weight: 600;
        color: #2c3e50;
        position: relative;
    }
    .links {
        font-size: 0.9rem;
        position: absolute;
        right: 1.5rem;
        top: 0.7rem;
        .nav-links {
            display: inline-block;
            .nav-item {
                cursor: pointer;
                position: relative;
                display: inline-block;
                margin-left: 1.5rem;
                line-height: 2rem;
            }
            .nuxt-link-exact-active {
                // margin-bottom: -2px;
                color: #46bd87;
                // border-bottom: 2px solid #46bd87;
            }
        }
    }
    .search-box {
        display: inline-block;
        position: relative;
        margin-right: 0.5rem;
    }
}
@media (max-width: $MQMobile) {
    .navbar {
        padding-left: 4rem;
        .links {
            .can-hide {
                display: none;
            }
        }
        .logo {
            margin-left: 40%;
        }
    }
}
</style>


