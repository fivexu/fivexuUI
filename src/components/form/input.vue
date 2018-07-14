<template>
    <div class="input" :class="[size,{'disable':isDisabled()}]">
        <input :class="[size,{'disable':isDisabled()}]"
               :placeholder="placeholder"
               :disabled="isDisabled()"
               :readonly="isDisabled()"
               v-model="inputValue"
               type="text"/>
        <div class="icon" v-if="clear&&inputValue!==''">
            <span @click.stop="clearInputValue"><i class="iconfont icon-edit"></i></span>
        </div>
    </div>
</template>

<script>
    import globalForm from '../global/global-form.vue'

    export default {
        extends: globalForm,
        data() {
            return {
                inputValue: ''
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
    @import "../util/font/iconfont.css";

    .input {
        width: 100%;
        overflow: hidden;
        position: relative;
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
            &.disable {
                cursor: not-allowed !important;
            }
            .border();
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
                border-color: @input-focus;
                outline: 0;
                .box-shadow(inset 0 1px 1px 0 @input-inset-shadow, 0 0 8px 0 @input-outset-shadow);
            }
            &[readonly], &[disabled] {
                background-color: @input-disable;
                .box-shadow(inset 0 1px 1px 0 rgba(0, 0, 0, .075))
            }
        }
        > .icon {
            width: 20px;
            height: 30px;
            text-align: center;
            position: absolute;
            right: 5px;
            top: 0;
            bottom: 0;
            margin: auto 0;
            cursor: pointer;
            &:hover span {
                background-color: #999;
            }
            span {
                display: inline-block;
                height: 16px;
                line-height: 16px;
                width: 16px;
                border-radius: 50%;
                background-color: #ccc;
                color: #fff;
                .position-center;
                i {
                    .iconfont('#fff');
                    .font-size10;
                }
            }
        }
    }
</style>
