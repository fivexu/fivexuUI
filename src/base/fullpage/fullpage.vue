<template>
    <div class="fullpage"
         ref="fullPage"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd">
        <div class="translatePage" v-if="!isScrollBar" ref="translatePage">
            <slot></slot>
        </div>
        <slot v-if="isScrollBar"></slot>
        <div class="dot" v-if="!isScrollBar&&isDots" ref="dot">
            <div class="dots"
                 ref="dots"
                 v-for="(item,index) in dots"
                 :class="{ac:page===index}"
                 @click="dotClick(index)"
            ></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Util from '../util/js/util';

    const Transform = Util.prefixStyle('transform');
    export default {
        props: {
            isScrollBar: {
                type: Boolean,
                default: true
            },
            scrollTime: {
                type: Number,
                default: 500
            },
            isDots: {
                type: Boolean,
                default: false
            },
            toPage: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                dots: [],
                page: 0,
                start: 0,
                end: 0
            }
        },
        created() {
            this.touch = {}
        },
        methods: {
            touchStart(ev) {
                if (!this.touched) {
                    return
                }
                this.touch.initiated = true
                const touch = ev.touches[0]
                this.deltaY = 0
                this.touch.startY = touch.pageY
            },
            touchMove(ev) {
                if (!this.touch.initiated) {
                    return
                }
                const touch = ev.touches[0]
                this.deltaY = touch.pageY - this.touch.startY
            },
            touchEnd() {
                this.touch.initiated = false
                if (!this.$refs.translatePage) {
                    return
                }
                if (this.deltaY < -20) {
                    this.page++
                    if (this.page >= this.$refs.translatePage.children.length) {
                        this.page = this.$refs.translatePage.children.length - 1
                        return
                    }
                    if (this.isScrollBar) {
                        this.scrollTo(this.page)
                    } else {
                        this.translateTo(this.page)
                    }
                    this.$emit('currentPage', this.page)
                }
                if (this.deltaY > 20) {
                    this.page--
                    if (this.page < 0) {
                        this.page = 0
                        return
                    }
                    if (this.isScrollBar) {
                        this.scrollTo(this.page)
                    } else {
                        this.translateTo(this.page)
                    }
                    this.$emit('currentPage', this.page)
                }
            },
            _initFullPage() {
                if (!this.$refs.fullPage) {
                    return;
                }
                this.dots = [];
                let children = this.$refs.fullPage.children;
                children = this.isScrollBar ? this.$refs.fullPage.children : this.$refs.translatePage.children;
                for (let i = 0; i < children.length; i++) {
                    children[i].className += ' fullpages';
                    this.dots.push(i);
                }
                if (!this.isScrollBar) {
                    this.$refs.fullPage.style.overflow = `hidden`;
                    this.$refs.translatePage.style[Transform] = `translate3d(0px,0px,0px)`;
                    this.$emit('maxPage', children.length);
                    if (!this.isDots) {
                        return;
                    }
                    setTimeout(() => {
                        let height = (this.$refs.dot.offsetHeight - 20) / this.dots.length;
                        height = height > 15 ? 15 : height;
                        for (let i = 0; i < this.dots.length; i++) {
                            this.$refs.dots[i].style.width = `${height}px`;
                            this.$refs.dots[i].style.height = `${height}px`;
                        }
                    })
                }
            },
            isPC() {
                var userAgentInfo = navigator.userAgent
                var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
                var flag = true
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        flag = false
                        break
                    }
                }
                return flag
            },
            getScrollTop() {
                let scrollTop = 0
                if (document.documentElement && document.documentElement.scrollTop) {
                    scrollTop = document.documentElement.scrollTop
                } else if (document.body) {
                    scrollTop = document.body.scrollTop
                }
                return scrollTop
            },
            addMouseWheel(fn) {
                if ((navigator.userAgent.toLowerCase().indexOf('firefox') !== -1)) {
                    document.addEventListener('DOMMouseScroll', fn, false)
                } else if (document.addEventListener) {
                    document.addEventListener('mousewheel', fn, false)
                } else if (document.attachEvent) {
                    document.attachEvent('onmousewheel', fn)
                } else {
                    document.onmousewheel = fn
                }
            },
            scrollTo(y, time = this.scrollTime) {
                y = document.documentElement.clientHeight * y
                let timer = null
                let n = this.getScrollTop()
                clearInterval(timer)
                timer = setInterval(() => {
                    if (n <= y) {
                        n += document.documentElement.clientHeight * 30 / time
                        window.scrollTo(0, n)
                        if (n > y) {
                            clearInterval(timer)
                            window.scrollTo(0, y)
                        }
                    }
                    if (n > y) {
                        n -= document.documentElement.clientHeight * 30 / time
                        window.scrollTo(0, n)
                        if (n < y) {
                            clearInterval(timer)
                            window.scrollTo(0, y)
                        }
                    }
                }, 30)
            },
            translateTo(y, time = this.scrollTime) {
                y = document.documentElement.clientHeight * y
                let timer = null
                let n = Math.abs(parseInt(this.$refs.translatePage.style[Transform].replace('translate3d(0px, ', '').replace('px, 0px)')))
                clearInterval(timer)
                timer = setInterval(() => {
                    if (n <= y) {
                        n += document.documentElement.clientHeight * 30 / time
                        this.$refs.translatePage.style[Transform] = `translate3d(0,${-n}px,0)`
                        if (n >= y) {
                            this.$refs.translatePage.style[Transform] = `translate3d(0,${-y}px,0)`
                            clearInterval(timer)
                        }
                    }
                    if (n > y) {
                        n -= document.documentElement.clientHeight * 30 / time
                        this.$refs.translatePage.style[Transform] = `translate3d(0,${-n}px,0)`
                        if (n <= y) {
                            this.$refs.translatePage.style[Transform] = `translate3d(0,${-y}px,0)`
                            clearInterval(timer)
                        }
                    }
                }, 30)
            },
            dotClick(index) {
                let changePage = Math.abs(this.page - index)
                this.page = index
                this.translateTo(this.page, this.scrollTime / changePage)
                this.$emit('currentPage', this.page)
            },
            setTouched() {
                let width = this.isPC() ? document.documentElement.clientWidth : window.screen.width
                width <= 450 ? this.touched = true : this.touched = false
                if (width <= 450) {
                    this.touched = true

                    this._initFullPage()
                } else {
                    this.touched = false
                }
                window.addEventListener('resize', () => {
                    this._initFullPage()
                    if (width <= 450) {
                        this.touched = true
                        this._initFullPage()
                    } else {
                        this.touched = false
                    }
                })
            },
            scrollMouseWheel() {
                setTimeout(() => {
                    this.$emit('currentPage', this.page)
                }, 20)
                this.addMouseWheel((ev) => {
                    if (!this.$refs.fullPage) {
                        return
                    }
                    ev = ev || event
                    ev.preventDefault()
                    window.scrollTo(0, this.getScrollTop())
                    this.start = new Date().getTime()
                    let delta = ev.wheelDelta || -ev.detail
                    if (this.end - this.start < -this.scrollTime) {
                        if (delta && delta > 0) {
                            this.page = Math.round(this.getScrollTop() / document.documentElement.clientHeight)
                            this.page--
                            if (this.page < 0) {
                                this.page = 0
                                return
                            }
                            this.$emit('currentPage', this.page)
                            this.scrollTo(this.page)
                            this.$emit('path', false)
                        }
                        if (delta && delta < 0) {
                            this.page = Math.round(this.getScrollTop() / document.documentElement.clientHeight)
                            this.page++
                            if (this.page >= this.$refs.fullPage.children.length) {
                                this.page = this.$refs.fullPage.children.length - 1
                                return
                            }
                            this.$emit('currentPage', this.page)
                            this.scrollTo(this.page)
                            this.$emit('path', true)
                        }
                        this.end = new Date().getTime()
                    } else {
                        ev.preventDefault()
                    }
                })
            },
            translateMouseWheel() {
                setTimeout(() => {
                    this.$emit('currentPage', this.page)
                }, 20)
                this.addMouseWheel((ev) => {
                    if (!this.$refs.translatePage) {
                        return
                    }
                    ev = ev || event
                    this.start = new Date().getTime()
                    let delta = ev.wheelDelta || -ev.detail
                    if (this.end - this.start < -this.scrollTime) {
                        if (delta && delta > 0) {
                            this.page--
                            if (this.page < 0) {
                                this.page = 0
                                return
                            }
                            this.$emit('currentPage', this.page)
                            this.translateTo(this.page)
                            this.$emit('path', false)
                        }
                        if (delta && delta < 0) {
                            this.page++
                            if (this.page >= this.$refs.translatePage.children.length) {
                                this.page = this.$refs.translatePage.children.length - 1
                                return
                            }
                            this.$emit('currentPage', this.page)
                            this.translateTo(this.page)
                            this.$emit('path', true)
                        }
                        this.end = new Date().getTime()
                    } else {
                        ev.preventDefault()
                    }
                })
            }
        },
        mounted() {
            this.$nextTick(() => {
                this._initFullPage()
            });
            this.setTouched();
            this.isScrollBar ? this.scrollMouseWheel() : this.translateMouseWheel()
        },
        watch: {
            toPage(val) {
                let changePage = Math.abs(this.page - val);
                this.page = val;
                if (this.isScrollBar) {
                    this.scrollTo(this.page, this.scrollTime / changePage)
                } else {
                    this.translateTo(this.page, this.scrollTime / changePage)
                }
                this.$emit('currentPage', this.page)
            }
        },
        destroyed() {
            clearInterval(this.timer)
        }
    }
</script>

<style scoped rel="stylesheet/css">
    .fullpage {
        width: 100%;
        height: 100%;
    }

    .fullpage .translatePage {
        width: 100%;
        height: 100%;
        transform: translate3d(0, 0, 0);
    }

    .fullpage .fullpages {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .fullpage .dot {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 10000;
        margin: auto 0;
        height: fit-content;
        width: 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .fullpage .dot .dots {
        cursor: pointer;
        margin: 10px auto;
        border: 1px solid #54beed;
        border-radius: 50%;
        transition: all 0.3s;
    }

    .fullpage .dot .dots.ac {
        background-color: #54beed;
        border: 1px solid #54beed;
    }
</style>
