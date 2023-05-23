<script lang="ts" setup>
import { toRefs, withDefaults } from 'vue';
import BaseButton from './BaseButton.vue';
interface Props {
    width?: string
}
const props = withDefaults(defineProps<Props>(), {
    width: '200px'
})
const { width } = toRefs(props)
const emits = defineEmits<{
    (e: 'submit'): void
    (e: 'input'): void
    (e: 'change'): void
    (e: 'blur'): void
    (e: 'focus'): void
}>()
</script>
<template>
    <div class="submit-group">
        <div class="submit-title">
            <slot />
        </div>
        <el-input v-bind="$attrs" class="submit-input" placeholder="Input message" @input="emits('input')"
            @change="emits('change')" @blur="emits('blur')" @focus="emits('focus')" @keyup.enter="emits('submit')" />
        <div class="btn-group">
            <BaseButton @click="emits('submit')">Submit</BaseButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.submit-group {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 36px;
    background: rgba(0, 0, 0, 0.15);
    padding: 0.25rem;
    // position: fixed;
    // bottom: 0;
    // left: 0;
    // right: 0;
    display: flex;
    height: 3rem;
    box-sizing: border-box;
    backdrop-filter: blur(10px);

    .submit-title {
        white-space: nowrap;
        margin-right: 5px;
        font-size: 14px;
        color: #29344E;
    }

    .submit-input {
        box-sizing: border-box;
        width: v-bind(width);
        height: 32px;
        outline: none;
        border: none;
        padding: 0 1rem;
        flex-grow: 1;
        border-radius: 2rem;
        margin: 0.25rem;

        &:focus {
            outline: none;
        }

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

    button {
        background: #333;
        border: none;
        padding: 0 1rem;
        margin: 0.25rem;
        border-radius: 3px;
        outline: none;
        color: #fff;
    }
}
</style>