const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      safelist: {
        greedy: [/leaflet/],
      },
      content: [
        "./src/**/*.@(tsx|html)",
        "./index.html",
        "./node_modules/leaflet/**/*.js",
      ],
    }),
  ],
};
