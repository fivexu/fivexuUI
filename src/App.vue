<template>
    <div id="app">
        <nav>
            <fx-menu :data="menuList"></fx-menu>
        </nav>
        <div class="content">
            <router-view style="width: 100%;height: 100%;"></router-view>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                menuList: []
            }
        },
        methods: {
            _getMenuList() {
                axios.get('../static/menu.json').then(res => {
                    this.menuList = res.data;
                })
            }
        },
        mounted() {
            this._getMenuList();
        }
    }
</script>

<style scoped lang="less">
    #app {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        nav {
            position: fixed;
            width: 200px;
            left: 0;
            top: 0;
            bottom: 0;
            background-color: #fff;
        }
        .content {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 0 0 0 220px;
        }
    }
</style>
