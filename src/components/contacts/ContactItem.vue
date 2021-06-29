<template>
<div class="each-contact">
  <div>
    <img :src="contact.picture.medium" :class="contact.gender"/>
  </div>
  <div class="item-label">
    {{setContactLabel}}
  </div>
  <div class="item-note">
    click for more details
  </div>
<!--  <div class="info-icon">-->
<!--    <img src="../../assets/info.svg" width="20"/>-->
<!--  </div>-->
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
    position: relative;
    border: 1px solid lightslategrey;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    background: white;
    cursor: pointer;
  }

  img{
    border-radius: 50%;
    border: 3px solid;
    display: block;
    margin-right: 10px;
  }

  .item-label{
    font-weight: bold;
  }

  .info-icon{
    position: absolute;
    right: 0;
  }

  .item-note{
    position: absolute;
    bottom: 0;
    font-size: 10px;
    width: 100%;
    opacity: 0.5;
  }

  .female{
    border-color: green;
  }
  .male{
    border-color: indianred;
  }
</style>