<template>
    <header class="navbar">
        <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
        <nuxt-link to="/">
            <img class="logo" src="~assets/img/logo.png" alt="">
            <span class="site-name can-hide">Cyy's Blog</span>
        </nuxt-link>
        <div class="links">
            <search-box></search-box>
            <nav class="nav-links can-hide">
                <nuxt-link class="nav-item" to="/">Home</nuxt-link>
                <nuxt-link :class="['nav-item',activeClass]" to="/blog">Blog</nuxt-link>
                <nuxt-link class="nav-item" to="/favorite">Favorite</nuxt-link>
            </nav>
        </div>
    </header>
</template>
<script>
import SidebarButton from "~/components/nav/SidebarButton";
import SearchBox from "~/components/nav/SearchBox";
export default {
  components: { SidebarButton, SearchBox },
  computed: {
    activeClass() {
      return this.$route.path.startsWith("/blog")
        ? "nuxt-link-exact-active"
        : "";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/css/config";
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  right: 0;
  height: 3.6rem;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
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
        margin-bottom: -2px;
        border-bottom: 2px solid #46bd87;
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
  }
}
</style>


