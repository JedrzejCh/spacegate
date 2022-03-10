<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="close-button" @click="$emit('modalClose')"></div>
      <div class="picture">
        <img :src="photoPath" alt="">
      </div>
      <div class="info">
        <h1 class="modal-header">{{ title }}</h1>
        <p class="modal-text">{{ description }}</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Modal",
  props: {
    modalData: {
      type: Object,
    }
  },
  data() {
    return {
      photoPath: null,
      description: null,
      title: null
    }
  },
  mounted() {
    this.photoPath = this.modalData.links[0].href,
        this.description = this.modalData.data[0].description,
        this.title = this.modalData.data[0].title
  }
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  background-color: #f6f6f6;
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px;
  display: flex;
  height: 100%;
  overflow-y: auto;
  @media (min-width: 1024px) {
    height: 70vh;
    width: 90vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 1200px) {
    height: 80vh;
    width: 80vw;
    padding: 60px 40px 30px 30px;
  }
  @media (min-width: 1600px) {
    width: 60vw;
    height: 63vh;
  }
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 60px);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: #f6f6f6;
    @media (min-width: 1024px){
      background: #fff;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #587295;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
}

.close-button {
  position: absolute;
  cursor: pointer;
  right: 35px;
  top: 20px;

  &::after, &::before {
    content: '';
    width: 25px;
    display: block;
    height: 2px;
    background-color: #000;
    position: absolute;

  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
}

.picture {
  width: 100%;
  max-width: 78vw;
  max-height: 250px;
  margin-bottom: 20px;
  @media (min-width: 1200px) {
    min-width: 400px;
    max-width: 400px;
    height: auto;
    max-height: 600px;
    margin-right: 40px;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (min-width: 1200px) {
      position: fixed;
      z-index: 11;
      top: 50%;
      left: 30px;
      transform: translateY(-50%);
      height: 400px;
      max-width: 400px;
    }
    @media (min-width: 1600px) {
      top: 60px;
      transform: translateY(0%);
    }
  }
}

.info {
  .modal-header {
    font-size: 20px;
    color: #254262;
    @media (min-width: 1024px) {
      margin-top: 0;
      font-size: 25px;
    }
  }

  .modal-text {
    font-size: 13px;
    line-height: 20px;
    color: #254262;
    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }
}
</style>