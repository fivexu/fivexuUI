<template>
    <div class="input">
        <ul class="test_list_show">
            <li>
                <h3>参数 type 主题 格式 String 默认 primary</h3>
                <fx-input></fx-input>
                <fx-input :type="'warning'" :placeholder="'warning'"></fx-input>
                <fx-input :type="'error'" :placeholder="'error'"></fx-input>

            </li>
            <li>
                <h3>参数 size 大小 格式 String 默认 normal</h3>
                <fx-input :size="'mini'"></fx-input>
                <fx-input :size="'normal'"></fx-input>
                <fx-input :size="'large'"></fx-input>

            </li>
            <li>
                <h3>参数 placeholder 占位文本 格式 String 默认 ''</h3>
                <fx-input :placeholder="'placeholder'"></fx-input>

            </li>
            <li>
                <h3>参数 clear 清空输入框 格式 Boolean 默认 false 作用:开启后可清空输入框</h3>
                <fx-input :clear="true" v-model="clearInput"></fx-input>

            </li>
            <li>
                <h3>参数 disable 禁用 格式 Boolean 默认 false</h3>
                <fx-input :disable="true"></fx-input>

            </li>
            <li>
                <h3>参数 v-mode 主题 格式 Boolean 默认 false 作用:禁选</h3>
                <fx-input v-model="modeInput"></fx-input>
                {{modeInput}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "input",
        data() {
            return {
                clearInput: '点击清空输入框',
                modeInput: '数据双向绑定'
            }
        }
    }
</script>

<style scoped lang="less">

</style>