module.exports = {
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  testRegex: ".+\\.test\\.tsx?$",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "\\.scss$": "identity-obj-proxy",
  },
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
