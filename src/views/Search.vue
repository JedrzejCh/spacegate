<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label>
      <input id="search" type="text" name="search" v-model="searchValue" @input="handleInputSearch">
      <ul>
        <li class="item" v-for="item in searchResults" :key="item.data[0].nasa_id">{{item.data[0].description}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import debounce from 'lodash.debounce'
const API = 'https://images-api.nasa.gov';
export default {
  name: "Search",
  data() {
    return {
      searchValue: '',
      searchResults: []
    }
  },
  methods: {
    handleInputSearch: debounce(function() {
      axios.get(`${API}/search?q=${this.searchValue}&media_type=image`)
          .then(response => {
            console.log(response.data.collection.items)
            this.searchResults = response.data.collection.items
          })
          .catch(err => {
            console.log(err)
          })
    }, 500),
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 40px;
    width: 100%;
  }
  .search {
    display: flex;
    flex-direction: column;
    width: 300px;
    input{
      height: 30px;
      border: none;
      border-bottom: 1px solid red;
      outline: none;
    }
    label{
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
    }
  }
</style>