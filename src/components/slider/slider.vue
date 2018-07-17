<template>
    <div id="slider">
        <ul class="list">
            <li>
                <div class="left">
                    <h3>轮播图 插槽模式 宽高度会由组件外部大小决定 组件会撑满整个外围盒子</h3>
                    <p>
                        是否自动播放
                        <fx-button @clickEvt="autoPlay=!autoPlay">{{autoPlay?'关闭':'开启'}}</fx-button>
                    </p>
                    <p>
                        滚动时间
                        <fx-input v-model="time"></fx-input>
                    </p>
                    <p>
                        是否需要两边翻页箭头
                        <fx-button @clickEvt="arrowsShow=!arrowsShow">{{arrowsShow?'关闭':'开启'}}</fx-button>
                    </p>
                    <p>
                        是否需要下方导航点
                        <fx-button @clickEvt="dotsShow=!dotsShow">{{dotsShow?'关闭':'开启'}}</fx-button>
                    </p>
                    <p>
                        是否需要滑入轮播图时,停止播放
                        <fx-button @clickEvt="hoverStop=!hoverStop">{{hoverStop?'关闭':'开启'}}</fx-button>
                    </p>
                </div>
                <div class="right">
                    <fx-slider :data="sliderList"
                               :autoPlay="autoPlay"
                               :time="Number(time)"
                               :arrowsShow="arrowsShow"
                               :dotsShow="dotsShow"
                               :hoverStop="hoverStop">
                        <div>
                            <img src="../../../static/slider01.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider02.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider03.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider04.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider05.jpg">
                        </div>
                    </fx-slider>
                </div>
            </li>
            <li>
                <div class="box">
                    <h3>sliderType  类型  String   当前slide</h3>
                    <fx-slider :data="sliderList"
                               :sliderType="'slide'">
                        <div>
                            <img src="../../../static/slider01.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider02.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider03.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider04.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider05.jpg">
                        </div>
                    </fx-slider>
                </div>
            </li>
            <li>
                <div class="box">
                    <h3>sliderType  类型  String   当前fade</h3>
                    <fx-slider :data="sliderList"
                               :sliderType="'fade'">
                        <div>
                            <img src="../../../static/slider01.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider02.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider03.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider04.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider05.jpg">
                        </div>
                    </fx-slider>
                </div>
            </li>
            <li>
                <div class="box" style="width: 1000px;">
                    <h3>sliderType  类型  String   当前3d</h3>
                    <fx-slider :data="sliderList"
                               :hidden="false"
                               :sliderType="'3d'">
                        <div>
                            <img src="../../../static/slider01.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider02.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider03.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider04.jpg">
                        </div>
                        <div>
                            <img src="../../../static/slider05.jpg">
                        </div>
                    </fx-slider>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "slider",
        data() {
            return {
                autoPlay: true,
                time: 2000,
                arrowsShow: true,
                dotsShow: true,
                hoverStop: true,
                sliderList: [
                    {src: '../../../static/slider01.jpg'},
                    {src: '../../../static/slider02.jpg'},
                    {src: '../../../static/slider03.jpg'},
                    {src: '../../../static/slider04.jpg'},
                    {src: '../../../static/slider05.jpg'},
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .list {
        padding: 20px;
        > li {
            display: flex;
            justify-content: flex-start;
            flex-wrap: nowrap;
            height: 300px;
            padding-bottom: 20px;
            .left {
                width: 600px;
            }
            .right {
                width: 500px;
            }
            .box{
                text-align: center;
                width: 500px;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                    float: left;
                }
            }
        }
    }
</style>