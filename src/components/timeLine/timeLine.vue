<template>
    <div class="timeLine">
        <fx-time-line :data="timeLineData" style="width: 758px;height: 30px;">
            <div class="left" slot="left"><</div>
            <ul class="list" slot="content">
                <li v-for="item in timeLineData">{{item.title}}</li>
            </ul>
            <div class="right" slot="right">></div>
        </fx-time-line>
    </div>
</template>

<script>
    export default {
        name: 'timeLine',
        data() {
            return {
                timeLineData: [],
                option: {}
            }
        },
        mounted() {
            setTimeout(() => {
                this.timeLineData = [
                    {title: 2010},
                    {title: 2011},
                    {title: 2012},
                    {title: 2013},
                    {title: 2014},
                    {title: 2015},
                    {title: 2016},
                    {title: 2017},
                    {title: 2018},
                    {title: 2019},
                ];
            }, 1000)
        }
    }
</script>

<style scoped lang="less">
    .left, .right {
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }

    .list {
        > li {
            padding: 0 30px;
            border: 1px solid #ccc;
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
            margin: 0 10px;
        }
    }
</style>