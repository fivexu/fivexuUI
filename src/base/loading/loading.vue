<template>
    <div class="loading" :style="{backgroundColor:bgColor}" v-if="showLoading" :class="{fixed:fixed}">
        <div class="content"
             :style="{
                height:text!==''?'84px':'64px',
                color:textColor
                }">
            <p v-if="text!==''&&textPosition==='top'">{{text}}</p>
            <img src="./loading.gif">
            <p v-if="text!==''&&textPosition==='bottom'">{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loading',
        props: {
            showLoading: {
                type: Boolean,
                default: false
            },
            fixed: {
                type: Boolean,
                default: true
            },
            text: {
                type: String,
                default: ''
            },
            textPosition: {
                type: String,
                default: 'bottom'
            },
            textColor: {
                type: String,
                default: '#fff'
            },
            bgColor: {
                type: String,
                default: 'rgba(0, 0, 0, .5)'
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";

    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: @z-index-base;
        &.fixed {
            position: fixed;
        }
        .content {
            width: 128px;
            height: 128px;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            text-align: center;
            p {
                width: 100%;
                height: 20px;
                line-height: 20px;
            }
            img {
                width: 128px;
                height: 72px;
                float: left;
            }
        }
    }
</style>