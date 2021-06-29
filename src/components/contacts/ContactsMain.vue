<template>
  <div>
    <div class="header">
      <contacts-title :contactsListLength="contactList.length"/>
      <search-bar @search="search"/>
    </div>
    <div class="body">
      <contacts-list
          v-if="contactList.length > 0"
          :contactsList="contactList"
          @openContactModal="openContactModal"/>
      <p v-if="contactList.length === 0" class="empty-list-note">Oops...There is not contacts for you :(</p>
    </div>

    <div v-if="chosenContact && showContactModal">
      <contact-modal
          :contact="chosenContact"
          @close="closeModal"
          @nextContact="nextContact"
          @previousContact="previousContact"
          @removeContact="removeContact"
      />
    </div>
  </div>

</template>

<script>
import ContactService from '../../services/ContactService'
import ContactsList from "./ContactsList";
import ContactsTitle from "./ContactsTitle";
import ContactModal from "./ContactModal";
import SearchBar from "../common/SearchBar";
export default {
  name: "ContactsMain",
  components: {SearchBar, ContactModal, ContactsTitle, ContactsList},
  data(){
    return{
      contactList: [],
      chosenContact: null,
      chosenContactIndex: -1,
      showContactModal: false,
    }
  },
  methods: {
    search(searchValue){
      this.getContactsList(searchValue)
    },
    closeModal(){
      this.showContactModal = false
      this.chosenContactIndex = -1
      this.chosenContact = null
    },
    openContactModal(contactDetails){
      this.chosenContact = contactDetails.contact
      this.chosenContactIndex = contactDetails.index
      this.showContactModal = true
    },
    nextContact(){
      if(this.contactList[this.chosenContactIndex + 1]){
        this.chosenContact = this.contactList[this.chosenContactIndex + 1]
        this.chosenContactIndex++
      }
    },
    previousContact(){
      if(this.contactList[this.chosenContactIndex - 1]){
        this.chosenContact = this.contactList[this.chosenContactIndex - 1]
        this.chosenContactIndex--
      }else{
        return false
      }
    },
    async removeContact(){
      await ContactService.removeContact(this.chosenContact._id)
      this.contactList.splice(this.chosenContactIndex, 1)
      this.previousContact()
    },
    async getContactsList(searchText){
      this.contactList = await ContactService.fetchContactList(searchText)
    }
  },
  async created() {
    this.getContactsList()
  }
}
</script>

<style scoped>
  .body{
    height: 100vh;
    width: 80vw;
    margin: auto;
    background: currentColor;
    padding: 10px;
    overflow: auto;
  }
  .empty-list-note{
    color: white;
    font-size: 30px;
  }
</style>