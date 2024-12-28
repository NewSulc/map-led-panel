<template>
    <div v-if="xSize <= ySize" class="main">
        <div class="led-grid-h">
            <div class="column-h" v-for="y in ySize">
                <div class="led-h" v-for="x in xSize">
                    <LED :x="x" :y="y" :color="colors[ledArr[y - 1][x - 1].colorIndex]" />
                </div>
            </div>
        </div>
    </div>

    <div v-else class="main">
        <div class="led-grid-w">
            <div class="column-w" v-for="y in xSize">
                <div class="led-w" v-for="x in ySize">
                    <LED :x="y" :y="x" :color="colors[ledArr[x - 1][y - 1].colorIndex]" />
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

    addText();
})

const alphabet = {
    a: {
        sizeX: 4,
        sizeY: 5,
        shape: [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 1]
        ]
    },
    b: {
        sizeX: 4,
        sizeY: 5,
        shape: [
            [1, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 0]
        ]
    },
    c: {
        sizeX: 3,
        sizeY: 5,
        shape: [
            [0, 1, 1],
            [1, 0, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 1, 1],
        ]
    },
}

function addText() {
    const val = "aa".toLowerCase().split("");
    let moveRight = 0, moveDown = 0;
    for (const v of val) {
        const shape = alphabet[v].shape;

        if ((moveRight + alphabet[v].sizeX + 1) > xSize) {
            moveRight = 0;
            moveDown = moveDown + 6;
        }

        for (const y in shape) {
            for (const x in shape[y]) {
                ledArr.value[Number(y) + moveDown][Number(x) + moveRight].colorIndex = shape[y][x];
            }
        }
        moveRight = moveRight + alphabet[v].sizeX + 1;
    }
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