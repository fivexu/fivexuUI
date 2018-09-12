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
    vue.prototype.$fivexu.message = {
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
              messageList: messageArr,
              listPosition: options.listPosition,
              isClose: options.isClose ? options.isClose : false,
            }
          });
        } else {
          message.messageList = messageArr;
        }
        
        if (options.isClose) return;
        setTimeout(() => {
          // id--;
          num++;
          messageArr.forEach(item => {
            if (item.id === num) {
              item.messageShow = false
            }
          });
          // if (id >= 0) messageArr[messageArr.length - 1 - id].messageShow = false;
          message.messageList = messageArr;
          if (message !== null && id <= 0 && isNull(messageArr)) {
            setTimeout(() => {
              document.body.removeChild(message.$el);
              messageArr = [];
              message = null;
              id = 0
            }, 300);
          }
        }, options.duration < 0 ? options.duration : 2000);
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
