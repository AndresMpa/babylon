module.exports = {
  env: {
    browser: true,
    node: true,
    amd: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    "next",
  ],
  rules: {
    semi: ["error", "alwals"],
  },
};
