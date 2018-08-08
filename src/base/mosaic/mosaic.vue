<template>
    <div class="mosaic-wrapper">
        <ul class="mosaic-item" ref="mosaic">
            <li v-for="item in mosaicList" ref="item" :style="{'background':'url('+img+')'}"></li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            img: {
                type: String,
                default: ''
            },
            playTime: {
                type: Number,
                default: 1000
            },
            playPath: {
                type: String,
                default: 'auto'
            },
            row: {
                type: Number,
                default: 5
            },
            col: {
                type: Number,
                default: 5
            },
            playStart: {
                type: String,
                default: 'start'
            },
            playType: {
                type: String,
                default: '2d'
            }
        },
        data() {
            return {
                mosaicList: [],
                autoPlay: true
            }
        },
        methods: {
            _setMosaic() {
                let list = parseInt(this.row) * parseInt(this.col)
                for (let i = 0; i < list; i++) {
                    this.mosaicList.push(i)
                }
            },
            _setPicPosition() {
                let width = this.$refs.mosaic.offsetWidth / this.row
                let height = this.$refs.mosaic.offsetHeight / this.col
                let itemRow = 0
                for (let i = 0; i < this.$refs.item.length; i++) {
                    itemRow = Math.floor(i / this.row);
                    this.$refs.item[i].style.width = `${width}px`;
                    this.$refs.item[i].style.height = `${height}px`;
                    this.$refs.item[i].style.backgroundPosition = `${-width * i}px ${-height * itemRow}px`;
                    this.$refs.item[i].style.backgroundSize = `${this.$refs.mosaic.offsetWidth}px ${this.$refs.mosaic.offsetHeight}px`;
                }
                if (this.playType === '2d' || ' ') {
                    this._setPicType();
                    setTimeout(() => {
                        this._play();
                    })
                }
            },
            _setPicType() {
                if (!this.$refs.mosaic || !this.$refs.item) {
                    return;
                }
                let width = this.$refs.mosaic.offsetWidth / this.row
                let height = this.$refs.mosaic.offsetHeight / this.col
                for (let i = 0; i < this.$refs.item.length; i++) {
                    let m = Math.random() > 0.5 ? 5 : -5
                    let x = Math.random() * width * m
                    let y = Math.random() * height * m
                    let z = 0
                    let rotate = 0
                    if (this.playType === '3d') {
                        z = 200
                        rotate = 360
                    }
                    this.$refs.item[i].style.opacity = 0;
                    this.$refs.item[i].style.boxShadow = `0 0 30px 0 rgba(0,0,0,0.8)`;
                    switch (this.playPath) {
                        case 'auto':
                            this.$refs.item[i].style.transform = `translate3d(${x}px,${y}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            this.$refs.item[i].style.webkitTransform = `translate3d(${x}px,${y}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            break;
                        case 'left':
                            this.$refs.item[i].style.transform = `translate3d(${Math.abs(x)}px,0,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            this.$refs.item[i].style.webkitTransform = `translate3d(${Math.abs(x)}px,0,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            break;
                        case 'top':
                            this.$refs.item[i].style.transform = `translate3d(0,${Math.abs(y)}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            this.$refs.item[i].style.webkitTransform = `translate3d(0,${Math.abs(y)}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            break;
                        case 'right':
                            this.$refs.item[i].style.transform = `translate3d(${-Math.abs(x)}px,0,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            this.$refs.item[i].style.webkitTransform = `translate3d(${-Math.abs(x)}px,0,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            break;
                        case 'bottom':
                            this.$refs.item[i].style.transform = `translate3d(0,${-Math.abs(y)}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            this.$refs.item[i].style.webkitTransform = `translate3d(0,${-Math.abs(y)}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            break;
                        default:
                            this.$refs.item[i].style.transform = `translate3d(${x}px,${y}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            this.$refs.item[i].style.webkitTransform = `translate3d(${x}px,${y}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                            break;
                    }
                }
            },
            _play() {
                if (!this.autoPlay) {
                    return
                }
                let start = 0
                let end = 0
                let arr = []
                for (let i = 0; i < this.$refs.item.length; i++) {
                    arr.push(i)
                }
                switch (this.playStart) {
                    case 'start':
                        start = 0
                        end = this.$refs.item.length
                        break
                    case 'end':
                        start = this.$refs.item.length - 1
                        end = 1
                        break
                    case 'random':
                        start = 0
                        end = this.$refs.item.length
                        arr.sort(function () {
                            return 0.5 - Math.random()
                        })
                        break
                    default:
                        start = 0
                        end = this.$refs.item.length
                }
                for (let i = start; (end - start >= 0 ? i : -i) < end; end - start >= 0 ? i++ : i--) {
                    this.timer = setTimeout(() => {
                        if (this.$refs.item[i] === 'undefined' || !this.$refs.item[i]) {
                            return
                        }
                        this.$refs.item[arr[i]].style.webkitTransition = `all 0.5s ease-out`;
                        this.$refs.item[arr[i]].style.transform = `translate3d(0,0,0) rotate(0)`;
                        this.$refs.item[arr[i]].style.webkitTransform = `translate3d(0,0,0) rotate(0)`;
                        this.$refs.item[arr[i]].style.opacity = 1;
                        this.$refs.item[arr[i]].style.boxShadow = `0 0 10px 0 rgba(255,255,255,0)`;
                    }, (this.playTime - 500) / this.$refs.item.length * (end - start >= 0 ? i : this.$refs.item.length - i));
                }
            }
        },
        mounted() {
            this._setMosaic();
            setTimeout(() => {
                this._setPicPosition()
            }, 20)
            window.addEventListener('resize', () => {
                this._setPicPosition()
            })
        },
        beforeDestroy() {
            this.autoPlay = false
        }
    }
</script>

<style lang="less">
    .mosaic-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        .mosaic-item {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 10;
            transform-style: preserve-3d;
            perspective: 100px;
            > li {
                float: left !important;
                transform-origin: 50% 50%;
            }
        }
    }
</style>
