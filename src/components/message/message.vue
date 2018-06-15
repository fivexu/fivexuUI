<template>
    <transition :name="transitionName">
        <div class="message" ref="mes" :class="mesPosition" v-if="messageShowOwn">
            <div ref="content" class="content" v-if="messageShow" :class="mesType">
                <span ref="text">
                    <i class="iconfont" :class="'icon-'+mesType"></i>
                    {{message}}
                    <!--<i @click="closeMessage" class="iconfont icon-close"></i>-->
                </span>
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
            message: {
                type: String,
                default: 'message'
            },
            messageShow: {
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
            initContent() {
                if (!this.$refs.mes) return;
                let width = this.$refs.text.offsetWidth + 20;
                this.$refs.mes.style.width = `${width}px`;
            },
            iconClass() {
                return `icon-${this.mesType}`
            },
            closeMessage() {
                this.messageShowOwn = false
            }
        },
        mounted() {
            this.initContent();
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
        line-height: 40px;
        position: fixed;
        z-index: @z-index-nav;
        .transition-to-left;
        .transition-to-right;
        .transition-to-bottom;
        .transition-to-top;
        i {
            .iconfont('#999', '12px');
            cursor: pointer;
        }
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
        .content {
            white-space: nowrap;
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
        }
    }
</style>
