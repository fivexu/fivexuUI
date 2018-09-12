<template>
  <div id="message">
    <ul class="test_list_show">
      <li>
        <h3>提示弹窗 原型链形式</h3>
        <fx-button @clickEvt="messageClick">提示文字</fx-button>
        <p>this.$fivexu.message.show({})</p>
      </li>
      <li>
        <h3>提示弹窗 参数 message 显示的文字</h3>
        <fx-button @clickEvt="messageClick2">提示文字</fx-button>
        <p>this.$fivexu.message.show({message:'提示文字提示文字提示文字提示文字提示文字提示文字'})</p>
      </li>
      <li>
        <h3>提示弹窗 参数 mesType 显示的文字主题 success warning error</h3>
        <fx-button @clickEvt="messageClick3">提示文字</fx-button>
        <p>this.$fivexu.message.show({mesType:'error',message: 'error'})</p>
      </li>
      <li>
        <h3>提示弹窗 参数 transitionName 显示动画进入方向 top button left right</h3>
        <fx-button @clickEvt="messageClick4">提示文字</fx-button>
        <p>this.$fivexu.message.show({mesType:'warning',message: 'warning',transitionName:'left'})</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "message",
    data() {
      return {
        n: 0
      }
    },
    methods: {
      messageClick() {
        this.$fivexu.message.show({duration: 5000});
      },
      messageClick2() {
        this.n++;
        this.$fivexu.message.show({message: `提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字${this.n}`});
      },
      messageClick3() {
        this.n++;
        this.$fivexu.message.show({mesType: 'error', message: `warning${this.n}`,});
      },
      messageClick4() {
        this.n++;
        this.$fivexu.message.show({
          isClose: true,
          mesType: 'warning',
          message: `warning${this.n}`,
          transitionName: 'left'
        })
      },
    }
  }
</script>

<style scoped lang="less">

</style>
