class TooltipClass {
    constructor(el, bind) {
        this.currentElement = el;  // tooltip 的元素
        this.bindValue = bind.value; // tooltip 的内容
        this.bindPosition = bind.rawName.split('.')[1]; // tooltip 定位的位置
        this.tooltipPadding = 10; // tooltip 距离元素的距离
        this.tooltip = null;
        this._initTooltip = null;
        this.timer = null;
        this.addListen();
    }

    // 初始化 并显示tooltip
    show() {
        if (!this._initTooltip) {
            this.initTooltip();
        } else {
            setTimeout(() => {
                this.getTooltipPosition(this.bindPosition);
            })
        }
        clearTimeout(this.timer);
        this.tooltip.setAttribute('class', 'fivexu_tooltip show');
    }

    hide() {
        this.tooltip.setAttribute('class', 'fivexu_tooltip');
        this.timer = setTimeout(() => {
            this._initTooltip = false;
            document.body.removeChild(this.tooltip);
        }, 10000)
    }

    // 删除 tooltip
    destroy() {
        this._initTooltip = false;
        if (this.tooltip) {
            document.body.removeChild(this.tooltip);
            this.currentElement.removeEventListener('mouseenter', this.show);
            this.currentElement.removeEventListener('mouseleave', this.hide);
        }
    }

    // 当tooltip存在时,仅改变内容
    setContent(msg) {
        if (this._initTooltip) {
            this.tooltip.innerHTML = msg;
            this.tooltip.appendChild(this.tooltipAfter);
        } else {
            this.initTooltip();
        }
    }

    // 监听mouse事件
    addListen() {
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.currentElement.addEventListener('mouseenter', this.show);
        this.currentElement.addEventListener('mouseleave', this.hide);
    }

    // 获取tooltip定义的位置信息 没有时 给定默认值
    getTooltipPosition(position) {
        switch (position) {
            case 'top':
                this.setTooltipPositionTop();
                break;
            case 'bottom':
                this.setTooltipPositionBottom();
                break;
            case 'left':
                this.setTooltipPositionLeft();
                break;
            case 'right':
                this.setTooltipPositionRight();
                break;
            default:
                this.setTooltipPositionTop();
                break;
        }
    }

    // 初始化tooltip
    initTooltip() {
        let wrapperTooltip = document.createElement('div');
        let tooltipAfter = document.createElement('div');
        wrapperTooltip.innerHTML = this.bindValue;
        wrapperTooltip.appendChild(tooltipAfter);
        this.tooltip = wrapperTooltip;
        this.tooltipAfter = tooltipAfter;
        this._initTooltip = true;
        setTimeout(() => {
            document.body.appendChild(this.tooltip);
            this.getTooltipPosition(this.bindPosition);
        }, 30)
    }

    // 上面显示
    setTooltipPositionTop() {
        const info = this.currentElement.getBoundingClientRect();
        const t = info.top - this.tooltip.offsetHeight - this.tooltipPadding;
        let l = (info.width - this.tooltip.offsetWidth) / 2 + info.left;
        if (l <= 0) l = 0;
        if (l >= window.innerWidth - this.tooltip.offsetWidth) l = window.innerWidth - this.tooltip.offsetWidth;
        if (t < 0) {
            this.setTooltipPositionBottom();
            return
        }
        this.tooltipAfter.setAttribute('class', 'fivexu_tooltip_after top');
        this.tooltip.style.left = `${l}px`;
        this.tooltip.style.top = `${t}px`;
    }

    // 下面显示
    setTooltipPositionBottom() {
        const info = this.currentElement.getBoundingClientRect();
        const b = info.top + info.height + this.tooltipPadding;
        let l = (info.width - this.tooltip.offsetWidth) / 2 + info.left;
        if (l <= 0) l = 0;
        if (l >= window.innerWidth - this.tooltip.offsetWidth) l = window.innerWidth - this.tooltip.offsetWidth;
        if (b + this.tooltip.offsetHeight > window.innerHeight) {
            this.setTooltipPositionTop();
            return;
        }
        this.tooltipAfter.setAttribute('class', 'fivexu_tooltip_after bottom');
        this.tooltip.style.left = `${l}px`;
        this.tooltip.style.top = `${b}px`;
    }

    // 左边显示
    setTooltipPositionLeft() {
        const info = this.currentElement.getBoundingClientRect();
        const l = info.left - this.tooltip.offsetWidth - this.tooltipPadding;
        const t = (info.height - this.tooltip.offsetHeight) / 2 + info.top;
        if (l < 0) {
            this.setTooltipPositionRight();
            return;
        }
        this.tooltipAfter.setAttribute('class', 'fivexu_tooltip_after left');
        this.tooltip.style.left = `${l}px`;
        this.tooltip.style.top = `${t}px`;
    }

    // 右边显示
    setTooltipPositionRight() {
        const info = this.currentElement.getBoundingClientRect();
        const l = info.left + info.width + this.tooltipPadding;
        const t = (info.height - this.tooltip.offsetHeight) / 2 + info.top;
        if (l > window.innerWidth) {
            this.setTooltipPositionLeft();
            return;
        }
        this.tooltipAfter.setAttribute('class', 'fivexu_tooltip_after right');
        this.tooltip.style.left = `${info.left + info.width + this.tooltipPadding}px`;
        this.tooltip.style.top = `${t}px`;
    }
}

const tooltipOptions = {
    bind(el, binding) {
        el._tooltip = new TooltipClass(el, binding);
    },
    componentUpdated(el, binding) {
        if (binding.oldValue !== binding.value) {
            el._tooltip.setContent(binding.value);
        }
    },
    unbind(el) {
        el._tooltip.destroy();
    }
};

export default tooltipOptions;
