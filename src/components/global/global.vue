<script>
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    props: {
      disable: {
        type: Boolean,
        default: false
      }
    }
  })
  export default class Global extends Vue {
    widgetName = '';

    isDisabled() {
      return this.disable;
    }

    emitEvent(event) {
      this.$emit(this.widgetName + 'Evt', event);
    }
  };
</script>
