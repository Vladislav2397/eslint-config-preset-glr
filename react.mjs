// Global identifiers from different JavaScript environments
// https://www.npmjs.com/package/globals
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { ignores: ['dist', 'node_modules'] },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        rules: {
            //
        },
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    ...tseslint.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-empty-object-type": "off",
        },
    },
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            "react-hooks": pluginReactHooks,
        },
        rules: pluginReactHooks.configs.recommended.rules,
    },
    {
        rules: {
            // because nobody don't do this
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "react/no-unescaped-entities": "warn",
            "react-hooks/exhaustive-deps": "warn",
        },
    },
    {
        files: [`**/*.stories.{js,ts,jsx,tsx}`],
        rules: {
            "react/react-in-jsx-scope": "off",
        },
    },
    {
        files: ["**/*.{jsx,tsx}"],
        rules: {
            "@typescript-eslint/no-unnecessary-type-constraint": "off",
        },
    },
]
