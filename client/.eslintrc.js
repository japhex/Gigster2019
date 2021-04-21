module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['babel', 'import'],
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'no-console': 'off',
    'import/no-cycle': 'off',
    'import/named': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'jsx-a11y/accessible-emoji': ['off'],
    'jsx-a11y/alt-text': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-unescaped-entities': 'off',
    'no-await-in-loop': 'off',
    'no-nested-ternary': 'off',
    camelcase: 'off',
    radix: 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '*.css',
            group: 'unknown',
            patternOptions: { matchBase: true },
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
}
