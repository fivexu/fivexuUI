<template>
    <div id="scroll-bar">
        <h3>当类容超出时,隐藏超出部分,并模拟overflow:auto 效果</h3>
        <h3>此插件支持移动端</h3>
        <h3>参数 是否显示滚动条 barHide 类型 Boolean 默认 false</h3>
        <p>scrollBar的大小由外部父级盒子决定,超出父级,及隐藏</p>
        <div class="scroll_bar">
            <fx-scroll-bar>
                <ul>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                    <li>文字文字文字文字文字文字</li>
                </ul>
            </fx-scroll-bar>
        </div>
        <div class="scroll_bar">
            <fx-scroll-bar :barHide="true">
                <ul>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                    <li>隐藏滚动条隐藏滚动条</li>
                </ul>
            </fx-scroll-bar>
        </div>
        <div class="scroll_bar">
            <fx-scroll-bar>
                <ul>
                    <li><img src="../../../static/slider01.jpg"></li>
                </ul>
            </fx-scroll-bar>
        </div>
        <h3>参数 自定义滚动条样式class形式写入 barClass 类型 String 默认 ''(空)</h3>
        <p>在自定义class时,必须删除vue style中的scoped 以保证样式正常注入 建议加上!important</p>
        <div class="scroll_bar">
            <fx-scroll-bar :barClass="'bars'">
                <ul>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                    <li>自定义滚动条样式class</li>
                </ul>
            </fx-scroll-bar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "scroll-bar"
    }
</script>

<style lang="less">
    h3, p {
        height: 40px;
        line-height: 40px;
    }

    .scroll_bar {
        display: inline-block;
        width: 150px;
        height: 200px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
    }

    .bars{
        background-color: #f60!important;
    }
</style>
