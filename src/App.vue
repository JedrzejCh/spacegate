<template>
  <div :class="[{upper: step===1},'wrapper']">
    <transition name="slide">
      <ResultInfo :show="step===1" :items="searchResults" v-if="step===1"/>
    </transition>
    <transition name="fade">
      <Background v-if="step===0"/>
    </transition>
    <Hero v-if="step===0"/>
    <SearchPanel v-model="searchValue" @input="handleInputSearch" :dark="step === 1"/>
        <p class="no-items" v-if="searchResults.length===0 && step===1">No results</p>
    <div class="pictures-wrapper" v-if="searchResults && !loading && step===1">
      <ResultItem v-for="item in searchResults" :item="item" :key="item.data[0].nasa_id" @click.native="handleModalOpen(item)"/>
    </div>
    <div class="loader" v-if="step===1 && loading">
      <div></div>
      <div></div>
    </div>
    <transition name="fade2">
      <Modal v-if="modalOpen" @modalClose="modalOpen=false" :modalData="choosenItem"/>
    </transition>
  </div>
</template>

<script>

import Background from "@/components/Background";
import axios from 'axios'
import debounce from 'lodash.debounce'
import Hero from "@/components/Hero";
import SearchPanel from "@/components/SearchPanel";
import ResultInfo from "@/components/ResultInfo";
import ResultItem from "@/components/ResultItem";
import Modal from "@/components/Modal";


const API = 'https://images-api.nasa.gov';

export default {
  name: 'App',
  components: { Modal, ResultItem, ResultInfo, Background, Hero, SearchPanel},

  data() {
    return {
      modalOpen: false,
      searchValue: '',
      searchResults: [],
      loading: false,
      step: 0,
      choosenItem: Object,
    }
  },
  methods: {
    handleModalOpen: function (item) {
      this.modalOpen = true
      this.choosenItem = item
    },
    handleInputSearch: debounce(function () {
      this.loading = true
      axios.get(`${API}/search?q=${this.searchValue}&media_type=image`)
          .then(response => {
            this.searchResults = response.data.collection.items
            this.loading = false
            this.step = 1
          })
          .catch(err => {
            console.log(err)
          })
    }, 500),
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;700;800&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 40px;
  width: 100%;
  min-height: 100vh;
  position: relative;

  &.upper {
    justify-content: flex-start;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50px);
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity .3s all;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pictures-wrapper {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}


.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader div {
  position: absolute;
  border: 4px solid #587295;
  opacity: 1;
  border-radius: 50%;
  animation: loading 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.loader div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes loading {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
.no-items{
  margin-top: 40px;
}

</style>
