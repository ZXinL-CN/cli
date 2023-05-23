<script setup lang="ts">
import { ref, withDefaults } from 'vue'
import { ElMessage } from 'element-plus'
const inputValue = ref('')
interface Props {
  name?: string
  modelValue?: boolean
  title?: string
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '请再次输入内容确认:',
  name: '',
  width: '360px'
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function onInput() {
  console.log(props.name);
  console.log(inputValue.value);
  if (props.name == inputValue.value) {
    emits('update:modelValue', true)
  } else {
    emits('update:modelValue', false)
  }
}

function onCopy() {
  navigator.clipboard.writeText(props.name).then(() => {
    ElMessage.success('内容已复制到剪切板')
  })
}
</script>

<template>
  <div class="del-confirm">
    <div class="title">{{ props.title }}</div>
    <div class="copy-box">
      <div id="cope-del-confirm-name" class="name">{{ props.name }}</div>
      <span class="copy">
        <el-tooltip placement="right" content="点击复制">
          <i class="iconfont icon-icon_fuzhi" @click="onCopy" />
        </el-tooltip>
      </span>
    </div>
    <BaseInput v-model="inputValue" width="280px" @input="onInput" />
  </div>
</template>

<style lang="scss" scoped>
.del-confirm {
  box-sizing: border-box;
  padding: 15px;
  width: v-bind(width);
  min-width: 360px;
  height: 126px;
  background: rgba(200, 204, 218, 0.3);
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #33394C;
  line-height: 24px;

  .name {
    display: inline-block;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .copy {
    i {
      color: #4777FF;
      cursor: pointer;
      font-size: 20px;
      margin-left: 10px;

      &:hover {
        filter: brightness(1.4);
      }
    }

  }
}
</style>