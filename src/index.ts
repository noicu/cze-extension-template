import type { IExtensionContext } from '@chenz/cze'
import { widgets } from '@chenz/cze'

import Button from './Button'

import 'uno.css'

function activate(_context: IExtensionContext) {
  widgets.registerWidget(Button)
}

export default {
  activate,
}
