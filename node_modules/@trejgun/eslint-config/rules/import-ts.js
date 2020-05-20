module.exports = {
  extends: ["plugin:import/typescript"],
  rules: {
    "import/default": "off",
    "import/named": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*.{ts,tsx,js,jsx}",
          "**/*.test.{ts,tsx,js,jsx}",
          "**/*.spec.{ts,tsx,js,jsx}",
          "**/enzyme.config.{ts,js}",
          "**/webpack.config.js"
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      ts: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    },
  },
};
