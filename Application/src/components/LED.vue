<template>
    <div class="led" :style="{ 'background-color': color }"></div>
</template>

<script setup>
const props = defineProps({
    x: Number,
    y: Number,
    color: String
});
</script>

<style scoped>
.led {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
}
</style>