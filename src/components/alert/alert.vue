<template>
  <div id="alert">
    <ul class="test_list_show">
      <li>
        <h3>警告弹窗 原型链形式</h3>
        <fx-button @clickEvt="messageClick">警告内容</fx-button>
        <p>this.$fivexu.alert.show({})</p>
      </li>
      <li>
        <h3>提示弹窗 参数 title 显示的标题 不填自动根据 mesType显示对应文字</h3>
        <fx-button @clickEvt="messageClick6">显示的标题</fx-button>
        <p>this.$fivexu.alert.show({title:'自定义标题',message:'自定义标题'})</p>
      </li>
      <li>
        <h3>提示弹窗 参数 message 显示的文字</h3>
        <fx-button @clickEvt="messageClick2">提示文字</fx-button>
        <p>this.$fivexu.alert.show({message:'提示文字提示文字提示文字提示文字提示文字提示文字'})</p>
      </li>
      <li>
        <h3>提示弹窗 参数 mesType 显示的文字主题 success warning error</h3>
        <fx-button @clickEvt="messageClick3">提示文字</fx-button>
        <p>this.$fivexu.alert.show({mesType:'error',message: 'error'})</p>
      </li>
      <li>
        <h3>提示弹窗 参数 transitionName 显示动画进入方向 top button left right</h3>
        <fx-button @clickEvt="messageClick4">提示文字</fx-button>
        <p>this.$fivexu.alert.show({mesType:'warning',message: 'warning',transitionName:'left'})</p>
      </li>
      <li>
        <h3>提示弹窗 参数 isClose 是否自动关闭 默认 false 不自动关闭</h3>
        <fx-button @clickEvt="messageClick5">提示文字</fx-button>
        <p>this.$fivexu.alert.show({mesType:'success',message: '点击关闭',transitionName:'left', isClose: true,})</p>
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
        this.$fivexu.alert.show();
      },
      messageClick2() {
        this.n++;
        this.$fivexu.alert.show({message: `提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字提示文字${this.n}`});
      },
      messageClick3() {
        this.n++;
        this.$fivexu.alert.show({mesType: 'error', message: `warning${this.n}`,});
      },
      messageClick4() {
        this.n++;
        this.$fivexu.alert.show({
          mesType: 'warning',
          message: `warning${this.n}`,
          transitionName: 'left'
        })
      },
      messageClick5() {
        this.n++;
        this.$fivexu.alert.show({
          isClose: true,
          message: `点击关闭 ${this.n}`,
          transitionName: 'left',
        })
      },
      messageClick6() {
        this.n++;
        this.$fivexu.alert.show({
          title: `自定义标题${this.n}`,
          mesType: 'warning',
          message: `自定义标题${this.n}`,
          transitionName: 'left'
        })
      },
    }
  }
</script>
