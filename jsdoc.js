/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:52 PM -- June 28, 2022.
 * Project: @t99/eslint-core
 */

module.exports = {
	
	plugins: [
		
		// eslint-plugin-jsdoc Plugin
		// https://github.com/gajus/eslint-plugin-jsdoc
		"jsdoc",
		
	],
	
	rules: {
		
		// eslint-plugin-jsdoc Rules
		// https://github.com/gajus/eslint-plugin-jsdoc
		"jsdoc/check-access": "error",
		"jsdoc/check-alignment": "error",
		"jsdoc/check-examples": "off",
		"jsdoc/check-indentation": "off",
		"jsdoc/check-line-alignment": "off",
		"jsdoc/check-param-names": ["error", {
			checkRestProperty: true,
			enableFixer: true,
			allowExtraTrailingParamDocs: false,
			checkDestructured: true,
			useDefaultObjectProperties: true,
			disableExtraPropertyReporting: false,
		}],
		"jsdoc/check-property-names": ["error", {
			enableFixer: true,
		}],
		"jsdoc/check-syntax": "error",
		"jsdoc/check-tag-names": "error",
		"jsdoc/check-types": "error",
		"jsdoc/check-values": "error",
		"jsdoc/empty-tags": "error",
		"jsdoc/implements-on-classes": "error",
		"jsdoc/match-description": "off",
		"jsdoc/match-name": "off",
		"jsdoc/multiline-blocks": ["error", {
			noZeroLineText: true,
			noFinalLineText: true,
			noSingleLineBlocks: true,
			
		}],
		"jsdoc/newline-after-description": ["error", "always"],
		"jsdoc/no-bad-blocks": ["error", {
			preventAllMultiAsteriskBlocks: true,
		}],
		"jsdoc/no-defaults": "off",
		"jsdoc/no-missing-syntax": "off",
		"jsdoc/no-multi-asterisks": ["error", {
			allowWhitespace: true,
			preventAtMiddleLines: true,
			preventAtEnd: true,
		}],
		"jsdoc/no-restricted-syntax": "off",
		"jsdoc/no-types": "off",
		"jsdoc/no-undefined-types": "error",
		"jsdoc/require-asterisk-prefix": ["error", "always"],
		"jsdoc/require-description-complete-sentence": "off",
		"jsdoc/require-description": ["error", {
			descriptionStyle: "body",
			checkConstructors: true,
			checkGetters: true,
			checkSetters: true,
		}],
		"jsdoc/require-example": "off",
		"jsdoc/require-file-overview": "off",
		"jsdoc/require-hyphen-before-param-description": ["error", "never"],
		"jsdoc/require-jsdoc": "off",
		"jsdoc/require-param-description": "error",
		"jsdoc/require-param-name": "error",
		"jsdoc/require-param-type": "error",
		"jsdoc/require-param": ["error", {
			enableFixer: true,
			enableRootFixer: true,
			enableRestElementFixer: true,
			checkRestProperty: true,
			autoIncrementBase: 0,
			unnamedRootBase: ["arg"],
			checkTypesPattern: "/^(?:object|array)$/iu",
			checkConstructors: true,
			checkGetters: true,
			checkSetters: true,
			checkDestructured: true,
			checkDestructuredRoots: true,
			useDefaultObjectProperties: false,
		}],
		"jsdoc/require-property": "off",
		"jsdoc/require-property-description": "off",
		"jsdoc/require-property-name": "off",
		"jsdoc/require-property-type": "off",
		"jsdoc/require-returns-check": ["error", {
			exemptGenerators: false,
			exemptAsync: false,
			reportMissingReturnForUndefinedTypes: true,
		}],
		"jsdoc/require-returns-description": "error",
		"jsdoc/require-returns-type": "error",
		"jsdoc/require-returns": ["error", {
			checkConstructors: false,
			checkGetters: true,
			forceReturnsWithAsync: true,
		}],
		"jsdoc/require-throws": "error",
		"jsdoc/require-yields": ["error", {
			forceRequireYields: true,
			withGeneratorTag: true,
			
		}],
		"jsdoc/require-yields-check": "error",
		"jsdoc/sort-tags": ["error", {
			tagSequence: [
				"summary",
				"interface",
				"template",
				"name",
				"kind",
				"type",
				"alias",
				"callback",
				"func",
				"function",
				"method",
				"class",
				"constructor",
				"namespace",
				"implements",
				"requires",
				"desc",
				"description",
				"copyright",
				"license",
				"const",
				"constant",
				"final",
				"global",
				"readonly",
				"abstract",
				"inheritdoc",
				"override",
				"param",
				"returns",
				"async",
				"generator",
				"default",
				"extends",
				"throws",
				"yields",
				"see",
				"example",
				"author",
				"version",
				"variation",
				"since",
				"deprecated",
				"todo",
			],
		}],
		"jsdoc/tag-lines": "off",
		"jsdoc/valid-types": "off",
		
	},
	
};
