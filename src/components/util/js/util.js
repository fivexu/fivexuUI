let util = {}

util.addClassName = function (dom, name) {
  let classNameArr = dom.getAttribute('class').split(' ');
  let hasName = false
  classNameArr.forEach(item => {
    if (name === item) {
      hasName = true
    }
  });
  if (hasName) return;
  dom.className += ` ${name}`;
};


export default util;