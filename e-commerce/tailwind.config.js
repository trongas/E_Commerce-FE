/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss}",
  ],
  
  theme: {
    extend: {
      screens: {
        xs: "480px", // Điện thoại nhỏ
        sm: "640px", // Điện thoại thông thường
        md: "768px", // Máy tính bảng
        lg: "1200px", // Laptop
        xl: "1280px", // Desktop tiêu chuẩn
        "2xl": "1536px", // Màn hình siêu rộng
      },
      lineHeight: {
        '0.25': '0.25', // custom line-height of 0.25
      },
    },
  },
  corePlugins: {
    preflight: false, 
  },
  plugins: [],
};

