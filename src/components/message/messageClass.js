import messageVue from './messageList.vue';

// 去重
function setArrNoRepeat(arr, key) {
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

let messageClass = {
    initMessage(vue) {
        let messageVueDom = vue.extend(messageVue);
        let container = document.createElement("div");
        let message = null;
        let messageArr = [];
        let id = 0;
        if (!vue.prototype.$fivexu) {
            vue.prototype.$fivexu = {};
        }
        vue.prototype.$fivexu.message = {
            show: function (options = {}) {
                id++;
                messageArr.push(Object.assign(options, {messageShow: true, id: id}));
                messageArr = setArrNoRepeat(messageArr, 'id');
                if (message === null) {
                    document.body.appendChild(container);
                    message = new messageVueDom({
                        el: container,
                        propsData: {
                            messageList: messageArr
                        }
                    });
                } else {
                    message.messageList = messageArr;
                }
                setTimeout(() => {
                    id--;
                    if (id >= 0) {
                        messageArr[messageArr.length - id - 1].messageShow = false;
                    }
                    message.messageList = messageArr;
                    if (message !== null && id <= 0) {
                        document.body.removeChild(message.$el);
                        messageArr = [];
                        message = null;
                        id = 0
                    }
                }, options.duration ? options.duration : 2000);
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