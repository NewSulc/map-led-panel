<template>
  <div class="main">
    <div class="led-grid">
      <div class="column" v-for="y in ySize">
        <div class="led" v-for="x in xSize"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const xSize = 8, ySize = 16
</script>

<style scoped>
.main{
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
  display: grid;
}

.column{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.led{
  height: 100%;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 50%;
}
</style>