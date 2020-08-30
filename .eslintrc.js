const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../*'],
      },
    ],
    'no-restricted-modules': [
      'error',
      {
        patterns: ['../*'],
      },
    ],
    'react/prop-types': [0],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', path.resolve(__dirname, './src/')],
      },
    },
    react: {
      version: '16.13.1',
    },
  },
};
