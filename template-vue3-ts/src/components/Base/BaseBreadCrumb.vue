<script lang="ts" setup>
import { withDefaults } from "vue";
import { RouteLocationRaw, useRouter } from "vue-router";

const router = useRouter();

interface Bread {
  name: string;
  to?: RouteLocationRaw;
}
interface Props {
  list?: Array<Bread>;
}
const props = withDefaults(defineProps<Props>(), {
  list: () => [
    {
      name: "kaola-Cluster",
      to: {
        name: "namespaceOverview",
        query: {
          namespaceId: "123",
          clusterServiceId: "123",
          name: "123",
          deployWay: "123",
        },
      },
    },
  ],
});

function onClick(bread: Bread) {
  if (bread.to) {
    router.push(bread.to);
  }
}
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in props.list"
      :key="index"
      :class="{ canRouter: item.to }"
      @click="onClick(item)"
    >
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style scoped lang="scss">
.el-breadcrumb {
  .el-breadcrumb__item {
    ::v-deep(.el-breadcrumb__inner) {
      font-size: 14px;
      color: #99a0b5;
    }
  }
}
.el-breadcrumb{
 .canRouter{
    ::v-deep(.el-breadcrumb__inner) {
      cursor: pointer;
      color: #33394c;
    }
  }
}
 

</style>
