<template>
    <div id="tooltip">
        <ul class="test_list_show">
            <li>
                <h3>tooltip 指令模式</h3>
                <fx-button v-tooltip.top="'提示指令 上面显示'">提示指令 上面显示</fx-button>
                <p>{{tooltip}}</p>
            </li>
            <li>
                <h3>tooltip 仅提供四个方向 top bottom left right</h3>
                <fx-button v-tooltip.top="'提示指令 上面显示'">v-tooltip.top</fx-button>
                <fx-button v-tooltip.bottom="'提示指令 下面显示'">v-tooltip.bottom</fx-button>
                <fx-button v-tooltip.left="'提示指令 左面显示'">v-tooltip.left</fx-button>
                <fx-button v-tooltip.right="'提示指令 右面显示'">v-tooltip.right</fx-button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "tooltip",
        data() {
            return {
                tooltip: '<fx-button v-tooltip.top="\'提示指令 上面显示\'">提示指令 上面显示</fx-button>'
            }
        }
    }
</script>

<style scoped lang="less">

</style>