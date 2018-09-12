<template>
  <transition :name="transitionName">
    <div class="message" ref="mes" :class="mesPosition" v-if="messageShowOwn">
      <div ref="content" class="content" v-if="messageShow" :class="mesType">
        <div class="title" v-if="titleShow">
          <span style="margin-right: 5px;" class="iconfont" :class="'icon-'+ mesType"></span>
          <span>{{title!==''?title:mesType==='success'?'成功提示':mesType==='warning'?'警告提示':'错误提示'}}</span>
          <i v-if="isClose" @click="closeMessage" class="iconfont icon-close"></i>
        </div>
        <div class="text" ref="text" :style="{'padding-right':!titleShow&&isClose?'20px':0}">
          <span v-if="!titleShow" class="iconfont" :class="'icon-'+ mesType"></span>
          <i>{{message}}</i>
          <span class="close">
            <i v-if="!titleShow&&isClose" @click="closeMessage" class="iconfont icon-close"></i>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'message',
    data() {
      return {
        messageShowOwn: this.messageShow
      }
    },
    props: {
      titleShow: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: '提示'
      },
      messageShow: {
        type: Boolean,
        default: false
      },
      isClose: {
        type: Boolean,
        default: false
      },
      mesType: {
        type: String,
        default: 'success'
      },
      mesPosition: {
        type: String,
        default: 'top-center'
      },
      transitionName: {
        type: String,
        default: 'bottom'
      }
    },
    methods: {
      iconClass() {
        return `icon-${this.mesType}`
      },
      closeMessage() {
        this.messageShowOwn = false
      }
    },
    watch: {
      messageShow() {
        this.messageShowOwn = this.messageShow
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../util/style/common";
  @import "../util/font/iconfont.css";

  .message {
    width: 100%;
    padding-bottom: 10px;
    line-height: 1.5;
    .transition(width 0.3s);
    .transition-to-left;
    .transition-to-right;
    .transition-to-bottom;
    .transition-to-top;
    &.top-right {
      top: 20px;
      right: 20px;
    }
    &.top-center {
      left: 0;
      right: 0;
      top: 20px;
      margin: 0 auto;
    }
    &.top-left {
      top: 20px;
      left: 20px;
    }
    &.middle-right {
      right: 20px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    &.center {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &.middle-left {
      left: 20px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    &.bottom-right {
      right: 20px;
      bottom: 20px;
    }
    &.bottom-center {
      left: 0;
      right: 0;
      bottom: 20px;
      margin: 0 auto;
    }
    &.bottom-left {
      left: 20px;
      bottom: 20px;
    }
    > .content {
      padding: 0 10px;
      border-radius: @border-radius-btn;
      border: 1px solid @primary-color;
      background-color: @primary-hover;
      color: @white;
      &.success {
        border: 1px solid @success-border;
        background-color: @success-bg;
        color: @success-color;
      }
      &.warning {
        border: 1px solid @warning-border;
        background-color: @warning-bg;
        color: @warning-color;
      }
      &.error {
        border: 1px solid @error-border;
        background-color: @error-bg;
        color: @error-color;
      }
      .text {
        min-height: 24px;
        line-height: 1.5;
        position: relative;
        > span {
          vertical-align: middle;
          margin-right: 5px;
        }
        > i {
          vertical-align: middle;
          .iconfont('#999', '12px');
          cursor: pointer;
        }
        > .close {
          cursor: pointer;
          text-align: center;
          width: 20px;
          height: 20px;
          display: inline-block;
          position: absolute;
          right: -0px;
          top: 0;
          bottom: 0;
          margin: auto 0;
        }
      }
      .title {
        height: 30px;
        line-height: 30px;
        user-select: none;
        > span, > i {
          vertical-align: middle;
        }
        > i {
          cursor: pointer;
          float: right;
        }
      }
    }
  }
</style>
