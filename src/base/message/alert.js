import messageVue from './messageList.vue';

// 去重
function _setArrNoRepeat(arr, key) {
  let obj = {};
  return arr.reduce((cur, next) => {
    if (obj[next[key]] === '') {
      obj[next[key]] = true;
    } else {
      cur.push(next);
    }
    return cur;
  }, []);
}

// 判断提示数组是否为空了
function isNull(arr) {
  if (!arr.length) return true;
  let off = true;
  arr.forEach(item => {
    if (item.isClose) {
      off = false;
    }
  });
  return off;
}

let messageClass = {
  initMessage(vue) {
    let messageVueDom = vue.extend(messageVue);
    let container = document.createElement('div');
    let message = null;
    let messageArr = [];
    let id = 0;
    let num = 0;
    if (!vue.prototype.$fivexu) vue.prototype.$fivexu = {};
    vue.prototype.$fivexu.alert = {
      show: function (options = {}) {
        if (options.isClose) {
          messageArr.push(Object.assign(options, {messageShow: true}));
        } else {
          id++;
          messageArr.push(Object.assign(options, {messageShow: true, id: id}));
          messageArr = _setArrNoRepeat(messageArr, 'id');
        }
        if (message === null) {
          document.body.appendChild(container);
          message = new messageVueDom({
            el: container,
            propsData: {
              width: 0,
              titleShow: options.titleShow ? options.titleShow : false,
              messageList: messageArr,
              listPosition: 'top-center',
              isClose: options.isClose ? options.isClose : false,
            }
          });
        } else {
          message.messageList = messageArr;
        }
        if (options.isClose) return;
        setTimeout(() => {
          num++;
          messageArr.forEach(item => {
            if (item.id === num) {
              item.messageShow = false
            }
          });
          message.messageList = messageArr;
          if (message !== null && id === num && isNull(messageArr)) {
            setTimeout(() => {
              document.body.removeChild(message.$el);
              messageArr = [];
              message = null;
              id = 0;
              num = 0;
            }, 300);
          }
        }, options.duration && options.duration >= 1000 ? options.duration : 3000);
      },
      destroy: function () {
        if (message !== null) {
          document.body.removeChild(message.$el);
          messageArr = [];
          message = null;
          id = 0;
        }
      }
    }
  }
};

export default messageClass;
