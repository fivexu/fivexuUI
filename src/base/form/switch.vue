<template>
    <div ref="switchDom"
         class="switch"
         :class="[size,type,{close:!switchType},{radius:radius}]"
         @click.stop="switchClick">
        <span class="open_text" ref="openText" v-if="switchType">
            <slot name="open"></slot>
        </span>
        <span class="close_text" ref="closeText" v-else>
             <slot name="close"></slot>
        </span>
        <div class="dot" ref="dot" :class="switchType?'open':'close'"></div>
    </div>
</template>

<script>
    import GlobalForm from '../global/global-form.vue'

    export default {
        name: 'switch',
        extends: GlobalForm,
        props: {
            radius: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                switchType: this.value
            }
        },
        mounted() {
            this.$nextTick(() => {
                this._initSwitchWidth();
            })
        },
        methods: {
            switchClick() {
                this.switchType = !this.switchType;
                setTimeout(() => {
                    this._initSwitchWidth();
                    this.updateModel(this.switchType);
                    this.$emit('clickEvt', this.switchType);
                });
            },
            _initSwitchWidth() {
                let open = this.$refs.openText ? this.$refs.openText.offsetWidth : 0;
                let close = this.$refs.closeText ? this.$refs.closeText.offsetWidth : 0;
                let dot = this.$refs.dot.offsetWidth;
                this.$refs.switchDom.style.width = `${open + close + dot * 2}px`
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../util/style/common.less";

    .switch {
        position: relative;
        cursor: pointer;
        display: inline-block;
        color: #fff;
        user-select: none;
        height: @height-normal;
        line-height: @height-normal;
        .transition(background-color 0.3s);
        .dot {
            width: @height-normal*1.5;
            height: @height-normal - 2;
            display: inline-block;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            background-color: @bg-white;
            .transition(all 0.3s);
            &.open {
                left: auto;
                right: 2px;
                transition: all 0.3s;
            }
            &.close {
                right: auto;
                left: 2px;
                transition: all 0.3s;
            }
        }
        .open_text, .close_text {
            height: 100%;
            position: absolute;
            top: 0;
        }
        &.radius {
            border-radius: @height-normal/2;
            .dot {
                width: @height-normal - 2;
                border-radius: 50%;
            }
        }
        &.mini {
            height: @height-mini;
            line-height: @height-mini;
            &.radius {
                border-radius: @height-mini/2;
                .dot {
                    width: @height-mini - 2!important;
                    border-radius: 50%;
                }
            }
            .dot {
                width: @height-mini*1.5;
                height: @height-mini - 2;
            }
            .open_text {
                left: @height-mini/2;
            }
            .close_text {
                right: @height-mini/2;
            }
        }
        &.min {
            height: @height-min;
            line-height: @height-min;
            &.radius {
                border-radius: @height-min/2;
                .dot {
                    width: @height-min - 2;
                    border-radius: 50%;
                }
            }
            .dot {
                width: @height-min * 1.5;
                height: @height-min - 2;
            }
            .open_text {
                left: @height-min/2;
            }
            .close_text {
                right: @height-min/2;
            }
        }
        &.normal {
            height: @height-normal;
            line-height: @height-normal;
            &.radius {
                border-radius: @height-normal/2;
                .dot {
                    width: @height-normal - 2!important;
                    border-radius: 50%;
                }
            }
            .dot {
                width: @height-normal * 1.5;
                height: @height-normal - 2;
            }
            .open_text {
                left: @height-normal/2;
            }
            .close_text {
                right: @height-normal/2;
            }
        }
        &.large {
            height: @height-large;
            line-height: @height-large;
            &.radius {
                border-radius: @height-large/2;
                .dot {
                    width: @height-large - 2;
                    border-radius: 50%;
                }
            }
            .dot {
                width: @height-large * 1.5;
                height: @height-large - 2;
            }
            .open_text {
                left: @height-large/2;
            }
            .close_text {
                right: @height-large/2;
            }
        }
        &.primary {
            background-color: @primary-color;
        }
        &.primary {
            background-color: @primary-color;
        }
        &.success {
            background-color: @success-color;
        }
        &.warning {
            background-color: @warning-color;
        }
        &.error {
            background-color: @error-color;
        }
        &.close {
            background-color: @switch-close-bg;
        }
    }
</style>