<template>
  <button class="v-button" :class="{ [`icon-${position}`]: true }">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: ["icon", "position"],
};
</script>

<style lang="less">
.v-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  background: var(--button-bg);
  border: 1px solid var(--border-color);
  display: inline-flex;
  justify-content: ceneter;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  & > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  & > .content {
    order: 2;
  }
  &.icon-right {
    & > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
    & > .content {
      order: 1;
    }
  }
}
</style>