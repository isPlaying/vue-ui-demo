<template>
  <button
    class="v-button"
    :class="{ [`icon-${position}`]: true }"
    @click="$emit('click')"
  >
    <v-icon v-if="icon && !loading" :name="icon" class="icon"></v-icon>
    <v-icon v-if="loading" name="loading" class="loading icon"></v-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>

<style lang="less">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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
  & > .loading {
    animation: spin 1.5s infinite ease;
  }
}
</style>