<template>
    <div class="input_img" @click.stop="">
        <p v-if="!picArr.length">{{placeholder}}</p>
        <label :for="inputType"></label>
        <input type="file" multiple="multiple"
               accept="image/gif,image/jpeg,image/jpg,image/png"
               ref="cameraPic"
               :id="inputType"
               :name="inputType"
               @change="camaroChange">
        <div class="pic" v-for="item in picArr" v-if="picArr.length">
            <img @click.stop="picToBigClick(item.src)"
                 :src="item.src" alt="图片获取失败">
            <span @click.stop="deletePic(item.src)"><i class="iconfont icon-delete"></i></span>
        </div>
        <div class="modal" v-if="modalShow" @click.stop="modalShow=false">
            <img :src="currentPic" alt="图片获取失败">
        </div>
    </div>
</template>

<script>
    import globalForm from '../global/global-form.vue'

    export default {
        extends: globalForm,
        props: {
            placeholder: {
                type: String,
                default: '请选择图片'
            },
            picLength: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                picArr: [],
                currentPic: '',
                modalShow: false,
                inputType: `${new Date().getTime()}${Math.random() * 100000}`
            }
        },
        methods: {
            fileHandle(fileDom) {
                let _this = this;
                for (let i = 0; i < _this.picLength; i++) {
                    let file = fileDom.files[i];
                    if (!file) {
                        return;
                    }
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        setTimeout(() => {
                            _this.picArr.push({src: reader.result, file: file});
                        })
                    };
                }
            },
            camaroChange() {
                this.fileHandle(this.$refs.cameraPic);
            },
            picToBigClick(src) {
                this.currentPic = src;
                this.modalShow = true;
            },
            deletePic(src) {
                this.picArr.forEach((item, index) => {
                    if (item.src === src) {
                        this.picArr.splice(index, 1)
                    }
                });
            }
        },
        watch: {
            picArr() {
                let arr = [];
                this.picArr.forEach(item => {
                    arr.push({file: item.file})
                });
                this.updateModel(arr);
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common";

    .input_img {
        position: relative;
        padding: 0 8px;
        color: @input-border;
        width: @input-width;
        border: 1px solid @input-border;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        .pic {
            font-size: 0;
            width: 42px;
            height: 59.4px;
            margin: 10px 0 0 10px;
            text-align: center;
            display: inline-block;
            position: relative;
            > img {
                width: 42px;
                height: 59.4px;
                position: relative;
                z-index: 10;
                cursor: pointer;
                float: left;
            }
            > span {
                width: 42px;
                display: inline-block;
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 10;
                background-color: rgba(0, 0, 0, .7);
                color: #fff;
                &:hover {
                    color: #f00;
                    cursor: pointer;
                }
            }
        }
        > p {
            height: 32px;
            line-height: 32px;
            padding: 0;
            margin: 0;
        }
        label {
            display: inline-block;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        input {
            position: absolute;
            top: -20000%;
            left: -20000%;
        }
        .modal {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, .5);
            z-index: 10000;
            img {
                height: 594px;
                width: auto;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
            }
        }
    }
</style>