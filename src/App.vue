<template>
  <folder-structure></folder-structure>
</template>

<script>
import FolderStructure from './components/FolderStructure.vue'

export default {
  name: 'App',
  components: {
    FolderStructure
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  width: 400px;
}

button {
  padding: 0 5px;
}
</style>
