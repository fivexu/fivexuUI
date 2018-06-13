<template>
    <div id="app">
        <!--<Page></Page>-->
        <div class="children"
        v-tooltip.right="'text text text text text text text text text text text text text text '">
        box this is box!!!
        </div>
        <div class="box">
            <f-input v-model="inputs"></f-input>
        </div>
        <router-view/>
    </div>
</template>

<script>
  import Page from 'components/page/page'
  import FButton from 'components/form/button'
  import FInput from 'components/form/input'

  export default {
    name: 'App',
    data() {
      return {
        inputs: ''
      }
    },
    methods: {
      testMessage() {
        this.$fivexu.message.show({
          message: '这是提示1!!!!!!!!!!!!!!!!',
          mesType: 'warning',
          mesPosition: 'bottom-right'
        });
      },
      click(ev) {
      }
    },
    mounted() {
      this.testMessage()
    },
    watch: {
      inputs(val) {
        console.log(val)
      }
    },
    components: {
      Page,
      'f-button': FButton,
      'f-input': FInput
    }
  }
</script>

<style lang="less">
    #app {
        .box {
            width: 300px;
            margin: 500px auto;
        }
        .children {
            border: 1px solid #ccc;
            position: absolute;
            left: 0;
            top: 0;
            width: 200px;
            height: 30px;
            line-height: 30px;
        }
        .children1 {
            border: 1px solid #ccc;
            position: absolute;
            left: 0;
            top: 200px;
            width: 200px;
            height: 30px;
            line-height: 30px;
        }
    }
</style>
