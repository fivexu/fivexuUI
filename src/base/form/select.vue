<template>
    <div class="select" @click.stop="selectClick">
        <span :class="{ac:selectListShow}"></span>
        <fx-input :readOnly="true" v-model="selectValue"></fx-input>
        <transition name="top">
            <ul class="select_list" ref="selectList" v-if="selectListShow">
                <li v-for="item in data"
                    @click.stop="selectListClick(item)">
                    {{item.label}}
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
    import GlobalForm from '../global/global-form.vue'
    import Input from './input'

    export default {
        name: 'select',
        extends: GlobalForm,
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                selectValue: '顶顶顶顶',
                selectListShow: false
            }
        },
        methods: {
            selectClick() {
                this.selectListShow = true;
            },
            selectListClick(item) {
                console.log(item)
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.clickCloseDom(this.$refs.selectList, () => {
                    this.selectListShow = false;
                })
            })
        },
        components: {
            'fx-input': Input
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";

    .select {
        display: inline-block;
        position: relative;
        min-height: @height-normal;
        .select_list {
            position: absolute;
            bottom: 0;
            left: 0;
            max-width: 100%;
            width: 100%;
            border: 1px solid @input-border;
            background-color: #fff;
            .transform(translateY(100%+5));
            .transition-to-top;
            > li {
                padding: 0 @padding-input;
                height: 30px;
                line-height: 30px;
                &:hover {
                    background-color: @bg-light;
                }
            }
        }
        span {
            display: inline-block;
            position: absolute;
            top: 50%;
            margin-top: -5px;
            right: 10px;
            z-index: 10;
            .triangle;
            .transition(all 0.3s);
            &.ac {
                .transform(rotate(180deg))
            }
        }
    }
</style>