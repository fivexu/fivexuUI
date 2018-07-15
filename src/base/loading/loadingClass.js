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
                if (loaded !== null) {
                    this.hide();
                }
                let container = document.createElement("div");
                document.body.appendChild(container);
                loaded = new loadingCons({
                    el: container,
                    propsData: Object.assign(options, {showLoading: true})
                })
            },
            hide: function () {
                if (loaded !== null) {
                    document.body.removeChild(loaded.$el);
                    loaded = null;
                }
            }
        }
    }
}

export default loadingClass;