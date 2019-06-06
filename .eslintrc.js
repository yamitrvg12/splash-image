module.exports = {
	"parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules":{
		//"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
		//"react/prop-types": 0,
		"react/jsx-indent": [2, "tab"],
		//"react/jsx-indent-props": [2, "tab"],
		//"comma-dangle": ["error", "never"],
		"indent": [2, "tab"],
		"no-tabs": 0,
		"react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
    }
	// "parser": "babel-eslint",
	// "env": {
	// 	"es6": true,
	// 	"node": true
	// },
	// "extends": "airbnb",
	// "parserOptions": {
	// 	"ecmaVersion": 2015
	// },
	// "rules": {
	// 	"indent": [
	// 		"error",
	// 		"tab"
	// 	],
	// 	"no-tabs": 2,
	// 	"linebreak-style": [
	// 		"error",
	// 		"unix"
	// 	],
	// 	"quotes": [
	// 		"error",
	// 		"single"
	// 	],
	// 	"semi": [
	// 		"error",
	// 		"always"
	// 	],
	// 	"react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
	// }
};