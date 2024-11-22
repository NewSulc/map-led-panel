<template>
  <div v-if="true" class="main">
    <div class="led-grid-h">
      <div class="column-h" v-for="y in ySize">
        <div class="led" v-for="x in xSize"></div>
      </div>
    </div>
  </div>

  <div v-else class="main">
    <div class="led-grid-w">
      <div class="column-w" v-for="y in xSize">
        <div class="led" v-for="x in ySize"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const xSize = 16, ySize = 32
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

.led {
  height: 100%;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 50%;
}

@media all and (orientation: portrait){
  .led-grid{
    width: 95%;
  }
}
</style>