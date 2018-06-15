<template>
    <div class="messageList">
        <template v-for="(item,index) in messageList">
            <Message ref="messageDom"
                     :style="setStyle(index)"
                     :message="item.message"
                     :mesType="item.mesType"
                     :mesPosition="item.mesPosition"
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
        }
    }
</script>

<style scoped lang="less">

</style>