<template>
  <div class="modal">
    <ul>
      <li>
        <h3>弹窗默认</h3>
        <h3>回调方法 cancel 取消和×按钮操作 define 确定按钮回调</h3>
        <fx-button @clickEvt="modal=true">modal</fx-button>
        <fx-modal v-if="modal" @cancel="modal=false" @define="modal=false">
          <div>
            <p>fffffffffffffffffffffff</p>
            <p>fffffffffffffffffffffff</p>
            <p>fffffffffffffffffffffff</p>
            <p>fffffffffffffffffffffff</p>
            <p>fffffffffffffffffffffff</p>
          </div>
        </fx-modal>
      </li>
      <li>
        <h3>弹窗宽度设置 width 数字 默认400</h3>
        <fx-button @clickEvt="modal2=true">modal width=1000</fx-button>
        <fx-modal width="1000" v-if="modal2" @cancel="modal2=false" @define="modal2=false">
          <div>
            <p>fffffffffffffffffffffff</p>
            <p>fffffffffffffffffffffff</p>
            <p>fffffffffffffffffffffff</p>
            <p>fffffffffffffffffffffff</p>
            <p>fffffffffffffffffffffff</p>
          </div>
        </fx-modal>
      </li>
    </ul>
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
