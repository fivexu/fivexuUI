<template>
  <div class="tree">
    <div class="title" v-for="(item,index) in treeData">
      <span @click.stop.prevent="open(item,index)" class="open_icon" :class="{ac:isCurrentOpen(index)}">
        <em v-if="isChildren(item)">
          <i class="iconfont icon-right"></i>
        </em>
      </span>
      <span class="checkbox"></span>
      <span class="name" @click.stop.prevent="itemNameClick(item)">{{item.name}}</span>
      <fx-tree v-show="isCurrentOpen(index)"
               :data="item.children"
               v-model="treeModel"
               v-if="item.children&&item.children.length"></fx-tree>
    </div>
  </div>
</template>

<script>
  import GlobalForm from '../global/global-form.vue'
  import Tree from './tree.vue';

  export default {
    name: 'fx-tree',
    extends: GlobalForm,
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentOpenArr: [],
        treeData: [],
        treeModel: []
      }
    },
    mounted() {
      this.initData();
    },
    methods: {
      // 初始化数据,给数据增加需要属性
      initData() {
        this.treeData = this.data;
        this.treeData.forEach(item => {
          if (!item.open) item.open = false;
          if (!item.id) item.id = new Date().getDate() + 100000 * Math.random();
        })
      },
      // 判断数据中,是否存在选中数据 存在true 不存在false
      isCurrentOpen(index) {
        let off = false;
        this.currentOpenArr.forEach(item => {
          if (item.openId === index) {
            off = true;
          }
        });
        return off;
      },
      // 点击展开事件
      open(item, index) {
        // 当选中数组中不存在当前选中额数据时,在选中数组中加入数据
        if (!this.isCurrentOpen(index)) {
          this.currentOpenArr.push(Object.assign(item, {openId: index}))
        } else {
          this.currentOpenArr = this.currentOpenArr.filter(item => {
            return item.openId !== index;
          });
        }
      },
      // 是否有子集树
      isChildren(item) {
        return item.children && item.children.length
      },
      // 点击选项
      itemNameClick(item) {
        console.log('ok')
        let off = true;
        let arr = this.treeModel;
        arr.forEach(it => {
          if (item.id === it) off = false;
        });
        if (off) arr.push(item.id);
        this.updateModel(arr);
      }
    },
    components: {
      'fx-tree': Tree
    }
  }
</script>

<style scoped lang="less">
  @import "../util/style/common";

  .tree {
    .title {
      padding-left: 20px;
      overflow: hidden;
      user-select: none;
      > .name, > .checkbox, > .open_icon {
        vertical-align: middle;
        cursor: pointer;
      }
      > .open_icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        .transition(all 0.2s);
        &.ac {
          transform: rotate(90deg);
        }
        i {
          font-size: 12px;
          font-weight: 700;
        }
      }
      > .checkbox {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        border: 1px solid @border-color;
      }
    }
  }
</style>
