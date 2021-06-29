<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="header">
          <div class="arrow-container">
            <img src="../../assets/left.svg" width="20" class="left-arrow" @click="previousContact"/>
            <img src="../../assets/right.svg" width="20" class="right-arrow" @click="nextContact"/>
          </div>
          <div class="exit-modal-icon">
            <img src="../../assets/exit.svg" @click="closeModal()"/>
          </div>
          <div>
            <img :src="contact.picture.large" class="contact-img"/>
          </div>
          <h3>
            {{headerLabel}}
          </h3>
        </div>
        <div class="body">
          <div class="contacts-item">
            <div>
              <img src="../../assets/email.svg" width="40" height="40"  class="contacts-icon">
            </div>
            <div>
              <a :href="`mailto:${contact.email}`">{{contact.email}}</a>
            </div>
          </div>
          <div class="contacts-item">
            <div>
              <img src="../../assets/cellphone.svg" width="40" height="40" class="contacts-icon">
            </div>
            <div>
              {{contact.cell}}
            </div>
          </div>
          <div class="contacts-item">
            <div>
              <img src="../../assets/telephone.svg" width="40" height="40" class="contacts-icon">
            </div>
            <div>
              {{contact.phone}}
            </div>
          </div>
        </div>
        <div class="footer">
          <input v-if="!showRemoveConfirm" type="button" value="Remove" class="button remove-button" @click="showRemoveContactConfirm"/>
          <div v-else>
            <p class="confirm-title">Are you sure?</p>
            <div class="confirm-buttons-container">
              <input type="button" value="Yes" class="button accept-button" @click="removeContact">
              <input type="button" value="No" class="button reject-button" @click="cancelRemove">
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ContactModal",
  props:{
    contact: Object
  },
  data(){
    return{
      showRemoveConfirm: false
    }
  },
  methods: {
    closeModal(){
      this.$emit('close')
    },
    nextContact(){
      this.$emit('nextContact')
    },
    previousContact(){
      this.$emit('previousContact')
    },
    showRemoveContactConfirm(){
      this.showRemoveConfirm = true
    },
    cancelRemove(){
      this.showRemoveConfirm = false
    },
    removeContact() {
      this.$emit('removeContact')
      this.showRemoveConfirm = false
    },
  },
  computed: {
    headerLabel(){
      let label = ''
      if(this.contact.name.title) label += this.contact.name.title
      if(this.contact.name.first) label += ' ' + this.contact.name.first
      if(this.contact.name.last) label += ' ' + this.contact.name.last
      return label
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper{
  display: table-cell;
  vertical-align: middle;
}
.modal-container{
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.contact-img{
  border-radius: 3%;
}
.header{
  position: relative;
}
.contacts-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.remove-button{
  background: indianred;
}
.exit-modal-icon{
  text-align: left;
  cursor: pointer;
}
.left-arrow{
  left: 0;
  position: absolute;
  top: 35%;
  cursor: pointer;
}
.right-arrow{
  right: 0;
  position: absolute;
  top: 35%;
  cursor: pointer;
}
.confirm-title{
  font-width: bold;
}
.accept-button{
  background: green;
}
.reject-button{
  background: indianred;
}
.button{
  color: white;
  padding: 10px;
  border: none;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  width: 100px;
}
.confirm-buttons-container{
  justify-content: space-evenly;
  display: flex;
}
</style>