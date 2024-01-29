/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl':'0 12px 10px -12px rgba(0,0,0,0.16)',
      }
    },
  },
  plugins: [import ("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

