import Vue from 'vue';
import loading from './loading/loadingClass.js';
import message from './message/messageClass.js';
import tooltip from './tooltip/tooltipClass.js';
import './util/style/componets.less'

let global = {
  install: function () {
    new loading(Vue);
    new message(Vue);
    Vue.directive('tooltip', tooltip)
  }
};

export default global;