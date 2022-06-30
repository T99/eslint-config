/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:52 PM -- June 28, 2022.
 * Project: @t99/eslint-core
 */

module.exports = {
	
	root: true,
	
	env: {
		
		node: true,
		
	},
	
	parserOptions: {
		
		ecmaVersion: "latest",
		
		project: `${__dirname}/code-style-examples/typescript/tsconfig.json`,
		
	},
	
	"extends": [
		
		"./all.js",
		
	],
	
};
