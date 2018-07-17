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
                menuList: [
                    {
                        "link": "/button",
                        "title": "按钮"
                    },
                    {
                        "link": "/input",
                        "title": "输入框"
                    },
                    {
                        "link": "/radio",
                        "title": "单选"
                    },
                    {
                        "link": "/checkbox",
                        "title": "多选"
                    },
                    {
                        "link": "/switch",
                        "title": "开关"
                    },
                    {
                        "link": "/loading",
                        "title": "加载"
                    },
                    {
                        "link": "/tooltip",
                        "title": "提示"
                    },
                    {
                        "link": "/message",
                        "title": "提示弹窗"
                    },
                    {
                        "link": "/tag",
                        "title": "标签"
                    },
                    {
                        "link": "/fullpage",
                        "title": "整屏滚动"
                    },
                    {
                        "link": "/slider",
                        "title": "轮播图"
                    },
                    {
                        "link": "/scrollBar",
                        "title": "超出滚动条"
                    }
                ]
            }
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
