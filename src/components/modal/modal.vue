<template>
  <div class="modal">
    <fx-button @clickEvt="modal=true">modal</fx-button>
    <fx-modal v-if="modal" @cancel="modal=false" @define="modal=false">
      <div >
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
      </div>
      <div slot="title">
        <p>fawefaweg</p>
      </div>
      <div slot="footer">
        <fx-button>ffff</fx-button>
      </div>
    </fx-modal>
  </div>
</template>

<script>
  export default {
    name: "modal",
    data() {
      return {
        modal: false
      }
    }
  }
</script>

<style scoped>
  p {
    height: 30px;
  }
</style>
