<template>
  <div class="loading" :style="{backgroundColor:bgColor}" v-if="showLoading">
    <div class="content"
         ref="content"
         :style="{color:textColor}">
      <p ref="text" v-if="text!==''&&textPosition==='top'">{{text}}</p>
      <svg class="fivexu_loading_svg" viewBox="25 25 50 50">
        <circle class="fivexu_loading_circle" cx="50" cy="50" r="20" fill="none"/>
      </svg>
      <p ref="text" v-if="text!==''&&textPosition==='bottom'">{{text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loadingClass',
    props: {
      showLoading: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: ''
      },
      textPosition: {
        type: String,
        default: 'bottom'
      },
      textColor: {
        type: String,
        default: '#fff'
      },
      bgColor: {
        type: String,
        default: 'rgba(0, 0, 0, .5)'
      }
    },
    methods: {
      initContent() {
        if (!this.$refs.content) return;
        this.$refs.content.style.height = `${(this.$refs.text ? this.$refs.text.offsetHeight : 0) + 50}px`;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initContent();
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../util/style/common";

  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: @z-index-base;
    .content {
      width: 128px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      text-align: center;
      p {
        width: 100%;
        line-height: 20px;
        font-size: 14px;
      }
      img {
        width: 128px;
        height: 72px;
        float: left;
      }
    }
  }
</style>
