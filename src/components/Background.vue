<template>
  <div class="app-background"></div>
</template>

<script>
export default {
  name: "Background"
}</script>


<style lang="scss" scoped>
.app-background {
  //background-image: url('../assets/search-view-bg.jpg');
  background-image: url('../assets/bg-1.jpg');
  background-size: cover;
  background-position: 80% 0%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
  @media (min-width: 1200px){
    background-position:  center;
  }
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
  }
}
</style>