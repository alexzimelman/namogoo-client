<template>
<div class="each-contact" @click="displayFullInfo(contact)">
  <div>
    <img :src="contact.picture.medium" :class="contact.gender"/>
  </div>
  <div>
    {{setContactLabel}}
  </div>
</div>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    contact: Object
  },
  data(){
    return {

    }
  },
  methods: {},
  computed: {
    setContactLabel(){
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
  .each-contact{
    border: 1px solid lightslategrey;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    background: white;
  }

  img{
    border-radius: 50%;
    border: 3px solid;
    display: block;
    margin-right: 10px;
  }

  .female{
    border-color: green;
  }
  .male{
    border-color: indianred;
  }
</style>