<template>
<div class="grid-container">
  <div v-for="(contact, index) in contactsList" :key="contact._id" @click="displayFullInfo(contact, index)">
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
    return{}
  },
  methods: {
    displayFullInfo(contact, index){
      this.$emit('openContactModal', {contact, index})
    }
  }
}
</script>

<style scoped>
  .grid-container{
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 10% 5%;
  }
  @media only screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: 95%;
      grid-gap: 5%;
    }
  }
</style>