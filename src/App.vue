<template>
    <div id="app">
        <!--<Page></Page>-->
        <div class="children"
             v-tooltip="'text text text text text text text text text text text text text text '">
            box this is box!!!
        </div>
        <div class="box">
            <f-input :disable="true" :clear="true" :placeholder="'请输入'" v-model="inputs"></f-input>
        </div>
        <div class="box">
            <f-button :radius="true" :type="'error'" :disable="false" @clickEvt="click"
                      v-tooltip="'awsfweagweagwagweagwagwagwaeg'"></f-button>
            <f-button :type="'success'" :disable="false" @clickEvt="click2">
                <i class="iconfont icon-success"></i>
                成功
            </f-button>
        </div>
        <div class="box">
            <Radio :data="radioList" @clickEvt="radioClick"></Radio>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import Page from 'components/page/page'
    import FButton from 'components/form/button'
    import FInput from 'components/form/input'
    import Message from 'components/message/message'
    import Tag from 'components/tag/tag'
    import Radio from 'components/radio/radio'

    export default {
        name: 'App',
        data() {
            return {
                inputs: '',
                messageShow: false,
                n: 0,
                radioList: [
                    {value: '男', label: 0},
                    {value: '女', label: 1}
                ]
            }
        },
        methods: {
            testMessage() {
                this.n++;
                this.$fivexu.message.show({});
            },
            testMessage2() {
                this.n++;
                this.$fivexu.message.show({
                    message: `这是提示\t\n\r这是提示这是提示这是提示,这是提示这是提示${this.n}!!!!!!!!!!!!!!!!`,
                    mesType: 'success',
                    mesPosition: 'bottom-right',
                    transitionName: 'left',
                    duration: 30000
                });
            },
            testLoading() {
                this.$fivexu.loading.show();
                setTimeout(() => {
                    this.$fivexu.loading.hide();
                }, 1000)
            },
            click(ev) {
                this.testMessage();
            },
            click2(ev) {
                this.testMessage2();
            },
            radioClick(pos) {
                console.log(pos)
            }
        },
        mounted() {
            // this.testMessage();
            // this.testLoading()
            setTimeout(() => {
                this.messageShow = true
            }, 100)
        },
        watch: {
            inputs(val) {
                console.log(val)
            }
        },
        components: {
            Page,
            'f-button': FButton,
            'f-input': FInput,
            Message,
            Tag,
            Radio,
        }
    }
</script>

<style lang="less">
    @import "components/util/font/iconfont.css";

    #app {
        .box {
            width: 300px;
            margin: 50px auto;
        }
        .children {
            border: 1px solid #ccc;
            position: absolute;
            left: 0;
            top: 40px;
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
