<template>
  <div :class="pageClasses">
    <navbar @toggle-sidebar="toggleSidebar"></navbar>
    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>
    <sidebar-left @toggle-sidebar="toggleSidebar"></sidebar-left>
    <div class="container">
        <nuxt/>
    </div>
    <m-footer></m-footer>
  </div>
</template>
<script>
import Navbar from '~/components/nav/Navbar'
import SidebarLeft from '~/components/nav/SidebarLeft'
import MFooter from '~/components/footer'
export default {
    components: {
        Navbar,
        SidebarLeft,
        MFooter
    },
    data() {
        return {
            isSidebarOpen: false
        }
    },
    computed: {
        pageClasses() {
            return {
                openpage: this.isSidebarOpen
            }
        }
    },
    methods: {
        toggleSidebar(open) {
            if (typeof open === 'boolean') {
                this.isSidebarOpen = open
            } else {
                this.isSidebarOpen = !this.isSidebarOpen
            }
        }
    }
}
</script>
