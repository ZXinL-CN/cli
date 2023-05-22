<script lang="ts" setup>
// 
</script>

<template>
  <el-button v-bind="$attrs">
    <slot>在此填写按钮文本</slot>
  </el-button>
</template>

<style lang="scss" scoped>
.el-button--default,
.el-button--primary {
  min-width: 60px;
  height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  border-radius: 2px;
  border: none;
  color: #ffffff;
  background: #4777ff;

  &:hover {
    background-color: hsla(224, 100%, 74%, 1);
  }

  &:active {
    background-color: hsla(224, 100%, 54%, 1);
  }
}

.el-button--info {
  min-width: 60px;
  height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  border-radius: 2px;
  border: 1px solid #4777ff;
  color: #4777ff;
  background: #ffffff;

  &:hover {
    background-color: rgb(71 119 255 / 0.1);
  }

  &:active {
    background-color: rgb(71 119 255 / 0.2);
  }
}

.el-button {
  &.is-disabled {
    color: #fff;
    background-color: #a0cfff;
    border-width: 4px;
    border-color: #a04f00;

    &:hover {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
  }

  &.el-button--text {
    border: none;
    height: 36px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    border-radius: 2px;
    color: #4777ff;
    background: transparent;
  }

  &.el-button--text.is-disabled {
    background-color: transparent;
    color: #99A0B5;
    cursor: not-allowed;
    border: none;
  }
}
</style>