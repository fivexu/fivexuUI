<template>
    <div class="checkbox">
        <ul class="test_list_show">
            <li>
                <h3>参数 data 多选数据 格式 Array 默认 [](空数组)</h3>
                <fx-checkbox :data="checkboxList" v-model="checkboxInfo"></fx-checkbox>
                <p>data 必含key值: label: 需要显示的值 value:回调拿回的值</p>
                <p>回调值为: {{checkboxInfo}}</p>
            </li>
            <li>
                <h3>data: checked(非必须) 默认需要选中的值 默认false true时选中 可和disable同时使用</h3>
                <fx-checkbox :data="checkboxList2"></fx-checkbox>
            </li>
            <li>
                <h3>data: disable(非必须) 默认需要选中的值 默认false true时禁选 可和checked同时使用</h3>
                <fx-checkbox :data="checkboxList3"></fx-checkbox>
            </li>
            <li>
                <h3>checked 和 disable 同时使用</h3>
                <fx-checkbox :data="checkboxList4" v-model="checkboxInfo2"></fx-checkbox>
                <p>回调值为: {{checkboxInfo2}}</p>
            </li>
            <li>
                <h3>插槽自定义模式 自行书写样式 组件仅提供选择功能</h3>
                <fx-checkbox v-model="checkboxInfo3">
                    <fx-checkboxItem :label="'自定义一'">
                        <fx-button>自定义一</fx-button>
                    </fx-checkboxItem>
                    <fx-checkboxItem :label="'自定义二'" :checked="true">
                        自定义三
                    </fx-checkboxItem>
                    <fx-checkboxItem :label="'自定义三'" :disable="true">
                        <i class="iconfont icon-yes"></i>
                        自定义三
                    </fx-checkboxItem>
                    <fx-checkboxItem :label="'自定义四'">
                        <i class="iconfont icon-close"></i>
                        自定义四
                    </fx-checkboxItem>
                    <fx-checkboxItem :label="'自定义五'" :disable="true" :checked="true">
                        <i class="iconfont icon-close"></i>
                        自定义五
                    </fx-checkboxItem>
                </fx-checkbox>
                <p>回调值为: {{checkboxInfo3}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "checkbox",
        data() {
            return {
                checkboxInfo: [],
                checkboxInfo2: [],
                checkboxInfo3: [],
                checkboxList: [
                    {label: '多选一', value: 1},
                    {label: '多选二', value: 2},
                    {label: '多选三', value: 3},
                    {label: '多选四', value: 4},
                    {label: '多选五', value: 5},
                ],
                checkboxList2: [
                    {label: '多选一', value: 1, checked: true},
                    {label: '多选二', value: 2},
                    {label: '多选三', value: 3},
                    {label: '多选四', value: 4, checked: true},
                    {label: '多选五', value: 5},
                ],
                checkboxList3: [
                    {label: '多选一', value: 1},
                    {label: '多选二', value: 2, disable: true},
                    {label: '多选三', value: 3, disable: true},
                    {label: '多选四', value: 4},
                    {label: '多选五', value: 5},
                ],
                checkboxList4: [
                    {label: '多选一', value: 1},
                    {label: '多选二', value: 2, checked: true, disable: true},
                    {label: '多选三', value: 3, disable: true},
                    {label: '多选四', value: 4, checked: true},
                    {label: '多选五', value: 5},
                ],
            }
        },
    }
</script>

<style scoped lang="less">

</style>