import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
    { ignores: ["node_modules", "dist", "*.cjs", "*.config.*"] },
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser, } },
    tseslint.configs.recommended,
    { plugins: {'@stylistic': stylistic} },
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            '@stylistic/quotes': ['error', 'double'],
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/curly-newline': 'error',
            '@stylistic/indent': ['error', 4],
            '@stylistic/comma-dangle': ['error', 'never']
        }
    }
]);
