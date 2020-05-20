module.exports = {
  extends: [
    "../rules/typescript",
    "../rules/common",
    "../rules/import",
    "../rules/import-ts",
    "../rules/prettier",
    "../rules/prettier-ts",
    "../rules/override",
  ].map(require.resolve),
  rules: {
    "no-useless-constructor": "off",
  },
};
