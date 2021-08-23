module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
  ],
  rules: {
    // 0:off 1:on 2:error
    eqeqeq: 1,
    "no-console": 0,
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "vue/no-unused-components": 1,
    "vue/no-unused-vars": 1,
    "vue/require-default-prop": 0,
    "no-irregular-whitespace": 0,
    "no-unused-vars": 1,
    camelcase: 0,
    semi: [1, "always"],
    "no-extra-semi": 1,
    "no-lonely-if": 1,
    "no-multiple-empty-lines": [1, { max: 3 }],
    "no-whitespace-before-property": 1,
    // "arrow-parens": [1,"as-needed"],
    "space-before-function-paren": 0,
    "no-useless-escape": 0,
    "no-var": 1,
    "prefer-arrow-callback": 1,
    "prefer-const": 1,
    "vue/order-in-components": 0,
    // "vue/require-v-for-key": 0
    "vue/max-attributes-per-line": [1,{"singleline": 5}]
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
