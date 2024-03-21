import { genesisIcons } from '@formkit/icons'
import { defineFormKitConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme'

export default defineFormKitConfig(() => {
  return {
    icons: {
      ...genesisIcons,
    },
    config: {
      rootClasses,
    },
  }
})
