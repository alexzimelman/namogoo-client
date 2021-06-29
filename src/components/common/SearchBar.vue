<template>
  <div class="search-container">
    <div>
      <input type="text" class="search-input" v-model="searchText" @input="debounceSearch">
      <img src="../../assets/search.svg" width="25" class="search-icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data(){
    return{
      searchText: null,
      debounce: null
    }
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        this.searchText = event.target.value
        this.$emit('search', this.searchText)
      }, 600)
    }
  }
}
</script>

<style scoped>
.search-container{
  padding: 5px;
}
.search-icon{
  right: 30px;
  top: 6px;
  position: relative;
}
.search-input{
  padding: 5px;
}
</style>