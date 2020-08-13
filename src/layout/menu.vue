<template>
  <div class="layout-menu">
    <!-- 用户登陆 -->
    <!-- 默认菜单 -->
    <div class="menu-wrap">
      <div 
        v-for="(item) in menuList"
        :key="item.type"
        class="menu-block"
      >
        <p class="menu-block-title" v-if="item.title">{{ item.title }}</p>
        <div class="menu-list">
          <div class="menu-item"
            v-for="menuItem in item.children"
            :key="menuItem.name"
          >
            <Icon :size="20" :type="menuItem.meta.icon" class="iconfont"/>
            <span class="menu-title">{{ menuItem.meta.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          type: 'root',
          children: this.$utils.DEFAULT_MENU_LIST
        }
      ]
    }
  },
  computed: {
    menuList() {
      // 尚未登录
      return this.menus
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-menu {
  @include flex-box(colunm, flex-start, flex-start, wrap);
  width: 250px;
  height: 100%;
  background-color: var(--menu-bgcolor);

  > .menu-wrap {
    flex: 1;
    overflow: hidden;
    overflow-y: auto;

    > .menu-block {
      margin-bottom: 16px;

      > p.menu-block-title {
        font-size: $font-size;
        color: var(--font-color-grey2);
        padding-left: 16px;
        margin-bottom: 8px;
      }
      > .menu-list {
        .menu-item {
          @include flex-box(row, flex-start, center, nowrap);
          padding: 12px 18px;
          cursor: pointer;

          &:hover {
            background: var(--menu-item-hover-bg);
          }

          &-active {
            color: $theme-color;
            background: var(--menu-item-active-bg);

            i {
              color: $theme-color;
            }
          }

          .iconfont {
            position: relative;
            top: 1px;
            font-size: $font-size-medium-sm;
          }

          .menu-title {
            font-size: $font-size-medium-sm;
            margin-left: 8px;
          }
        }
      }
    }

  }

}
</style>