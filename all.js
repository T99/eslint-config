/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:52 PM -- June 28, 2022.
 * Project: @t99/eslint-core
 */

module.exports = {
	
	// Indicates additional configuration options with which to parse files.
	parserOptions: {
		
		// Use the latest ECMAScript version.
		ecmaVersion: "latest",
		
		// Tell ESLint that we are using modules (the other option is 'script').
		sourceType: "module",
		
		// Tell ESLint that reserved words cannot be used as identifiers.
		allowReserved: false,
		
		// Indicate which extra ECMAScript features we would like to use.
		ecmaFeatures: {
			
			// Disables the use of globally-scoped 'return' statements.
			globalReturn: false,
			
			// Whether or not to implicitly enable global 'strict' mode.
			impliedStrict: true,
			
			// Enable the use of JSX syntax.
			jsx: true,
			
		},
		
	},
	
	// An array of ESLint configurations that are being extended by this config.
	"extends": [
		
		// This package's core set of ESLint rules.
		"./eslint-core.js",
		
		// Rules surrounding JSDocs (provided by `eslint-plugin-jsdoc`).
		"./jsdoc.js",
		
		// Rules that enforce usage of arrow functions over traditional
		// functions.
		"./prefer-arrow.js",
		
	],
	
};
