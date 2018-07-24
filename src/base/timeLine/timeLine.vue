<template>
    <div class="time_line" ref="timeLineWrapper">
        <div class="left" ref="timeLineLeft">
            <slot name="left"></slot>
        </div>
        <div class="content" ref="timeLineContent">
            <slot name="content"></slot>
        </div>
        <div class="right" ref="timeLineRight">
            <slot name="right"></slot>
        </div>
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
                    return {
                        showNumber: 3
                    }
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            _initTimeLine() {
                if (!this.$refs.timeLineContent) return;
                let content = this.$refs.timeLineContent;
                let children = content.children;
                if (children.length === 1) {
                    let child = children[0].children;
                    if (!child) return;
                    this._setContentStyle(child);
                } else if (children.length > 1) {
                    this._setContentStyle(children);
                }
            },
            _setContentStyle(domArr) {
                let width = 0;
                let timeLineContent = this.$refs.timeLineContent;
                let timeLineLeft = this.$refs.timeLineLeft;
                let timeLineRight = this.$refs.timeLineRight;
                let timeLineWrapper = this.$refs.timeLineWrapper;
                domArr[0].parentNode.style.overflow = 'hidden';
                domArr[0].parentNode.style.position = 'relative';
                let timeLineContentWidth = timeLineWrapper.offsetWidth - timeLineLeft.offsetWidth - timeLineRight.offsetWidth;
                for (let i = 0; i < domArr.length; i++) {
                    let childrenWidth = domArr[i].offsetWidth + domArr[i].style.borderLeftWidth + domArr[i].style.borderRightWidth;
                    domArr[i].style.position = 'absolute';
                    domArr[i].style.left = `${(timeLineContentWidth - this.option.showNumber * childrenWidth) / (this.option.showNumber + 1)}px`;
                    width += childrenWidth;
                }
                timeLineContent.style.width = `${timeLineContentWidth}px`;
                domArr[0].parentNode.style.width = `${width}px`;
            }
        },
        mounted() {
            this.$nextTick(() => {
                this._initTimeLine();
            })
        }
    }
</script>

<style scoped lang="less">
    .time_line {
        .left, .content, .right {
            float: left;
        }
        .left, .right {
            cursor: pointer;
        }
        .content {
            overflow: hidden;
        }
    }
</style>