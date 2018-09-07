<template>
  <div class="page">
    <ul>
      <li>
        <h2>默认样式</h2>
        <p>参数total(必填且大于0) number 默认:1 填入非正整数时,默认转为正整数</p>
        <fx-page :total="1001"></fx-page>
      </li>
      <li>
        <h2>当前页码</h2>
        <p>参数currentPage number 默认:1 填入非正整数时,默认转为正整数</p>
        <fx-page :currentPage="40" :total="1001"></fx-page>
      </li>
      <li>
        <h2>显示页码个数(必须为基数 1,3,5,7...)</h2>
        <p>参数pageCount number 默认:5 填入非正整数或偶数时,默认转为正整基数</p>
        <fx-page :pageCount="7" :total="1001"></fx-page>
      </li>
      <li>
        <h2>每页信息条数</h2>
        <p>参数selectPageCount number 默认:10 填入非正整数时,默认转为正整数</p>
        <fx-page :selectPageCount="100" :total="1001"></fx-page>
      </li>
      <li>
        <h2>大小设置</h2>
        <p>参数size string 默认:'normal' 填入非正整数时,默认转为正整数</p>
        mini:
        <fx-page size="mini" :total="1001"></fx-page>
        normal:
        <fx-page size="normal" :total="1001"></fx-page>
        large:
        <fx-page size="large" :total="1001"></fx-page>
      </li>
      <li>
        <h2>插槽模式</h2>
        <p>slot first 首页内容</p>
        <p>slot last 末页内容</p>
        <p>slot previous 上一页内容</p>
        <p>slot next 下一页内容</p>
        <fx-page :selectPageCount="100" :total="1001">
          <div slot="first"><i class="iconfont icon-yes"></i></div>
          <div slot="last"><i class="iconfont icon-close"></i></div>
          <div slot="previous">上一页</div>
          <div slot="next">下一页</div>
        </fx-page>
      </li>
      <li>
        <h2>需要显示的控件</h2>
        <p>
          参数isSelectPage 是否显示下拉每页条数控件 默认true
          <fx-button @clickEvt="pageInfo.isSelectPage=!pageInfo.isSelectPage" size="mini">
            isSelectPage={{pageInfo.isSelectPage}}
          </fx-button>
        </p>
        <p>
          参数isTotal 是否显示总页数控件 boolean 默认true
          <fx-button @clickEvt="pageInfo.isTotal=!pageInfo.isTotal" size="mini">isTotal={{pageInfo.isTotal}}</fx-button>
        </p>
        <p>参数isMore 是否显示 ... 更多控件 boolean 默认true
          <fx-button @clickEvt="pageInfo.isMore=!pageInfo.isMore" size="mini">isMore={{pageInfo.isMore}}</fx-button>
        </p>
        <p>
          参数isFirstLast 是否显示首页和末页按钮控件 boolean 默认true
          <fx-button @clickEvt="pageInfo.isFirstLast=!pageInfo.isFirstLast" size="mini">
            isFirstLast={{pageInfo.isFirstLast}}
          </fx-button>
        </p>
        <p>
          参数isPage 是否显示页码控件 boolean 默认true
          <fx-button @clickEvt="pageInfo.isPage=!pageInfo.isPage" size="mini">isPage={{pageInfo.isPage}}</fx-button>
        </p>
        <p>
          参数isPageTo 是否显示跳转页码控件 boolean 默认true
          <fx-button @clickEvt="pageInfo.isPageTo=!pageInfo.isPageTo" size="mini">isPageTo={{pageInfo.isPageTo}}
          </fx-button>
        </p>
        <fx-page :selectPageCount="10"
                 :isSelectPage="pageInfo.isSelectPage"
                 :isTotal="pageInfo.isTotal"
                 :isMore="pageInfo.isMore"
                 :isFirstLast="pageInfo.isFirstLast"
                 :isPage="pageInfo.isPage"
                 :isPageTo="pageInfo.isPageTo"
                 :total="1001"
                 @changeEvt="change"
        ></fx-page>
        当前选择页数 {{page}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "page",
    data() {
      return {
        page: 1,
        pageInfo: {
          isSelectPage: true,
          isTotal: true,
          isMore: true,
          isFirstLast: true,
          isPage: true,
          isPageTo: true,
        }
      }
    },
    methods: {
      change(pos) {
        this.page = pos
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="less">
  .page {
    > ul {
      > li {
        margin-bottom: 20px;
        h2, p {
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
</style>
