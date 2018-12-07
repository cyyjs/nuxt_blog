<template>
    <div class="sidebar">
        <nav class="nav-links" @click="$emit('toggle-sidebar')">
            <nuxt-link class="nav-item" to="/"><i class="iconfont icon-zhuye"></i> Home</nuxt-link>
            <nuxt-link class="nav-item" to="/blog"><i class="iconfont icon-wenzhang1"></i> Blog</nuxt-link>
            <nuxt-link class="nav-item" to="/favorite"><i class="iconfont icon-shoucang"></i> Favorite</nuxt-link>
            <nuxt-link class="nav-item" to="/about"><i class="iconfont icon-wo"></i> About</nuxt-link>
        </nav>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.sidebar {
    padding-top: 4.5rem;
}
.nav-item {
    display: block;
    line-height: 1.25rem;
    font-size: 1.2em;
    padding: 0.6rem 0 0.6rem 1.5rem;
    font-weight: 600;
    i {
        font-size: 1.2em;
    }
    &.nuxt-link-exact-active {
        color: #46bd87;
    }
}
</style>

