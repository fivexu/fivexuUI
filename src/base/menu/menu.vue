<template>
    <ul class="menu">
        <router-link tag="li" v-for="item in data" :key="item.link" :to="item.link">
            {{item.title}}
        </router-link>
    </ul>
</template>

<script>
    export default {
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        methods: {
            menuClick(item) {
                this.$router.push({path: item.link})
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";

    .menu {
        padding-top: 20px;
        > li {
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            &:hover, &.ac, &.router-link-active {
                background-color: @primary-color;
                color: #fff;
            }
        }
    }
</style>
