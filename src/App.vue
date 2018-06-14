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
        <div class="box">
            <f-button @clickEvt="click" v-tooltip.top="'awsfweagweagwagweagwagwagwaeg'"></f-button>
            <f-button @clickEvt="click2"></f-button>
        </div>
        <div>
            <!--<Message :message="'fff'" :messageShow="messageShow"></Message>-->
        </div>
        <router-view/>
    </div>
</template>

<script>
    import Page from 'components/page/page'
    import FButton from 'components/form/button'
    import FInput from 'components/form/input'
    import Message from 'components/message/message'

    export default {
        name: 'App',
        data() {
            return {
                inputs: '',
                messageShow: false,
                n: 0
            }
        },
        methods: {
            testMessage() {
                this.n++
                this.$fivexu.message.show({
                    message: `这是提示这是提示这是提示这是提示,这是提示这是提示${this.n}!!!!!!!!!!!!!!!!`,
                    mesType: 'error',
                    mesPosition: 'top-right',
                    duration: 3000
                });
            },
            testMessage2() {
                this.n++
                this.$fivexu.message.show({
                    message: `这是提示这是提示这是提示这是提示,这是提示这是提示${this.n}!!!!!!!!!!!!!!!!`,
                    mesType: 'success',
                    mesPosition: 'top-right',
                    duration: 1000
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
            Message
        }
    }
</script>

<style lang="less">
    #app {
        .box {
            width: 300px;
            margin: 50px auto;
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
