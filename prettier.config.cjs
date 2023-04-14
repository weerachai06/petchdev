/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  semi: false,
};

module.exports = config;
