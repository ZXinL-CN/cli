<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#333",
    },
  },
  setup(props) {
    const symbolId = computed(() =>
      props.prefix === "" ? `#${props.name}` : `#${props.prefix}-${props.name}`
    );
    return { symbolId };
  },
});
</script>
