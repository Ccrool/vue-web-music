<template>
  <div class="layout-header">
    <!-- 左 -- 路由导航+icon -->
    <div class="header-left">

    </div>
    <!-- 右 -- 搜索 + 主题模式 -->
    <div class="header-right">
      <div class="search-box"></div>
      <!-- 主题组件 -->
      <theme />
    </div>
  </div>
</template>

<script>
import Theme from '@/components/theme'
export default {
  data() {
    return {

    }
  },
  components: {
    Theme
  }
}
</script>

<style lang="scss" scoped>
.layout-header {
  @include flex-box(row, space-between, center, nowrap);
  height: $header-height;
  background: var(--header-bgcolor);
  padding: {
    right: 36px;
    left: 36px;
  }
  > .header-left {
    @include flex-box(row, flex-start, center, nowrap);
  }
  > .header-right {
    @include flex-box(row, flex-end, center, nowrap);

    > .search-wrap {
      margin-right: 16px;
    }
  }
}
</style>