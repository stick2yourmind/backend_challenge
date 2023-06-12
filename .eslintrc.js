module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
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
    'typescript-sort-keys/string-enum': 'error'
  }
}
