<template>
  <div class="mosaic-wrapper">
    <ul class="mosaic-item" ref="mosaic">
      <li v-for="(item,index) in mosaicList" ref="item"
          :style="{'background':'url('+img+')'}"
      ></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Util from '../util/js/util';

  const Transform = Util.prefixStyle('transform');
  const Transition = Util.prefixStyle('transition');
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
      isPlayOut: {
        type: Boolean,
        default: false
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
      },
      positionRandom: {
        type: Boolean,
        default: false
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
        let list = Math.abs(parseInt(this.row === 0 ? 1 : this.row)) * Math.abs(parseInt(this.col === 0 ? 1 : this.col));
        for (let i = 0; i < list; i++) {
          this.mosaicList.push(i)
        }
      },
      _setPicPosition() {
        if (!this.$refs.item.length || !this.$refs.mosaic) {
          return;
        }
        let width = this.$refs.mosaic.offsetWidth / Math.abs(parseInt(this.row === 0 ? 1 : this.row));
        let height = this.$refs.mosaic.offsetHeight / Math.abs(parseInt(this.col === 0 ? 1 : this.col));
        let itemRow = 0;
        for (let i = 0; i < this.$refs.item.length; i++) {
          itemRow = Math.floor(i / Math.abs(parseInt(this.row === 0 ? 1 : this.row)));
          this.$refs.item[i].style.width = `${width}px`;
          this.$refs.item[i].style.height = `${height}px`;
          this.$refs.item[i].style.backgroundPosition = `${-width * i}px ${-height * itemRow}px`;
          this.$refs.item[i].style.backgroundSize = `${this.$refs.mosaic.offsetWidth}px ${this.$refs.mosaic.offsetHeight}px`;
        }
        if (this.playType !== '3d') {
          if(this.isPlayOut) {
            this._setPicTypeOut();
            setTimeout(() => {
              this._playOut();
            }) ;
            return
          }
          this._setPicType();
          setTimeout(() => {
            this._play();
          })
        }
      },
      _setPicType() {
        if (!this.$refs.mosaic || !this.$refs.item.length) {
          return;
        }
        let width = this.$refs.mosaic.offsetWidth / Math.abs(parseInt(this.row === 0 ? 1 : this.row));
        let height = this.$refs.mosaic.offsetHeight / Math.abs(parseInt(this.col === 0 ? 1 : this.col));
        for (let i = 0; i < this.$refs.item.length; i++) {
          let m = this.positionRandom ? 5 : Math.random() > 0.5 ? 5 : -5;
          let x = this.positionRandom ? width * m : Math.random() * width * m;
          let y = this.positionRandom ? height * m : Math.random() * height * m;
          let z = 0;
          let rotate = 0;
          if (this.playType === '3d') {
            z = 200;
            rotate = 360
          }
          this.$refs.item[i].style.opacity = 0;
          // this.$refs.item[i].style.boxShadow = `0 0 30px 0 rgba(0,0,0,0.8)`;
          switch (this.playPath) {
            case 'auto':
              this.$refs.item[i].style[Transform] = `translate3d(${x}px,${y}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
              break;
            case 'left':
              this.$refs.item[i].style[Transform] = `translate3d(${Math.abs(x)}px,0,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
              break;
            case 'top':
              this.$refs.item[i].style[Transform] = `translate3d(0,${Math.abs(y)}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
              break;
            case 'right':
              this.$refs.item[i].style[Transform] = `translate3d(${-Math.abs(x)}px,0,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
              break;
            case 'bottom':
              this.$refs.item[i].style[Transform] = `translate3d(0,${-Math.abs(y)}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
              break;
            default:
              this.$refs.item[i].style[Transform] = `translate3d(${x}px,${y}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
              break;
          }
        }
      },
      _setPicTypeOut() {
        if (!this.$refs.mosaic || !this.$refs.item.length) {
          return;
        }
        let width = this.$refs.mosaic.offsetWidth / Math.abs(parseInt(this.row === 0 ? 1 : this.row));
        let height = this.$refs.mosaic.offsetHeight / Math.abs(parseInt(this.col === 0 ? 1 : this.col));
        for (let i = 0; i < this.$refs.item.length; i++) {
          this.$refs.item[i].style.opacity = 1;
          // this.$refs.item[i].style.boxShadow = `0 0 30px 0 rgba(0,0,0,0.8)`;
          this.$refs.item[i].style[Transform] = `translate3d(0,0,0) rotate(0)`;
        }
      },
      _play() {
        if (!this.autoPlay || !this.$refs.item.length) {
          return
        }
        let start = 0;
        let end = 0;
        let arr = [];
        for (let i = 0; i < this.$refs.item.length; i++) {
          arr.push(i)
        }
        switch (this.playStart) {
          case 'start':
            start = 0;
            end = this.$refs.item.length;
            break;
          case 'end':
            start = this.$refs.item.length - 1;
            end = 1;
            break;
          case 'random':
            start = 0;
            end = this.$refs.item.length;
            arr.sort(function () {
              return 0.5 - Math.random()
            });
            break;
          default:
            start = 0;
            end = this.$refs.item.length
        }
        for (let i = start; (end - start >= 0 ? i : -i) < end; end - start >= 0 ? i++ : i--) {
          this.timer = setTimeout(() => {
            if (this.$refs.item[i] === 'undefined' || !this.$refs.item[i]) {
              return
            }
            this.$refs.item[arr[i]].style[Transition] = `all 0.5s ease-out`;
            setTimeout(() => {
              if (this.$refs.item[arr[i]] === 'undefined' || !this.$refs.item[arr[i]]) {
                return
              }
              this.$refs.item[arr[i]].style[Transform] = `translate3d(0,0,0) rotate(0)`;
              this.$refs.item[arr[i]].style.opacity = 1;
              // this.$refs.item[arr[i]].style.boxShadow = `0 0 10px 0 rgba(255,255,255,0)`;
            })
          }, (this.playTime - 500) / this.$refs.item.length * (end - start >= 0 ? i : this.$refs.item.length - i));
        }
      },
      _playOut() {
        if (!this.autoPlay || !this.$refs.item.length) {
          return
        }
        let start = 0;
        let end = 0;
        let arr = [];
        for (let i = 0; i < this.$refs.item.length; i++) {
          arr.push(i)
        }
        switch (this.playStart) {
          case 'start':
            start = 0;
            end = this.$refs.item.length;
            break;
          case 'end':
            start = this.$refs.item.length - 1;
            end = 1;
            break;
          case 'random':
            start = 0;
            end = this.$refs.item.length;
            arr.sort(function () {
              return 0.5 - Math.random()
            });
            break;
          default:
            start = 0;
            end = this.$refs.item.length
        }
        for (let i = start; (end - start >= 0 ? i : -i) < end; end - start >= 0 ? i++ : i--) {
          this.timer = setTimeout(() => {
            if (this.$refs.item[i] === 'undefined' || !this.$refs.item[i]) {
              return
            }
            this.$refs.item[arr[i]].style[Transition] = `all 0.5s ease-in`;
            setTimeout(() => {
              if (this.$refs.item[arr[i]] === 'undefined' || !this.$refs.item[arr[i]]) {
                return
              }
              let width = this.$refs.mosaic.offsetWidth / Math.abs(parseInt(this.row === 0 ? 1 : this.row));
              let height = this.$refs.mosaic.offsetHeight / Math.abs(parseInt(this.col === 0 ? 1 : this.col));
              let m = this.positionRandom ? 5 : Math.random() > 0.5 ? 5 : -5;
              let x = this.positionRandom ? width * m : Math.random() * width * m;
              let y = this.positionRandom ? height * m : Math.random() * height * m;
              let z = 0;
              let rotate = 0;
              if (this.playType === '3d') {
                z = 200;
                rotate = 360
              }
              this.$refs.item[arr[i]].style.opacity = 0;
              switch (this.playPath) {
                case 'auto':
                  this.$refs.item[arr[i]].style[Transform] = `translate3d(${x}px,${y}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                  break;
                case 'left':
                  this.$refs.item[arr[i]].style[Transform] = `translate3d(${Math.abs(x)}px,0,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                  break;
                case 'top':
                  this.$refs.item[arr[i]].style[Transform] = `translate3d(0,${Math.abs(y)}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                  break;
                case 'right':
                  this.$refs.item[arr[i]].style[Transform] = `translate3d(${-Math.abs(x)}px,0,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                  break;
                case 'bottom':
                  this.$refs.item[arr[i]].style[Transform] = `translate3d(0,${-Math.abs(y)}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                  break;
                default:
                  this.$refs.item[arr[i]].style[Transform] = `translate3d(${x}px,${y}px,${z}px) rotateY(${rotate}deg) rotateX(${rotate}deg)`;
                  break;
              }
            })
          }, (this.playTime - 500) / this.$refs.item.length * (end - start >= 0 ? i : this.$refs.item.length - i));
        }
      }
    },
    mounted() {
      this._setMosaic();
      this.$nextTick(() => {
        setTimeout(() => {
          this._setPicPosition()
        }, 20);
      });
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
