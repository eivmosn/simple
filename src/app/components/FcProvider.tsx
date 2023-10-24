import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'FcProvider',
  setup() {

  },
  render() {
    return (<div class="fc-wrapper h-full flex bg-[var(--x-background-light)]">
      {this.$slots.default?.()}
    </div>)
  },
})