<template>
	<div id="page" :class="size">
		<div class="total">共{{total}}条</div>
		<div class="show_page">
			每页显示
			<select>
				<option>1</option>
				<option>2</option>
			</select>
			条
		</div>
		<ul class="pages">
			<li><i class="iconfont icon-left-too"></i></li>
			<li><i class="iconfont icon-left" @click="previous"></i></li>
			<li v-for="(item,index) in showPageArr"
				:class="{ac:currentIndex===index}">
				{{currentIndex}}
			</li>
			<li><i class="iconfont icon-right" @click="next"></i></li>
			<li><i class="iconfont icon-right-too"></i></li>
		</ul>
	</div>
</template>

<script>
  export default {
    name: "page",
    props: {
      total: {
        type: Number,
        default: 101  //  分页总数
      },
      currentPage: {
        type: Number,
        default: 1   //  当前所处页数
      },
      showPageCount: {
        type: Number,
        default: 5  // 页码条个数  5 => << < 1 2 3 4 5 > >> 五个页码
      },
      selectPageCount: {
        type: Number,
        default: 10  // 每页显示条数
      },
      size: {
        type: String,  // page组件大小
        default: 'mini'
      }
    },
    data() {
      return {
        showPageArr: new Array(this.showPageCount),
        currentIndex: 1
      }
    },
    methods: {
      initShowPageArray() {
        let pageNumber = Math.ceil(this.total / this.selectPageCount);
        let start = 0;
        let end = 0;
      },
      previous() {

      },
      next() {
        this.currentIndex++
      }
    },
    mounted() {
      this.initShowPageArray();
    }
  }
</script>

<style scoped lang="less">
	@import "../util/font/iconfont.css";
	@import "../util/style/common";

	#page {
		user-select: none;
		display: flex;
		flex-wrap: nowrap;
		&.default {
			height: @height-normal;
			line-height: @height-normal;
		}
		&.mini {
			height: @height-mini;
			line-height: @height-mini;
		}
		&.large {
			height: @height-large;
			line-height: @height-large;
		}
		.total {
			margin-right: 10px;
		}
		.show_page {
			margin-right: 10px;
		}
		.pages {
			display: flex;
			flex-wrap: nowrap;
			> li {
				transition: all 0.1s;
				cursor: pointer;
				margin: 0 5px;
				box-sizing: border-box;
				padding: 0 10px;
				text-align: center;
				&:hover {
					.border(@primary-color);
					color: @primary-color;
					i {
						.iconfont(@primary-color)
					}
				}
				&.ac {
					.border(@primary-color);
					background-color: @primary-color;
					color: #fff;
				}
				.border;
				.border-radius;
				i {
					.iconfont;
				}
			}
		}
	}
</style>