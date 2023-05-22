<script setup lang="ts">
import { ref } from 'vue'
const isEqual = ref(false)
</script>

<template>
  <el-dialog>
    <slot />
    <BaseDelConfirm v-model="isEqual" />
  </el-dialog>
</template>

<style lang="scss" scoped>
</style>