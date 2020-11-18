<template>
  <div class="sidebar-button">
    <svg class="icon toggle" @click="$emit('toggle-sidebar')" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512">
      <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" class=""></path>
    </svg>
    <switch-theme hide-text></switch-theme>
  </div>
</template>
<script>
import SwitchTheme from '~/components/SwitchTheme';
export default {
    components: { SwitchTheme },
    data() {
        return {
            open: false
        }
    }
}
</script>

<style lang="scss">
@import '~assets/css/config';

.sidebar-button {
    display: none;
    position: absolute;
    padding: 0.6rem;
    top: 0;
    left: 10px;
    .icon {
        display: inline-block;
        width: 1.25rem;
        height: 1.25rem;
    }
    & i {
        font-size: 1.25rem;
    }
}

@media (max-width: $MQMobile) {
    .sidebar-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 70px;
        svg {
            transition: transform 0.2s;
            transform-origin: center center;
        }
    }
    .openpage .sidebar-button > svg {
        transform: rotate(90deg);
    }
}
</style>
