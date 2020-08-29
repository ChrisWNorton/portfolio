module.exports = {
  extends: ["airbnb-typescript", "prettier/@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "global-require": 0,
  },
};
