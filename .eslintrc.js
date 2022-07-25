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
    'react/function-component-definition': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'react/jsx-no-constructed-context-values': 'off',
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'arrow-body-style': 'off',
    semi: [0, 'always'],
    'import/prefer-default-export': 0,
    'max-len': [
      2,
      550,
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
        allow: [
          '_d',
          '_dh',
          '_h',
          '_id',
          '_m',
          '_n',
          '_t',
          '_text',
        ],
      },
    ],
    'consistent-return': 0,
    'no-sequences': 0,
    'import/no-cycle': 0,
    'object-curly-newline': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-props-no-spreading': 0,
    'no-template-curly-in-string': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
          'hrefLeft',
          'hrefRight',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
  },
};
