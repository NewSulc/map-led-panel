<template>
    <div v-if="xSize <= ySize" class="main">
        <div class="led-grid-h">
            <div class="column-h" v-for="y in ySize">
                <div class="led-h" v-for="x in xSize" @click="changeLed(x-1, y-1)">
                    <LED :x="x" :y="y" :color="colors[ledArr[y-1][x-1].colorIndex]" />
                </div>
            </div>
        </div>
    </div>

    <div v-else class="main">
        <div class="led-grid-w">
            <div class="column-w" v-for="y in xSize">
                <div class="led-w" v-for="x in ySize" @click="changeLed(y-1, x-1)">
                    <LED :x="y" :y="x" :color="colors[ledArr[x-1][y-1].colorIndex]" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import LED from '@/components/LED.vue';
const xSize = 16, ySize = 32;
const colors = ["#000000", "#ffffff"];

const ledArr = ref([]);

onBeforeMount(() => {
    for (let y = 0; y < ySize; y++) {
        ledArr.value.push([]);
        for (let x = 0; x < xSize; x++) {
            ledArr.value[y].push({
                x: x,
                y: y,
                colorIndex: 0
            });
        }
    }
})

function changeLed(x, y){
    if(ledArr.value[y][x].colorIndex < colors.length-1) ledArr.value[y][x].colorIndex++;
    else ledArr.value[y][x].colorIndex = 0;
}
</script>

<style scoped>
.main {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.led-grid-h {
    height: 85%;
    aspect-ratio: 1;
    display: grid;
}

.column-h {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.led-h {
    height: 100%;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.led-grid-w {
    height: 95%;
    aspect-ratio: 1;
    display: flex;
}

.column-w {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.led-w {
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>