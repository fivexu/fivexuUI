<template>
    <div class="checkbox_item"
         :class="[{checked:currentChecked},{disable:isDisabled()}]"
         @click="checkboxItemClick">
        <input class="fivexu_checkbox_item" type="checkbox" :value="label" :checked="currentChecked">
        <em><i class="iconfont icon-yes"></i></em>
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
    import GlobalForm from '../global/global-form.vue'

    export default {
        extends: GlobalForm,
        props: {
            label: {
                type: String | Number | Object,
                default: ''
            },
            checked: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                currentChecked: false
            }
        },
        methods: {
            checkboxItemClick() {
                if (this.isDisabled()) {
                    return;
                }
                this.currentChecked = !this.currentChecked;
                this.updateModel({value: this.label, checked: this.currentChecked})
            }
        },
        mounted() {
            this.currentChecked = this.checked ? this.checked : false;
            this.updateModel({value: this.label, checked: this.currentChecked})
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";

    .checkbox_item {
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        &.checked {
            em {
                color: @checkbox-ac-color;
                background-color: @checkbox-ac-bg;
                border-color: @checkbox-ac-bg;
                i {
                    display: inline-block;
                }
            }
        }
        &.disable {
            cursor: not-allowed;
            em {
                background-color: @checkbox-disable-bg !important;
                border-color: @checkbox-disable-border !important;
                color: @checkbox-disable-color !important;
            }
        }
        em {
            display: inline-block;
            width: 15px;
            height: 15px;
            margin-right: 5px;
            border: 1px solid @checkbox-border-color;
            vertical-align: middle;
            i {
                display: none;
            }
        }
        span {
            vertical-align: middle;
        }
        input{
            display: none;
            position: absolute;
            left: -100%;
            top: -100%;
        }
    }
</style>