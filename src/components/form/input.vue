<template>
    <div class="input">
        <input :class="size"
               v-model="inputValue"
               type="text">
    </div>
</template>

<script>
  import {Component, Watch} from 'vue-property-decorator'
  import globalForm from '../global/global-form'

  @Component({})
  export default class input extends globalForm {
    inputValue = '';

    @Watch('inputValue')
    onInputValueChange(val, oldVal) {
      this.updateModel(val);
      this.emitEvent({action: 'change', val, oldVal});
    }
  }
</script>

<style scoped lang="less">
    @import "../util/style/common.less";

    .input {
        input {
            outline: none;
            padding: 0 @padding-input;
            font-size: 12px;
            background-color: @input-bg;
            .border();
            .transition(0.3s, box-shadow);
            &.mini {
                height: @height-mini;
                line-height: @height-mini;
            }
            &.normal {
                height: @height-normal;
                line-height: @height-normal;
            }
            &.large {
                height: @height-large;
                line-height: @height-large;
            }
            &:focus {
                border-color: @input-focus;
                outline: 0;
                -webkit-box-shadow: inset 0 1px 1px 0 @input-inset-shadow, 0 0 8px 0 @input-outset-shadow;
                box-shadow: inset 0 1px 1px 0 @input-inset-shadow, 0 0 8px 0 @input-inset-shadow;
            }
            &[readonly], &[disabled] {
                background-color: @input-disable;
                .box-shadow(inset 0 1px 1px 0 rgba(0, 0, 0, .075))
            }
        }
    }
</style>
