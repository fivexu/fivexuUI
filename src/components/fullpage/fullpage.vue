<template>
    <div id="fullpage">
        <fx-full-page :isScrollBar="isScrollBar" :scrollTime="Number(scrollTime)">
            <div style="background-color: rgba(255,0,0,.3)">
                <div class="box">
                    <fx-button @clickEvt="hideScroll">
                        {{!isScrollBar?'显示滚动条':'不显示滚动条'}}
                    </fx-button>
                    滚动时间:
                    <fx-input v-model="scrollTime"></fx-input>
                </div>
            </div>
            <div style="background-color: rgba(0,255,0,.3)"></div>
            <div style="background-color: rgba(0,0,255,.3)"></div>
        </fx-full-page>
    </div>
</template>

<script>
    export default {
        name: "fullpage",
        data() {
            return {
                isScrollBar: JSON.parse(window.sessionStorage.getItem('fullPage')) || false,
                scrollTime: 500
            }
        },
        methods: {
            hideScroll() {
                this.isScrollBar = !this.isScrollBar;
                window.sessionStorage.setItem('fullPage', JSON.stringify(this.isScrollBar));
                console.log(JSON.parse(window.sessionStorage.getItem('fullPage')));
                window.location.reload();
            }
        }
    }
</script>

<style scoped lang="less">
    .box {
        padding: 100px;
    }
</style>