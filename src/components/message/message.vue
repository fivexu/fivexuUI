<template>
	<transition name="top">
		<div class="message" ref="mes" :class="mesPosition" v-if="messageShow">
			<div ref="content" class="content" v-if="messageShow" :class="mesType">
				<span ref="text">{{message}}</span>
			</div>
		</div>
	</transition>
</template>

<script>
  export default {
    name: 'message',
    props: {
      message: {
        type: String,
        default: 'message'
      },
      messageShow: {
        type: Boolean,
        default: false
      },
      mesType: {
        type: String,
        default: 'success'
      },
      mesPosition: {
        type: String,
        default: 'top-center'
      }
    },
    methods: {
      initContent() {
        if (!this.$refs.mes) return;
        this.$refs.mes.style.width = `${this.$refs.text.offsetWidth + 20}px`;
      },
      setTop() {
        // console.log(this.$refs.mes, document.querySelector('.message'))
      }
    },
    mounted() {
      this.initContent()
      this.setTop()
    }
  }
</script>

<style scoped lang="less">
	@import "../util/style/common";

	.message {
		height: 40px;
		line-height: 40px;
		position: fixed;
		z-index: @z-index-nav;

		&.top-right {
			top: 20px;
			right: 20px;
		}
		&.top-center {
			left: 0;
			right: 0;
			top: 20px;
			margin: 0 auto;
		}
		&.top-left {
			top: 20px;
			left: 20px;
		}
		&.middle-right {
			right: 20px;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
		&.center {
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
		}
		&.middle-left {
			left: 20px;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
		&.bottom-right {
			right: 20px;
			bottom: 20px;
		}
		&.bottom-center {
			left: 0;
			right: 0;
			bottom: 20px;
			margin: 0 auto;
		}
		&.bottom-left {
			left: 20px;
			bottom: 20px;
		}
		.content {
			white-space: nowrap;
			padding: 0 10px;
			border-radius: @border-radius-btn;
			border: 1px solid @primary-color;
			background-color: @primary-hover;
			color: @white;
			&.top-enter {
				transform: translateY(-100%);
			}
			&.top-enter-active {
				transition: all 3s;
			}
			&.success {
				border: 1px solid @success-border;
				background-color: @success-bg;
				color: @success-color;
			}
			&.warning {
				border: 1px solid @warning-border;
				background-color: @warning-bg;
				color: @warning-color;
			}
			&.error {
				border: 1px solid @error-border;
				background-color: @error-bg;
				color: @error-color;
			}
		}
	}
</style>