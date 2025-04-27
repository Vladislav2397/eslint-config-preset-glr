import pluginVue from 'eslint-plugin-vue'
import {
    defineConfigWithVueTs,
    vueTsConfigs,
} from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export const defineConfig = (...configs) => defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },

    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },

    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,

    {
        ...pluginVitest.configs.recommended,
        files: ['src/**/__tests__/*'],
    },
    skipFormatting,
    {
        name: 'custom/vue-override-rules',
        rules: {
            'vue/valid-template-root': 'off',

            // Custom rules
            // Можно использовать однословное имя компонента (например, `Button`, `Input`)
            'vue/multi-word-component-names': 'off',
            // Использование только camelCase для атрибутов
            'vue/attribute-hyphenation': [
                'warn',
                'never',
                { ignore: ['custom-prop'] },
            ],
            // Использование только camelCase для событий
            'vue/v-on-event-hyphenation': [
                'warn',
                'never',
                { ignore: ['custom-prop'] },
            ],
            // Использование только camelCase для свойств
            'vue/prop-name-casing': 'error',
            // Порядок атрибутов в компоненте
            'vue/attributes-order': 'warn',
            // Порядок блоков в компоненте
            'vue/block-order': [
                'error',
                {
                    order: ['template', 'script', 'style'],
                },
            ],
            // Использование PascalCase для имени компонента в шаблоне
            'vue/component-name-in-template-casing': ['warn', 'PascalCase'],
            // Использование camelCase для кастомных событий
            'vue/custom-event-name-casing': ['error', 'camelCase'],
            // Использование type-based для defineEmits (в доке подробнее)
            'vue/define-emits-declaration': ['error', 'type-based'], // TODO: Change to type-literal in next
            // Обсудить с командой
            // Порядок макросов
            // 'vue/define-macros-order': [
            //     'error',
            //     {
            //         order: ['defineProps', 'defineEmits', 'defineModel'],
            //         defineExposeLast: false,
            //     },
            // ],
        },
    },
    {
        name: 'custom/typescript-override-rules',
        rules: {
            '@typescript-eslint/no-empty-object-type': 'off',
        },
    },
    ...configs,
)
