<script lang="ts" setup>
import { toRefs, withDefaults } from 'vue';
interface PageInfo {
  pageNo: number;
  pageSize: number;
  total?: number;
}
interface Props {
  modelValue?: PageInfo;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => {
    return {
      pageNo: 1,
      pageSize: 10,
    }
  },
})
const emits = defineEmits<{
  (e: 'update:modelValue', value: object): void
  (e: 'pageChange', value: object): void
}>()

const { modelValue } = toRefs(props)
function handleSizeChange(value: number) {
  emits('update:modelValue', Object.assign(modelValue.value, { pageSize: value }))
  emits('pageChange', modelValue.value)
}
function handleCurrentChange(value: number) {
  emits('update:modelValue', Object.assign(modelValue.value, { pageNo: value }))
  emits('pageChange', modelValue.value)
}
</script>
<template>
  <el-pagination v-bind="$attrs" :current-page="modelValue.pageNo" :page-sizes="[10, 15, 20, 25]"
    :page-size="modelValue.pageSize" layout="total, prev, pager, next, sizes" :total="modelValue.total ?? 999"
    @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</template>
<style lang="scss" scoped>
.el-pagination {
  justify-content: flex-end;
}

::v-deep(.el-pager li.active) {
  color: #4777ff;
}

::v-deep(.el-select .el-input) {
  height: 26px;
}
</style>
