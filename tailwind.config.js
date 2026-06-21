/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#208AEF",
          light: "#E6F4FE",
          dark: "#1A73C8",
        },
        secondary: {
          DEFAULT: "#6D28D9",
          light: "#EDE9FE",
          dark: "#5B21B6",
        },
        accent: {
          DEFAULT: "#F59E0B",
          light: "#FEF3C7",
          dark: "#D97706",
        },
        background: "#FFFFFF",
        surface: "#F9FAFB",
        error: "#EF4444",
        success: "#10B981",
      },
    },
  },
  plugins: [],
};
