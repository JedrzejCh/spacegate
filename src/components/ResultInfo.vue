<template>
    <div class="result-label" v-if="show">
      <h2>skygate</h2>
    </div>
</template>

<script>
export default {
  name: "ResultInfo",
  props:{
    show:{
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
  h2 {
    color: #254262;
    text-transform: uppercase;
    font-size: 30px;
  }
</style>