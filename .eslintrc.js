module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'no-console': 'warn', // Allow console but show a warning
    'jsx-a11y/label-has-associated-control': 'off',
    'no-nested-ternary': 'off',
    'consistent-return': 'off',
    'no-alert': 'warn', // Allow alerts but show a warning
    'react/jsx-no-constructed-context-values': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'linebreak-style': ['off'], // Adjust for cross-platform compatibility
    'react/state-in-constructor': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off', // Not required for React 17+
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'max-len': [
      'warn',
      {
        code: 120, // Adjust maximum line length
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id'],
      },
    ],
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-array-index-key': 'off', // Allow with a warning
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-quotes': 'off',
    'react/jsx-indent': 'off',
    'no-trailing-spaces': 'off',
    'quotes': ['warn', 'single', { avoidEscape: true }], // Enforce single quotes with exceptions
    'react/jsx-tag-spacing': 'off',
    'eol-last': ['error', 'always'], // Ensure newline at end of file
    'arrow-spacing': ['error', { before: true, after: true }], // Require space before and after =>
    'semi': ['error', 'always'], // Enforce semicolons
    'object-curly-spacing': ['error', 'always'], // Require spacing inside curly braces
    'space-infix-ops': ['error', { int32Hint: false }], // Enforce spaces around infix operators
    'lines-around-directive': ['error', { before: 'always', after: 'always' }], // Ensure newlines around directives
    'import/order': ['error', { alphabetize: { order: 'asc' } }], // Alphabetize imports
  },
};