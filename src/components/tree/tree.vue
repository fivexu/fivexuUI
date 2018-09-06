<template>
  <div class="tree">
    <fx-tree v-model="tree" :data="data"></fx-tree>
  </div>
</template>

<script>
  export default {
    name: 'tree',
    data() {
      return {
        data: [
          {
            name: '一层一层一层一层',
            children: [
              {
                name: '二层',
                children: [
                  {name: '三层'},
                  {
                    name: '三层',
                    children: [
                      {
                        name: '四层四层四层',
                        children: [
                          {name: '五层五层五层五层'},
                          {name: '五层'},
                          {name: '五层五层'},
                          {name: '五层'},
                        ]
                      },
                      {name: '四层',},
                      {name: '四层',},
                      {name: '四层四层四层',},
                    ]
                  },
                  {name: '三层三层三层'},
                  {name: '三层'},
                ]
              },
              {name: '二层二层二层二层'},
              {
                name: '二层',
                children: [
                  {name: '三层'},
                  {
                    name: '三层三层三层',
                    children: [
                      {
                        name: '四层',
                        children: [
                          {name: '五层'},
                          {name: '五层五层五层五层'},
                          {name: '五层'},
                          {name: '五层五层'},
                        ]
                      },
                      {name: '四层四层',},
                      {name: '四层',},
                      {name: '四层四层四层四层',},
                    ]
                  },
                  {name: '三层'},
                  {name: '三层三层三层'},
                ]
              },
              {name: '二层二层二层二层二层'}
            ]
          },
          {
            name: '一层',
            children: [
              {name: '二层二层'},
              {name: '二层二层二层'},
              {
                name: '二层二层',
                children: [
                  {name: '三层'},
                  {
                    name: '三层',
                    children: [
                      {
                        name: '四层四层四层四层',
                        children: [
                          {name: '五层'},
                          {name: '五层'},
                          {name: '五层五层五层五层五层'},
                          {name: '五层'},
                        ]
                      },
                      {name: '四层',},
                      {name: '四层',},
                      {name: '四层四层四层',},
                    ]
                  },
                  {name: '三层'},
                  {name: '三层三层三层三层三层'},
                ]
              },
            ]
          },
        ],
        tree: []
      }
    },
    watch: {
      tree(val) {
        console.log(val);
      }
    }
  }
</script>

<style scoped lang="less">

</style>
