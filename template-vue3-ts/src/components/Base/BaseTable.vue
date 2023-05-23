<script lang="ts" setup>
import { ref, withDefaults } from "vue";
import type { ElTable } from "element-plus";
interface Column {
  type?: string;
  prop?: string;
  label?: string;
  slot?: boolean;
}
interface Props {
  columns?: Array<Column>;
}
const props = withDefaults(defineProps<Props>(), {
  columns: () => [
    { prop: "date", label: "日期" },
    { prop: "name", label: "名称" },
    { prop: "address", label: "地址" },
  ],
});
const $refs = ref<InstanceType<typeof ElTable>>();
defineExpose({ $refs });
</script>

<template>
  <el-table
    ref="$refs"
    v-bind="$attrs"
    size="large"
    fit
    :header-cell-style="{ background: '#F4F5F9' }"
  >
    <slot name="before" />
    <template v-for="(col, index) in props.columns" :key="index">
      <el-table-column v-if="col?.slot" v-bind="col">
        <template #default="{ row, column, $index, store }">
          <slot
            :name="col.prop"
            :row="row"
            :column="column"
            :$index="$index"
            :store="store"
          />
        </template>
      </el-table-column>
      <el-table-column v-else v-bind="col" />
    </template>
    <slot />
    <slot name="after" />
  </el-table>
</template>

<style lang="scss" scoped></style>
