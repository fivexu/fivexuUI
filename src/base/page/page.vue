<template>
  <div id="page" :class="size">
    <div class="total" v-if="isTotal">共{{Math.abs(parseInt(this.total))}}条</div>
    <div class="show_page" v-if="isSelectPage">
      <fx-select style="width: 80px;" :size="size" :data="pageSizeSelect" v-model="pageSizeChange"></fx-select>
    </div>
    <ul class="pages">
      <li v-if="isFirstLast" @click="toPage(1)" class="first_last" :class="{disable:currentIndex<=1}">
        <slot v-if="hasSlot('first')" name="first"></slot>
        <span v-else>首页</span>
      </li>
      <li @click="previous" class="first_last" :class="{disable:currentIndex<=1}">
        <slot v-if="hasSlot('previous')" name="previous"></slot>
        <span v-else><i class="iconfont icon-left"></i></span>
      </li>
      <li v-if="isMore&&prevMore" @click="toPage(currentIndex-5<=1?1:currentIndex-5)">
        <i class="iconfont icon-more"></i>
      </li>
      <li v-for="item in pageArr"
          @click="toPage(item)"
          v-show="isPage"
          :class="{ac:currentIndex===item}">
        {{item}}
      </li>
      <li v-if="isMore&&nextMore" @click="toPage(currentIndex+5>=totalPage?totalPage:currentIndex+5)">
        <i class="iconfont icon-more"></i>
      </li>
      <li @click="next" class="first_last" :class="{disable:currentIndex>=totalPage}">
        <slot v-if="hasSlot('next')" name="next"></slot>
        <span v-else><i class="iconfont icon-right"></i></span>
      </li>
      <li v-if="isFirstLast" @click="toPage(totalPage)" class="first_last" :class="{disable:currentIndex>=totalPage}">
        <slot v-if="hasSlot('last')" name="last"></slot>
        <span v-else>末页</span>
      </li>
    </ul>
    <div class="page_go" v-if="isPageTo">
      <fx-input style="width: 42px;" inputType="number" :size="size" v-model="pageToNum"
                @keydown="pageGoKeyDown($event)"></fx-input>
      <span>页</span>
    </div>
  </div>
</template>

<script>
  import GlobalForm from '../global/global-form.vue';
  import Select from '../form/select';
  import Input from '../form/input';

  export default {
    name: "page",
    extends: GlobalForm,
    props: {
      total: {
        type: Number,
        default: 1  //  分页总数
      },
      currentPage: {
        type: Number,
        default: 1   //  当前所处页数
      },
      pageCount: {
        type: Number,
        default: 5 // 页码条个数  5 => << < 1 2 3 4 5 > >> 五个页码  基数
      },
      selectPageCount: {
        type: Number,
        default: 10  // 每页显示条数
      },
      isSelectPage: {
        type: Boolean,
        default: true
      },
      isTotal: {
        type: Boolean,
        default: true
      },
      isMore: {
        type: Boolean,
        default: true
      },
      isFirstLast: {
        type: Boolean,
        default: true
      },
      isPage: {
        type: Boolean,
        default: true
      },
      isPageTo: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        currentIndex: Math.abs(parseInt(this.currentPage)) || 1,
        pageSizeSelect: [
          {label: '10条/页', value: 10, id: 10},
          {label: '20条/页', value: 20, id: 20},
          {label: '30条/页', value: 30, id: 30},
          {label: '50条/页', value: 50, id: 50},
          {label: '100条/页', value: 100, id: 100},
          {label: '200条/页', value: 200, id: 200},
        ],
        pageSizeChange: Math.abs(parseInt(this.selectPageCount)) || 10,
        prevMore: false,
        nextMore: false,
        pageToNum: 1,
      }
    },
    computed: {
      totalPage() {
        return Math.ceil(Math.abs(parseInt(this.total)) / this.pageSizeChange);
      },
      pageArr() {
        const array = [];
        // 判断pageCount是否是基数 不是则+1 变基数
        const count = this.pageCount % 2 === 1 ? this.pageCount : this.pageCount + 1;
        const _offset = (count - 1) / 2;
        const offset = {
          start: this.currentIndex - _offset,
          end: this.currentIndex + _offset
        };
        if (offset.start < 1) {
          offset.end = offset.end + (1 - offset.start);
          offset.start = 1
        }
        if (offset.end > this.totalPage) {
          offset.start = offset.start - (offset.end - this.totalPage);
          offset.end = this.totalPage
        }
        if (offset.start < 1) offset.start = 1;
        this.prevMore = (offset.start > 1);
        this.nextMore = (offset.end < this.totalPage);
        for (let i = offset.start; i <= offset.end; i++) {
          array.push(i)
        }
        return array
      }
    },
    methods: {
      previous() {
        if (this.currentIndex > 1) this.toPage(this.currentIndex - 1)
      },
      next() {
        if (this.currentIndex < this.totalPage) this.toPage(this.currentIndex + 1)
      },
      toPage(page) {
        if (this.currentIndex !== page) {
          this.currentIndex = page;
          this.updateModel(page);
          this.$emit('changeEvt', page)
        }
      },
      pageGoKeyDown(ev) {
        if (ev.keyCode === 13 || (ev.code === 'NumpadEnter' || ev.code === 'Enter')) {
          if (typeof this.pageToNum === 'number') {
            if (this.pageToNum >= this.totalPage) this.pageToNum = this.totalPage;
            if (this.pageToNum <= 1) this.pageToNum = 1;
            this.toPage(Math.abs(parseInt(this.pageToNum)));
          } else {
            this.pageToNum = 1;
            this.toPage(Math.abs(parseInt(this.pageToNum)));
          }
        }
      }
    },
    watch: {
      pageSizeChange() {
        this.toPage(this.currentIndex >= this.totalPage ? this.totalPage : this.currentIndex);
      },
      currentPage(val) {
        this.toPage(val >= this.totalPage ? this.totalPage : val);
      },
    },
    components: {
      'fx-select': Select,
      'fx-input': Input,
    }
  }
</script>

<style scoped lang="less">
  @import "../util/style/common";

  #page {
    user-select: none;
    display: flex;
    flex-wrap: nowrap;
    height: @height-normal;
    line-height: @height-normal;
    &.normal, &.normal .page_go {
      height: @height-normal;
      line-height: @height-normal;
      .pages > li {
        width: @height-normal;
        &.first_last {
          min-width: @height-normal - 10;
        }
      }
    }
    &.mini, &.mini .page_go {
      height: @height-mini;
      line-height: @height-mini;
      .pages > li {
        width: @height-mini;
        &.first_last {
          min-width: @height-mini - 10;
        }
      }
    }
    &.large, &.large .page_go {
      height: @height-large;
      line-height: @height-large;
      .pages > li {
        width: @height-large;
        &.first_last {
          min-width: @height-large - 10;
        }
      }
    }
    .total {
      margin-right: 10px;
    }
    .pages {
      display: flex;
      flex-wrap: nowrap;
      > li {
        background-color: @page-bg;
        transition: all 0.1s;
        cursor: pointer;
        margin: 0 5px;
        text-align: center;
        &.first_last {
          width: auto;
          padding: 0 5px;
        }
        &:hover {
          .border(@primary-color);
          color: @primary-color;
        }
        &.ac {
          .border(@primary-color);
          background-color: @primary-color;
          color: #fff;
          cursor: not-allowed;
        }
        &.disable {
          color: @page-disable!important;
          cursor: not-allowed;
          &:hover {
            .border;
          }
        }
        .border;
        .border-radius;
        i {
          .iconfont(#333, 16px);
        }
      }
    }
    .page_go {
      > span {
        margin-left: 5px;
        float: right;
      }
    }
  }
</style>
