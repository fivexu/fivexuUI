<template>
    <div class="time_line" ref="timeLineWrapper">
        <div class="left" ref="timeLineLeft" @click.stop="_prevent">
            <slot name="left"></slot>
        </div>
        <div class="content" ref="timeLineContent">
            <slot name="content"></slot>
        </div>
        <div class="right" ref="timeLineRight" @click.stop="_next">
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
            data: {
                type: Array,
                default: []
            },
            option: {
                type: Object,
                default: () => {
                    return {
                        runNumber: 2
                    }
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            _getStyle(obj, attr) {
                if (obj.currentStyle) {
                    return obj.currentStyle[attr];
                }
                else {
                    return document.defaultView.getComputedStyle(obj, null)[attr];
                }
            },
            _getMargin(margin) {
                let arr = margin.replace(/px/g, '').split(' ');
                if (arr.length === 2) {
                    arr.push(arr[0]);
                    arr.push(arr[1]);
                }
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = Number(arr[i]);
                }
                return arr;
            },
            _getLeftTo() {
                if (!this.$refs.timeLineContent) return;
                let children = this.$refs.timeLineContent.children[0];
                let child = children.children[0];
                let border = Number(this._getStyle(child, 'border').split('px')[0]);
                border = border <= 0 ? 0 : border;
                let leftTo = child.offsetWidth + border * 2 + this._getMargin(this._getStyle(child, 'margin'))[1] + this._getMargin(this._getStyle(child, 'margin'))[3];
                return leftTo * this.option.runNumber;
            },
            _prevent() {
                if (!this.$refs.timeLineContent) return;
                let children = this.$refs.timeLineContent.children[0];
                this.currentIndex--;
                this.currentIndex = this.currentIndex <= 0 ? 0 : this.currentIndex;
                children.style.left = `${-this.currentIndex * this._getLeftTo()}px`
            },
            _next() {
                if (!this.$refs.timeLineContent) return;
                let timeLineContent = this.$refs.timeLineContent;
                let children = timeLineContent.children[0];
                let dis = children.offsetWidth - timeLineContent.offsetWidth;
                this.currentIndex++;
                if (this.currentIndex * this._getLeftTo() >= dis) {
                    this.currentIndex = dis / this._getLeftTo();
                }
                children.style.left = `${-this.currentIndex * this._getLeftTo()}px`
            },
            _initTimeLine() {
                if (!this.$refs.timeLineContent) return;
                let children = this.$refs.timeLineContent.children;
                if (children.length === 1) {
                    let child = children[0].children;
                    if (!child) return;
                    this._setContentStyle(child);
                }
            },
            _setContentStyle(domArr) {
                let width = 0;
                let timeLineContent = this.$refs.timeLineContent;
                let timeLineLeft = this.$refs.timeLineLeft;
                let timeLineRight = this.$refs.timeLineRight;
                let timeLineWrapper = this.$refs.timeLineWrapper;
                let timeLineContentWidth = timeLineWrapper.offsetWidth - timeLineLeft.offsetWidth - timeLineRight.offsetWidth;
                if(!timeLineContent.children[0].children[0]) return;
                timeLineContent.style.height = `${timeLineContent.children[0].children[0].offsetHeight}px`;
                domArr[0].parentNode.style.overflow = 'hidden';
                domArr[0].parentNode.style.position = 'absolute';
                domArr[0].parentNode.style.left = '0px';
                domArr[0].parentNode.style.transition = 'all 0.3s';
                domArr[0].parentNode.style.webkitTransition = 'all 0.3s';
                for (let i = 0; i < domArr.length; i++) {
                    let border = Number(this._getStyle(domArr[i], 'border').split('px')[0]);
                    border = border <= 0 ? 0 : border;
                    let childrenWidth = domArr[i].offsetWidth + border * 2 + this._getMargin(this._getStyle(domArr[i], 'margin'))[1] + this._getMargin(this._getStyle(domArr[i], 'margin'))[3];
                    domArr[i].style.float = 'left';
                    width += Number(childrenWidth);
                }
                setTimeout(() => {
                    timeLineContent.style.width = `${timeLineContentWidth}px`;
                    domArr[0].parentNode.style.width = `${width}px`;
                })
            }
        },
        mounted() {
            this.$nextTick(() => {
                this._initTimeLine();
            });
            window.addEventListener('resize', () => {
                this._initTimeLine();
            })
        },
        watch: {
            data() {
                setTimeout(() => {
                    this._initTimeLine();
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .time_line {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        .left, .content, .right {
            float: left;
            user-select: none;
        }
        .left, .right {
            cursor: pointer;
        }
        .content {
            position: relative;
            overflow: hidden;
        }
    }
</style>