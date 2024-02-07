/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        globalshadow: "2px 2px 5px rgba(0,0,0,.1), -2px -2px 5px rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};
