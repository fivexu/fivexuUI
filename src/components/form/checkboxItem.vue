<template>
    <div class="checkbox_item"
         :class="[{checked:currentChecked},{disable:isDisabled()}]"
         @click="checkboxItemClick">
        <input type="checkbox" :value="label" :checked="currentChecked">
        <em><i class="iconfont icon-yes"></i></em>
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
    import {Component} from 'vue-property-decorator'
    import GlobalForm from '../global/global-form'

    @Component({
        props: {
            label: {
                type: String | Number | Object,
                default: ''
            },
            checked: {
                type: Boolean,
                default: false
            }
        }
    })

    export default class CheckboxItem extends GlobalForm {
        currentChecked = false;

        mounted() {
            this.currentChecked = this.checked ? this.checked : false;
            this.updateModel({value: this.label, checked: this.currentChecked})
        }

        checkboxItemClick() {
            if (this.isDisabled()) {
                return;
            }
            this.currentChecked = !this.currentChecked;
            this.updateModel({value: this.label, checked: this.currentChecked})
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";

    .checkbox_item {
        cursor: pointer;
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
    }
</style>