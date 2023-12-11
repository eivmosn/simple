import { defineComponent, ref } from 'vue'
import { NInput, NScrollbar } from 'naive-ui'
import { useDraggable } from 'vue-draggable-plus'
import { cloneDeep } from 'lodash-es'
import dayjs from 'dayjs'
import { createGhost } from '@/state/dnd'
import widget from '@/widget'

export default defineComponent({
  inheritAttrs: false,
  name: 'WidgetPanel',
  setup() {
    const dragRef = ref<HTMLElement | null>(null)
    const widgets = ref(widget)

    useDraggable(dragRef, widgets, {
      group: {
        name: 'widget',
        pull: 'clone',
        put: false,
      },
      sort: false,
      forceFallback: true,
      fallbackOnBody: true,
      fallbackTolerance: 5,
      scrollSensitivity: 150,
      onStart: (event) => {
        const index = event.oldIndex as number
        const widget = widgets.value[index]
        createGhost((event as unknown as { originalEvent: MouseEvent }).originalEvent, {
          widget,
        })
      },
      clone: (element) => {
        const cloneElement = cloneDeep(element) as any
        cloneElement.id = dayjs().valueOf()
        return cloneElement
      },
    })

    return {
      dragRef,
      widgets,
    }
  },
  render() {
    return (
      <div class="w-263px min-w-263px h-full select-none b-right b-[var(--border-color)] bg-[var(--card-color)] flex flex-col">
        <div class="p-8px">
          <NInput clearable placeholder="Search..." class="bg-[var(--action-color)]" />
        </div>
        <NScrollbar class="flex-1 p-8px">
          <div class="grid grid-cols-2 gap-8px" ref="dragRef">
            {
              this.widgets.map((element, index) => (
                <div key={index}>
                  <div class="widget-ghost-item b-rd-4px hover:bg-[var(--hover-color)] p-4px fs gap-10px px-8px">
                    <div class="fc text-[var(--primary-color)]" v-html={element.icon} />
                    <div class="text-[var(--text-color-2)] text-truncate">{element.label}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </NScrollbar>
      </div>
    )
  },
})
