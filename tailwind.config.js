/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {},
    animation: {
      "move-left-right": "move-left-right linear  infinite 4s",
      "move-right-left": "move-right-left  linear infinite 4s",
      pulse: "pulse 2s linear infinite",
      rotate: "rotate 4s linear infinite",
      "move-circular": "move-circular 10s linear infinite",
      none: "none ",
    },
    keyframes: {
      "move-left-right": {
        "0%": { transform: "translateX(20%)" },
        "100%": { transform: "translateX(70%)" },
      },
      "move-right-left": {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      pulse: {
        "0%, 100%": { opacity: 1 },
        "25%": { opacity: 0.6 },
        "50%": { opacity: 0.2 },
        "75%": { opacity: 0.8 },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      "move-circular": {
        "0%": { transform: "translateX(-150%)" },
        "100%": { transform: "translateX(150%)" },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
