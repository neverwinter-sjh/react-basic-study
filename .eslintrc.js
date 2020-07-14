module.exports = {
  parser: 'babel-eslint',
  extends: ['react-app'],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }]    
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
