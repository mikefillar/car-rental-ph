/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      colors: {
        "color-body": "##F8F8F8",
      },
      height: {
        "2vh": "200vh",
      },
    },
  },
  plugins: [],
};
