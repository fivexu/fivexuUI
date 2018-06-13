import Vue from 'vue';
import Loading from './loading/loadingClass.js';
import Message from './message/messageClass.js';
import tooltip from './tooltip/tooltipClass.js';
import './util/style/componets.less'

let global = {
  install: function () {
    Loading.initLoading(Vue);
    Message.initMessage(Vue);
    Vue.directive('tooltip', tooltip)
  }
};

export default global;