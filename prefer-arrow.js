/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:46 PM -- June 28, 2022.
 * Project: @t99/eslint-core
 */

module.exports = {
	
	plugins: [
		
		// eslint-plugin-prefer-arrow Plugin
		// https://github.com/TristonJ/eslint-plugin-prefer-arrow
		"prefer-arrow",
		
	],
	
	rules: {
		
		// eslint-plugin-prefer-arrow Rules
		// https://github.com/TristonJ/eslint-plugin-prefer-arrow
		"prefer-arrow/prefer-arrow-functions": ["error", {
			disallowPrototype: true,
			singleReturnOnly: false,
			classPropertiesAllowed: false,
			allowStandaloneDeclarations: true,
		}],
		
	},
	
};
