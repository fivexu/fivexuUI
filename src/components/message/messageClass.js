import messageVue from './message.vue';

let messageClass = {
  initMessage(vue) {
    let messageConfig = vue.extend(messageVue);
    let message = null;
    if (!vue.prototype.$fivexu) {
      vue.prototype.$fivexu = {};
    }
    vue.prototype.$fivexu.message = {
      show: function (options = {}) {
        let container = document.createElement("div");
        document.body.appendChild(container);
        message = new messageConfig({
          el: container,
          propsData: Object.assign(options, {messageShow: true})
        });
        setTimeout(() => {
          message.messageShow = false;
        }, options.duration ? options.duration : 2000);
      },
      hide: function () {
        message.messageShow = false;
        if (message.el) {
          document.body.removeChild(message.el)
        }
      }
    }
  }
}

export default messageClass;