<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">自定义事件（下拉菜单）</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/pageOne">瀑布流布局</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border: solid 1px #000;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
