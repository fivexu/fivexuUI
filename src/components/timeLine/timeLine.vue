<template>
    <div class="timeLine">
        <fx-time-line></fx-time-line>
    </div>
</template>

<script>
    export default {
        name: 'timeLine',
        data() {
            return {
                timeLineData: [
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
                ],
                option: {
                    width: 400,
                    height: 30
                }
            }
        }
    }
</script>

<style scoped lang="less">

</style>