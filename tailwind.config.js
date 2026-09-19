/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F4EC",
        ink: "#22302C",
        teal: {
          50: "#EAF3F0",
          100: "#CFE4DC",
          300: "#7FB6A4",
          500: "#0F6E56",
          600: "#0B5744",
          700: "#084337",
        },
        sienna: {
          100: "#F3DCCB",
          300: "#DE9B6D",
          500: "#C7541E",
          600: "#A64316",
          700: "#8A3712",
        },
        sage: {
          100: "#E7EEE1",
          300: "#B9CCAC",
          500: "#7C9885",
        },
        danger: "#B23A32",
        success: "#3F7A3A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: ["1.125rem", "1.7"],
        lg: ["1.3rem", "1.7"],
        xl: ["1.6rem", "1.5"],
        "2xl": ["2rem", "1.4"],
        "3xl": ["2.6rem", "1.3"],
      },
      borderRadius: {
        card: "1.25rem",
      },
    },
  },
  plugins: [],
};
