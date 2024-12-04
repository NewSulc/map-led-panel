<template>
  <div v-if="xSize <= ySize" class="main">
    <div class="led-grid-h">
      <div class="column-h" v-for="y in ySize">
        <div class="led-h" v-for="x in xSize">
          <LED :x="x" :y="y" />
        </div>
      </div>
    </div>
  </div>

  <div v-else class="main">
    <div class="led-grid-w">
      <div class="column-w" v-for="y in xSize">
        <div class="led-w" v-for="x in ySize">
          <LED :x="y" :y="x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LED from '@/components/LED.vue';
const xSize = 3, ySize = 3;
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
  background-color: black;
  height: 95%;
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
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.led-grid-w {
  background-color: black;
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
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>