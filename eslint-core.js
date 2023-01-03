/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 3:52 PM -- June 28, 2022.
 * Project: @t99/eslint-core
 */

/**
 * The max depth to which blocks are allowed to be nested.
 * 
 * @type {number}
 */
const MAX_DEPTH = 4;

/**
 * The max depth to which callbacks are allowed to be nested.
 * 
 * @type {number}
 */
const MAX_CALLBACKS = 3;

module.exports = {
	
	rules: {
		
		// ESLint Core - Possible Problems
		// https://eslint.org/docs/latest/rules/#possible-problems
		"array-callback-return": ["error", {
			allowImplicit: false,
			checkForEach: true,
		}],
		"constructor-super": "error",
		"for-direction": "error",
		"getter-return": ["error", {
			allowImplicit: false,
		}],
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": ["error", "always"],
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": ["error", {
			checkLoops: true,
		}],
		"no-constructor-return": "error",
		"no-control-regex": "off",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": ["error", {
			includeExports: true,
		}],
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-ex-assign": "error",
		"no-fallthrough": ["error", {
			commentPattern: "falls?\\s?through",
		}],
		"no-func-assign": "error",
		"no-import-assign": "error",
		"no-inner-declarations": ["error", "both"],
		"no-invalid-regexp": ["error", {
			allowConstructorFlags: ["d", "g", "i", "m", "s", "u", "y"],
		}],
		"no-irregular-whitespace": ["error", {
			skipStrings: true,
			skipComments: false,
			skipRegExps: true,
			skipTemplates: true,
		}],
		"no-loss-of-precision": "error",
		"no-misleading-character-class": "error",
		"no-new-symbol": "error",
		"no-obj-calls": "error",
		"no-promise-executor-return": "error",
		"no-prototype-builtins": "off",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-setter-return": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "warn",
		"no-this-before-super": "error",
		"no-undef": ["error", {
			"typeof": false,
		}],
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable": "error",
		"no-unreachable-loop": ["error", {
			ignore: [],
		}],
		"no-unsafe-finally": "error",
		"no-unsafe-negation": ["error", {
			enforceForOrderingRelations: true,
		}],
		"no-unsafe-optional-chaining": ["error", {
			disallowArithmeticOperators: true,
		}],
		"no-unused-private-class-members": "error",
		"no-unused-vars": ["error", {
			vars: "all",
			varsIgnorePattern: undefined,
			args: "all",
			ignoreRestSiblings: false,
			argsIgnorePattern: undefined,
			destructuredArrayIgnorePattern: "^_",
			caughtErrors: "all",
			caughtErrorsIgnorePattern: "^(_|ignored?)",
			
		}],
		"no-use-before-define": ["error", {
			functions: true,
			classes: true,
			variables: true,
			allowNamedExports: false,
		}],
		"no-useless-backreference": "error",
		"require-atomic-updates": ["error", {
			allowProperties: false,
		}],
		"use-isnan": ["error", {
			enforceForSwitchCase: true,
			enforceForIndexOf: true,
		}],
		"valid-typeof": ["error", {
			requireStringLiterals: false,
		}],
		
		// ESLint Core - Suggestions
		// https://eslint.org/docs/latest/rules/#suggestions
		"accessor-pairs": ["error", {
			setWithoutGet: true,
			getWithoutSet: false,
			enforceForClassMembers: true,
		}],
		"arrow-body-style": "off",
		"block-scoped-var": "error",
		camelcase: ["error", {
			properties: "always",
			ignoreDestructuring: true,
			ignoreImports: true,
			ignoreGlobals: true,
			allow: [],
		}],
		"capitalized-comments": "off",
		"class-methods-use-this": ["error", {
			exceptMethods: [],
			enforceForClassFields: true,
		}],
		complexity: ["error", {
			max: 20,
		}],
		"consistent-return": ["error", {
			treatUndefinedAsUnspecified: false,
		}],
		"consistent-this": ["error", "that"],
		curly: ["error", "multi-line"],
		"default-case": "off",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": ["error", {
			allowKeywords: false,
			allowPattern: undefined,
		}],
		eqeqeq: ["error", "always"],
		"func-name-matching": ["error", "always", {
			considerPropertyDescriptor: true,
			includeCommonJSModuleExports: false,
		}],
		"func-names": ["error", "always", {
			generators: "always",
		}],
		"func-style": ["error", "declaration", {
			allowArrowFunctions: true,
		}],
		"grouped-accessor-pairs": ["error", "getBeforeSet"],
		"guard-for-in": "error",
		"id-denylist": "off",
		"id-length": ["error", {
			min: 3,
			max: Infinity,
			properties: "always",
			exceptions: [
				"i",
				"j",
				"k",
				"id",
			],
		}],
		"id-match": "off",
		"init-declarations": "off",
		"max-classes-per-file": ["error", 1],
		"max-depth": ["error", MAX_DEPTH],
		"max-lines": "off",
		"max-lines-per-function": "off",
		"max-nested-callbacks": ["error", MAX_CALLBACKS],
		"max-params": "off",
		"max-statements": "off",
		"multiline-comment-style": "off",
		"new-cap": ["error", {
			newIsCap: true,
			capIsNew: true,
			newIsCapExceptions: [],
			properties: true,
		}],
		"no-alert": "off",
		"no-array-constructor": "error",
		"no-bitwise": "off",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-confusing-arrow": "off",
		"no-console": "off",
		"no-continue": "off",
		"no-delete-var": "error",
		"no-div-regex": "off",
		"no-else-return": "off",
		"no-empty": ["error", {
			allowEmptyCatch: false,
		}],
		"no-empty-function": ["error", {
			allow: [],
		}],
		"no-eq-null": "error",
		"no-eval": ["error", {
			allowIndirect: false,
		}],
		"no-extend-native": ["error", {
			exceptions: [],
		}],
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "off",
		"no-extra-label": "error",
		"no-extra-semi": "error",
		"no-floating-decimal": "error",
		"no-global-assign": "off",
		"no-implicit-coercion": ["error", {
			"boolean": true,
			number: true,
			string: true,
			disallowTemplateShorthand: false,
			allow: [],
		}],
		"no-implicit-globals": ["error", {
			lexicalBindings: true,
		}],
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-invalid-this": ["error", {
			capIsConstructor: true,
		}],
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "off",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": ["error", {
			ignore: [-1, 0, 1, 2],
			ignoreArrayIndexes: false,
			ignoreDefaultValues: false,
			enforceConst: true,
			detectObjects: false,
		}],
		"no-mixed-operators": ["error", {
			groups: [],
			allowSamePrecedence: false,
		}],
		"no-multi-assign": ["error", {
			ignoreNonDeclaration: false,
		}],
		"no-multi-str": "error",
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": ["error", {
			props: true,
			ignorePropertyModificationsFor: [],
			ignorePropertyModificationsForRegex: undefined,
		}],
		"no-plusplus": "off",
		"no-proto": "error",
		"no-redeclare": ["error", {
			builtinGlobals: true,
		}],
		"no-regex-spaces": "error",
		"no-restricted-exports": "off",
		"no-restricted-globals": "off",
		"no-restricted-imports": ["error", {
			paths: [
				{
					name: "fs",
					message: "Please use fs/promises instead.",
				},
			],
		}],
		"no-restricted-properties": "off",
		"no-restricted-syntax": ["error", ...[
			{
				selector: "ForInStatement",
				message: "Use index iteration or for-of statements instead " +
					"of for-in.",
			},
		]],
		"no-return-assign": ["error", "always"],
		"no-return-await": "off",
		"no-script-url": "error",
		"no-sequences": ["error", {
			allowInParentheses: false,
		}],
		"no-shadow": ["error", {
			builtinGlobals: true,
			hoist: "all",
			allow: [],
			ignoreOnInitialization: false,
		}],
		"no-shadow-restricted-names": "error",
		"no-ternary": "error",
		"no-throw-literal": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-underscore-dangle": ["error", {
			allow: [],
			allowAfterThis: false,
			allowAfterSuper: false,
			allowAfterThisConstructor: false,
			enforceInMethodNames: false,
			enforceInClassFields: false,
			allowFunctionParams: false,
		}],
		"no-unneeded-ternary": ["error", {
			defaultAssignment: false,
		}],
		"no-unused-expressions": ["error", {
			allowShortCircuit: false,
			allowTernary: false,
			allowTaggedTemplates: true,
			enforceForJSX: true,
		}],
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": ["error", {
			enforceForClassMembers: true,
		}],
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": ["error", {
			ignoreImport: false,
			ignoreExport: false,
			ignoreDestructuring: false,
		}],
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": ["error", {
			allowAsStatement: false,
		}],
		"no-warning-comments": ["off", {
			terms: [
				"fix",
				"fixme",
				"fix me",
				"fix-me",
				"todo",
				"to do",
				"to-do",
				"doc",
				"docme",
				"doc me",
				"doc-me",
			],
			location: "start",
		}],
		"no-with": "error",
		"object-shorthand": ["error", "always", {
			avoidQuotes: true,
			ignoreConstructors: false,
			avoidExplicitReturnArrows: false,
		}],
		"one-var": ["error", {
			"var": "never",
			let: "never",
			"const": "never",
			separateRequires: true,
		}],
		"one-var-declaration-per-line": ["error", "initializations"],
		"operator-assignment": ["error", "always"],
		"prefer-arrow-callback": ["error", {
			allowNamedFunctions: false,
			allowUnboundThis: false,
		}],
		"prefer-const": ["error", {
			destructuring: "all",
			ignoreReadBeforeAssign: false,
		}],
		"prefer-destructuring": "off",
		"prefer-exponentiation-operator": "error",
		"prefer-named-capture-group": "error",
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": "error",
		"prefer-object-spread": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": ["error", {
			disallowRedundantWrapping: true,
		}],
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"quote-props": ["error", "as-needed", {
			keywords: true,
			unnecessary: true,
			numbers: true,
		}],
		radix: ["error", "always"],
		"require-await": "error",
		"require-unicode-regexp": "error",
		"require-yield": "error",
		"sort-imports": "off",
		"sort-keys": "off",
		"sort-vars": "off",
		"spaced-comment": ["error", "always", {
			exceptions: ["*", "-", "+", "="],
			line: {
				markers: ["/"],
			},
			block: {
				markers: ["*"],
				balanced: true,
			},
		}],
		strict: "off",
		"symbol-description": "error",
		"vars-on-top": "error",
		yoda: ["error", "never", {
			exceptRange: true,
			onlyEquality: false,
		}],
		
		// ESLint Core - Layout & Formatting
		// https://eslint.org/docs/latest/rules/#layout-and-formatting
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never", {
			singleValue: false,
			objectsInArrays: false,
			arraysInArrays: false,
		}],
		"array-element-newline": ["error", "consistent"],
		"arrow-parens": ["error", "always"],
		"arrow-spacing": ["error", {
			before: true,
			after: true,
		}],
		"block-spacing": ["error", "always"],
		"brace-style": ["error", "1tbs", {
			allowSingleLine: false,
		}],
		"comma-dangle": ["error", {
			arrays: "always-multiline",
			objects: "always-multiline",
			imports: "always-multiline",
			exports: "always-multiline",
			functions: "never",
		}],
		"comma-spacing": ["error", {
			before: false,
			after: true,
		}],
		"comma-style": ["error", "last"],
		"computed-property-spacing": ["error", "never", {
			enforceForClassMembers: true,
		}],
		"dot-location": ["error", "property"],
		"eol-last": ["error", "always"],
		"func-call-spacing": ["error", "never"],
		"function-call-argument-newline": "off",
		"function-paren-newline": "off",
		"generator-star-spacing": ["error", {
			before: false,
			after: true,
		}],
		"implicit-arrow-linebreak": "off",
		indent: ["error", "tab", {
			SwitchCase: 1,
		}],
		"jsx-quotes": ["error", "prefer-double"],
		"key-spacing": ["error", {
			singleLine: {
				beforeColon: false,
				afterColon: true,
				mode: "strict",
			},
			multiLine: {
				beforeColon: false,
				afterColon: true,
				mode: "minimum",
			},
		}],
		"keyword-spacing": ["error", {
			before: true,
			after: true,
			overrides: {
				"break": {
					after: false,
				},
				"continue": {
					after: false,
				},
				"super": {
					after: false,
				},
				"this": {
					after: false,
				},
			},
		}],
		"line-comment-position": "off",
		"linebreak-style": ["off", "unix"],
		"lines-around-comment": ["error", {
			beforeBlockComment: true,
			afterBlockComment: false,
			beforeLineComment: true,
			afterLineComment: false,
			allowBlockStart: false,
			allowBlockEnd: false,
			allowClassStart: false,
			allowClassEnd: false,
			allowObjectStart: false,
			allowObjectEnd: false,
			allowArrayStart: false,
			allowArrayEnd: false,
			applyDefaultIgnorePatterns: false,
			ignorePattern: undefined,
		}],
		"lines-between-class-members": ["error", "always", {
			exceptAfterSingleLine: false,
		}],
		"max-len": ["error", {
			code: 80,
			tabWidth: 4,
			comments: 80,
			ignorePattern: undefined,
			ignoreComments: false,
			ignoreTrailingComments: false,
			ignoreUrls: false,
			ignoreStrings: false,
			ignoreTemplateLiterals: false,
			ignoreRegExpLiterals: false,
		}],
		"max-statements-per-line": ["error", {
			max: 1,
		}],
		"multiline-ternary": ["error", "always-multiline"],
		"new-parens": ["error", "always"],
		"newline-per-chained-call": "off",
		"no-extra-parens": ["error", "all", {
			conditionalAssign: false,
			returnAssign: false,
			nestedBinaryExpressions: false,
			ignoreJSX: "multi-line",
			enforceForArrowConditionals: false,
			enforceForSequenceExpressions: true,
			enforceForNewInMemberExpressions: false,
			enforceForFunctionPrototypeMethods: false,
		}],
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multi-spaces": ["error", {
			ignoreEOLComments: true,
		}],
		"no-multiple-empty-lines": ["error", {
			max: 1,
			maxBOF: 1,
			maxEOF: 1,
		}],
		"no-tabs": ["error", {
			allowIndentationTabs: true,
		}],
		"no-trailing-spaces": ["error", {
			skipBlankLines: true,
			ignoreComments: true,
		}],
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": ["error", "beside"],
		"object-curly-newline": ["error", {
			multiline: true,
			consistent: true,
		}],
		"object-curly-spacing": ["error", "always", {
			arraysInObjects: true,
			objectsInObjects: true,
		}],
		"object-property-newline": ["error", {
			allowAllPropertiesOnSameLine: true,
		}],
		"operator-linebreak": ["error", "after"],
		"padded-blocks": ["error", "always", {
			allowSingleLineBlocks: true,
		}],
		"padding-line-between-statements": ["error", ...[
			{
				blankLine: "always",
				prev: "*",
				next: [
					"block",
					"block-like",
					"case",
					"class",
					"const",
					"continue",
					"default",
					"do",
					"export",
					"for",
					"function",
					"if",
					"import",
					"let",
					"return",
					"switch",
					"throw",
					"var",
					"while",
					"with",
				],
			},
			{
				blankLine: "always",
				prev: [
					"block",
					"block-like",
					"break",
					"class",
					"const",
					"continue",
					"do",
					"export",
					"for",
					"function",
					"if",
					"import",
					"let",
					"return",
					"switch",
					"throw",
					"var",
					"while",
					"with",
				],
				next: "*",
			},
			{
				blankLine: "any",
				prev: ["const", "let", "var"],
				next: ["const", "let", "var"],
			},
			{
				blankLine: "never",
				prev: "import",
				next: "import",
			},
		]],
		quotes: ["error", "double", {
			avoidEscape: false,
			allowTemplateLiterals: true,
		}],
		"rest-spread-spacing": ["error", "never"],
		semi: ["error", "always", {
			omitLastInOneLineBlock: false,
		}],
		"semi-spacing": ["error", {
			before: false,
			after: true,
		}],
		"semi-style": ["error", "last"],
		"space-before-blocks": ["error", {
			functions: "always",
			keywords: "always",
			classes: "always",
		}],
		"space-before-function-paren": ["error", {
			anonymous: "always",
			named: "never",
			asyncArrow: "always",
		}],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": ["error", {
			int32Hint: false,
		}],
		"space-unary-ops": ["error", {
			words: true,
			nonwords: false,
			overrides: {},
		}],
		"switch-colon-spacing": ["error", {
			after: true,
			before: false,
		}],
		"template-curly-spacing": ["error", "never"],
		"template-tag-spacing": ["error", "never"],
		"unicode-bom": "off",
		"wrap-iife": ["error", "inside", {
			functionPrototypeMethods: true,
		}],
		"wrap-regex": "off",
		"yield-star-spacing": ["error", {
			before: false,
			after: true,
		}],
		
	},
	
};
