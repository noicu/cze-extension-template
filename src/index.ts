import type { IExtensionContext } from '@chenz/cze'
import { widgets } from '@chenz/cze'

import Button from './Button'

import 'uno.css'

function activate(context: IExtensionContext) {
  widgets.register(context, Button)
}

export default {
  activate,
}
