<script setup>
import { ref } from 'vue';
import LED from './components/LED.vue';
import moment from 'moment';

const panelSize = ref({ x: 10, y: 10 });

const LedMatrix = ref(createMatrix(panelSize.value.x, panelSize.value.y))
const colors = ref(['#000000', '#ffffff']);

function changeGridState(x, y, state) {
  LedMatrix.value[y - 1][x - 1] = state;
}

const exportToJson = () => {
  const newMatrixObject = matrixObject();
  const jsonString = JSON.stringify(newMatrixObject);

  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = newMatrixObject.date + '.json';

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

function matrixObject() {
  const newMatrixObject = {
    matrix: LedMatrix.value,
    size: panelSize.value,
    static: true,
    multicolor: false,
    date: moment().utc().format("YYYY-MM-DD-HH-mm-ss")
  };

  if (colors.value.length > 2) newMatrixObject.multicolor = true;

  return newMatrixObject
}

function createMatrix(x, y) {
  const newMatrix = [];

  for (let i = 0; i < y; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < x; j++) {
      newMatrix[i][j] = null;
    }
  }

  return newMatrix
}

const formValues = ref({
  rows: 5,
  colums: 5,
  multicolor: false
});

const generateNewMatrix = (rows, colums, multicolor) => {
  if (multicolor) colors.value = ['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff'];
  else colors.value = ['#000000', '#ffffff'];
  LedMatrix.value = createMatrix(formValues.value.rows, formValues.value.colums);
  panelSize.value.x = rows;
  panelSize.value.y = colums;
};

const importJSON = ref('');
const loadJSON = () => {
  let parsedJson;
  try {
    parsedJson = JSON.parse(importJSON.value);
  } catch (e) {
    alert("Is not JSON")
    return
  }

  generateNewMatrix(parsedJson.size.x, parsedJson.size.y, parsedJson.multicolor);
}
</script>

<template>
  <main>
    <div class="form l t">
      <label for="xVal">Rows:</label>
      <input type="number" id="xVal" v-model="formValues.rows" />
      <label for="yVal">Columns:</label>
      <input type="number" id="yVal" v-model="formValues.colums" />
      <label for="multicolor">Multicolor:</label>
      <input type="checkbox" id="multicolor" v-model="formValues.multicolor" />
      <button @click="generateNewMatrix(formValues.rows, formValues.colums, formValues.multicolor)">Generate</button>
    </div>

    <div class="form r t">
      <label for="file">JSON file:</label>
      <textarea v-model="importJSON"></textarea>
      <button @click="loadJSON">Load</button>
    </div>

    <div class="led-container" v-for="x in panelSize.x">
      <LED v-for="y in panelSize.y" :x="x" :y="y" :colors="colors" @stateEmit="changeGridState"
        :key="colors" />
    </div>

    <div class="export r b" @click="exportToJson">export</div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  background-color: #3d3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.form {
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 0.5rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  font-weight: 700;
  border-radius: 1rem;
}

.led-container {
  width: 20px;
  aspect-ratio: 1;
}

.export {
  position: absolute;
  padding: 1rem 2rem;
  text-transform: uppercase;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  display: inline-block;
  font-weight: 700;
  border-radius: 1rem;
}

.l {
  left: 2rem;
  align-items: start;
}

.r {
  right: 2rem;
  align-items: end;
}

.b {
  bottom: 2rem;
}

.t {
  top: 2rem;
}
</style>