<template>
  <div class="layout-menu">
    <!-- 用户登陆后菜单 -->
    <!-- 默认菜单 -->
    <div class="menu-wrap">

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
          children: []
        }
      ]
    }
  },
  computed: {
    menuList: []
  }
};
</script>

<style lang="scss" scoped>
</style>