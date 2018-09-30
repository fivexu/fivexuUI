class loading {
  constructor(el, bind) {
    this.currentElement = el;
    this.loadingWrapper = null;
    this._initLoading = null;
    bind.value ? this.show() : this.hide();
  }

  initLoading() {
    this.loadingWrapper = document.createElement('div');
    this.loadingWrapper.setAttribute('class', 'fivexu_loading_wrapper');
    let loadingContent = document.createElement('div');
    loadingContent.innerHTML = `<svg class="fivexu_loading_svg" viewBox="25 25 50 50"><circle class="fivexu_loading_circle" cx="50" cy="50" r="20" fill="none"/></svg>`;
    loadingContent.setAttribute('class', 'fivexu_loading_content');
    setTimeout(() => {
      let hasPosition = this._getStyle(this.currentElement, 'position');
      this._initLoading = true;
      if (hasPosition === 'static' || hasPosition === '') this.currentElement.style.position = 'relative';
      this.loadingWrapper.appendChild(loadingContent);
      this.currentElement.appendChild(this.loadingWrapper);
    }, 100);
  }

  show() {
    if (this._initLoading) {
      this.loadingWrapper.style.display = 'block';
    } else {
      this.initLoading();
    }
  }

  change(val) {
    val ? this.show() : this.hide();
  }

  hide() {
    if (this._initLoading) {
      this.loadingWrapper.style.display = 'none';
    }
  }

  destroy() {
    if (this._initLoading) {
      this.loadingWrapper.style.display = 'none';
    }
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

const loadingOptions = {
  bind(el, binding) {
    el._loading = new loading(el, binding);
  },
  componentUpdated(el, binding) {
    if (binding.oldValue !== binding.value) {
      el._loading.change(binding.value);
    }
  },
  unbind(el) {
    el._loading.destroy();
  }
};

export default loadingOptions;
