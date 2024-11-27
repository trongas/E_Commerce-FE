/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{html,ts,css,scss}",
    "./node_modules/primeng/**/*.{js,ts,html}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // Vô hiệu hóa Preflight của Tailwind để không ghi đè CSS mặc định
  },
  plugins: [],
};
