module.exports = {
  env: {
    browser: true,
  },
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "react-hooks",
  ],
  rules: {
    "react/display-name": 0,
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "react/jsx-sort-default-props": [
      "error",
      {
        ignoreCase: true,
      },
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        afterOpening: "never",
        beforeClosing: "allow",
        beforeSelfClosing: "always",
        closingSlash: "never",
      },
    ],
    "react/jsx-wrap-multilines": "error",
  },
  settings: {
    linkComponents: [
      {
        linkAttribute: "to",
        name: "Link",
      },
    ],
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
