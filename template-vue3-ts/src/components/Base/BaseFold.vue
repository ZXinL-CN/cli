<script setup lang="ts">
import { ref } from "vue";
const isActive = ref(true);
function onClick() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <div class="base-fold">
    <div class="fold-content">
      <transition>
        <slot v-if="isActive" />
      </transition>
      <slot name="open" />
    </div>
    <div class="fold-nav">
      <span @click="onClick">
        <i
          :class="[
            isActive ? 'is-active' : 'not-active',
            'iconfont',
            'icon-icon_xiala',
            'inline-block',
          ]"
        />
        <span class="fold-text">{{ isActive ? "收起" : "展开" }}</span>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inline-block {
  width: 16px;
  height: 16px;
  display: inline-block;
}
.base-fold {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .fold-content {
    flex: 1;
  }
  .fold-nav {
    width: 50px;
    height: 20px;
    cursor: pointer;
    color: #4777ff;
    .fold-text {
      font-size: 14px;
      transition: all 0.5s;
    }
  }
  .not-active {
    transition: all 0.5s;
  }
  .is-active {
    transform: rotate(-180deg);
    transition: all 0.2s;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.2s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
