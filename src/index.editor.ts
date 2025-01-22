import type { IExtensionContext } from '@chenz/cze'
import { registerWidgetConfig } from '@chenz/cze-editor'

function activate(context: IExtensionContext) {
  const pack = context.package.name
  registerWidgetConfig(pack, {
    name: 'Button',
    propsOptions: [
      {
        key: 'text',
        label: '按钮文字',
        type: 'string',
        default: '按钮',
      },
    ],
  })
}

export default {
  activate,
}
