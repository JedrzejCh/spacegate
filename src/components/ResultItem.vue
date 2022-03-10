<template>
  <div class="photo">
    <img :src="photoPath" :title="title" class="photo" :alt="keywords"/>
  </div>
</template>

<script>
export default {
  name: "ResultItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      photoPath: this.item.links[0].href,
      title: this.item.data[0].title,
      description: this.item.data[0].description,
    }
  },
  computed: {
    keywords: function () {
      return this.item.data[0].keywords
    }
  },
}
</script>

<style lang="scss" scoped>
.photo {
  max-width: 300px;
  height: 300px;
  position: relative;
  transition: .5s all;
  cursor: pointer;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: .3s all;
  }

  &:hover {
    &::after {
      @media (min-width: 1200px) {
        opacity: 1;
      }
    }
  }
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>