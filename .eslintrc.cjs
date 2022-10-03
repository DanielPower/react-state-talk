module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react/jsx-key": 0,
  },
};
