<template>
    <div class="input" :class="[size,{'disable':isDisabled()}]">
        <input :class="[size,type,{'disable':isDisabled()},{clear:clear&&inputValue!==''}]"
               :placeholder="placeholder"
               :disabled="isDisabled()"
               :readonly="isDisabled()"
               v-model="inputValue"
               type="text"/>
        <div class="icon" v-if="clear&&inputValue!==''">
            <span @click.stop="clearInputValue"><i class="iconfont icon-close-radius"></i></span>
        </div>
    </div>
</template>

<script>
    import globalForm from '../global/global-form.vue'

    export default {
        extends: globalForm,
        data() {
            return {
                inputValue: this.value
            }
        },
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            clear: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            clearInputValue() {
                this.inputValue = ''
            }
        },
        watch: {
            inputValue(val, oldVal) {
                this.updateModel(val);
                this.emitEvent({action: 'change', val, oldVal});
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common.less";

    .input {
        width: 200px;
        position: relative;
        display: inline-block;
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
        input {
            width: 100%;
            box-sizing: border-box;
            outline: none;
            padding: 0 @padding-input;
            font-size: 12px;
            background-color: @input-bg;
            border-radius: @input-border-radius;
            border: 1px solid @border-color;
            &.clear {
                padding: 0 @padding-input + 15 0 @padding-input;
            }
            &.warning {
                border: 1px solid @input-focus-warning;
                &:focus {
                    border-color: @input-focus-warning;
                    outline: 0;
                    .box-shadow(inset 0 1px 1px 0 @input-inset-shadow, 0 0 8px 0 @input-outset-shadow-warning);
                }
            }
            &.error {
                border: 1px solid @input-focus-error;
                &:focus {
                    border-color: @input-focus-error;
                    outline: 0;
                    .box-shadow(inset 0 1px 1px 0 @input-inset-shadow, 0 0 8px 0 @input-outset-shadow-error);
                }
            }
            &.disable {
                cursor: not-allowed !important;
            }
            .transition(box-show 0.3s);
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
            &:focus {
                border-color: @input-focus-primary;
                outline: 0;
                .box-shadow(inset 0 1px 1px 0 @input-inset-shadow, 0 0 8px 0 @input-outset-shadow-primary);
            }
            &[readonly], &[disabled] {
                background-color: @input-disable;
                .box-shadow(inset 0 1px 1px 0 rgba(0, 0, 0, .075))
            }
        }
        > .icon {
            width: 30px;
            height: 30px;
            text-align: center;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto 0;
            cursor: pointer;
            &:hover span {
                color: #999;
            }
            span {
                color: #ccc;
                .position-center;
                i{
                    font-size: 30px!important;
                }
            }
        }
    }
</style>