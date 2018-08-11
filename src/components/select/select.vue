<template>
    <div class="select">
        <fx-select :data="selectData" @clickEvt="selectClick" v-model="selectValue"></fx-select>
        {{selectValue}}
        <fx-select :data="selectData" multiple @clickEvt="selectClick" v-model="selectValue2"></fx-select>
        {{selectValue2}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectData: [
                    {label: '选项一', value: 1, id: 1},
                    {label: '选项二', value: 2, id: 2},
                    {label: '选项三', value: 3, id: 3},
                    {label: '选项四', value: 4, id: 4},
                    {label: '选项五', value: 5, id: 5},
                    {label: '选项六', value: 6, id: 6},
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

</style>