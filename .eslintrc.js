const RULES = {
  'ERROR': 'error',
  'WARNING': 'warn',
  'OFF': 'off'
}

module.exports = {
  extends: [
    'next',
    'prettier'
  ],
  plugins: ['unicorn'],
  rules: {
    'no-unused-vars': [
      RULES.ERROR,
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'prefer-const': RULES.ERROR,
    'react-hooks/exhaustive-deps': RULES.ERROR,
  }
}