<template>
  <div class="button"
       @click.stop="clickEvt($event)"
       :class="[type,size,{'disable':disable},{'disable':isLoading},{'fill':fill},{'radius':radius}]">
    <span class="loading" v-if="isLoading"><i class="iconfont icon-loading"></i></span>
    <slot v-if="hasSlot()"></slot>
    <span v-else>{{text}}</span>
  </div>
</template>

<script>
  import GlobalForm from '../global/global-form.vue'

  export default {
    extends: GlobalForm,
    props: {
      isLoading: {
        type: Boolean,
        default: false
      },
      text: {  // 显示文字
        type: String,
        default: '确认'
      },
      fill: {  // 铺满背景色
        type: Boolean,
        default: false
      },
      radius: {  // 圆角
        type: Boolean,
        default: false
      }
    },
    methods: {
      // button点击事件 在没有disable时 回调clickEvk事件
      clickEvt(ev) {
        if (!this.isDisabled() && !this.isLoading) {
          this.emitEvent({action: 'click', ev});
        }
      },
      // 判断是否存在slot插槽,用户是否自定义样式,存在时不显示text内容,仅显示插槽内容
      hasSlot() {
        return this.$slots.default
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../util/style/common.less";

  @keyframes rotating {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }

  .button {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    border-radius: @border-radius-btn;
    padding: 0 @padding-button;
    color: @font-color-dark;
    transition: all 0.3s;
    user-select: none;
    .border();
    &.disable {
      cursor: not-allowed;
    }
    &.mini {
      height: @height-mini;
      line-height: @height-mini;
      &.radius {
        border-radius: @height-mini/2;
      }
    }
    &.normal {
      height: @height-normal;
      line-height: @height-normal;
      &.radius {
        border-radius: @height-normal/2;
      }
    }
    &.large {
      height: @height-large;
      line-height: @height-large;
      &.radius {
        border-radius: @height-large/2;
      }
    }
    &.default {
      background-color: @bg-white;
      color: @font-title;
      &:hover {
        background-color: @bg-light;
      }
      &.disable {
        background-color: @bg-color;
        color: @font-color-light;
      }
      &.fill {
        background-color: @bg-white;
        color: @font-title;
        .border(#ccc);
        &.disable {
          .border(#ccc) !important;
          color: @font-color-light !important;
        }
        &:hover {
          color: #333;
          .border(#eee);
        }
      }
    }
    &.primary {
      background-color: @primary-color;
      color: @font-white;
      &:hover {
        background-color: @primary-hover;
      }
      &.disable {
        background-color: @primary-disable !important;
        .border(@primary-disable) !important;
        color: @font-white !important;
      }
      &.fill {
        background-color: @bg-white;
        color: @primary-color;
        .border(@primary-color);
        &.disable {
          .border(@primary-disable) !important;
          color: @font-white !important;
        }
        &:hover {
          color: @primary-hover;
          .border(@primary-hover);
        }
      }
    }
    &.success {
      background-color: @success-color;
      color: @font-white;
      &:hover {
        background-color: @success-hover;
      }
      &.disable {
        background-color: @success-disable !important;
        color: @success-bg !important;
        .border(@success-disable) !important;
      }
      &.fill {
        background-color: @bg-white;
        color: @success-color;
        .border(@success-color);
        &:hover {
          color: @success-hover;
          .border(@success-hover);
        }
      }
    }
    &.warning {
      background-color: @warning-color;
      color: @font-white;
      &:hover {
        background-color: @warning-hover;
      }
      &.disable {
        background-color: @warning-disable !important;
        color: @warning-bg !important;
        .border(@warning-disable) !important;
      }
      &.fill {
        background-color: @bg-white;
        color: @warning-color;
        .border(@warning-color);
        &:hover {
          color: @warning-hover;
          .border(@warning-hover);
        }
      }
    }
    &.error {
      background-color: @error-color;
      color: @font-white;
      &:hover {
        background-color: @error-hover;
      }
      &.disable {
        background-color: @error-disable !important;
        color: @error-bg !important;
        .border(@error-disable) !important;
      }
      &.fill {
        background-color: @bg-white;
        color: @error-color;
        .border(@error-color);
        &:hover {
          color: @error-hover;
          .border(@error-hover);
        }
      }
    }
    span {
      display: inline-block;
      vertical-align: middle;
    }
    .loading {
      i {
        display: inline-block;
        animation: rotating 2s linear infinite;
        margin-right: 5px;
      }
    }
  }
</style>
