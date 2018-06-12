import Vue from 'vue'
import loadingVue from './loading'

class loadingClass {
  constructor(vue) {
    this.initLoading(vue)
  }

  initLoading(vue) {
    let loadingCons = vue.extend(loadingVue);
    let loaded = null;
    let container = document.createElement("div");
    document.body.appendChild(container);
    if (!vue.prototype.$fivexu) {
      vue.prototype.$fivexu = {}
    }
    vue.prototype.$fivexu.loading = {
      show: function (options = {}) {
        loaded = new loadingCons({
          el: container,
          propsData: {
            describe: options.describe,
            fixed: options.fixed,
            bgColor: options.bgColor,
            showLoading: true
          }
        })
      },
      hide: function () {
        loaded.showLoading = false
      }
    }
  }
}

export default loadingClass;