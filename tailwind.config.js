/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
      fontFamily: {
        josefin_sans: ["Josefin Sans", "sans-serif"]
      },
      colors: {
        desaturated_red: "hsl(0, 36%, 70%)",
        soft_red: "hsl(0, 93%, 68%)",
        dark_grayish_red: "hsl(0, 6%, 24%)",
        // gradients
        // 1
        gradient_1: "hsl(0, 0%, 100%)",
        gradient_2: "hsl(0, 100%, 98%)",
        // 1
        gradient_3: "hsl(0, 80%, 86%)",
        gradient_4: "hsl(0, 74%, 74%)"
      }
    },
  },
  plugins: [],
}

