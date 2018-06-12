<template>
    <div id="app">
        <!--<Page></Page>-->
        <div class="children" v-tooltip.top="'text text text text text text text text text text text text text text '">
            box this is box!!!
        </div>
        <div class="children1" v-tooltip.top="'fwaefwa fwafwea  fwa wf wa fwaf wea'">
            box this is boxdddd!!!
        </div>
        <router-view/>
    </div>
</template>

<script>
    import Page from 'components/page/page'

    export default {
        name: 'App',
        mounted() {

            this.$fivexu.message.show({
                message: '这是提示1!!!!!!!!!!!!!!!!',
                mesType: 'warning',
                mesPosition: 'bottom-right'
            });
            this.$fivexu.message.show({
                message: '这是提示2!!!!!!!!!!!!!!!!',
                mesType: 'warning',
                mesPosition: 'bottom-right'
            });
            this.$fivexu.message.show({
                message: '这是提示3!!!!!!!!!!!!!!!!',
                mesType: 'warning',
                mesPosition: 'bottom-right'
            });

        },
        components: {
            Page
        }
    }
</script>

<style lang="less">
    #app {
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
