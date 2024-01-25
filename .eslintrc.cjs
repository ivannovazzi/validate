/* eslint-env node */
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports", "eslint-plugin-import"],
  root: true,
  "rules": {
		"@typescript-eslint/no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"warn",
			{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
		],
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc"
        },
        "groups": ["type", "builtin", "external", "internal", "parent", ["sibling", "index"]],
        "newlines-between": "always",
        "pathGroups": [],
        "pathGroupsExcludedImportTypes": []
      }
    ],
	},
};