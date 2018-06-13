import loadingVue from './loading'

let loadingClass = {
  initLoading(vue) {
    let loadingCons = vue.extend(loadingVue);
    let loaded = null;
    if (!vue.prototype.$fivexu) {
      vue.prototype.$fivexu = {}
    }
    vue.prototype.$fivexu.loading = {
      show: function (options = {}) {
        let container = document.createElement("div");
        document.body.appendChild(container);
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