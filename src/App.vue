<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Export></Export> -->
    <!-- <Three></Three> -->
    <Pdf></Pdf>
    <!-- <Echarts></Echarts> -->
    <!-- <UpExcel></UpExcel>
    <StyleExcel></StyleExcel> -->
    <!-- <Tables></Tables> -->
    <!-- <UpLoadVideo></UpLoadVideo> -->
    <!-- <NestTable></NestTable> -->
    <!-- <C3></C3> -->
  </div>
</template>

<script>
// import Tables from './components/Tables'
// import UpExcel from './components/UpExcel'
// import StyleExcel from './components/StyleExcel'
// import UpLoadVideo from './components/UpLoadVideo'
// import Echarts from './components/Echarts'
// import HelloWorld from './components/HelloWorld.vue'
// import Export from './components/Export.vue'
// import Three from './components/Three.vue'
import Pdf from './components/Pdf.vue'
// import NestTable from './components/NestTable'
// import C3 from './components/C3'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Export,
    // Three
    Pdf,
    // Echarts,
    // UpExcel,
    // StyleExcel,
    // UpLoadVideo
    // Tables
    // NestTable,
    // C3
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
