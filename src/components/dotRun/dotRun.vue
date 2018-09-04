<template>
  <div class="dotRun">
    <ul>
      <li>
        <h2>初始默认样式</h2>
        <p>
          github地址
          <a href="https://github.com/fivexu/dotRun" target="_blank">https://github.com/fivexu/dotRun</a>
        </p>
        <canvas id="canvas1"></canvas>
      </li>
      <li>
        <h2>随机大小点</h2>
        <p>isRandomDots 布尔值 默认 false(不随机)</p>
        <canvas id="canvas2"></canvas>
      </li>
      <li>
        <h2>点击加点 (点击下方画框)</h2>
        <p>isClick 布尔值 默认 false(不添加点击加点事件)</p>
        <canvas id="canvas3"></canvas>
      </li>
      <li>
        <h2>hover效果</h2>
        <canvas id="hover"></canvas>
      </li>
      <li>
        <h2>背景搭配</h2>
        <div class="box">
          <div class="bg">
            <img src="../../../static/star.jpg" alt="">
          </div>
          <canvas id="star"></canvas>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'dotRun',
    data() {
      return {
        canvasWidth: 500,
        canvasHeight: 300
      }
    },
    methods: {
      refresh() {
        window.location.reload();
      }
    },
    mounted() {
      this.$fivexu.dotRun('#canvas1', {});
      this.$fivexu.dotRun('#canvas2', {
        isRandomDots: true,
        dotsRadius: 5,
        ArcColor: '#ccc',
      });
      this.$fivexu.dotRun('#canvas3', {
        isClick: true,
        dotsNumber: 1,
        ArcColor: '#f60',
      });
      this.$fivexu.dotRun('#star', {
        canvasWidth: 600,
        canvasHeight: 300,
        dotsNumber: 100,
        dotsRadius: 2,
        lineLength: 1,
        ArcColor: '#fff',
        speedX: 1,
        speedY: 1,
        isRandomDots: true,
        rebound: true,
      });
      this.$fivexu.dotRun('#hover', {
        dotsNumber: 300,
        speedX: 2,
        speedY: 1,
        isHover: true,
        ArcColor: '#f69',
        lineColor: `#00f`,
        mouseColor: `#f00`
      })
    }
  }
</script>

<style scoped lang="less">
  ul {
    li {
      height: 350px;
      margin-bottom: 30px;
      border-bottom: 1px solid #ccc;
      canvas {
        width: 1000px;
        height: 300px;
        border: 1px solid #ccc;
      }
      .box {
        width: 600px;
        height: 300px;
        position: relative;
        .bg {
          width: 600px;
          height: 300px;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          font-size: 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        canvas {
          width: 600px;
          height: 300px;
          position: relative;
          z-index: 10;
        }
      }
      span {
        cursor: pointer;
        color: #f90;
      }
    }
  }
</style>
