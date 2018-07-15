<template>
    <div class="radio">
        <ul class="test_list_show">
            <li>
                <h3>参数 data 单选数据 格式 Array 默认 [](空数组)</h3>
                <fx-radio :data="radioList"></fx-radio>
                <p>data 必含key值: id且id不能相同 label: 需要回显的值</p>
            </li>
            <li>
                <h3>data key值: disable(非必填): 可以设置其中某一个禁止选择</h3>
                <fx-radio :data="radioList2" v-model="radioInfo2"></fx-radio>
            </li>
            <li>
                <h3>v-mode: 当值等于data中一个id时,默认选中那个id</h3>
                <fx-radio :data="radioList" v-model="radioInfo"></fx-radio>
                <p>当前v-mode值为: {{radioInfo}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "radio",
        data() {
            return {
                radioList: [
                    {id: 1, label: '单选一'},
                    {id: 2, label: '单选二'},
                    {id: 3, label: '单选三'},
                    {id: 4, label: '单选四'},
                    {id: 5, label: '单选五'},
                ],
                radioList2: [
                    {id: 1, label: '禁选一', disable: true},
                    {id: 2, label: '单选二'},
                    {id: 3, label: '禁选三', disable: true},
                    {id: 4, label: '单选四'},
                    {id: 5, label: '单选五'},
                ],
                radioInfo: 3,
                radioInfo2: 1,
            }
        }
    }
</script>

<style scoped lang="less">

</style>