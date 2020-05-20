module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
  },
  extends: ["plugin:import/errors", "plugin:import/warnings"],
  plugins: ["import"],
  rules: {
    "import/newline-after-import": [
      "error",
      {
        count: 2,
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*.{js,jsx}",
          "**/*.test.{js,jsx}",
          "**/*.spec.{js,jsx}",
          "**/enzyme.config.{ts,js}",
          "**/webpack.config.js"
        ],
      },
    ],
    "import/namespace": ["error", {allowComputed: true}],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
