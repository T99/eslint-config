/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 4:36 PM -- June 28, 2022.
 * Project: @t99/eslint-core
 */

const eslintCore = require("./eslint-core");

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
					"protected-static-field",
					"public-static-field",
					"static-field",
					
					"private-abstract-field",
					"protected-abstract-field",
					"public-abstract-field",
					"abstract-field",
					
					"private-instance-field",
					"protected-instance-field",
					"public-instance-field",
					"instance-field",
					
					"private-field",
					"protected-field",
					"public-field",
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
					selector: ["classProperty", "classMethod"],
					modifiers: ["const", "readonly"],
					format: ["UPPER_CASE"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: ["variable"],
					modifiers: ["const", "readonly"],
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
			"@typescript-eslint/prefer-readonly-parameter-types": "off",
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
			"@typescript-eslint/brace-style":
				eslintCore.rules["brace-style"],
			"@typescript-eslint/comma-dangle":
				[eslintCore.rules["comma-dangle"][0], {
					...eslintCore.rules["comma-dangle"][1],
					enums: "always-multiline",
					generics: "always-multiline",
					tuples: "always-multiline",
				}],
			"@typescript-eslint/comma-spacing":
				eslintCore.rules["comma-spacing"],
			"@typescript-eslint/default-param-last":
				eslintCore.rules["default-param-last"],
			"@typescript-eslint/dot-notation":
				[eslintCore.rules["dot-notation"][0], {
					...eslintCore.rules["dot-notation"][1],
					allowPrivateClassPropertyAccess: false,
					allowProtectedClassPropertyAccess: false,
					allowIndexSignaturePropertyAccess: true,
				}],
			"@typescript-eslint/func-call-spacing":
				eslintCore.rules["func-call-spacing"],
			"@typescript-eslint/indent":
				eslintCore.rules.indent,
			"@typescript-eslint/init-declarations":
				eslintCore.rules["init-declarations"],
			"@typescript-eslint/keyword-spacing":
				eslintCore.rules["keyword-spacing"],
			"@typescript-eslint/lines-between-class-members":
				[
					eslintCore.rules["lines-between-class-members"][0],
					eslintCore.rules["lines-between-class-members"][1],
					{
						...eslintCore.rules["lines-between-class-members"][2],
						exceptAfterOverload: true,
					},
				],
			"@typescript-eslint/no-array-constructor":
				eslintCore.rules["no-array-constructor"],
			"@typescript-eslint/no-dupe-class-members":
				eslintCore.rules["no-dupe-class-members"],
			"@typescript-eslint/no-empty-function":
				[eslintCore.rules["no-empty-function"][0], {
					...eslintCore.rules["no-empty-function"][1],
					allow: [
						...eslintCore.rules["no-empty-function"][1].allow,
						"private-constructors",
						"protected-constructors",
						"decoratedFunctions",
						"overrideMethods",
					],
				}],
			"@typescript-eslint/no-extra-parens":
				eslintCore.rules["no-extra-parens"],
			"@typescript-eslint/no-extra-semi":
				eslintCore.rules["no-extra-semi"],
			"@typescript-eslint/no-implied-eval":
				eslintCore.rules["no-implied-eval"],
			"@typescript-eslint/no-invalid-this":
				eslintCore.rules["no-invalid-this"],
			"@typescript-eslint/no-loop-func":
				eslintCore.rules["no-loop-func"],
			"@typescript-eslint/no-loss-of-precision":
				eslintCore.rules["no-loss-of-precision"],
			"@typescript-eslint/no-magic-numbers":
				[eslintCore.rules["no-magic-numbers"][0], {
					...eslintCore.rules["no-magic-numbers"][1],
					ignoreEnums: false,
					ignoreNumericLiteralTypes: false,
					ignoreReadonlyClassProperties: false,
					ignoreTypeIndexes: false,
				}],
			"@typescript-eslint/no-redeclare":
				[eslintCore.rules["no-redeclare"][0], {
					...eslintCore.rules["no-redeclare"][1],
					ignoreDeclarationMerge: true,
				}],
			"@typescript-eslint/no-restricted-imports":
				[eslintCore.rules["no-restricted-imports"][0], {
					...eslintCore.rules["no-restricted-imports"][1],
					paths: [
						...eslintCore.rules["no-restricted-imports"][1].paths,
					],
				}],
			"@typescript-eslint/no-shadow":
				[eslintCore.rules["no-shadow"][0], {
					...eslintCore.rules["no-shadow"][1],
					ignoreTypeValueShadow: false,
					ignoreFunctionTypeParameterNameValueShadow: false,
				}],
			"@typescript-eslint/no-throw-literal":
				[eslintCore.rules["no-throw-literal"], {
					allowThrowingAny: false,
					allowThrowingUnknown: false,
				}],
			"@typescript-eslint/no-unused-expressions":
				eslintCore.rules["no-unused-expressions"],
			"@typescript-eslint/no-unused-vars":
				eslintCore.rules["no-unused-vars"],
			"@typescript-eslint/no-use-before-define":
				[eslintCore.rules["no-use-before-define"][0], {
				
					// TODO - It would be nice to just destructure the source
					//   object and only get rid of 'allowNamedExports', because
					//   that is the only field causing issues.
					functions:
						eslintCore.rules["no-use-before-define"][1].functions,
					classes:
						eslintCore.rules["no-use-before-define"][1].classes,
					variables:
						eslintCore.rules["no-use-before-define"][1].variables,
					enums: true,
					typedefs: true,
					ignoreTypeReferences: false,
				}],
			"@typescript-eslint/no-useless-constructor": "off",
			"@typescript-eslint/object-curly-spacing":
				eslintCore.rules["object-curly-spacing"],
			"@typescript-eslint/padding-line-between-statements":
				[eslintCore.rules["padding-line-between-statements"][0], ...[
					...eslintCore.rules["padding-line-between-statements"]
						.slice(1),
				]],
			"@typescript-eslint/quotes":
				eslintCore.rules.quotes,
			"@typescript-eslint/require-await":
				eslintCore.rules["require-await"],
			"@typescript-eslint/return-await": ["error", "in-try-catch"],
			"@typescript-eslint/semi":
				eslintCore.rules.semi,
			"@typescript-eslint/space-before-blocks":
				eslintCore.rules["space-before-blocks"],
			"@typescript-eslint/space-before-function-paren":
				eslintCore.rules["space-before-function-paren"],
			"@typescript-eslint/space-infix-ops":
				eslintCore.rules["space-infix-ops"],
			
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
			"no-empty-functions": "off",
			"no-extra-parens": "off",
			"no-extra-semi": "off",
			"no-implied-eval": "off",
			"no-invalid-this": "off",
			"no-loop-func": "off",
			"no-loss-of-precision": "off",
			"no-magic-numbers": "off",
			"no-redeclare": "off",
			"no-restricted-imports": "off",
			"no-shadow": "off",
			"no-throw-literal": "off",
			"no-unused-expressions": "off",
			"no-unused-vars": "off",
			"no-use-before-define": "off",
			"no-useless-constructor": "off",
			"object-curly-spacing": "off",
			"padding-line-between-statements": "off",
			quotes: "off",
			"require-await": "off",
			"no-return-await": "off",
			semi: "off",
			"space-before-blocks": "off",
			"space-before-function-paren": "off",
			"space-infix-ops": "off",
			
		},
		
	}],
	
};
