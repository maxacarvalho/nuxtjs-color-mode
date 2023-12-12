/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {},
  plugins: [],
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./utils/**/*.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
    "./Error.{js,ts,vue}",
    "./error.{js,ts,vue}",
    "./app.config.{js,ts}",

    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
}
