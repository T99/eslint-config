module.exports = {
	"rules": {
		
		// ESLint Core - Possible Problems
		// https://eslint.org/docs/latest/rules/#possible-problems
		"array-callback-return": ["error", {
			"allowImplicit": false,
			"checkForEach": true
		}],
		"constructor-super": "error",
		"for-direction": "error",
		"getter-return": ["error", {
			"allowImplicit": false
		}],
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": ["error", "always"],
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": ["error", {
			"checkLoops": true
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
			"includeExports": true
		}],
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-ex-assign": "error",
		"no-fallthrough": ["error", {
			"commentPattern": "falls?\\s?through"
		}],
		"no-func-assign": "error",
		"no-import-assign": "error",
		"no-inner-declarations": ["error", "both"],
		"no-invalid-regexp": ["error", {
			"allowConstructorFlags": ["d", "g", "i", "m", "s", "u", "y"]
		}],
		"no-irregular-whitespace": ["error", {
			"skipStrings": true,
			"skipComments": false,
			"skipRegExps": true,
			"skipTemplates": true
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
			"typeof": false
		}],
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable": "error",
		"no-unreachable-loop": ["error", {
			"ignore": []
		}],
		"no-unsafe-finally": "error",
		"no-unsafe-negation": ["error", {
			"enforceForOrderingRelations": true
		}],
		"no-unsafe-optional-chaining": ["error", {
			"disallowArithmeticOperators": true
		}],
		"no-unused-private-class-members": "error",
		"no-unused-vars": ["error", {
			"vars": "all",
			"varsIgnorePattern": undefined,
			"args": "all",
			"ignoreRestSiblings": false,
			"argsIgnorePattern": undefined,
			"destructuredArrayIgnorePattern": "^_",
			"caughtErrors": "all",
			"caughtErrorsIgnorePattern": "^(_|ignored?)"
			
		}],
		"no-use-before-define": ["error", {
			"functions": true,
			"classes": true,
			"variables": true,
			"allowNamedExports": false
		}],
		"no-useless-backreference": "error",
		"require-atomic-updates": ["error", {
			"allowProperties": false
		}],
		"use-isnan": ["error", {
			"enforceForSwitchCase": true,
			"enforceForIndexOf": true
		}],
		"valid-typeof": ["error", {
			"requireStringLiterals": false
		}],
		
		// ESLint Core - Suggestions
		// https://eslint.org/docs/latest/rules/#suggestions
		"accessor-pairs": "off",
		"arrow-body-style": "off",
		"block-scoped-var": "off",
		"camelcase": "off",
		"capitalized-comments": "off",
		"class-methods-use-this": "off",
		"complexity": "off",
		"consistent-return": "off",
		"consistent-this": "off",
		"curly": "off",
		"default-case": "off",
		"default-case-last": "off",
		"default-param-last": "off",
		"dot-notation": "off",
		"eqeqeq": "off",
		"func-name-matching": "off",
		"func-names": "off",
		"func-style": "off",
		"grouped-accessor-pairs": "off",
		"guard-for-in": "off",
		"id-denylist": "off",
		"id-length": "off",
		"id-match": "off",
		"init-declarations": "off",
		"max-classes-per-file": "off",
		"max-depth": "off",
		"max-lines": "off",
		"max-lines-per-function": "off",
		"max-nested-callbacks": "off",
		"max-params": "off",
		"max-statements": "off",
		"multiline-comment-style": "off",
		"new-cap": "off",
		"no-alert": "off",
		"no-array-constructor": "off",
		"no-bitwise": "off",
		"no-caller": "off",
		"no-case-declarations": "off",
		"no-confusing-arrow": "off",
		"no-console": "off",
		"no-continue": "off",
		"no-delete-var": "off",
		"no-div-regex": "off",
		"no-else-return": "off",
		"no-empty": "off",
		"no-empty-function": "off",
		"no-eq-null": "off",
		"no-eval": "off",
		"no-extend-native": "off",
		"no-extra-bind": "off",
		"no-extra-boolean-cast": "off",
		"no-extra-label": "off",
		"no-extra-semi": "off",
		"no-floating-decimal": "off",
		"no-global-assign": "off",
		"no-implicit-coercion": "off",
		"no-implicit-globals": "off",
		"no-implied-eval": "off",
		"no-inline-comments": "off",
		"no-invalid-this": "off",
		"no-iterator": "off",
		"no-label-var": "off",
		"no-labels": "off",
		"no-lone-blocks": "off",
		"no-lonely-if": "off",
		"no-loop-func": "off",
		"no-magic-numbers": "off",
		"no-mixed-operators": "off",
		"no-multi-assign": "off",
		"no-multi-str": "off",
		"no-negated-condition": "off",
		"no-nested-ternary": "off",
		"no-new": "off",
		"no-new-func": "off",
		"no-new-object": "off",
		"no-new-wrappers": "off",
		"no-nonoctal-decimal-escape": "off",
		"no-octal": "off",
		"no-octal-escape": "off",
		"no-param-reassign": "off",
		"no-plusplus": "off",
		"no-proto": "off",
		"no-redeclare": "off",
		"no-regex-spaces": "off",
		"no-restricted-exports": "off",
		"no-restricted-globals": "off",
		"no-restricted-imports": "off",
		"no-restricted-properties": "off",
		"no-restricted-syntax": "off",
		"no-return-assign": "off",
		"no-return-await": "off",
		"no-script-url": "off",
		"no-sequences": "off",
		"no-shadow": "off",
		"no-shadow-restricted-names": "off",
		"no-ternary": "off",
		"no-throw-literal": "off",
		"no-undef-init": "off",
		"no-undefined": "off",
		"no-underscore-dangle": "off",
		"no-unneeded-ternary": "off",
		"no-unused-expressions": "off",
		"no-unused-labels": "off",
		"no-useless-call": "off",
		"no-useless-catch": "off",
		"no-useless-computed-key": "off",
		"no-useless-concat": "off",
		"no-useless-constructor": "off",
		"no-useless-escape": "off",
		"no-useless-rename": "off",
		"no-useless-return": "off",
		"no-var": "off",
		"no-void": "off",
		"no-warning-comments": "off",
		"no-with": "off",
		"object-shorthand": "off",
		"one-var": "off",
		"one-var-declaration-per-line": "off",
		"operator-assignment": "off",
		"prefer-arrow-callback": "off",
		"prefer-const": "off",
		"prefer-destructuring": "off",
		"prefer-exponentiation-operator": "off",
		"prefer-named-capture-group": "off",
		"prefer-numeric-literals": "off",
		"prefer-object-has-own": "off",
		"prefer-object-spread": "off",
		"prefer-promise-reject-errors": "off",
		"prefer-regex-literals": "off",
		"prefer-rest-params": "off",
		"prefer-spread": "off",
		"prefer-template": "off",
		"quote-props": "off",
		"radix": "off",
		"require-await": "off",
		"require-unicode-regexp": "off",
		"require-yield": "off",
		"sort-imports": "off",
		"sort-keys": "off",
		"sort-vars": "off",
		"spaced-comment": "off",
		"strict": "off",
		"symbol-description": "off",
		"vars-on-top": "off",
		"yoda": "off",
		
		// ESLint Core - Layout & Formatting
		// https://eslint.org/docs/latest/rules/#layout-and-formatting
		"array-bracket-newline": ["error", {
			"multiline": true,
			"minItems": null
		}],
		"array-bracket-spacing": ["error", "never", {
			"singleValue": false,
			"objectsInArrays": false,
			"arraysInArrays": false
		}],
		"array-element-newline": ["error", "consistent"],
		"arrow-parens": ["error", "always"],
		"arrow-spacing": ["error", {
			"before": true,
			"after": true
		}],
		"block-spacing": ["error", "always"],
		"brace-style": ["error", "1tbs", {
			"allowSingleLine": false
		}],
		"comma-dangle": ["error", {
			"arrays": "always-multiline",
			"objects": "never",
			"imports": "never",
			"exports": "never",
			"functions": "never"
		}],
		"comma-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"comma-style": ["error", "last"],
		"computed-property-spacing": ["error", "never", {
			"enforceForClassMembers": true
		}],
		"dot-location": ["error", "property"],
		"eol-last": ["error", "always"],
		"func-call-spacing": ["error", "never", {
			"allowNewlines": false
		}],
		"function-call-argument-newline": "off",
		"function-paren-newline": "off",
		"generator-star-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"implicit-arrow-linebreak": ["error", "beside"],
		"indent": ["error", "tab"], // TODO - This will need to be revisited.
		"jsx-quotes": ["error", "prefer-double"],
		"key-spacing": ["error", {
			"beforeColon": false,
			"afterColon": true,
			"align": undefined,
			"singleLine": {
				"mode": "strict",
			},
			"multiLine": {
				"mode": "minimum",
			}
		}],
		"keyword-spacing": ["error", {
			"before": true,
			"after": true,
			"overrides": {
				"break": {
					"after": false
				},
				"continue": {
					"after": false
				},
				"super": {
					"after": false
				},
				"this": {
					"after": false
				}
			}
		}],
		"line-comment-position": "off",
		"linebreak-style": ["error", "unix"],
		"lines-around-comment": ["error", {
			"beforeBlockComment": true,
			"afterBlockComment": false,
			"beforeLineComment": true,
			"afterLineComment": false,
			"allowBlockStart": false,
			"allowBlockEnd": false,
			"allowClassStart": false,
			"allowClassEnd": false,
			"allowObjectStart": false,
			"allowObjectEnd": false,
			"allowArrayStart": false,
			"allowArrayEnd": false,
			"applyDefaultIgnorePatterns": false,
			"ignorePattern": undefined
		}],
		"lines-between-class-members": ["error", "always", {
			"exceptAfterSingleLine": false
		}],
		"max-len": ["error", {
			"code": 80,
			"tabWidth": 4,
			"comments": 80,
			"ignorePattern": undefined,
			"ignoreComments": false,
			"ignoreTrailingComments": false,
			"ignoreUrls": false,
			"ignoreStrings": false,
			"ignoreTemplateLiterals": false,
			"ignoreRegExpLiterals": false
		}],
		"max-statements-per-line": ["error", {
			"max": 1
		}],
		"multiline-ternary": ["error", "always-multiline"],
		"new-parens": ["error", "always"],
		"newline-per-chained-call": "off",
		"no-extra-parens": ["error", "all", {
			"conditionalAssign": false,
			"returnAssign": false,
			"nestedBinaryExpressions": false,
			"ignoreJSX": "multi-line",
			"enforceForArrowConditionals": false,
			"enforceForSequenceExpressions": true,
			"enforceForNewInMemberExpressions": false,
			"enforceForFunctionPrototypeMethods": false
		}],
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multi-spaces": ["error", {
			"ignoreEOLComments": true
		}],
		"no-multiple-empty-lines": ["error", {
			"max": 1,
			"maxBOF": 1,
			"maxEOF": 1
		}],
		"no-tabs": ["error", {
			"allowIndentationTabs ": true
		}],
		"no-trailing-spaces": ["error", {
			"skipBlankLines": true,
			"ignoreComments": false
		}],
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": ["error", "beside"],
		"object-curly-newline": ["error", {
			"multiline": true,
			"consistent": true
		}],
		"object-curly-spacing": ["error", "always", {
			"arraysInObjects": true,
			"objectsInObjects": true,
		}],
		"object-property-newline": ["error", {
			"allowAllPropertiesOnSameLine": true
		}],
		"operator-linebreak": ["error", "after"],
		"padded-blocks": ["error", "always", {
			"blocks": "always",
			"classes": "always",
			"switches": "always",
			"allowSingleLineBlocks": true
		}],
		"padding-line-between-statements": ["error", ...[
			{
				"blankLine": "always",
				"prev": "*",
				"next": [
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
					"with"
				]
			},
			{
				"blankLine": "always",
				"prev": [
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
					"with"
				],
				"next": "*"
			},
			{
				"blankLine": "never",
				"prev": ["const", "let", "var"],
				"next": ["const", "let", "var"]
			},
			{
				"blankLine": "never",
				"prev": "export",
				"next": "export"
			},
			{
				"blankLine": "never",
				"prev": "import",
				"next": "import"
			}
		]],
		"quotes": ["error", "double", {
			"avoidEscape": false,
			"allowTemplateLiterals": true
		}],
		"rest-spread-spacing": ["error", "never"],
		"semi": ["error", "always", {
			"omitLastInOneLineBlock": false,
			"beforeStatementContinuationChars": "always"
		}],
		"semi-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"semi-style": ["error", "last"],
		"space-before-blocks": ["error", {
			"functions": "always",
			"keywords": "always",
			"classes": "always"
		}],
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never",
			"asyncArrow": "always",
		}],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": ["error", {
			"int32Hint": false
		}],
		"space-unary-ops": ["error", {
			"words": true,
			"nonwords": false,
			"overrides": {}
		}],
		"switch-colon-spacing": ["error", {
			"after": true,
			"before": false
		}],
		"template-curly-spacing": ["error", "never"],
		"template-tag-spacing": ["error", "never"],
		"unicode-bom": "off",
		"wrap-iife": ["error", "inside", {
			"functionPrototypeMethods": true
		}],
		"wrap-regex": "off",
		"yield-star-spacing": ["error", {
			"before": false,
			"after": true
		}]
		
	}
	
}
