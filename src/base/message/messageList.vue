<template>
  <div class="messageList" ref="list">
    <template v-for="(item,index) in messageList">
      <Message ref="messageDom"
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
      messageList: {
        type: Array,
        default: []
      }
    },
    methods: {
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
    right: 40px;
  }
</style>
