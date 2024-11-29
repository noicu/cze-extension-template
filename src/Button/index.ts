import type { IWidgetManifest } from '@chenz/cze'
import Component from './index.vue'

export default {
  name: 'Button',
  label: '按钮',
  defaultConfig: {
    editor_options: {
      rotatable: false,
      scalable: false,
      resizable: false,
    },
    attributes: {
      style: {
        width: '100px',
        height: '50px',
      },
    },
    props: {
      text: '按钮',
    },
    slots: {
      default: '默认插槽',
    },
  },
  propMiddleware: (props: any) => {
    return props
  },
  Component,
} as IWidgetManifest
