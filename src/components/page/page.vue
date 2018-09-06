<template>
  <div class="page">
    <fx-page size="mini" :currentPage="1" @change="change" :pageCount="5" :selectPageCount="10" :total="1001">
      <div slot="first"><i class="iconfont icon-yes"></i></div>
    </fx-page>
    {{page}}
  </div>
</template>

<script>
  export default {
    name: "page",
    data() {
      return {
        page: 1
      }
    },
    methods: {
      change(pos) {
        this.page = pos
      }
    }
  }
</script>

<style scoped>

</style>
