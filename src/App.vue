<template>
  <div id="app">
    <div class="nav">
      <router-link to="/search">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;700;800&display=swap');
  .nav{
    font-family: 'Montserrat', sans-serif;
  }
</style>
