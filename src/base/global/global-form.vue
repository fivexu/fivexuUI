<script>
  import Global from './global.vue'

  const SIZE_GLOBAL = {
    MINE: 'mine',
    NORMAL: 'normal',
    LARGE: 'large'
  };

  export default {
    extends: Global,
    props: {
      readOnly: {
        type: Boolean,
        default: false
      },
      value: {
        type: Array | String | Number,
        default: ''
      },
      size: {
        type: String,
        default: SIZE_GLOBAL.NORMAL
      }
    },
    methods: {
      updateModel(value) {
        this.$emit('input', value);
      },
      isReadonly() {
        return this.widgetReadonly;
      }
    }
  }
</script>
