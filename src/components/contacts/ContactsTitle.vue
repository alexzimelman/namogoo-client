<template>
<div class="title-container">
  {{setNumOfContacts}}
</div>
</template>

<script>
export default {
  name: "ContactsTitle",
  props: {
    contactsListLength: Number
  },
  computed: {
    setNumOfContacts(){
      return 'Number of contacts ' + this.contactsListLength
    }
  }
}
</script>

<style scoped>
  .title-container{
    font-size: 20px;
  }
</style>