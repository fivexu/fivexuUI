<template>
  <div id="modal" @keydown.stop="keyDown($event)">
    <div class="modal_bg" @click.stop="cancelModal"></div>
    <div class="modal" ref="modal" v-drag.fixed :style="{width:`${width}px`}" :class="{ac:show}">
      <!-- title -->
      <div class="title" v-if="!hasSlot('title')&&isTitle">
        <h6>{{title}}</h6>
        <span @click.stop="cancel"><i class="iconfont icon-close"></i></span>
      </div>
      <slot v-else name="title"></slot>
      <!-- title -->
      <!-- content -->
      <div class="content">
        <slot name="default"></slot>
      </div>
      <!-- content -->
      <!-- footer -->
      <div class="footer" v-if="!hasSlot('footer')&&isFooter">
        <fx-button @clickEvt="cancel" type="default">取消</fx-button>
        <fx-button @clickEvt="define">确定</fx-button>
      </div>
      <slot name="footer" v-else></slot>
      <!-- footer -->
    </div>
  </div>
</template>

<script>
  import Button from '../form/button.vue';
  import Global from '../global/global.vue';

  export default {
    extends: Global,
    name: "modal",
    props: {
      width: {
        type: Number,
        default: 400
      },
      title: {
        type: String,
        default: '提示'
      },
      isFooter: {
        type: Boolean,
        default: true
      },
      isTitle: {
        type: Boolean,
        default: true
      },
      isModalClose: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      _initStyle() {
        this.$refs.modal.style.left = `${window.innerWidth / 2 - this.$refs.modal.offsetWidth / 2}px`
      },
      cancelModal() {
        if (this.isModalClose) return;
        this.$emit('cancel', null);
      },
      cancel() {
        this.$emit('cancel', null);
      },
      define() {
        this.$emit('define', null);
      },
      keyDown(ev) {
        ev = ev || event;
        if (ev.keyCode === 27) this.cancel();
      }
    },
    mounted() {
      this.$nextTick(() => {
        // window.addEventListener('keydown', this.keyDown.bind(this));
        this._initStyle();
        setTimeout(() => {
          this.show = true;
        }, 30)
      })
    },
    destroy() {
      window.removeEventListener('keydown', this.keyDown.bind(this));
    },
    components: {
      'fx-button': Button
    }
  }
</script>

<style scoped lang="less">
  @import "../util/style/common.less";

  #modal {

    .modal_bg {
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: @z-index-nav;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .5);
    }
    .modal {
      background-color: @white;
      position: fixed;
      z-index: @z-index-base;
      left: 50%;
      top: 20px;
      border-radius: 6px;
      padding: 10px 16px;
      box-sizing: border-box;
      opacity: 0;
      .transform(scale(0.8));
      .transition(scale 0.08s ease-out);
      &.ac {
        opacity: 1;
        .transform(scale(1));
      }
      .title {
        height: 30px;
        line-height: 30px;
        position: relative;
        > h6 {
          width: 100%;
          height: 30px;
          overflow: hidden;
        }
        > span {
          display: inline-block;
          width: 30px;
          height: 30px;
          background-color: #fff;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto 0;
          cursor: pointer;
        }
      }
      .footer {
        padding-top: 10px;
        border-top: 1px solid @border-color;
        text-align: right;
      }
    }
  }
</style>
