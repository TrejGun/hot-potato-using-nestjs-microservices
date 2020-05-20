module.exports = {
  extends: ["./js", "../rules/react", "../rules/prettier-react", "../rules/override"].map(require.resolve),
};
