module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:i18next/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"react",
		"i18next",
		"react-hooks"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"@typescript-eslint/no-unused-vars": "warn",
		"react/react-in-jsx-scope": "off",
		"react/no-deprecated": "off",
		"react/display-name": "warn",
		"linebreak-style": "off",
		"i18next/no-literal-string": ["warn", { markupOnly: true, ignoreAttribute: ["to", "fallback", "data-testid"] }],
		"no-dupe-keys": "off",
		"react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
    	"react-hooks/exhaustive-deps": "error" // Проверяем зависимости эффекта
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	overrides: [
		{
			files: ["**/src/**/*.test.{ts,tsx}"],
			rules: {
				"i18next/no-literal-string": "off"
			}
		}
	]
}
