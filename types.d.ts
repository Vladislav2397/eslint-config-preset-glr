import { defineConfigWithVueTs } from '@vue/eslint-config-typescript'
import eslint from 'eslint'

export declare const defineConfig: (...configs: Parameters<typeof defineConfigWithVueTs>) => eslint.Linter.Config[]
