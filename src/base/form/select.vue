<template>
  <div class="select_wrapper" :class="size" ref="selectListDom" @click.stop="selectClick">
    <span :class="[{ac:selectListShow&&!disable}]"><i class="iconfont icon-triangle"></i></span>
    <fx-input v-if="!multiple" class="input" :size="size" :readOnly="readonly" v-model="selectValue"></fx-input>
    <ul v-if="multiple"
        ref="multipleDom"
        class="multiple clearfix"
        :class="{max_height:multiple&&!selectListShow,focus:multiple&&selectListShow}">
      <li v-for="item in selectMultipleList">
        {{item.label}}
        <span @click.stop="deleteSelectItem(item)"><i class="iconfont icon-close"></i></span>
      </li>
    </ul>
    <transition name="top">
      <div class="select_list" v-if="selectListShow&&!disable">
        <div class="select_item text_hide" v-for="item in data"
             :class="[
                         {select_ac:!multiple&&selectValue===item.label},
                         {select_ac:multiple&&item.checked}
                         ]"
             @click="selectListClick(item)">
          {{item.label}}
          <em v-if="multiple&&item.checked"><i class="iconfont icon-yes"></i></em>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import GlobalForm from '../global/global-form.vue';
  import Input from './input';
  import ScrollBar from '../scrollBar/scrollBar';

  export default {
    extends: GlobalForm,
    props: {
      data: {
        type: Array,
        default: []
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        selectValue: '',
        selectListShow: false,
        readonly: true,
        selectMultipleList: [],
      }
    },
    methods: {
      // 点击显示下拉
      selectClick() {
        this.selectListShow = true;
      },
      // 点击下拉选项
      selectListClick(item) {
        !this.multiple ? this._selectOnly(item) : this._selectMultiple(item);
      },
      // 点击空白隐藏
      clickOtherCloseDom() {
        if (!this.$refs.selectListDom) return;
        window.addEventListener('mousedown', this.closeDown)
      },
      closeDown(ev) {
        ev = ev || event;
        ev.stopPropagation();
        if (this.$refs.selectListDom && this.$refs.selectListDom !== ev.target && !this.$refs.selectListDom.contains(ev.target)) {
          this.selectListShow = false;
        }
      },
      // 初始化,显示选中默认值
      initDefaultValue() {
        if (this.data.length && this.multiple && typeof this.value === 'object') {
          this.selectMultipleList = [];
          this.data.forEach(dataItem => {
            dataItem.checked = false;
            this.value.forEach(item => {
              if (dataItem.value === item) {
                this.selectMultipleList.push(dataItem);
                dataItem.checked = true;
              }
            })
          });
        } else if (this.data.length) {
          this.data.forEach(item => {
            if (this.value && this.value === item.value) {
              this.selectValue = item.label;
              this.updateModel(item.value);
            }
          })
        }
      },
      // 单选逻辑
      _selectOnly(item) {
        this.readonly = false;
        setTimeout(() => {
          this.selectValue = item.label;
          this.selectListShow = false;
          this.readonly = true;
          this.updateModel(item.value);
          this.emitEvent(Object.assign({active: 'selectItemClick'}, item))
        })
      },
      // 多选逻辑
      _selectMultiple(item) {
        let off = false;
        if (!item.checked && !this.selectMultipleList.length) {
          this.selectMultipleList.push(item);
          this.updateMultiple();
          return;
        }
        this.selectMultipleList.forEach(it => {
          if (it.value === item.value) {
            off = true;
          }
        });
        if (!off && !item.checked) {
          this.selectMultipleList.push(item);
          this.data.forEach(dataItem => {
            if (dataItem.value === item.value) {
              dataItem.checked = true;
            }
          })
        } else if (item.checked) {
          this.deleteSelectItem(item);
          return;
        }
        this.updateMultiple();
      },
      // 多选删除
      deleteSelectItem(item) {
        if (this.isDisabled()) {
          return
        }
        this.data.forEach(dataItem => {
          if (dataItem.value === item.value) {
            dataItem.checked = false;
          }
        });
        this.selectMultipleList.forEach((it, index) => {
          if (it.value === item.value) {
            this.selectMultipleList.splice(index, 1);
          }
        });
        this.updateMultiple();
      },
      // 多选数据绑定
      updateMultiple() {
        let arr = [];
        this.selectMultipleList.forEach(item => {
          arr.push(item.value);
        });
        this.updateModel(arr);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initDefaultValue();
        if (!this.$refs.selectListDom) return;
        this.clickOtherCloseDom();
      })
    },
    beforeDestroy() {
      window.removeEventListener('mousedown', this.closeDown);
    },
    watch: {
      value() {
        this.initDefaultValue();
      },
      data() {
        this.initDefaultValue();
      }
    },
    components: {
      'fx-input': Input,
      'fx-scrollBar': ScrollBar,
    }
  }
</script>

<style scoped lang="less">
  @import "../util/style/common";

  .select_wrapper {
    user-select: none;
    display: inline-block;
    position: relative;
    height: 100%;
    min-height: @height-normal;
    background-color: transparent;
    width: @input-width;
    &.mini {
      min-height: @height-mini;
    }
    &.normal {
      min-height: @height-normal;
    }
    &.large {
      min-height: @height-large;
    }
    > .input {
      width: 100%;
      position: relative;
      z-index: 10;
    }
    .select_list {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 30;
      max-width: 100%;
      width: 100%;
      max-height: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      border: 1px solid @input-border;
      background-color: @select-bg;
      .transform(translateY(100%));
      .transition-to-top;
      > .select_item {
        padding: 0 @padding-input;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        position: relative;
        &.select_ac {
          background-color: @select-ac-bg !important;
          color: @select-ac-color !important;
        }
        &:hover {
          background-color: @select-hover-bg;
        }
        > em {
          display: inline-block;
          width: 16px;
          background-color: #fff;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto 0;
        }
      }
    }
    .multiple {
      width: @input-width;
      box-sizing: border-box;
      padding: 0 @padding-input;
      font-size: 12px;
      background-color: @input-bg;
      border-radius: @input-border-radius;
      border: 1px solid @border-color;
      min-height: @height-normal;
      overflow: hidden;
      position: relative;
      z-index: 5;
      &.focus {
        border-color: @input-focus-primary !important;
        outline: 0;
        .box-shadow(inset 0 1px 1px 0 @input-inset-shadow, 0 0 8px 0 @input-outset-shadow-primary);
      }
      &.max_height {
        height: @height-normal;
      }
      > li {
        padding: 0 26px 0 5px;
        margin: 2px 5px;
        border-radius: @border-radius-btn;
        min-height: 24px;
        line-height: 24px;
        float: left;
        position: relative;
        border: 1px solid @select-multiple-border;
        color: @select-multiple-color;
        background-color: @select-multiple-bg;
        > span {
          display: inline-block;
          width: 16px;
          height: 16px;
          line-height: 16px;
          position: absolute;
          right: 5px;
          top: 0;
          bottom: 0;
          margin: auto 0;
          cursor: pointer;
        }
      }
    }
    > span {
      width: 16px;
      height: 16px;
      line-height: 14px;
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 5px;
      margin: auto 0;
      z-index: 20;
      .transition(all 0.3s);
      &.ac {
        .transform(rotate(180deg))
      }
    }
  }
</style>
