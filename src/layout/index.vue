<template>
  <div class="layout-index">
    <!-- 头部 -->
    <layout-header />
    <!-- 主体 -->
    <div class="layout-body">
      <!-- 菜单 -->
      <div class="layout-menu">
        <layout-menu />
      </div>
      <!-- 内容 -->
      <div class="layout-content" id="page-content">

      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from './header'
import LayoutMenu from './menu'
export default {
  data() {
    return {

    }
  },
  components: {
    LayoutHeader,
    LayoutMenu
  },
};
</script>

<style lang="scss" scoped>
.layout-index {
  height: 100%;

  > .layout-body {
    @include flex-box(row, flex-start, flex-start, nowrap);
    // 高度 = 总高度 - 头部
    height: calc(100% - #{$header-height});

    > .layout-menu {
      // 再减去缩小的播放器高度
      height: calc(100% - #{$mini-player-height});
    }

    > .layout-content {
      // 占位
      flex: 1;
      height: calc(100% - #{$mini-player-height});
      overflow-y: auto;
      min-width: $layout-content-min-width;
      margin-bottom: $mini-player-height;
    }
  }
}
</style>