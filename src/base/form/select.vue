<template>
    <div class="select_wrapper" ref="selectList" @click.stop="selectClick">
        <span :class="{ac:selectListShow}"></span>
        <fx-input class="input" :readOnly="readonly" v-model="selectValue"></fx-input>
        <transition name="top">
            <div class="select_list" v-if="selectListShow">
                <div class="select_item" v-for="item in data"
                     :class="{selectAc:selectValue===item.label}"
                     @click="selectListClick(item)">
                    {{item.label}}
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import GlobalForm from '../global/global-form.vue';
    import Input from './input';
    import ScrollBar from '../scrollBar/scrollBar';

    export default {
        extends: GlobalForm,
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                selectValue: '',
                selectListShow: false,
                readonly: true,
            }
        },
        methods: {
            // 点击显示下拉
            selectClick() {
                this.selectListShow = true;
            },
            // 点击下拉选项
            selectListClick(item) {
                this.readonly = false;
                setTimeout(() => {
                    this.selectValue = item.label;
                    this.selectListShow = false;
                    this.readonly = true;
                    this.updateModel(item.value);
                })
            },
            // 点击空白隐藏
            clickOtherCloseDom() {
                if (!this.$refs.selectList) return;
                window.addEventListener('mousedown', this.closeDown)
            },
            closeDown(ev) {
                ev = ev || event;
                ev.stopPropagation();
                if (this.$refs.selectList && this.$refs.selectList !== ev.target && !this.$refs.selectList.contains(ev.target)) {
                    this.selectListShow = false;
                }
            },
            // 初始化,显示选中默认值
            initDefaultValue() {
                if (this.data.length) {
                    this.data.forEach(item => {
                        if (this.value && this.value === item.value) {
                            this.selectValue = item.label;
                            this.updateModel(item.value);
                        }
                    })
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initDefaultValue();
                if (!this.$refs.selectList) return;
                this.clickOtherCloseDom();
            })
        },
        beforeDestroy() {
            window.removeEventListener('mousedown', this.closeDown);
        },
        components: {
            'fx-input': Input,
            'fx-scrollBar': ScrollBar,
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";

    .select_wrapper {
        display: inline-block;
        position: relative;
        min-height: @height-normal;
        background-color: transparent;
        > .input {
            position: relative;
            z-index: 10;
        }
        .select_list {
            position: absolute;
            bottom: 0;
            left: 0;
            max-width: 100%;
            width: 100%;
            max-height: 200px;
            overflow-y: auto;
            overflow-x: hidden;
            border: 1px solid @input-border;
            background-color: @select-bg;
            .transform(translateY(100%+5));
            .transition-to-top;
            > .select_item {
                padding: 0 @padding-input;
                height: 30px;
                line-height: 30px;
                cursor: pointer;
                &.selectAc {
                    background-color: @select-ac-bg !important;
                    color: @select-ac-color !important;
                }
                &:hover {
                    background-color: @select-hover-bg;
                }
            }
        }
        span {
            display: inline-block;
            position: absolute;
            top: 50%;
            margin-top: -5px;
            right: 10px;
            z-index: 20;
            .triangle;
            .transition(all 0.3s);
            &.ac {
                .transform(rotate(180deg))
            }
        }
    }
</style>