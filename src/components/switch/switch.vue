<template>
    <div class="switch">
        <ul class="test_list_show">
            <li>
                <h3>参数 type 主题 格式 String 默认 primary</h3>
                <fx-switch :type="'primary'" v-model="switchInfo"></fx-switch> primary
                <fx-switch :type="'success'" v-model="switchInfo"></fx-switch> success
                <fx-switch :type="'warning'" v-model="switchInfo"></fx-switch> warning
                <fx-switch :type="'error'" v-model="switchInfo"></fx-switch> error
            </li>
            <li>
                <h3>参数 size 大小 格式 String 默认 normal</h3>
                <fx-switch :size="'min'" v-model="switchInfo"></fx-switch> min
                <fx-switch :size="'mini'" v-model="switchInfo"></fx-switch> mini
                <fx-switch :size="'normal'" v-model="switchInfo"></fx-switch> normal
                <fx-switch :size="'large'" v-model="switchInfo"></fx-switch> large
            </li>
            <li>
                <h3>参数 radius 圆形开关 格式 Boolean 默认 true</h3>
                <fx-switch :size="'mini'" :radius="false" v-model="switchInfo"></fx-switch> false
                <fx-switch :size="'mini'" v-model="switchInfo"></fx-switch> true
            </li>
            <li>
                <h3>插槽模式 slot:open  将插入开的位置  slot:close  将插入关的位置</h3>
                <fx-switch :size="'mini'" v-model="switchInfo">
                    <span slot="open">open</span>
                    <span slot="close">close</span>
                </fx-switch>
                <fx-switch :size="'mini'" v-model="switchInfo">
                    <span slot="open">开</span>
                    <span slot="close">关</span>
                </fx-switch>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                switchInfo: true
            }
        }
    }
</script>

<style scoped lang="less">

</style>
