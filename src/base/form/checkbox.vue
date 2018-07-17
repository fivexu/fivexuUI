<template>
    <div class="checkbox" @click.stop="checkboxClick" ref="checkbox">
        <slot v-if="hasSlot()"></slot>
        <CheckboxItem v-else v-for="item in data"
                      v-model="checkboxModel"
                      :checked="item.checked?item.checked:false"
                      :disable="item.disable?item.disable:false"
                      :label="item.value">
            {{item.label}}
        </CheckboxItem>
    </div>
</template>

<script>
    import GlobalForm from '../global/global-form.vue'
    import CheckboxItem from './checkboxItem.vue'

    export default {
        extends: GlobalForm,
        props: {
            // 传入的需要排版数据
            data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                checkboxModel: '', // 双向绑定checkboxItem中的数据
                checkboxArr: [], // 声明一个空数组保存需要回调绑定的数据
            }
        },
        methods: {
            _setCheckArr(val) {
                // 判断是否有选中数据,没有直接push
                if (!this.checkboxArr.length) {
                    this.checkboxArr.push(val);
                } else {
                    // 当有选中数据是,判断是否重复,重复则不增加数据,否则增加一条数据
                    let off = false;
                    this.checkboxArr.forEach((item, index) => {
                        if (item.value === val.value && val.checked === false) {
                            off = true;
                            this.checkboxArr.splice(index, 1);
                        } else if (item.value === val.value) {
                            off = true;
                        }
                    });
                    if (!off) {
                        this.checkboxArr.push(val)
                    }
                }
                // 重组数据,仅回调返回用户传入的label值
                let arr = [];
                this.checkboxArr.forEach(item => {
                    arr.push(item);
                });
                return arr
            },
            _initCheckArr() {
                // 根据用户传入数据,初始化返回数据
                this.checkboxArr = [];
                this.data.forEach(item => {
                    if (item.checked) {
                        this.checkboxArr.push({value: item.value, checked: item.checked});
                    }
                });
                setTimeout(() => {
                    this.first = true;
                }, 20);
                this._setUpdateModel(this.checkboxArr);
            },
            _setUpdateModel(arr) {
                // 把checkboxArr数据和传入数据对比,返回选中的对应数据
                // 处理为 value中仅返回用户传入的label值,label中返回选中的整条数据,这样可以根据用户需求自行拿数据
                let newArr = [];
                let value = [];
                this.data.forEach(dataItem => {
                    arr.forEach(checkItem => {
                        if (checkItem.value === dataItem.value && checkItem.checked) {
                            newArr.push(dataItem);
                            value.push(dataItem.value);
                        }
                    })
                });
                this.updateModel({value: value, label: newArr});
            },
            checkboxClick() {
                if (!this.hasSlot()) {
                    return
                }
                // 当用户使用插槽模式时,根据don节点获取对应数据
                setTimeout(() => {
                    let input = this.$refs.checkbox.getElementsByClassName('fivexu_checkbox_item');
                    let arr = [];
                    for (let i = 0; i < input.length; i++) {
                        if (input[i].checked) {
                            arr.push(input[i].value)
                        }
                    }
                    this.updateModel(arr);
                })
            },
        },
        mounted() {
            this._initCheckArr();
            this.$nextTick(() => {
                this.checkboxClick();
            })
        },
        watch: {
            checkboxModel(val) {
                if (!this.first) {
                    return
                }
                this.checkboxArr = this._setCheckArr(val);
                this._setUpdateModel(this.checkboxArr);
            },
            data() {
                this._initCheckArr();
            }
        },
        components: {
            CheckboxItem
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";

    .checkbox {
        .check_item {
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
    }
</style>