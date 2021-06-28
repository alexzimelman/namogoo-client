<template>
  <div>
    <div v-if="contactList.length > 0" class="container">
      <contacts-list :contactsList="contactList"/>
    </div>
  </div>

</template>

<script>
import ContactService from '../../services/ContactService'
import ContactsList from "./ContactsList";
export default {
  name: "ContactsMain",
  components: {ContactsList},
  data(){
    return{
      contactList: []
    }
  },
  async created() {
    this.contactList = await ContactService.fetchContactList()
  }
}
</script>

<style scoped>
  .container{
    height: 100vh;
    width: 80vw;
    margin: auto;
    background: currentColor;
    padding: 10px;
  }
</style>