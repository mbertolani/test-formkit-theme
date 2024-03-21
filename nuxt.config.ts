import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  formkit: {
    autoImport: true,
  },
  tailwindcss: {
    cssPath: join(currentDir, './assets/css/tailwind.scss'),
    viewer: false,
  },
  css: [join(currentDir, './assets/css/tailwind.scss')],
  modules: ['@formkit/nuxt', '@nuxt/image', '@nuxtjs/tailwindcss'],
})
