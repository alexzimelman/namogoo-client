<template>
<div class="grid-container">
  <div v-for="contact in contactsList" :key="contact._id" @click="displayFullInfo(contact)">
    <contact-item :contact="contact"></contact-item>
  </div>
</div>
</template>

<script>
import ContactItem from "./ContactItem";
export default {
  name: "ContactsList",
  props: {
    contactsList: Array,
  },
  components: {
    ContactItem
  },
  data(){
    return{
      chosenContact: null
    }
  },
  methods: {
    displayFullInfo(contact){
      console.log("herr", contact)
      this.chosenContact = contact
    }
  }
}
</script>

<style scoped>
  .grid-container{
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 5%;
  }
  @media only screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: 95%;
    }
  }
</style>