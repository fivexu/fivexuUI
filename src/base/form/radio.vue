<template>
    <div class="radio">
        <div class="radio_list"
             :class="[
                 {checked:currentIndex===item.id&&!item.disable},
                 {'disable':item.disable?item.disable:false}
             ]"
             v-for="item in data"
             @click="radioClick(item)">
            <em></em>
            <span>{{item.label}}</span>
        </div>
    </div>
</template>

<script>
    import GlobalForm from '../global/global-form.vue'

    export default {
        extends: GlobalForm,
        props: {
            data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: this.value ? this.value : 0
            }
        },
        methods: {
            radioClick(item) {
                if (item.disable ? item.disable : false) {
                    return
                }
                this.currentIndex = item.id;
                this.updateModel(item);
                this.emitEvent({active: 'radioClick', data: item})
            }
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
            display: inline-block;
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
                cursor: not-allowed;
                em {
                    background-color: @radio-disable-bg;
                    border-color: @radio-disable-border;
                    &::after {
                        content: '';
                        width: 0;
                        height: 0;
                    }
                }
            }
            em {
                display: inline-block;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                border: 1px solid @radio-border-color;
                vertical-align: middle;
                position: relative;
                margin-right: 5px;
                box-sizing: unset;
            }
            span {
                vertical-align: middle;
            }
        }
    }
</style>
