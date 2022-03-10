<template>
  <div :class="[{dark},'search-section']">
    <input id="search" type="text" name="search" :value="value" @input="handleChange" placeholder="Moon">
  </div>
</template>

<script>
export default {
  name: "SearchPanel",
  props: {
    value: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.search-section {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 20px;

  input {
    height: 30px;
    text-align: center;
    font-weight: 400;
    border: none;
    padding-bottom: 10px;
    font-size: 18px;
    border-bottom: 1px solid #fff;
    outline: none;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;
    background: none;
    color: #fff;
    transition: 0.3s ease-out;

    &:focus {
      box-shadow: 0 10px 20px -10px rgba(255, 255, 255, 0.4);
    }
  }

  &.dark {
    ::v-deep input {
      color: #254262;
      border-color: #254262;
    }
  }
}
</style>