<script setup lang="ts">
import { useSlots } from "vue";
import { useRouter } from "vue-router";
const slots = useSlots();
const router = useRouter();
interface Props {
  returnable?: boolean;
}
const prop = defineProps<Props>();

const emit = defineEmits(["onReturn"]);
function handleReturn() {
  emit("onReturn");
}
</script>

<template>
  <div class="container">
    <div class="layout">
      <div v-if="slots.top" class="top-bar-container">
        <span v-show="prop.returnable" class="return-btn" @click="handleReturn">
          <i class="iconfont icon-a-icon_fanhuidaohang" />
        </span>
        <div class="top-bar">
          <slot name="top" />
        </div>
      </div>
      <div class="main-container">
        <div v-if="slots.menu" class="menu-container">
          <slot name="menu" />
        </div>
        <div class="main-box">
          <slot name="main" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;

  .menu-container {
    background-color: #fff;
  }

  .layout {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    .top-bar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      background-color: transparent;

      .return-btn {
        width: 1.5rem;
        height: 1.25rem;
        // text-align: center;
        cursor: pointer;
      }

      .top-bar {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .main-container {
      flex: 1;
      display: flex;
      // flex-direction: column;

      min-height: 0%;
      background-color: transparent;

      .main-box {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 8px;
        gap: 8px;
        overflow: auto;
      }
    }
  }
}
</style>
