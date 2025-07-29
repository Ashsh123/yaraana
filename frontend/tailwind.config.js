/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "night", "luxury", "emerald", "dracula", "cyberpunk", "business", "cmyk", "autumn","coffee"] // or omit this line entirely for all themes
  },
}



// ["light", "dark", "cupcake", "night", "luxury", "emerald", "dracula", "cyberpunk", "business", "cmyk", "autumn"], // or just 'themes: ["all"]' won't work—pick specific ones or leave empty for defaults
