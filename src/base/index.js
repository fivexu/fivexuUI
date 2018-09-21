import Vue from 'vue';
// js常用方法
import Common from './util/js/commonClass.js';

// 原型链
import LoadingClass from './loading/loadingClass.js';
import Message from './message/messageClass.js';
import Alert from './message/alert.js';
import DotRun from './dotRun/dotRun.js';
// 指令
import Tooltip from './tooltip/tooltipClass.js';
import Loading from './loading/loading.js';
// 组件
import Page from './page/page'
import FxButton from './form/button'
import FxInput from './form/input'
import FxInputImg from './form/inputImg'
import FxSelect from './form/select'
import FxTag from './tag/tag'
import FxRadio from './form/radio'
import FxCheckbox from './form/checkbox'
import FxCheckboxItem from './form/checkboxItem'
import FxSwitch from './form/switch'
import FxMenu from './menu/menu'
import FxTree from './tree/tree'
import FxModal from './modal/modal'

import FxFullPage from './fullpage/fullpage'
import Slider from './slider/slider'
import Mosaic from './mosaic/mosaic'
import ScrollBar from './scrollBar/scrollBar'
import TimeLine from './timeLine/timeLine'

import './util/style/componets.less';
import './util/font/iconfont.css';

let global = {
  install: function () {
    Vue.prototype.$fivexuClass = Common;
    LoadingClass.initLoading(Vue);
    Message.initMessage(Vue);
    Alert.initMessage(Vue);
    DotRun.initDotRun(Vue);
    
    Vue.component('fx-button', FxButton);
    Vue.component('fx-input', FxInput);
    Vue.component('fx-input-img', FxInputImg);
    Vue.component('fx-select', FxSelect);
    Vue.component('fx-tag', FxTag);
    Vue.component('fx-radio', FxRadio);
    Vue.component('fx-checkbox', FxCheckbox);
    Vue.component('fx-checkboxItem', FxCheckboxItem);
    Vue.component('fx-switch', FxSwitch);
    Vue.component('fx-menu', FxMenu);
    Vue.component('fx-tree', FxTree);
    Vue.component('fx-full-page', FxFullPage);
    Vue.component('fx-slider', Slider);
    Vue.component('fx-mosaic', Mosaic);
    Vue.component('fx-scroll-bar', ScrollBar);
    Vue.component('fx-time-line', TimeLine);
    Vue.component('fx-page', Page);
    Vue.component('fx-modal', FxModal);
    
    Vue.directive('tooltip', Tooltip);
    Vue.directive('loading', Loading);
  }
};

export default global;
