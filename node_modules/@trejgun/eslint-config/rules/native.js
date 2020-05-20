module.exports = {
  "plugins": [
    "react-native",
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".ts",
          ".jsx",
          ".tsx",
          ".android.js",
          ".android.jsx",
          ".android.ts",
          ".android.tsx",
          ".ios.js",
          ".ios.jsx",
          ".ios.ts",
          ".ios.tsx",
        ],
      },
    },
  },
  "globals": {
    "__DEV__": true,
  },
};
