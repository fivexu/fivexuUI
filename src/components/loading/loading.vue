<template>
	<div class="loading" :style="{backgroundColor:bgColor}" v-if="showLoading" :class="{fixed:fixed}">
		<div class="content" :style="{height:describe!==''?'84px':'64px'}">
			<p v-if="describe!==''&&describePosition==='top'">{{describe}}</p>
			<img src="./loading.gif">
			<p v-if="describe!==''&&describePosition==='bottom'">{{describe}}</p>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'loading',
    props: {
      showLoading: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: true
      },
      describe: {
        type: String,
        default: ''
      },
      describePosition: {
        type: String,
        default: 'bottom'
      },
      bgColor: {
        type: String,
        default: 'rgba(0, 0, 0, .5)'
      }
    }
  }
</script>

<style scoped lang="less">
	@import "../util/style/common";

	.loading {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: @z-index-base;
		&.fixed {
			position: fixed;
		}
		.content {
			width: 64px;
			height: 64px;
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			text-align: center;
			p {
				height: 20px;
				line-height: 20px;
			}
			img {
				width: 64px;
				height: 64px;
				float: left;
			}
		}
	}
</style>