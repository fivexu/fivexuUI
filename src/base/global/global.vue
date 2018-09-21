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
      hasSlot(name = null) {
        if (name) return this.$slots[name];
        return this.$slots.default
      }
    }
  };
</script>
