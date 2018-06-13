<template>
	<div class="button"
		 @click="clickEvt($event)"
		 :class="[type,size,{'disable':disable}]">
		<slot v-if="hasSlot()"></slot>
		<span v-else>{{text}}</span>
	</div>
</template>

<script>
  import {Component} from 'vue-property-decorator'
  import globalForm from '../global/global-form'

  @Component({
    props: {
      text: {
        type: String,
        default: '确认'
      },
      type: {
        type: String,
        default: 'primary'
      }
    }
  })

  export default class Button extends globalForm {
    widgetName = 'click';

    clickEvt(ev) {
      if (!this.isDisabled()) {
        this.emitEvent({action: "click", ev});
      }
    }

    hasSlot() {
      return this.$slots.default
    }
  }
</script>

<style scoped lang="less">
	@import "../util/style/common.less";

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
		&.mine {
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
		}
		&.primary {
			background-color: @primary-color;
			color: @font-white;
			&:hover {
				background-color: @primary-hover;
			}
			&.disable {
				background-color: @primary-disable;
				color: @font-color-light;
			}
		}
		&.success {
			background-color: @success-color;
			color: @font-white;
			&:hover {
				background-color: @success-hover;
			}
			&.disable {
				background-color: @success-disable;
				color: @success-bg;
			}
		}
		&.warning {
			background-color: @warning-color;
			color: @font-white;
			&:hover {
				background-color: @warning-hover;
			}
			&.disable {
				background-color: @warning-disable;
				color: @warning-bg;
			}
		}
		&.error {
			background-color: @error-color;
			color: @font-white;
			&:hover {
				background-color: @error-hover;
			}
			&.disable {
				background-color: @error-disable;
				color: @error-bg;
			}
		}
	}
</style>
