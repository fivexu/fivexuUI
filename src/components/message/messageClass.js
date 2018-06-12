import messageVue from './message.vue';

class messageClass {
  constructor(vue) {
    this.initMessage(vue)
  }

  initMessage(vue) {
    let messageConfig = vue.extend(messageVue);
    let message = null;
    let container = document.createElement("div");
    document.body.appendChild(container);
    if (!vue.prototype.$fivexu) {
      vue.prototype.$fivexu = {};
    }
    vue.prototype.$fivexu.message = {
      show: function (options = {}) {
        message = new messageConfig({
          el: container,
          propsData: Object.assign(options, {messageShow: true})
        });
        // setTimeout(() => {
        //   message.messageShow = false;
        // }, options.duration ? options.duration : 2000);
      },
      hide: function () {
        message.messageShow = false;
        document.body.removeChild(message.el)
      }
    }
  }
}

export default messageClass;