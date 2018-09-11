let common = {};
/*
* 添加class名
* dom 元素dom节点
* name 需要添加的class名
* */
common.addClassName = (dom, name) => {
  let classNameArr = dom.getAttribute('class').split(' ');
  let hasName = false;
  classNameArr.forEach(item => {
    if (name === item) {
      hasName = true
    }
  });
  if (hasName) return;
  dom.className += ` ${name}`;
};
/*
* 获取元素样式
* dom 元素dom节点
* attr 需要获取的样式名 height transform...
* */
common.getStyle = (obj, attr) => {
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  }
  else {
    return document.defaultView.getComputedStyle(obj, null)[attr];
  }
};
/*
* 返回滚动条高度
* */
common.getScrollTop = () => {
  let scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
};
/*
* localStorage设置
* */
common.Local = {
  set: function (name, data) {
    window.localStorage.setItem(name, JSON.stringify(data));
  },
  get: function (name) {
    return JSON.parse(window.localStorage.getItem(name));
  },
  clear: function () {
    window.localStorage.clear();
  },
  remove: function (name) {
    window.localStorage.removeItem(name);
  }
};

/*
* sessionStorage
* */
common.Session = {
  set: function (name, data) {
    window.sessionStorage.setItem(name, JSON.stringify(data));
  },
  get: function (name) {
    return JSON.parse(window.sessionStorage.getItem(name));
  },
  clear: function () {
    window.sessionStorage.clear();
  },
  remove: function (name) {
    window.sessionStorage.removeItem(name);
  }
};
/*
* 返回用户操作系统类型名字
* */
common.detectOS = () => {
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
};
/*
* 返回浏览器类型
* */
common.isBrowser = () => {
  let userAgent = navigator.userAgent;
  let isOpera = userAgent.indexOf('Opera') > -1;
  // 判断是否Opera浏览器
  if (isOpera) return 'Opera';
  // 判断是否Firefox浏览器
  if (userAgent.indexOf('Firefox') > -1) return 'FF';
  // 判断是否谷歌浏览器
  if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
  // 判断是否Safari浏览器
  if (userAgent.indexOf('Safari') > -1) return 'Safari';
// 判断是否IE浏览器
  if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) return 'IE';
};
/*
* 返回是否是PC端
* */
common.isPC = () => {
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
};
/*
* 兼容滚轮滚动
* fn 回调函数
* dom 单独选择需要监听的dom节点,默认document
* */
common.addMouseWheel = (fn, dom = document) => {
  //  let delta = ev.wheelDelta || -ev.detail
  if ((navigator.userAgent.toLowerCase().indexOf('firefox') !== -1)) {
    dom.addEventListener('DOMMouseScroll', fn, false)
  } else if (obj.addEventListener) {
    dom.addEventListener('mousewheel', fn, false)
  } else if (obj.attachEvent) {
    dom.attachEvent('onmousewheel', fn)
  } else {
    dom.onmousewheel = fn
  }
};
/*
* 添加前缀兼容浏览器
* style 需要加前缀的属性 transform transition...
* */
common.prefixStyle = (style) => {
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
};
/*
* 对象或数组去重
* arr 需要去重的元素
* key 需要去重的key值
* */
common.setArrNoRepeat = (arr, key) => {
  let obj = {};
  return arr.reduce((cur, next) => {
    if (obj[next[key]] === '') {
      obj[next[key]] = true;
    } else {
      cur.push(next);
    }
    return cur;
  }, []);
};
/*
* 复制到剪切板
* dom 需要复制的元素节点 获取节点中的innerHTML
* */
common.copy = (dom) => {
  let input = document.createElement('input');
  if (dom.nodeType) {
    if (typeof dom.innerHTML !== 'string') return;
    input.value = dom.innerHTML;
  } else {
    input.value = dom;
  }
  input.style.display = 'none';
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  setTimeout(() => {
    document.body.removeChild(input);
  })
};

export default common;
