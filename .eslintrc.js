module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard-with-typescript'
  ],
  ignorePatterns: ['**.log', '**.json'],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json'
    ]
  },
  plugins: [
    'typescript-sort-keys'
  ],
  rules: {
    curly: ['warn', 'multi'],
    'max-len': ['warn', {
      code: 120,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreTrailingComments: true
    }],
    quotes: ['error', 'single'],
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off'
  }
}
