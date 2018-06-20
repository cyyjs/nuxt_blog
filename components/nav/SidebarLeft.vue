<template>
    <div class="sidebar">
        <nav class="nav-links" @click="$emit('toggle-sidebar')">
            <nuxt-link class="nav-item" to="/">Home</nuxt-link>
            <nuxt-link class="nav-item" to="/blog">Blog</nuxt-link>
            <nuxt-link class="nav-item" to="/favorite">Favorite</nuxt-link>
        </nav>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.nav-item {
    display: block;
    line-height: 1.25rem;
    font-size: 1.1em;
    padding: 0.5rem 0 0.5rem 1.5rem;
    font-weight: 600;
    &.nuxt-link-exact-active {
        color: #46bd87;
    }
}
</style>

