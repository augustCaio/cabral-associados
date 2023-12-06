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
        backdrop: "#730707",
        primary_button: "#084DA6",
        background: "#022859",
      },
      backgroundImage: {
        "hero-bg": "url('/background-hero.jpg')",
      },
      fontFamily: {
        hedvig: ["Hedvig", "san-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
