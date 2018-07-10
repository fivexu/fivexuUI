<template>
    <div class="tag" :class="[type,size]" v-if="tagShow">
        <slot></slot>
        <div class="close" v-if="close">
            <span :class="type" @click.stop="tagCloseClick($event)">
                <i class="iconfont icon-close"></i>
            </span>
        </div>
    </div>
</template>

<script>
    import {Component} from 'vue-property-decorator'
    import Global from '../global/global'

    @Component({
        props: {
            type: {
                type: String,
                default: 'primary'
            },
            size: {
                type: String,
                default: 'normal'
            },
            close: {
                type: Boolean,
                default: false
            }
        }
    })

    export default class Tag extends Global {
        tagShow = true;
        widgetName = 'click';

        tagCloseClick($event) {
            if (!this.close) {
                return;
            }
            this.tagShow = false;
            this.emitEvent({active: 'click', $event});
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";
    @import "../util/font/iconfont.css";

    .tag {
        display: inline-block;
        border: 1px solid transparent;
        border-radius: @border-radius-btn;
        padding: 0 @padding-button;
        &.mini {
            height: @height-mini;
            line-height: @height-mini;
        }
        &.normal {
            height: @height-normal;
            line-height: @height-normal;
        }
        &.large {
            height: @height-large;
            line-height: @height-large;
        }
        &.primary {
            background-color: @primary-bg;
            color: @primary-color;
            border-color: @primary-color;
        }
        &.success {
            background-color: @success-bg;
            color: @success-color;
            border-color: @success-color;
        }
        &.warning {
            background-color: @warning-bg;
            color: @warning-color;
            border-color: @warning-color;
        }
        &.error {
            background-color: @error-bg;
            color: @error-color;
            border-color: @error-color;
        }
        .close {
            float: right;
            width: 16px;
            min-height: 100%;
            position: relative;
            margin: 0 -8px 0 5px;
            span {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                margin: auto;
                display: inline-block;
                width: 16px;
                height: 16px;
                line-height: 18px;
                overflow: hidden;
                font-size: 12px;
                cursor: pointer;
                border-radius: 50%;
                &.primary:hover {
                    background-color: @primary-hover;
                    color: @font-white;
                }
                &.success:hover {
                    background-color: @success-hover;
                    color: @font-white;
                }
                &.warning:hover {
                    background-color: @warning-hover;
                    color: @font-white;
                }
                &.error:hover {
                    background-color: @error-hover;
                    color: @font-white;
                }
            }
        }
    }
</style>
