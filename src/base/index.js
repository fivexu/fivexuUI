import Vue from 'vue';
import Loading from './loading/loadingClass.js';
import Message from './message/messageClass.js';
import tooltip from './tooltip/tooltipClass.js';
import Page from './page/page'
import FxButton from './form/button'
import FxInput from './form/input'
import FxTag from './tag/tag'
import FxRadio from './form/radio'
import FxCheckbox from './form/checkbox'
import FxCheckboxItem from './form/checkboxItem'
import FxSwitch from './form/switch'
import FxMenu from './menu/menu'

import './util/style/componets.less'

let global = {
    install: function () {
        Loading.initLoading(Vue);
        Message.initMessage(Vue);
        Vue.component('fx-button', FxButton);
        Vue.component('fx-input', FxInput);
        Vue.component('fx-tag', FxTag);
        Vue.component('fx-radio', FxRadio);
        Vue.component('fx-checkbox', FxCheckbox);
        Vue.component('fx-checkboxItem', FxCheckboxItem);
        Vue.component('fx-switch', FxSwitch);
        Vue.component('fx-menu', FxMenu);
        Vue.directive('tooltip', tooltip);
    }
};

export default global;