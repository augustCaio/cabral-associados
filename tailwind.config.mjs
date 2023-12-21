/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        whatsapp_green_primary: "#25D366",
        whatsapp_green_secondary: "#128C7E",
        backdrop: "#062b5b",
        primary_button: "#084DA6",
        background: "#062b5b",
        text_color: "#D6A90A",
      },
      backgroundImage: {
        "hero-bg": "url('/bg01.jpg')",
      },
      fontFamily: {
        hedvig: ["Hedvig", "san-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
