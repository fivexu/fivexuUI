<template>
    <div class="tree">
        <fx-tree :data="data"></fx-tree>
    </div>
</template>

<script>
    export default {
        name: 'tree',
        data() {
            return {
                data: [
                    {
                        name: '一层',
                        children: [
                            {name: '二层'},
                            {name: '二层'},
                            {
                                name: '二层',
                                children: [
                                    {name: '三层'},
                                    {name: '三层'},
                                    {name: '三层'},
                                    {name: '三层'},
                                ]
                            },
                            {name: '二层'}
                        ]
                    },
                    {
                        name: '一层',
                        children: [
                            {name: '二层'}
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">

</style>