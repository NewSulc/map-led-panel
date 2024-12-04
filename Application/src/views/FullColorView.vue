<template>
  <div class="main">
    <div class="led-grid">
      <div class="column" v-for="y in xSize">
        <div class="led" v-for="x in ySize"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const xSize = 32, ySize = 16
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.led-grid {
  background-color: black;
  height: 95%;
  aspect-ratio: 1;
  display: flex;
}

.column {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.led {
  width: 100%;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 50%;
}
</style>