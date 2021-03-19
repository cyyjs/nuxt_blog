<template>
  <div class="sidebar-button">
    <i class="iconfont icon-ziyuan icon toggle" @click="$emit('toggle-sidebar')"></i>
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
        font-weight: bold;
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
