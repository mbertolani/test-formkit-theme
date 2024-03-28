import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt'],
  css: [join(currentDir, './assets/css/tailwind.scss')],
  tailwindcss: {
    viewer: false,
  },
  formkit: {
    configFile: join(currentDir, './formkit.config.ts'),
    autoImport: true,
  },
})
