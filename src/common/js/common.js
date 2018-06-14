// localStorage
export let Storage = {
    setStorage: function (name, data) {
        window.localStorage.setItem(name, JSON.stringify(data))
    },
    getStorage: function (name) {
        return JSON.parse(window.localStorage.getItem(name))
    },
    clearStorage: function (name) {
        window.localStorage.clear(name)
    }
};

// 判断客户端系统
export function detectOS() {
    let sUserAgent = navigator.userAgent;
    let isWin = (navigator.platform === 'Win32') || (navigator.platform === 'Windows');
    let isMac = (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC') || (navigator.platform === 'Macintosh') || (navigator.platform === 'MacIntel');
    if (isMac) return 'Mac';
    let isUnix = (navigator.platform === 'X11') && !isWin && !isMac;
    if (isUnix) return 'Unix';
    let isLinux = (String(navigator.platform).indexOf('Linux') > -1);
    if (isLinux) return 'Linux';
    if (isWin) {
        let isWin2K = sUserAgent.indexOf('Windows NT 5.0') > -1 || sUserAgent.indexOf('Windows 2000') > -1;
        if (isWin2K) return 'Win2000';
        let isWinXP = sUserAgent.indexOf('Windows NT 5.1') > -1 || sUserAgent.indexOf('Windows XP') > -1;
        if (isWinXP) return 'WinXP';
        let isWin2003 = sUserAgent.indexOf('Windows NT 5.2') > -1 || sUserAgent.indexOf('Windows 2003') > -1;
        if (isWin2003) return 'Win2003';
        let isWinVista = sUserAgent.indexOf('Windows NT 6.0') > -1 || sUserAgent.indexOf('Windows Vista') > -1;
        if (isWinVista) return 'WinVista';
        let isWin7 = sUserAgent.indexOf('Windows NT 6.1') > -1 || sUserAgent.indexOf('Windows 7') > -1;
        if (isWin7) return 'Win7';
    }
    return 'other';
}

// 判断客户端浏览器类型
export function myBrowser() {
    let userAgent = navigator.userAgent;
    let isOpera = userAgent.indexOf('Opera') > -1;
    if (isOpera) {
        return 'Opera';
    }
    // 判断是否Opera浏览器
    if (userAgent.indexOf('Firefox') > -1) {
        return 'FF';
    } // 判断是否Firefox浏览器
    if (userAgent.indexOf('Chrome') > -1) {
        return 'Chrome';
    }
    if (userAgent.indexOf('Safari') > -1) {
        return 'Safari';
    } // 判断是否Safari浏览器
    if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
        return 'IE';
    }
    // 判断是否IE浏览器
}

// PC端判断
export function isPC() {
    let userAgentInfo = navigator.userAgent;
    let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break
        }
    }
    return flag;
}

// 获取css属性值
export function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    } else {
        return document.defaultView.getComputedStyle(obj, null)[attr]
    }
}

// 鼠标滚轮兼容
export function addMouseWheel(fn, obj = document) {
    //  let delta = ev.wheelDelta || -ev.detail
    if ((navigator.userAgent.toLowerCase().indexOf('firefox') !== -1)) {
        obj.addEventListener('DOMMouseScroll', fn, false)
    } else if (obj.addEventListener) {
        obj.addEventListener('mousewheel', fn, false)
    } else if (obj.attachEvent) {
        obj.attachEvent('onmousewheel', fn)
    } else {
        obj.onmousewheel = fn
    }
}

// 获取滚动条高度
export function getScrollTop() {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

// 骇客技术添加css样式
export function prefixStyle(style) {
    let vendor = (() => {
        let transformName = {
            webkit: 'webkitTransform',
            Moz: 'MozTransform',
            O: 'OTransform',
            ms: 'msTransform',
            standard: 'transform'
        };
        for (let key in transformName) {
            if (document.createElement('div').style[transformName[key]] !== undefined) {
                return key
            }
        }
        return false
    })();
    if (vendor === false) {
        return false
    }
    if (vendor === 'standard') {
        return style
    }
    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

// 数组<对象> 去重
export function setArrNoRepeat(arr, key) {
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
