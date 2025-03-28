import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,vue}"]
    },
    {
        languageOptions: {
            globals: globals.browser
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser
            }
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/attribute-hyphenation': ['warn', 'never'],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/consistent-type-imports': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            'no-irregular-whitespace': 'off',
            'vue/html-self-closing': 'off',
            'vue/no-v-text-v-html-on-component': 'off',
            'vue/no-v-html': 'off',
        },
        
    },
]
