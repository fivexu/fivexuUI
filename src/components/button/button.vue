<template>
  <div class="button">
    <ul class="test_list_show">
      <li>
        <h3>参数 text 按钮显示文字 格式 String 默认 确认</h3>
        <fx-button @clickEvt="buttonClick" :text="'确认'">确认</fx-button>
        <fx-button @clickEvt="buttonClick" :text="'取消'">取消</fx-button>
      </li>
      <li>
        <h3>参数 type 主题 格式 String 默认 primary</h3>
        <fx-button @clickEvt="buttonClick" :type="'primary'">primary</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'success'">success</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'warning'">warning</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'error'">error</fx-button>
      </li>
      <li>
        <h3>参数 disable 禁用 格式 Boolean 默认 false</h3>
        <fx-button @clickEvt="buttonClick" :disable="true" :type="'primary'">primary-disable</fx-button>
        <fx-button @clickEvt="buttonClick" :disable="true" :type="'success'">success-disable</fx-button>
        <fx-button @clickEvt="buttonClick" :disable="true" :type="'warning'">warning-disable</fx-button>
        <fx-button @clickEvt="buttonClick" :disable="true" :type="'error'">error-disable</fx-button>

      </li>
      <li>
        <h3>参数 isLoading 加载 格式 Boolean 默认 false</h3>
        <fx-button @clickEvt="buttonClick" :isLoading="true">mini</fx-button>
      </li>
      <li>
        <h3>参数 size 大小 格式 String 默认 normal</h3>
        <fx-button @clickEvt="buttonClick" :size="'mini'">mini</fx-button>
        <fx-button @clickEvt="buttonClick" :size="'normal'">normal</fx-button>
        <fx-button @clickEvt="buttonClick" :size="'large'">large</fx-button>
      </li>
      <li>
        <h3>参数 fill 铺满背景色 格式 Boolean 默认 false</h3>
        <fx-button @clickEvt="buttonClick" disable :type="'primary'" :fill="true">primary</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'success'" :fill="true">success</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'warning'" :fill="true">warning</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'error'" :fill="true">error</fx-button>
      </li>
      <li>
        <h3>参数 radius 圆角 格式 Boolean 默认 false</h3>
        <fx-button @clickEvt="buttonClick" :type="'primary'" :radius="true">primary</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'success'" :radius="true">success</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'warning'" :radius="true">warning</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'error'" :radius="true">error</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'primary'" :radius="true" :fill="true">primary</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'success'" :radius="true" :fill="true">success</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'warning'" :radius="true" :fill="true">warning</fx-button>
        <fx-button @clickEvt="buttonClick" :type="'error'" :radius="true" :fill="true">error</fx-button>
      </li>
      <li>
        <h3>插槽模式 内部写人任何值</h3>
        <fx-button @clickEvt="buttonClick" :type="'success'">
          <i class="iconfont icon-yes"></i>
          success
        </fx-button>
        <fx-button @clickEvt="buttonClick" :type="'error'">
          error
          <i class="iconfont icon-close"></i>
        </fx-button>
        <fx-button @clickEvt="buttonClick" :type="'error'">
          <i class="iconfont icon-close"></i>
        </fx-button>
        <fx-button @clickEvt="buttonClick" :type="'success'" :radius="true">
          <i class="iconfont icon-yes"></i>
        </fx-button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      buttonClick(pos) {
        if (pos.action === 'click') {
          this.$fivexu.alert.show({message: '点击事件'});
          return
        }
        this.$fivexu.alert.show({message: '当前不能点击', mesType: 'error'})
      }
    }
  }
</script>

<style scoped lang="less">
</style>
