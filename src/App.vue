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
            <Radio :data="radioList" v-model="radios"></Radio>
        </div>
        <div class="box">
            <Checkbox v-model="checkbox">
                <CheckboxItem :checked="true" :label="'111111'">111111</CheckboxItem>
                <CheckboxItem :checked="true" :label="'222222'">222222</CheckboxItem>
                <CheckboxItem :checked="true" :label="'333333'">333333</CheckboxItem>
                <CheckboxItem :checked="true" :label="'444444'">444444</CheckboxItem>
            </Checkbox>
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
    import Radio from 'components/form/radio'
    import Checkbox from 'components/form/checkbox'
    import CheckboxItem from 'components/form/checkboxItem'

    export default {
        name: 'App',
        data() {
            return {
                inputs: '',
                messageShow: false,
                n: 0,
                radioList: [
                    {id: 1, value: 0, label: ''},
                    {id: 2, value: 1, label: '2'},
                    {id: 3, value: 3, label: '3', disabled: true},
                    {id: 4, value: 4, label: '4'}
                ],
                checkboxList: [
                    {id: 1, value: 0, label: 'aaaaa', checked: true, disabled: false},
                    {id: 2, value: 2, label: 'bbbbb'},
                    {id: 3, value: 3, label: 'ccccc', checked: true, disabled: false},
                    {id: 4, value: 4, label: 'ddddd'},
                    {id: 4, value: 5, label: 'eeeee'},
                ],
                radios: 2,
                checkbox: 2
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
            },
            radios(val) {
                console.log(val)
            },
            checkbox(val) {
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
            Checkbox,
            CheckboxItem
        }
    }
</script>

<style scoped lang="less">
    #app {
        .box {
            width: 300px;
            margin: 50px auto 0;
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
