module.exports = {
  extends: [
    "./ts",
    "../rules/react",
    "../rules/prettier-react",
    "../rules/override",
  ].map(require.resolve),
  rules: {
    "react/prop-types": "off",
  },
};
