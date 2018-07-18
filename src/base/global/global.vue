<script>
    export default {
        props: {
            disable: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'primary'
            }
        },
        data() {
            return {
                widgetName: ''
            }
        },
        methods: {
            isDisabled() {
                return this.disable;
            },
            emitEvent(event) {
                this.$emit('clickEvt', event);
            },
            clickCloseDom(element, callback) {
                let el = this.$el;
                document.addEventListener('mousedown', (ev) => {
                    ev = ev || event;
                    ev.stopPropagation();
                    ev.preventDefault();
                    if (element !== ev.target && !el.contains(element)) {
                        console.log(element);
                        callback();
                    }
                })
            }
        }
    };
</script>
