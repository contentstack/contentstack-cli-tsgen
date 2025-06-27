module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "unicorn/prefer-module": "off",
    "unicorn/no-abusive-eslint-disable": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "node/no-missing-import": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-require-imports": "off",
    "no-useless-escape": "off",
  },
};
