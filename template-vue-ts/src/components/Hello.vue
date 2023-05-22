<script setup lang="ts">
import { LINK_LIST } from "@/constant/link";
import { useRoute, useRouter } from "vue-router";

defineProps<{ msg?: string }>();
const _router = useRouter();

const onEnter = () => {
  console.log('hello');
}
</script>

<template>
  <h1>{{ msg || "hello" }}</h1>
  <code class="enter" @click="onEnter()"><span>Click to enter</span> </code>
  <p>
    <span v-for="item in LINK_LIST" class="link-block">
      <a class="link-btn notranslate" :href="item.link" target="_blank">{{
          item.label
      }}</a>
      |
    </span>
  </p>
</template>

<style lang="scss" scoped>
.link-block {
  cursor: pointer;
}

.enter {
  cursor: pointer;
}
</style>
