<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  created() {
    /* 设置模板 */
    console.warn('设置模板')
    const template = {
      "name":"default",
      "page":{
        "show":
        "default"
      }
    }
    localStorage.setItem('template',JSON.stringify(template))
    /* END 设置模板 */
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
