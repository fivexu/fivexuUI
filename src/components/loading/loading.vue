<template>
  <div id="loading">
    <ul class="test_list_show">
      <li>
        <h3>loading 原型链模式</h3>
        <fx-button @clickEvt="loadingClick">加载</fx-button>
        <p>this.$fivexu.loading.show() 可传递对象 非必填 显示</p>
        <p>this.$fivexu.loading.hide() 隐藏</p>
      </li>
      <li>
        <h3>loading show() 可传对象 text: 显示文字 textColor: 显示文字颜色 textPosition: 文字显示位置 目前仅有 上面 top; 下面 bottom,默认 bottom</h3>
        <fx-button @clickEvt="loadingClick1">加载(加载文字--加载中.......)</fx-button>
      </li>
      <li>
        <h3>loading show() 可传对象 bgColor: 加载背景色默认 : rgba(0, 0, 0, .5)</h3>
        <fx-button @clickEvt="loadingClick2">加载(rgba(255, 155, 55, .7))</fx-button>
      </li>
      <li>
        <h3>通过指令 局部加载loading v-loading</h3>
        <fx-button @clickEvt="load=!load">指令加载-{{!load?'开始':'结束'}}</fx-button>
        <div class="loading" v-loading="load">局部内容</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "loading",
    data() {
      return {
        load: false
      }
    },
    methods: {
      loadingClick() {
        this.$fivexu.loading.show();
        setTimeout(() => {
          this.$fivexu.loading.hide();
        }, 1000);
      },
      loadingClick1() {
        this.$fivexu.loading.show({
          text: '加载中......',
          textPosition: 'top'
        });
        setTimeout(() => {
          this.$fivexu.loading.hide();
        }, 1000)
      },
      loadingClick2() {
        this.$fivexu.loading.show({
          bgColor: 'rgba(255, 155, 55, .5)',
          text: '颜色--#06f颜色--#06f颜色--#06f',
          textColor: '#06f'
        });
        setTimeout(() => {
          this.$fivexu.loading.hide();
        }, 1000)
      },
    }
  }
</script>

<style lang="less" scoped>
  .loading {
    width: 400px;
    height: 200px;
    font: 700 36px / 200px '楷体';
    text-align: center;
    border: 1px solid #ccc;
  }
</style>
