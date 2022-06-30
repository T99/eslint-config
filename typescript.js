/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:36 PM -- June 28, 2022.
 * Project: @t99/eslint-core
 */

module.exports = {
	
	overrides: [{
		
		files: "**/*.+(ts|tsx)",
		
		parser: "@typescript-eslint/parser",
		
		plugins: [
			
			"@typescript-eslint",
			
		],
		
		rules: {
			
			// @typescript-eslint 'Supported' Rules
			// https://typescript-eslint.io/rules/#supported-rules
			"@typescript-eslint/adjacent-overload-signatures": "error",
			"@typescript-eslint/array-type": ["error", {
				"default": "array-simple",
				readonly: "array-simple",
			}],
			"@typescript-eslint/await-thenable": "error",
			"@typescript-eslint/ban-ts-comment": ["error", {
				minimumDescriptionLength: 1,
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
						fixWith: "object",
					},
					Function: {
						message: "Avoid using the `Function` type. Prefer a " +
							"specific function type, like `() => void`.",
					},
					Boolean: {
						message: "Avoid using the `Boolean` type. Did you " +
							"mean `boolean`?",
						fixWith: "boolean",
					},
					Number: {
						message: "Avoid using the `Number` type. Did you " +
							"mean `number`?",
						fixWith: "number",
					},
					BigInt: {
						message: "Avoid using the `BigInt` type. Did you " +
							"mean `bigint`?",
						fixWith: "bigint",
					},
					String: {
						message: "Avoid using the `String` type. Did you " +
							"mean `string`?",
						fixWith: "string",
					},
					Symbol: {
						message: "Avoid using the `Symbol` type. Did you " +
							"mean `symbol`?",
						fixWith: "symbol",
					},
				},
			}],
			"@typescript-eslint/class-literal-property-style":
				["error", "fields"],
			"@typescript-eslint/consistent-generic-constructors":
				["error", "type-annotation"],
			"@typescript-eslint/consistent-indexed-object-style":
				["error", "record"],
			"@typescript-eslint/consistent-type-assertions": ["error", {
				assertionStyle: "as",
				objectLiteralTypeAssertions: "never",
			}],
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/consistent-type-exports": ["error", {
				fixMixedExportsWithInlineTypeSpecifier: false,
			}],
			"@typescript-eslint/consistent-type-imports": ["error", {
				prefer: "type-imports",
				disallowTypeAnnotations: true,
			}],
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
			"@typescript-eslint/member-ordering": ["error", {
				"default": [
					
					// Index signature
					"signature",
					
					// Fields
					"private-static-field",
					"private-abstract-field",
					"private-instance-field",
					"private-field",
					"protected-static-field",
					"protected-abstract-field",
					"protected-instance-field",
					"protected-field",
					"public-static-field",
					"public-instance-field",
					"public-abstract-field",
					"public-field",
					"static-field",
					"abstract-field",
					"instance-field",
					"field",
					
					// Constructors
					"private-constructor",
					"protected-constructor",
					"public-constructor",
					"constructor",
					
					// Methods
					"private-static-method",
					"protected-static-method",
					"public-static-method",
					"static-method",
					"private-abstract-method",
					"protected-abstract-method",
					"public-abstract-method",
					"abstract-method",
					"private-instance-method",
					"protected-instance-method",
					"public-instance-method",
					"instance-method",
					
				],
			}],
			"@typescript-eslint/method-signature-style": ["error", "method"],
			"@typescript-eslint/naming-convention": ["error", ...[
				{
					selector: [
						"default",
						"variable",
						"function",
						"parameter",
						"typeProperty",
						"parameterProperty",
						"classMethod",
						"objectLiteralMethod",
						"typeMethod",
						"accessor",
					],
					modifiers: [],
					format: ["camelCase"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: [
						"class",
						"interface",
						"typeAlias",
						"enum",
					],
					modifiers: [],
					format: ["PascalCase"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: [
						"enumMember",
						"typeParameter",
					],
					modifiers: [],
					format: ["UPPER_CASE"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: ["classProperty"],
					modifiers: ["const"],
					format: ["UPPER_CASE"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: ["variable"],
					modifiers: ["const"],
					format: ["camelCase", "UPPER_CASE"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: [
						"objectLiteralProperty",
					],
					modifiers: [],
					format: null,
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
			]],
			"@typescript-eslint/no-base-to-string": ["error", {
				ignoredTypeNames: [],
			}],
			"@typescript-eslint/no-confusing-non-null-assertion": "error",
			"@typescript-eslint/no-confusing-void-expression": ["error", {
				ignoreArrowShorthand: true,
				ignoreVoidOperator: false,
			}],
			"@typescript-eslint/no-duplicate-enum-values": "error",
			"@typescript-eslint/no-dynamic-delete": "error",
			"@typescript-eslint/no-empty-interface": ["error", {
				allowSingleExtends: false,
			}],
			"@typescript-eslint/no-explicit-any": ["error", {
				fixToUnknown: true,
				ignoreRestArgs: false,
			}],
			"@typescript-eslint/no-extra-non-null-assertion": "error",
			"@typescript-eslint/no-extraneous-class": ["error", {
				allowConstructorOnly: false,
				allowEmpty: false,
				allowStaticOnly: false,
				allowWithDecorator: true,
			}],
			"@typescript-eslint/no-floating-promises": ["error", {
				ignoreVoid: false,
				ignoreIIFE: false,
			}],
			"@typescript-eslint/no-for-in-array": "error",
			"@typescript-eslint/no-inferrable-types": "off",
			"@typescript-eslint/no-invalid-void-type": ["error", {
				allowInGenericTypeArguments: true,
				allowAsThisParameter: false,
			}],
			"@typescript-eslint/no-meaningless-void-operator": ["error", {
				checkNever: true,
			}],
			"@typescript-eslint/no-misused-new": "error",
			"@typescript-eslint/no-misused-promises": ["error", {
				checksConditionals: true,
				checksVoidReturn: true,
				checksSpreads: true,
			}],
			"@typescript-eslint/no-namespace": ["error", {
				allowDeclarations: false,
				allowDefinitionFiles: true,
			}],
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing":
				"error",
			"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
			"@typescript-eslint/no-non-null-assertion": "error",
			"@typescript-eslint/no-redundant-type-constituents": "error",
			"@typescript-eslint/no-require-imports": "error",
			"@typescript-eslint/no-this-alias": ["error", {
				allowDestructuring: false,
				allowedNames: ["that"],
			}],
			"@typescript-eslint/no-type-alias": "off",
			"@typescript-eslint/no-unnecessary-boolean-literal-compare":
				["error", {
					allowComparingNullableBooleansToTrue: true,
					allowComparingNullableBooleansToFalse: true,
				}],
			"@typescript-eslint/no-unnecessary-condition": ["error", {
				allowConstantLoopConditions: true,
			}],
			"@typescript-eslint/no-unnecessary-qualifier": "error",
			"@typescript-eslint/no-unnecessary-type-arguments": "off",
			"@typescript-eslint/no-unnecessary-type-assertion": "off",
			"@typescript-eslint/no-unnecessary-type-constraint": "error",
			"@typescript-eslint/no-unsafe-argument": "error",
			"@typescript-eslint/no-unsafe-assignment": "error",
			"@typescript-eslint/no-unsafe-call": "error",
			"@typescript-eslint/no-unsafe-member-access": "error",
			"@typescript-eslint/no-unsafe-return": "error",
			"@typescript-eslint/no-useless-empty-export": "error",
			"@typescript-eslint/no-var-requires": "error",
			"@typescript-eslint/non-nullable-type-assertion-style": "off",
			"@typescript-eslint/parameter-properties": "error",
			"@typescript-eslint/prefer-as-const": "error",
			"@typescript-eslint/prefer-enum-initializers": "error",
			"@typescript-eslint/prefer-for-of": "error",
			"@typescript-eslint/prefer-function-type": "error",
			"@typescript-eslint/prefer-includes": "error",
			"@typescript-eslint/prefer-literal-enum-member": "off",
			"@typescript-eslint/prefer-namespace-keyword": "error",
			"@typescript-eslint/prefer-nullish-coalescing": ["error", {
				ignoreConditionalTests: false,
				ignoreMixedLogicalExpressions: false,
			}],
			"@typescript-eslint/prefer-optional-chain": "error",
			"@typescript-eslint/prefer-readonly": ["error", {
				onlyInlineLambdas: false,
			}],
			"@typescript-eslint/prefer-readonly-parameter-types": ["error", {
				checkParameterProperties: true,
				ignoreInferredTypes: false,
				treatMethodsAsReadonly: true,
			}],
			"@typescript-eslint/prefer-reduce-type-parameter": "error",
			"@typescript-eslint/prefer-regexp-exec": "error",
			"@typescript-eslint/prefer-return-this-type": "error",
			"@typescript-eslint/prefer-string-starts-ends-with": "error",
			"@typescript-eslint/prefer-ts-expect-error": "error",
			"@typescript-eslint/promise-function-async": ["error", {
				allowAny: true,
				allowedPromiseNames: [],
				checkArrowFunctions: true,
				checkFunctionDeclarations: true,
				checkFunctionExpressions: true,
				checkMethodDeclarations: true,
			}],
			"@typescript-eslint/require-array-sort-compare": ["error", {
				ignoreStringArrays: false,
			}],
			"@typescript-eslint/restrict-plus-operands": ["error", {
				checkCompoundAssignments: true,
				allowAny: false,
			}],
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/sort-type-union-intersection-members": "off",
			"@typescript-eslint/strict-boolean-expressions": ["error", {
				allowString: false,
				allowNumber: false,
				allowNullableObject: false,
				allowNullableBoolean: false,
				allowNullableString: false,
				allowNullableNumber: false,
				allowAny: false,
			}],
			"@typescript-eslint/switch-exhaustiveness-check": "error",
			"@typescript-eslint/triple-slash-reference": ["error", {
				path: "always",
				types: "prefer-import",
				lib: "always",
			}],
			"@typescript-eslint/type-annotation-spacing": ["error", {
				before: false,
				after: true,
				overrides: {
					arrow: {
						before: true,
						after: true,
					},
					colon: {
						before: false,
						after: true,
					},
				},
			}],
			"@typescript-eslint/typedef": ["error", {
				arrayDestructuring: true,
				arrowParameter: true,
				memberVariableDeclaration: true,
				objectDestructuring: true,
				parameter: true,
				propertyDeclaration: true,
				variableDeclaration: true,
				variableDeclarationIgnoreFunction: true,
			}],
			"@typescript-eslint/unbound-method": ["error", {
				ignoreStatic: true,
			}],
			"@typescript-eslint/unified-signatures": ["error", {
				ignoreDifferentlyNamedParameters: true,
			}],
			
			// @typescript-eslint 'Extension' Rules
			// https://typescript-eslint.io/rules/#supported-rules
			"@typescript-eslint/brace-style": ["error", "1tbs", {
				allowSingleLine: false,
			}],
			"@typescript-eslint/comma-dangle": ["error", {
				arrays: "always-multiline",
				objects: "always-multiline",
				imports: "always-multiline",
				exports: "always-multiline",
				functions: "always-multiline",
				enums: "always-multiline",
				generics: "always-multiline",
				tuples: "always-multiline",
			}],
			"@typescript-eslint/comma-spacing": ["error", {
				before: false,
				after: true,
			}],
			"@typescript-eslint/default-param-last": "error",
			"@typescript-eslint/dot-notation": ["error", {
				allowKeywords: false,
				allowPattern: undefined,
				allowPrivateClassPropertyAccess: false,
				allowProtectedClassPropertyAccess: false,
				allowIndexSignaturePropertyAccess: true,
			}],
			"@typescript-eslint/func-call-spacing": ["error", "never"],
			"@typescript-eslint/indent": ["error", "tab", {
				ArrayExpression: "first",
				ObjectExpression: "first",
			}],
			"@typescript-eslint/init-declarations": "off",
			"@typescript-eslint/keyword-spacing": ["error", {
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
			"@typescript-eslint/lines-between-class-members":
				["error", "always", {
					exceptAfterSingleLine: false,
					exceptAfterOverload: true,
				}],
			"@typescript-eslint/no-array-constructor": "off",
			"@typescript-eslint/no-dupe-class-members": "error",
			
			// TODO - TYPESCRIPT RULES CONFIGURED UP TO THIS LINE
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
			"@typescript-eslint/quotes": ["error", "double"],
			"@typescript-eslint/require-await": "off",
			"@typescript-eslint/return-await": "off",
			"@typescript-eslint/semi": ["error", "always"],
			"@typescript-eslint/space-before-blocks": "off",
			"@typescript-eslint/space-before-function-paren": "off",
			"@typescript-eslint/space-infix-ops": "off",
			
			// ESLint Core rules that need to be disabled to prevent collisions
			"brace-style": "off",
			"comma-dangle": "off",
			"comma-spacing": "off",
			"default-param-last": "off",
			"dot-notation": "off",
			"func-call-spacing": "off",
			indent: "off",
			"init-declarations": "off",
			"keyword-spacing": "off",
			"lines-between-class-members": "off",
			"no-array-constructor": "off",
			"no-dupe-class-members": "off",
			
		},
		
	}],
	
};
