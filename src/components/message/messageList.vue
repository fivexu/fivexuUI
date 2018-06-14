<template>
    <div class="messageList">
        <template v-for="(item,index) in messageList">
            <Message :style="setStyle(index)"
                     :message="item.message"
                     :mesType="item.mesType"
                     :mesPosition="item.mesPosition"
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
                return {top: `${20 + index * 50}px`}
            }
        },
        components: {
            Message
        }
    }
</script>

<style scoped lang="less">

</style>