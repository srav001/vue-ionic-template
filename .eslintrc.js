module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        '@vue/airbnb',
        'prettier'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
        'no-debugger': 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        "import/extensions": [ 2, {
            'js': "always",
            'vue': "always",
            'ts': "never",
          }],
    },
    settings: {
        'import/resolver': {
            'typescript': {}
        },
    },
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
};