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
      <li>
        <h3>弹窗标题设置 title 字符串 默认 '提示'</h3>
        <fx-button @clickEvt="modal3=true">modal title=自定义标题</fx-button>
        <fx-modal title="自定义标题" v-if="modal3" @cancel="modal3=false" @define="modal3=false">
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
        <h3>是否需要footer设置 isFooter 布尔值 默认 true</h3>
        <fx-button @clickEvt="modal4=true">modal isFooter=false</fx-button>
        <fx-modal :isFooter="false" v-if="modal4" @cancel="modal4=false" @define="modal4=false">
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
        <h3>是否需要title设置 isTitle 布尔值 默认 true</h3>
        <fx-button @clickEvt="modal5=true">modal isTitle=false</fx-button>
        <fx-modal :isTitle="false" v-if="modal5" @cancel="modal5=false" @define="modal5=false">
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
        <h3>点击模态层关闭设置 isModalClose 布尔值 默认 true</h3>
        <fx-button @clickEvt="modal6=true">modal isModalClose=false</fx-button>
        <fx-modal :isModalClose="false" v-if="modal6" @cancel="modal6=false" @define="modal6=false">
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
        <h3>插槽模式 slot=title slot=footer slot=default</h3>
        <fx-button @clickEvt="modal7=true">modal isModalClose=false</fx-button>
        <fx-modal :isModalClose="false" v-if="modal7" @cancel="modal7=false" @define="modal7=false">
          <div slot="title" class="title">
            <fx-button>插槽标题</fx-button>
          </div>
          <div>
            <p>
              账号:
              <fx-input></fx-input>
            </p>
            <p>
              密码:
              <fx-input inputType="password"></fx-input>
            </p>
          </div>
          <div slot="footer" style="margin-top: 10px;">
            <fx-input></fx-input>
            <fx-button>插槽底部</fx-button>
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
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false,
      }
    }
  }
</script>

<style scoped>
  .title {
    padding-bottom: 10px;
    background-color: #f60;
  }
</style>
