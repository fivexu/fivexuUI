<template>
    <div id="slider">
        <ul class="list">
            <li class="ac">
                <div class="left">
                    <p>轮播图 插槽模式 宽高度会由组件外部大小决定 组件会撑满整个外围盒子</p>
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
                <h3>sliderType 类型 String 当前slide</h3>
                <div class="box">
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
                <h3>sliderType 类型 String 当前fade</h3>
                <div class="box">
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
                <h3>sliderType 类型 String 当前3d</h3>
                <div class="box" style="width: 1000px;">
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
            <li>
                <h3>组件组合 fx-mosaic</h3>
                <ol>
                    <li>
                        播放时间 playTime 参数 number 默认 1000
                        <fx-input :inputType="'number'" v-model="mosaicSetInfo.playTime"></fx-input>
                    </li>
                    <li>
                        横向图片个数 row 参数 number 默认 10 (不建议过大,20以内,dom过多会崩溃)
                        <fx-input :inputType="'number'" v-model="mosaicSetInfo.row"></fx-input>
                    </li>
                    <li>
                        纵向图片个数 col 参数 number 默认 5 (不建议过大,10以内,dom过多会崩溃)
                        <fx-input :inputType="'number'" v-model="mosaicSetInfo.col"></fx-input>
                    </li>
                    <li>
                        播放方向 playPath 参数 string 默认 'auto' 有 right,left,top,bottom,auto
                        <fx-button @clickEvt="mosaicSetInfo.playPath='right'">right</fx-button>
                        <fx-button @clickEvt="mosaicSetInfo.playPath='left'">left</fx-button>
                        <fx-button @clickEvt="mosaicSetInfo.playPath='top'">top</fx-button>
                        <fx-button @clickEvt="mosaicSetInfo.playPath='bottom'">bottom</fx-button>
                        <fx-button @clickEvt="mosaicSetInfo.playPath='auto'">auto</fx-button>
                    </li>
                    <li>
                        播放开始方向 playStart 参数 string 默认 'start' 有 start,end,random
                        <fx-button @clickEvt="mosaicSetInfo.playStart='start'">start</fx-button>
                        <fx-button @clickEvt="mosaicSetInfo.playStart='end'">end</fx-button>
                        <fx-button @clickEvt="mosaicSetInfo.playStart='random'">random</fx-button>
                    </li>
                </ol>
                <div class="box" style="width: 1000px;">
                    <fx-slider :data="sliderList"
                               :sliderType="'mosaic'"
                               :time="1000000"
                               @prevClick="prevClick"
                               @nextClick="nextClick"
                               @currentIndex="getCurrentIndex">
                        <div style="width: 100%;height: 100%;" v-for="(item,index) in sliderList">
                            <img :src="currentSrc">
                            <fx-mosaic :playTime="mosaicSetInfo.playTime"
                                       :playPath="mosaicSetInfo.playPath"
                                       :playStart="mosaicSetInfo.playStart"
                                       :row="mosaicSetInfo.row"
                                       :col="mosaicSetInfo.col"
                                       v-if="currentIndex===index"
                                       :img="item.src"></fx-mosaic>
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
                currentIndex: 0,
                currentSrc: './static/slider05.jpg',
                autoPlay: true,
                time: 2000,
                arrowsShow: true,
                dotsShow: true,
                hoverStop: true,
                mosaicPlayPath: 'right',
                sliderList: [
                    {src: './static/slider01.jpg'},
                    {src: './static/slider02.jpg'},
                    {src: './static/slider03.jpg'},
                    {src: './static/slider04.jpg'},
                    {src: './static/slider05.jpg'},
                ],
                mosaicSetInfo: {
                    playStart: 'start',
                    playPath: 'right',
                    playTime: 1000,
                    row: 10,
                    col: 5
                }
            }
        },
        methods: {
            getCurrentIndex(index) {
                this.currentIndex = index;
                if (this.sliderList[index - 1]) {
                    this.currentSrc = this.sliderList[index - 1].src;
                } else {
                    this.currentSrc = this.sliderList[this.sliderList.length - 1].src;
                }
            },
            prevClick() {
            },
            nextClick() {
            },
        },
        mounted() {
        }
    }
</script>

<style scoped lang="less">
    .list {
        padding: 20px;
        > li {
            margin-bottom: 20px;
            &.ac {
                display: flex;
                justify-content: flex-start;
                flex-wrap: nowrap;
            }
            .left {
                width: 600px;
            }
            .right {
                width: 500px;
            }
            h3 {
                text-align: center;
                height: 30px;
                line-height: 30px;
            }
            .box {
                text-align: center;
                width: 400px;
                height: 300px;
                margin: 0 auto;
                img {
                    width: 100%;
                    height: 100%;
                    float: left;
                }
            }
            > ol {
                padding-bottom: 20px;
                > li {
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>