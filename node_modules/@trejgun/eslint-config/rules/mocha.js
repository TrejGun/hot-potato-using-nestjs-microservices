module.exports = {
  env: {
    mocha: true,
  },
  extends: ["plugin:mocha/recommended"],
  plugins: ["mocha"],
  rules: {
    "mocha/no-exclusive-tests": "error",
    "mocha/no-hooks-for-single-case": "off",
    "mocha/no-skipped-tests": "off",
  },
};
