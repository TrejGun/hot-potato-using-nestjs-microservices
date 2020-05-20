module.exports = {
  extends: ["../rules/babel", "../rules/common", "../rules/import", "../rules/prettier", "../rules/override"].map(
    require.resolve,
  ),
};
