export const env = {
    browser: true,
    es2021: true,
};
export const extendsArray = [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
];
export const overrides = [
    {
        env: {
            node: true,
        },
        files: [".eslintrc.{js,cjs}"],
        parserOptions: {
            sourceType: "script",
        },
    },
];
export const parser = "@typescript-eslint/parser";
export const parserOptions = {
    ecmaVersion: "latest",
    sourceType: "module",
};
export const plugins = ["@typescript-eslint", "react"];
export const rules = {
    indent: ["error", 4],
    "linebreak-style": ["warn", "unix"],
    quotes: ["warn", "double"],
    semi: ["error", "always"],
};
