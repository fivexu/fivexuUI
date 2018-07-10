<template>
    <div class="radio">
        <div class="radio_list"
             v-for="(item,index) in data"
             @click="radioClick(item,index)">
            <em :class="{checked:currentIndex===index}"></em>
            <span>{{item.value}}</span>
        </div>
    </div>
</template>

<script>
    import {Component} from 'vue-property-decorator'
    import GlobalForm from '../global/global-form'

    @Component({
        props: {
            text: {
                type: String,
                default: '男'
            },
            data: {
                type: Array,
                default: []
            }
        }
    })

    export default class Radio extends GlobalForm {
        widgetName = 'click';

        currentIndex = 0;

        radioClick(item, index) {
            this.currentIndex = index;
            this.emitEvent({active: 'radioClick', data: item})
        }

        hasSlot() {
            return this.$slots.default
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";

    .radio {
        .radio_list {
            cursor: pointer;
            float: left;
            margin-right: 10px;
            em {
                display: inline-block;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                border: 1px solid @radio-border-color;
                vertical-align: middle;
                position: relative;
                margin-right: 5px;
                &.checked {
                    border-color: @radio-border-color-ac;
                    &::after {
                        content: '';
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color: @radio-border-color-ac;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        margin: auto;
                    }
                }
            }
            span {
                vertical-align: middle;
            }
        }
    }
</style>
