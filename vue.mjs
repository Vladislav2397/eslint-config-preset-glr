/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.vue'],
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/attribute-hyphenation': ['warn', 'never'],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/consistent-type-imports': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            'no-irregular-whitespace': 'off',
        },
    },
]
