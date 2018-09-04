<template>
    <div class="tree">
        <div class="title" v-for="item in data">
            <span @click="open(item)">+</span>
            {{item.name}}
            <fx-tree v-show="openOff"
                     :data="item.children"
                     v-if="item.children"></fx-tree>
        </div>
    </div>
</template>

<script>
    import Tree from './tree.vue';

    export default {
        name: 'fx-tree',
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                currentIndex: -1,
                openOff: false
            }
        },
        methods: {
            open(index) {
                this.openOff = !this.openOff;
                this.currentIndex = index;
            }
        },
        components: {
            'fx-tree': Tree
        }
    }
</script>

<style scoped lang="less">
    .tree {
        .title {
            padding-left: 20px;
            overflow: hidden;
        }
    }
</style>