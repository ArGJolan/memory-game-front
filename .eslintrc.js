module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/recommended',
    'standard',
  ],
  rules: {
    'vue/no-unused-vars': 1,
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
