<template>
    <div class="radio">
        <div class="radio_list"
             :class="[
                 {checked:currentIndex===item.id&&!item.disabled},
                 {'disable':item.disabled?item.disabled:false}
             ]"
             v-for="item in data"
             @click="radioClick(item)">
            <em></em>
            <span>{{item.label}}</span>
        </div>
    </div>
</template>

<script>
    import {Component} from 'vue-property-decorator'
    import GlobalForm from '../global/global-form'

    @Component({
        props: {
            data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    })

    export default class Radio extends GlobalForm {
        widgetName = 'click';

        currentIndex = this.value ? this.value : 0;

        radioClick(item) {
            if (item.disabled ? item.disabled : false) {
                return
            }
            this.currentIndex = item.id;
            this.updateModel(item);
            this.emitEvent({active: 'radioClick', data: item})
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";

    .radio {
        width: 100%;
        height: 100%;
        &::after {
            content: "";
            display: block;
            font-size: 0;
            height: 0;
            clear: both;
        }
        .radio_list {
            cursor: pointer;
            float: left;
            margin-right: 10px;
            em::after {
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
                .transform(scale(0));
                .transition(all .1s);
            }
            &.checked em {
                border-color: @radio-border-color-ac;
                &::after {
                    .transform(scale(1));
                }
            }
            &.disable {
                color: #999;
                em {
                    background-color: @radio-disable-bg;
                    border-color: @radio-disable-border;
                    cursor: not-allowed;
                    &::after {
                        content: '';
                        width: 0;
                        height: 0;
                    }
                }
            }
            em {
                display: inline-block;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                border: 1px solid @radio-border-color;
                vertical-align: middle;
                position: relative;
                margin-right: 5px;
            }
            span {
                vertical-align: middle;
            }
        }
    }
</style>
