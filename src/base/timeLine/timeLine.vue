<template>
    <div class="time_line">
        <slot name="left"></slot>
        <ul>
            <li></li>
        </ul>
        <slot name="right"></slot>
    </div>
</template>

<script>
    import GlobalForm from '../global/global-form.vue'

    export default {
        extends: GlobalForm,
        name: 'timeLine',
        props: {
            option: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            _initTimeLine() {
                if (this.$refs.timeLineContent) return;
                let content = this.$refs.timeLineContent;
                let children = content.children;
            }
        }
    }
</script>

<style scoped lang="less">
    .time_line {
        .content {
            width: 100%;
            height: 100%;
        }
    }
</style>