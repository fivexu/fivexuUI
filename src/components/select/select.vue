<template>
    <div class="select">
        <fx-select :data="selectData"></fx-select>
    </div>
</template>

<script>
    export default {
        name: 'select',
        data() {
            return {
                selectData: [
                    {label: '选项一', value: 1, id: 1},
                    {label: '选项二', value: 2, id: 2},
                    {label: '选项三', value: 3, id: 3},
                    {label: '选项四', value: 4, id: 4},
                    {label: '选项五', value: 5, id: 5},
                ]
            }
        }
    }
</script>

<style scoped lang="less">

</style>