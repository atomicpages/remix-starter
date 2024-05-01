/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "@djthoms/eslint-config",
    "@djthoms/eslint-config/typescript",
    "@djthoms/eslint-config/react",
    "@djthoms/eslint-config/react-typescript",
    "@djthoms/eslint-config/vitest",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
