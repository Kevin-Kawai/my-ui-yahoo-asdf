/** @type {import('tailwindcss').Config} */
const baseConfig = require("./src/config/tailwind.base.config").baseConfig;

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  ...baseConfig,
  plugins: [],
};
