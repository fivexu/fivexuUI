<template>
  <div class="messageList" :style="{width:`${width?width+'px':'auto'}`}" :class="listPosition" ref="list">
    <template v-for="(item,index) in messageList">
      <Message ref="messageDom"
               :title="item.title"
               :titleShow="titleShow"
               :isClose="item.isClose"
               :message="item.message"
               :mesType="item.mesType"
               :transitionName="item.transitionName"
               :messageShow="item.messageShow"></Message>
    </template>
  </div>
</template>

<script>
  import Message from './message.vue'

  export default {
    name: 'messageList',
    props: {
      titleShow: {
        type: Boolean,
        default: true
      },
      width: {
        type: Number,
        default: 300
      },
      messageList: {
        type: Array,
        default: []
      },
      listPosition: {
        type: String,
        default: 'top-center'
      }
    },
    methods: {
      initWidth() {
        if (this.width === 0) {
          this.$refs.list.style.width = `${this.$refs.messageDom.offsetWidth}px!impotent`;
        }
      },
      setStyle(index) {
        if (!this.messageList[0].mesPosition) {
          return {top: `${20 + index * 50}px`};
        }
        switch (this.messageList[0].mesPosition.split('-')[0]) {
          case 'top':
            return {top: `${20 + index * 50}px`};
          case 'bottom':
            return {bottom: `${20 + index * 50}px`};
          case 'left':
            return {left: `${20 + index * 50}px`};
          case 'right':
            return {right: `${20 + index * 50}px`};
          default:
            return {bottom: `${20 + index * 50}px`};
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initWidth();
      })
    },
    components: {
      Message
    },
  }
</script>

<style scoped lang="less">
  @import "../util/style/common.less";

  .messageList {
    max-width: 300px;
    position: fixed;
    top: 20px;
    right: 20px;
    &.top-right {
      top: 20px;
      right: 20px;
    }
    &.top-center {
      top: 20px;
      right: 50%;
      margin: 0 auto;
    }
  }
</style>
