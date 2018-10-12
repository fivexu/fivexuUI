import {prefixStyle} from "../../common/js/common";

const userSelect = prefixStyle('userSelect');

class drag {
  constructor(el, bind) {
    console.log(bind.rawName.split('.')[1]);
    this.currentElement = el;
    this.positionType = bind.rawName.split('.')[1] || 'absolute';
    this._initDrag();
  }
  
  _initDrag() {
    setTimeout(() => {
      let parentPosition = this._getStyle(this.currentElement.parentNode, 'position');
      if (this.positionType !== 'fixed') {
        if (parentPosition === 'static' || parentPosition === '') this.currentElement.parentNode.style.position = 'relative';
        this.currentElement.style.position = 'absolute';
      } else {
        this.currentElement.style.position = 'fixed';
      }
      if (this.currentElement.style.left === '' && this.currentElement.style.right === '') this.currentElement.style.left = 0;
      if (this.currentElement.style.top === '' && this.currentElement.style.bottom === '') this.currentElement.style.top = 0;
      this.currentElement.style[userSelect] = 'none';
      this.currentElement.style.cursor = 'move';
      this.add();
    }, 100)
  }
  
  add() {
    this.currentElement.addEventListener('mousedown', this.mousedown.bind(this));
  }
  
  mousedown(ev) {
    ev = ev || event;
    ev.stopPropagation();
    ev.preventDefault();
    this.clientX = ev.clientX - this.currentElement.offsetLeft;
    this.clientY = ev.clientY - this.currentElement.offsetTop;
    this.currentElement.style.userSelect = 'none';
    this.draging = true;
    window.addEventListener('mousemove', this.mousemove.bind(this));
    document.addEventListener('mouseup', this.mouseup.bind(this));
  }
  
  mousemove(ev) {
    ev = ev || event;
    if (!this.draging) return;
    let left = ev.clientX - this.clientX;
    let top = ev.clientY - this.clientY;
    if (left <= 0) left = 0;
    if (top <= 0) top = 0;
    if (this.positionType !== 'fixed') {
      if (left >= this.currentElement.parentNode.offsetWidth - this.currentElement.offsetWidth) left = this.currentElement.parentNode.offsetWidth - this.currentElement.offsetWidth;
      if (top >= this.currentElement.parentNode.offsetHeight - this.currentElement.offsetHeight) top = this.currentElement.parentNode.offsetHeight - this.currentElement.offsetHeight;
    } else {
      if (left >= window.innerWidth - this.currentElement.offsetWidth) left = window.innerWidth - this.currentElement.offsetWidth;
      if (top >= window.innerHeight - this.currentElement.offsetHeight) top = window.innerHeight - this.currentElement.offsetHeight;
    }
    this.currentElement.style.left = `${left}px`;
    this.currentElement.style.top = `${top}px`;
  }
  
  mouseup(ev) {
    ev = ev || event;
    this.draging = false;
  }
  
  _getStyle(obj, attr) {
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    }
    else {
      return document.defaultView.getComputedStyle(obj, null)[attr];
    }
  }
}

const draging = {
  bind(el, binding) {
    el._draging = new drag(el, binding);
  },
  componentUpdated(el, binding) {
    if (binding.oldValue !== binding.value) {
      // el._draging.change(binding.value);
    }
  },
  unbind(el) {
    // el._draging.destroy();
  }
};

export default draging;
