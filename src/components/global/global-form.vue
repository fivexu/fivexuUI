<script>
    import {Component} from 'vue-property-decorator'
    import Global from './global.vue'

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
    export default class GlobalForm extends Global {
        updateModel(value) {
            this.$emit('input', value);
        }

        isReadonly() {
            return this.widgetReadonly;
        }
    }
</script>
