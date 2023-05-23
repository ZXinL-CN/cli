<script lang="ts" setup>
import { toRefs, withDefaults } from 'vue';
interface Props {
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  width: '200px'
})
const { width } = toRefs(props)
const emits = defineEmits<{
  (e: 'search'): void
  (e: 'reset'): void
  (e: 'input'): void
  (e: 'change'): void
  (e: 'blur'): void
  (e: 'focus'): void
  (e: 'enter'): void
}>()
</script>
<template>
  <div class="search-group">
    <div class="search-title">
      <slot />
    </div>
    <el-input v-bind="$attrs" class="search-input" placeholder="请输入关键字" @input="emits('input')"
              @change="emits('change')" @blur="emits('blur')" @focus="emits('focus')" @keyup.enter="emits('enter')"
    />
    <div class="btn-group">
      <BaseButton @click="emits('search')">查询</BaseButton>
      <BaseButton type="info" @click="emits('reset')">重置</BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 36px;

  .search-title {
    white-space: nowrap;
    margin-right: 5px;
    font-size: 14px;
    color: #29344E;
  }

  .search-input {
    box-sizing: border-box;
    width: v-bind(width);
    height: 32px;
    margin-right: 20px;
    border-radius: 2px;
    outline: none;
    border: 1px solid #c8ccda;

    & ::v-deep(.el-input__inner) {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 20px;
      padding: 0 12px;
    }
  }
}
</style>