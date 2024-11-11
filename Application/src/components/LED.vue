<template>
</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue'

const props = defineProps({
    x: Number,
    y: Number,
    colors: Array
});

const emit = defineEmits(['stateEmit'])

const states = props.colors;
const currentIndex = ref(0);
const currentState = ref(states[currentIndex.value]);

onMounted(() => { emit('stateEmit', props.x, props.y, currentState.value) })

const changeState = () => {
    currentIndex.value = (currentIndex.value + 1) % states.length
    currentState.value = states[currentIndex.value]

    emit('stateEmit', props.x, props.y, currentState.value)
}
</script>

<style scoped></style>