<template>
  <div class="theme">
    <!-- 设定开关 -->
    <p class="title">夜间模式</p>
    <el-switch
      v-model="dark"
      active-color="#b1b1b1"
      inactive-color="#409EFF"
      @change="changeTheme"
      active-value="light"
      inactive-value="dark"
    >
    </el-switch>
  </div>
</template>

<script>
import LightFile from '@/style/themes/variables.js'
import DarkFile from '@/style/themes/variables-dark.js'
export default {
  data() {
    return {
      dark: 'light',
      themeMap: new Map()
    }
  },
  created() {
    // 初始化时获取当前设定的主题
    this.dark = this.$utils.Storage.get(this.$utils.THEME_KEY, 'light')

    this.themeMap.set(this.$utils.THEME_TYPES['dark'], DarkFile)
    this.themeMap.set(this.$utils.THEME_TYPES['light'], LightFile)

    // 切换到淡色，默认取storage
    this.changeTheme(this.$utils.Storage.get(this.$utils.THEME_KEY, undefined))
  },
  methods: {
    // 切换主题
    changeTheme(themeType = 'light') {
      this.$utils.Storage.set(this.$utils.THEME_KEY, themeType)
      Object.keys(this.themeMap.get(themeType)).forEach(key => {
        const value = this.themeMap.get(themeType)[key]
        document.documentElement.style.setProperty(key, value)
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.theme {
  @include flex-box(row, flex-start, center, nowrap);
  > .title {
    margin-right: 16px;
    line-height: 2;
  }
}
</style>