<script setup lang="ts">
import { ref, computed, onMounted, onDeactivated } from 'vue';
let timer = null
const date = ref(new Date())
const YYYY = computed(() => date.value.getFullYear())
const MM = computed(() => doubleDigit(date.value.getMonth() + 1))
const DD = computed(() => doubleDigit(date.value.getDate()))
const HH = computed(() => doubleDigit(date.value.getHours()))
const mm = computed(() => doubleDigit(date.value.getMinutes()))
const SS = computed(() => doubleDigit(date.value.getSeconds()))

function init() {
    timer = setInterval(() => {
        date.value = new Date()
    })
}
function doubleDigit(dataTime: number) {
    return dataTime > 9 ? dataTime : '0' + (dataTime)
}

onMounted(() => {
    init()
})

onDeactivated(() => {
    timer = null
})

</script>

<template>
    <div class="date-time">{{ `${YYYY}/${MM}/${DD} ${HH}:${mm}:${SS}` }}</div>
</template>

<style scoped>
.date-time {
    display: inline-block;
    width: 300px;
    padding: 20px;
}
</style>
