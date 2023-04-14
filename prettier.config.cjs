/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 80,
};

module.exports = config;
