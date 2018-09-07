let util = {};

util.addClassName = (dom, name) => {
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

util.prefixStyle = (style) => {
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

util.getStyle = (obj, attr) => {
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  }
  else {
    return document.defaultView.getComputedStyle(obj, null)[attr];
  }
};

export default util;
