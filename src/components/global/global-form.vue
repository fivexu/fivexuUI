<script>
  import {Component} from 'vue-property-decorator'
  import global from './global'

  const SIZE_GLOBAL = {
    MINE: 'mine',
    NORMAL: 'normal',
    LARGE: 'large'
  };

  @Component({
    props: {
      readOnly: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number]
      },
      size: {
        type: String,
        default: SIZE_GLOBAL.NORMAL
      }
    }
  })
  export default class globalForm extends global {
    updateModel(value) {
      this.$emit("input", value);
    }

    isReadonly() {
      return this.widgetReadonly;
    }
  }
</script>
