<script>
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 14
    }
  },
  data() {
    return {};
  },
  methods: {
    getIconCls() {
      let cls = `icon-${this.type}`;
      if (this.color) {
        cls += ` icon-color-${this.color}`;
      }
      return cls;
    },
    onClick(e) {
      this.$emit("click", e);
    },
    getIconStyle() {
      const chromeMinSize = 12
      // 支持小于12px
      const retStyle = { fontSize: `${this.size}px` }
      if (this.size < chromeMinSize) {
        const ratio = this.size / chromeMinSize
        retStyle.transform = `scale(${ratio})`
      }
      return retStyle
    }
  },
  render() {
    // 返回dom
    const Icon = (
      <i
        onClick={this.onClick}
        class={`iconfont icon-component ${this.getIconCls()}`}
        style={this.getIconStyle()}
      >
      </i>
    )
    return Icon
  },
};
</script>

<style lang="scss" scoped>
.icon-component {
  cursor: pointer;
}
.icon-color {
  // 通过prop传入这几个字段
  // 可以使用默认的几个颜色
  &-theme {
    color: $theme-color;
  }
  &-white {
    color: $white;
  }
  &-shallow {
    color: var(--font-color-shallow-grey);
  }
}
</style>