module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    '@vue/prettier'
  ],
  // extends: [
  //   'plugin:vue/vue3-essential',
  //   'standard-with-typescript',
  //   'plugin:prettier/recommended', // 添加 prettier 插件
  //   'plugin:jest/recommended',
  //   'eslint:recommended',
  //   'plugin:vue/recommended' // or 'plugin:vue/base'
  // ],
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   sourceType: 'module',
  //   createDefaultProgram: true,
  //   project: './tsconfig.json' // could be tsconfig.json too
  // },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 0,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/comment-directive': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'config']
      }
    ]
  },
  settings: {}
}
