<template>
  <div class="modal">
    <fx-button @clickEvt="modal=true">modal</fx-button>
    <fx-modal v-if="modal" @cancel="modal=false" @define="modal2=true">
      <div>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
      </div>
    </fx-modal>
    <fx-modal v-if="modal2" @cancel="modal2=false" @define="modal2=false">
      <div>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
        <p>fffffffffffffffffffffff</p>
      </div>
    </fx-modal>
    <div style="margin-top:  1000px;width: 200px;height: 400px;border: 1px solid #ccc">
      <div v-drag.fixed style="width: 20px;height: 20px;background-color: #f00"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "modal",
    data() {
      return {
        modal: false,
        modal2: false,
      }
    }
  }
</script>

<style scoped>
  p {
    height: 30px;
  }
</style>
