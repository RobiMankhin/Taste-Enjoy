/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        customBounce: "customBounce 1.5s ease-in-out 500ms infinite", // Add delay here
      },
      keyframes: {
        customBounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.42, 0, 0.58, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.42, 0, 0.58, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
