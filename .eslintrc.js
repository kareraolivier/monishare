module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'prefer-const': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': [
      'warn',
      {
        allow: ['error', 'warn', 'info'],
      },
    ],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'sort-imports': 'off',
    'max-lines-per-function': ['warn', 100],
    'no-use-before-define': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/strict',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:tailwindcss/recommended',
      ],
      rules: {
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ],
  plugins: ['unicorn', 'react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
}
