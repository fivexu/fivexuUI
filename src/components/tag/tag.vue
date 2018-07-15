<template>
    <div id="tag">
        <ul class="test_list_show">
            <li>
                <h3>参数 type 主题 格式 String 默认 primary</h3>
                <fx-tag :type="'primary'">primary</fx-tag>
                <fx-tag :type="'success'">success</fx-tag>
                <fx-tag :type="'warning'">warning</fx-tag>
                <fx-tag :type="'error'">error</fx-tag>
            </li>
            <li>
                <h3>参数 size 大小 格式 String 默认 normal</h3>
                <fx-tag :size="'mini'">mini</fx-tag>
                <fx-tag :size="'normal'">normal</fx-tag>
                <fx-tag :size="'large'">large</fx-tag>
            </li>
            <li>
                <h3>参数 close 关闭按钮 格式 Boolean 默认 false</h3>
                <fx-tag :close="true">标签一</fx-tag>
                <fx-tag :close="true">标签二</fx-tag>
                <fx-tag :close="true">标签三</fx-tag>
                <fx-tag :close="true">标签四</fx-tag>
                <fx-tag :close="true">标签五</fx-tag>
                <fx-tag :close="true">标签六</fx-tag>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "tag"
    }
</script>

<style scoped lang="less">

</style>