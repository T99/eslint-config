/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:36 PM -- June 28, 2022.
 * Project: @t99/eslint-core
 */

module.exports = {
	
	overrides: [{
		
		files: "**/*.+(ts|tsx)",
		
		parser: "@typescript-eslint/parser",
		
		parserOptions: {
			
			project: "./tsconfig.json",
			
		},
		
		plugins: [
			
			"@typescript-eslint",
			
		],
		
		rules: {
			
			// @typescript-eslint 'Supported' Rules
			// https://github.com/typescript-eslint/typescript-eslint/tree/main/
			//   packages/eslint-plugin/docs/rules#supported-rules
			"@typescript-eslint/adjacent-overload-signatures": "error",
			"@typescript-eslint/array-type": ["error", {
				"default": "array-simple",
				readonly: "array-simple",
			}],
			"@typescript-eslint/await-thenable": "error",
			"@typescript-eslint/ban-ts-comment": ["error", {
				minimumDescriptionLength: "1",
				"ts-expect-error": "allow-with-description",
				"ts-ignore": "allow-with-description",
				"ts-nocheck": "allow-with-description",
				"ts-check": "allow-with-description",
			}],
			"@typescript-eslint/ban-tslint-comment": "error",
			"@typescript-eslint/ban-types": ["error", {
				types: {
					Object: {
						message: "Avoid using the `Object` type. Did you " +
							"mean `object`?",
					},
					Function: {
						message: "Avoid using the `Function` type. Prefer a " +
							"specific function type, like `() => void`.",
					},
					Boolean: {
						message: "Avoid using the `Boolean` type. Did you " +
							"mean `boolean`?",
					},
					Number: {
						message: "Avoid using the `Number` type. Did you " +
							"mean `number`?",
					},
					BigInt: {
						message: "Avoid using the `BigInt` type. Did you " +
							"mean `bigint`?",
					},
					String: {
						message: "Avoid using the `String` type. Did you " +
							"mean `string`?",
					},
					Symbol: {
						message: "Avoid using the `Symbol` type. Did you " +
							"mean `symbol`?",
					},
				},
			}],
			
			"@typescript-eslint/class-literal-property-style": "off",
			"@typescript-eslint/consistent-generic-constructors": "off",
			"@typescript-eslint/consistent-indexed-object-style": "off",
			"@typescript-eslint/consistent-type-assertions": "error",
			"@typescript-eslint/consistent-type-definitions": "off",
			"@typescript-eslint/consistent-type-exports": "off",
			"@typescript-eslint/consistent-type-imports": "off",
			"@typescript-eslint/explicit-function-return-type": ["error", {
				allowExpressions: false,
				allowTypedFunctionExpressions: false,
				allowHigherOrderFunctions: false,
				allowDirectConstAssertionInArrowFunctions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true,
			}],
			"@typescript-eslint/explicit-member-accessibility": ["error", {
				accessibility: "explicit",
				overrides: {
					accessors: "explicit",
					constructors: "explicit",
					parameterProperties: "explicit",
				},
			}],
			"@typescript-eslint/explicit-module-boundary-types": ["error", {
				allowArgumentsExplicitlyTypedAsAny: true,
				allowDirectConstAssertionInArrowFunctions: true,
				allowHigherOrderFunctions: false,
				allowTypedFunctionExpressions: false,
			}],
			"@typescript-eslint/member-delimiter-style": ["error", {
				multiline: {
					delimiter: "semi",
					requireLast: true,
				},
				singleline: {
					delimiter: "semi",
					requireLast: false,
				},
			}],
			"@typescript-eslint/member-ordering": "off",
			"@typescript-eslint/method-signature-style": "off",
			"@typescript-eslint/naming-convention": "error",
			"@typescript-eslint/no-base-to-string": "off",
			"@typescript-eslint/no-confusing-non-null-assertion": "off",
			"@typescript-eslint/no-confusing-void-expression": "off",
			"@typescript-eslint/no-duplicate-enum-values": "off",
			"@typescript-eslint/no-dynamic-delete": "off",
			"@typescript-eslint/no-empty-interface": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-extra-non-null-assertion": "off",
			"@typescript-eslint/no-extraneous-class": "off",
			"@typescript-eslint/no-floating-promises": "off",
			"@typescript-eslint/no-for-in-array": "off",
			"@typescript-eslint/no-inferrable-types": "off",
			"@typescript-eslint/no-invalid-void-type": "off",
			"@typescript-eslint/no-meaningless-void-operator": "off",
			"@typescript-eslint/no-misused-new": "error",
			"@typescript-eslint/no-misused-promises": "off",
			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "off",
			"@typescript-eslint/no-non-null-asserted-optional-chain": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-redundant-type-constituents": "off",
			"@typescript-eslint/no-require-imports": "off",
			"@typescript-eslint/no-this-alias": "off",
			"@typescript-eslint/no-type-alias": "off",
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
			"@typescript-eslint/no-unnecessary-condition": "off",
			"@typescript-eslint/no-unnecessary-qualifier": "off",
			"@typescript-eslint/no-unnecessary-type-arguments": "off",
			"@typescript-eslint/no-unnecessary-type-assertion": "off",
			"@typescript-eslint/no-unnecessary-type-constraint": "off",
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unsafe-return": "off",
			"@typescript-eslint/no-useless-empty-export": "off",
			"@typescript-eslint/no-var-requires": "error",
			"@typescript-eslint/non-nullable-type-assertion-style": "off",
			"@typescript-eslint/parameter-properties": "off",
			"@typescript-eslint/prefer-as-const": "off",
			"@typescript-eslint/prefer-enum-initializers": "off",
			"@typescript-eslint/prefer-for-of": "error",
			"@typescript-eslint/prefer-function-type": "error",
			"@typescript-eslint/prefer-includes": "off",
			"@typescript-eslint/prefer-literal-enum-member": "off",
			"@typescript-eslint/prefer-namespace-keyword": "error",
			"@typescript-eslint/prefer-nullish-coalescing": "off",
			"@typescript-eslint/prefer-optional-chain": "off",
			"@typescript-eslint/prefer-readonly": "off",
			"@typescript-eslint/prefer-readonly-parameter-types": "off",
			"@typescript-eslint/prefer-reduce-type-parameter": "off",
			"@typescript-eslint/prefer-regexp-exec": "off",
			"@typescript-eslint/prefer-return-this-type": "off",
			"@typescript-eslint/prefer-string-starts-ends-with": "off",
			"@typescript-eslint/prefer-ts-expect-error": "off",
			"@typescript-eslint/promise-function-async": "off",
			"@typescript-eslint/require-array-sort-compare": "off",
			"@typescript-eslint/restrict-plus-operands": "off",
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/sort-type-union-intersection-members": "off",
			"@typescript-eslint/strict-boolean-expressions": "off",
			"@typescript-eslint/switch-exhaustiveness-check": "off",
			"@typescript-eslint/triple-slash-reference": ["error", {
				path: "always",
				types: "prefer-import",
				lib: "always",
			}],
			"@typescript-eslint/type-annotation-spacing": "error",
			"@typescript-eslint/typedef": ["error", {
				parameter: true,
				arrowParameter: true,
				propertyDeclaration: true,
				variableDeclaration: true,
				memberVariableDeclaration: true,
				objectDestructuring: true,
				arrayDestructuring: true,
			}],
			"@typescript-eslint/unbound-method": "off",
			"@typescript-eslint/unified-signatures": "off",
			
			// @typescript-eslint 'Extension' Rules
			// https://github.com/typescript-eslint/typescript-eslint/tree/main/
			//   packages/eslint-plugin/docs/rules#extension-rules
			"@typescript-eslint/brace-style": ["error",
				"1tbs",
				{
					allowSingleLine: "true",
				}],
			"@typescript-eslint/comma-dangle": ["error", "never"],
			"@typescript-eslint/comma-spacing": ["error", {
				before: false,
				after: true,
			}],
			"@typescript-eslint/default-param-last": "off",
			"@typescript-eslint/dot-notation": "off",
			"@typescript-eslint/func-call-spacing": "off",
			"@typescript-eslint/indent": ["error",
				"tab",
				{
					ArrayExpression: "first",
					ObjectExpression: "first",
				}],
			"@typescript-eslint/init-declarations": "off",
			"@typescript-eslint/keyword-spacing": "off",
			"@typescript-eslint/lines-between-class-members": "off",
			"@typescript-eslint/no-array-constructor": "off",
			"@typescript-eslint/no-dupe-class-members": "off",
			"@typescript-eslint/no-empty-function": "error",
			"@typescript-eslint/no-extra-parens": "off",
			"@typescript-eslint/no-extra-semi": "off",
			"@typescript-eslint/no-implied-eval": "off",
			"@typescript-eslint/no-invalid-this": "off",
			"@typescript-eslint/no-loop-func": "off",
			"@typescript-eslint/no-loss-of-precision": "off",
			"@typescript-eslint/no-magic-numbers": "off",
			"@typescript-eslint/no-redeclare": "off",
			"@typescript-eslint/no-restricted-imports": "off",
			"@typescript-eslint/no-shadow": ["error", {
				hoist: "all",
			}],
			"@typescript-eslint/no-throw-literal": "off",
			"@typescript-eslint/no-unused-expressions": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/no-useless-constructor": "off",
			"@typescript-eslint/object-curly-spacing": "off",
			"@typescript-eslint/padding-line-between-statements": "off",
			"@typescript-eslint/quotes": ["error",
				"double"],
			"@typescript-eslint/require-await": "off",
			"@typescript-eslint/return-await": "off",
			"@typescript-eslint/semi": ["error",
				"always"],
			"@typescript-eslint/space-before-blocks": "off",
			"@typescript-eslint/space-before-function-paren": "off",
			"@typescript-eslint/space-infix-ops": "off",
			
			// @typescript-eslint Unfiled Rules
			"@typescript-eslint/no-parameter-properties": "error",
			
		},
		
	}],
	
};
