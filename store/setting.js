export const state = () => ({
  themeIsDark: '' // 是否为暗黑主题
})

export const mutations = {
  setDark (state, isDark) {
    state.themeIsDark = isDark
  }
}
