<template>
    <p>{{ props.x }}x{{ props.y }}</p>
</template>

<script setup>
const props = defineProps({
    x: Number,
    y: Number
});
</script>

<style scoped>
</style>