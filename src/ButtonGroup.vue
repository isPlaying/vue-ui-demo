<template>
  <div class="v-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let child of this.$el.children) {
      let name = child.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `v-button-group的子元素应该全是button，但是现在包含了${name}`
        );
      }
    }
  },
};
</script>

<style lang="less">
.v-button-group {
  display: inline-flex;
  vertical-align: middle;
  & > .v-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>