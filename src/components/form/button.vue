<template>
    <div class="button"
         @click.stop="clickEvt($event)"
         :class="[type,size,{'fill':fill},{'disable':disable},{'radius':radius}]">
        <slot v-if="hasSlot()"></slot>
        <span v-else>{{text}}</span>
    </div>
</template>

<script>
    import {Component} from 'vue-property-decorator'
    import GlobalForm from '../global/global-form'

    @Component({
        props: {
            text: {
                type: String,
                default: '确认'
            },
            type: {
                type: String,
                default: 'primary'
            },
            fill: {
                type: Boolean,
                default: false
            },
            radius: {
                type: Boolean,
                default: false
            }
        }
    })

    export default class Button extends GlobalForm {
        widgetName = 'click';

        clickEvt(ev) {
            if (!this.isDisabled()) {
                this.emitEvent({action: "click", ev});
            }
        }

        hasSlot() {
            return this.$slots.default
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common.less";

    .button {
        cursor: pointer;
        display: inline-block;
        text-align: center;
        border-radius: @border-radius-btn;
        padding: 0 @padding-button;
        color: @font-color-dark;
        transition: all 0.3s;
        user-select: none;
        .border();
        &.disable {
            cursor: not-allowed;
        }
        &.mine {
            height: @height-mini;
            line-height: @height-mini;
            &.radius {
                border-radius: @height-mini/2;
            }
        }
        &.normal {
            height: @height-normal;
            line-height: @height-normal;
            &.radius {
                border-radius: @height-normal/2;
            }
        }
        &.large {
            height: @height-large;
            line-height: @height-large;
            &.radius {
                border-radius: @height-large/2;
            }
        }
        &.default {
            background-color: @bg-white;
            color: @font-title;
            &:hover {
                background-color: @bg-light;
            }
            &.disable {
                background-color: @bg-color;
                color: @font-color-light;
            }
        }
        &.primary {
            background-color: @primary-color;
            color: @font-white;
            &:hover {
                background-color: @primary-hover;
            }
            &.disable {
                background-color: @primary-disable !important;
                .border(@primary-disable) !important;
                color: @font-white !important;
            }
            &.fill {
                background-color: @bg-white;
                color: @primary-color;
                .border(@primary-color);
                &:hover {
                    color: @primary-hover;
                    .border(@primary-hover);
                }
            }
        }
        &.success {
            background-color: @success-color;
            color: @font-white;
            &:hover {
                background-color: @success-hover;
            }
            &.disable {
                background-color: @success-disable !important;
                color: @success-bg !important;
                .border(@success-disable) !important;
            }
            &.fill {
                background-color: @bg-white;
                color: @success-color;
                .border(@success-color);
                &:hover {
                    color: @success-hover;
                    .border(@success-hover);
                }
            }
        }
        &.warning {
            background-color: @warning-color;
            color: @font-white;
            &:hover {
                background-color: @warning-hover;
            }
            &.disable {
                background-color: @warning-disable !important;
                color: @warning-bg !important;
                .border(@warning-disable) !important;
            }
            &.fill {
                background-color: @bg-white;
                color: @warning-color;
                .border(@warning-color);
                &:hover {
                    color: @warning-hover;
                    .border(@warning-hover);
                }
            }
        }
        &.error {
            background-color: @error-color;
            color: @font-white;
            &:hover {
                background-color: @error-hover;
            }
            &.disable {
                background-color: @error-disable !important;
                color: @error-bg !important;
                .border(@error-disable) !important;
            }
            &.fill {
                background-color: @bg-white;
                color: @error-color;
                .border(@error-color);
                &:hover {
                    color: @error-hover;
                    .border(@error-hover);
                }
            }
        }
    }
</style>
