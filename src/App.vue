<template>
  <div id="app">
    <nav>
      <div class="logo">
        <div class="text">
          FIVE
        </div>
        <div ref="bgs" class="bgs">
          <div class="bg">
            <span>FIVE</span>
          </div>
        </div>
      </div>
      <fx-menu :data="menuList"></fx-menu>
    </nav>
    <div class="content">
      <router-view style="width: 100%;height: 100%;"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [
          {
            "link": "/button",
            "title": "按钮"
          },
          {
            "link": "/input",
            "title": "输入框"
          },
          {
            "link": "/select",
            "title": "下拉选择"
          },
          {
            "link": "/radio",
            "title": "单选"
          },
          {
            "link": "/checkbox",
            "title": "多选"
          },
          {
            "link": "/page",
            "title": "分页"
          },
          // {
          //     "link": "/tree",
          //     "title": "树"
          // },
          {
            "link": "/switch",
            "title": "开关"
          },
          {
            "link": "/loading",
            "title": "加载"
          },
          {
            "link": "/tooltip",
            "title": "提示"
          },
          {
            "link": "/alert",
            "title": "警告弹窗"
          },
          {
            "link": "/message",
            "title": "提示弹窗"
          },
          {
            "link": "/tag",
            "title": "标签"
          },
          {
            "link": "/fullpage",
            "title": "整屏滚动"
          },
          {
            "link": "/slider",
            "title": "轮播图"
          },
          {
            "link": "/scrollBar",
            "title": "超出滚动条"
          },
          {
            "link": "/dotRun",
            "title": "粒子动点"
          },
          // {
          //     "link": "/timeLine",
          //     "title": "时间轴"
          // }
        ]
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.bgs.style.backgroundColor = 'transparent';
        }, 2500)
      })
    }
  }
</script>

<style scoped lang="less">
  @import "base/util/style/common.less";

  @keyframes run {
    0% {
      left: 0;
    }
    50% {
      left: 150px;
    }
    100% {
      left: 0;
    }
  }

  @keyframes run2 {
    0% {
      left: 0;
    }
    50% {
      left: -150px;
    }
    100% {
      left: 0;
    }
  }

  #app {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    nav {
      position: fixed;
      width: 200px;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: #fff;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      .logo {
        position: relative;
        height: 100px;
        .text {
          color: @warning-color;
          width: 200px;
          height: 100px;
          text-align: center;
          font: 700 62px / 100px Helvetica;
        }
        .bgs {
          background-color: #fff;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 10;
          width: 200px;
          height: 100px;
          overflow: hidden;
          animation: run 5s ease-in-out infinite;
          .bg {
            width: 50px;
            height: 100px;
            position: absolute;
            left: 0;
            top: 0;
            overflow: hidden;
            span {
              display: inline-block;
              text-align: center;
              font: 700 62px / 100px Helvetica;
              position: absolute;
              color: @primary-color;
              left: 0;
              top: 0;
              z-index: 10;
              width: 200px;
              height: 100px;
              animation: run2 5s ease-in-out infinite;
            }
          }
        }
      }
    }
    .content {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 0 0 220px;
    }
  }
</style>
