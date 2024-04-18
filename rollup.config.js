import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import sass from "rollup-plugin-sass";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.cjs.js",
    format: "cjs",
    exports: "auto",
    sourcemap: !production,
  },
  // this externelizes react to prevent rollup from compiling it
  external: ["react", "@babel/runtime"],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.build.json",
      outputToFilesystem: true,
    }),
    // these are babel configurations
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/transform-runtime"],
      babelHelpers: "runtime",
    }),
    sass({
      output: "./dist/boron-ui.css",
    }),
  ],
};
