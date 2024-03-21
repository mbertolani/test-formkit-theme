import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt', '@nuxt/image'],
  css: [join(currentDir, './assets/css/tailwind.scss')],
  tailwindcss: {
    cssPath: join(currentDir, './assets/css/tailwind.scss'),
    viewer: false,
  },
  formkit: {
    autoImport: true,
  },
})
