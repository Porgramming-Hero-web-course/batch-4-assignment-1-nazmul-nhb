import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    { ignores: ["**/node_modules", "**/dist"] },
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"),
    {
        plugins: { "@typescript-eslint": typescriptEslint },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                process: "readonly",
            },

            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },

        rules: {
            "no-unused-vars": "off",
            "no-unused-expressions": "off",
            "prefer-const": "warn",
            "no-console": "warn",
            "no-undef": "error",
            semi: ["warn", "always"],
            "@typescript-eslint/no-empty-object-type": "warn",
            "@typescript-eslint/no-unused-vars": "off",
        },
    }
];