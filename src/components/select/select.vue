<template>
    <div class="select">
        <div class="header">
            <h1>select 选择器</h1>
            <p>数据参数 data 数组 [{value:value,label:label}] value: 需要回调的值 label: 显示值</p>
            <p>v-model 绑定默认选项 数组/字符串/数字</p>
        </div>
        <ul>
            <li>
                <h2>单选</h2>
                <p>v-model 绑定data数组中的value</p>
                <fx-select :data="selectData" @clickEvt="selectClick" v-model="selectValue"></fx-select>
                {{selectValue}}
            </li>
            <li>
                <h2>多选</h2>
                <p>v-model 绑定data组数中的value 但格式为[value,value,value] [0,1,2,3]</p>
                <fx-select :data="selectData" multiple @clickEvt="selectClick" v-model="selectValue2"></fx-select>
                {{selectValue2}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectData: [
                    {label: '选项一选项一选项一', value: 1, id: 1},
                    {label: '选项二选项二', value: 2, id: 2},
                    {label: '选项三', value: 3, id: 3},
                    {label: '选项四选项四选项四选项四', value: 4, id: 4},
                    {label: '选项五', value: 5, id: 5},
                    {label: '选项六选项六', value: 6, id: 6},
                    {label: '选项七', value: 7, id: 7},
                    {label: '选项八', value: 8, id: 8},
                ],
                selectValue: 3,
                selectValue2: [1, 3, 2, 5],
            }
        },
        methods: {
            selectClick(pos) {
                console.log(pos)
            }
        }
    }
</script>

<style scoped lang="less">
    .select {
        .header {
            padding-bottom: 20px;
        }
        ul{
            >li{
                padding-bottom: 15px;
            }
        }
    }
</style>