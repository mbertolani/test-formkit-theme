import type { Config } from 'tailwindcss'

import { join } from 'path'

const resolve = (s: string) => join(__dirname, s)

export default {
  content: [resolve('./formkit.theme.ts'), resolve('./app.vue')],
  darkMode: 'class',
} satisfies Config
