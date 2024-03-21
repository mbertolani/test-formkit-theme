import type { Config } from 'tailwindcss'

export default {
  content: ['./formkit.theme.ts', './app.vue', './components/**/*.{vue,ts,js}', './layouts/**/*.vue', './pages/**/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
