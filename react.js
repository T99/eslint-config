/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:19 AM -- December 20th, 2022.
 * Project: @t99/eslint-core
 */

module.exports = {
	
	overrides: [{
		
		files: "**/*.+(jsx|tsx)",
		
		plugins: [
			
			// eslint-plugin-react Plugin
			// https://github.com/jsx-eslint/eslint-plugin-react
			"react",
			
			// eslint-plugin-react-hooks Plugin
			// https://github.com/facebook/react
			"react-hooks",
		
		],
		
		parserOptions: {
			
			ecmaFeatures: {
				
				jsx: true,
				
			},
			
		},
		
		rules: {
			
			// eslint-plugin-react Plugin
			// https://github.com/jsx-eslint/eslint-plugin-react
			"react/boolean-prop-naming": ["error", {
				propTypeNames: ["bool"],
				rule: "^(is|has|can|should|will)[A-Z]([A-Za-z0-9]?)+",
				message: "Boolean property {{ propName }} does not match " +
					"pattern: {{ pattern }}",
				validateNested: true,
			}],
			"react/button-has-type": ["error", {
				button: true,
				submit: true,
				reset: true,
			}],
			"react/default-props-match-prop-types": ["error", {
				allowRequiredDefaults: false,
			}],
			"react/destructuring-assignment": ["error", "always", {
				ignoreClassFields: false,
				destructureInSignature: "always",
			}],
			"react/display-name": ["error", {
				ignoreTranspilerName: false,
			}],
			"react/forbid-component-props": "off",
			"react/forbid-dom-props": "off",
			"react/forbid-elements": "off",
			"react/forbid-foreign-prop-types": "off",
			"react/forbid-prop-types": "off",
			"react/function-component-definition": ["error", {
				namedComponents: "function-declaration",
				unnamedComponents: "arrow-function",
			}],
			"react/hook-use-state": ["error"],
			"react/iframe-missing-sandbox": "error",
			"react/jsx-boolean-value": ["error", "never"],
			"react/jsx-child-element-spacing": "error",
			"react/jsx-closing-bracket-location": ["error", {
				nonEmpty: "after-props",
				selfClosing: "after-props",
			}],
			"react/jsx-closing-tag-location": "error",
			"react/jsx-curly-brace-presence": ["error", {
				props: "never",
				children: "never",
				propElementValues: "always",
			}],
			"react/jsx-curly-newline": ["error", {
				multiline: "require",
				singleline: "forbid",
			}],
			"react/jsx-curly-spacing": ["error", {
				when: "never",
				children: true,
				allowMultiline: true,
				attributes: {
					objectLiterals: "never",
				},
				spacing: {
					objectLiterals: "never",
				},
			}],
			"react/jsx-equals-spacing": ["error", "never"],
			"react/jsx-filename-extension": ["error", {
				allow: "as-needed",
				extensions: [".jsx", ".tsx"],
			}],
			"react/jsx-first-prop-new-line": ["error", "never"],
			"react/jsx-fragments": ["error", "syntax"],
			"react/jsx-handler-names": ["error", {
				eventHandlerPrefix: "handle",
				eventHandlerPropPrefix: "on",
				checkLocalVariables: true,
				checkInlineFunction: true,
			}],
			"react/jsx-indent": ["error", "tab", {
				checkAttributes: true,
				indentLogicalExpressions: true,
			}],
			"react/jsx-indent-props": ["error", {
				indentMode: "first",
				ignoreTernaryOperator: false,
			}],
			"react/jsx-key": ["error", {
				checkFragmentShorthand: true,
				checkKeyMustBeforeSpread: true,
				warnOnDuplicates: true,
			}],
			"react/jsx-max-depth": ["error", {
				max: 3,
			}],
			"react/jsx-max-props-per-line": ["error", {
				maximum: 1,
				when: "multiline",
			}],
			"react/jsx-newline": ["error", {
				prevent: true,
				allowMultilines: true,
			}],
			"react/jsx-no-bind": ["error", {
				ignoreDOMComponents: false,
				ignoreRefs: false,
				allowArrowFunctions: true,
				allowFunctions: false,
				allowBind: false,
			}],
			"react/jsx-no-comment-textnodes": "error",
			"react/jsx-no-constructed-context-values": "error",
			"react/jsx-no-duplicate-props": ["error", {
				ignoreCase: false,
			}],
			"react/jsx-no-leaked-render": ["error", {
				validStrategies: [],
			}],
			"react/jsx-no-literals": "off",
			"react/jsx-no-script-url": ["error", []],
			"react/jsx-no-target-blank": ["error", {
				allowReferrer: false,
				enforceDynamicLinks: "always",
				warnOnSpreadAttributes: true,
				links: false,
				forms: false,
			}],
			"react/jsx-no-undef": ["error", {
				allowGlobals: false,
			}],
			"react/jsx-no-useless-fragment": ["error", {
				allowExpressions: true,
			}],
			"react/jsx-one-expression-per-line": ["error", {
				allow: "none",
			}],
			"react/jsx-pascal-case": ["error", {
				allowAllCaps: true,
				allowLeadingUnderscore: false,
				allowNamespace: false,
			}],
			"react/jsx-props-no-multi-spaces": "error",
			"react/jsx-props-no-spreading": ["error", {
				html: "enforce",
				custom: "enforce",
				explicitSpread: "enforce",
				exceptions: [],
			}],
			"react/jsx-sort-props": "off",
			"react/jsx-tag-spacing": ["error", {
				closingSlash: "never",
				beforeSelfClosing: "always",
				afterOpening: "never",
				beforeClosing: "never",
			}],
			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",
			"react/jsx-wrap-multilines": ["error", {
				declaration: "parens-new-line",
				assignment: "parens-new-line",
				"return": "parens-new-line",
				arrow: "parens-new-line",
				condition: "parens-new-line",
				logical: "parens-new-line",
				prop: "parens-new-line",
			}],
			"react/no-access-state-in-setstate": "error",
			"react/no-adjacent-inline-elements": "off",
			"react/no-array-index-key": "error",
			"react/no-arrow-function-lifecycle": "error",
			"react/no-children-prop": ["error", {
				allowFunctions: true,
			}],
			"react/no-danger": "error",
			"react/no-danger-with-children": "error",
			"react/no-deprecated": "error",
			"react/no-did-mount-set-state": ["error", "disallow-in-func"],
			"react/no-did-update-set-state": ["error", "disallow-in-func"],
			"react/no-direct-mutation-state": "error",
			"react/no-find-dom-node": "error",
			"react/no-invalid-html-attribute": "error",
			"react/no-is-mounted": "error",
			"react/no-multi-comp": ["error", {
				ignoreStateless: false,
			}],
			"react/no-namespace": "error",
			"react/no-object-type-as-default-prop": "error",
			"react/no-redundant-should-component-update": "error",
			"react/no-render-return-value": "error",
			"react/no-set-state": "off",
			"react/no-string-refs": ["error", {
				noTemplateLiterals: true,
			}],
			"react/no-this-in-sfc": "error",
			"react/no-typos": "error",
			"react/no-unescaped-entities": "error",
			"react/no-unknown-property": ["error", {
				ignore: ["css"],
			}],
			"react/no-unsafe": ["error", {
				checkAliases: true,
			}],
			"react/no-unstable-nested-components": ["error", {
				allowAsProps: false,
				customValidators: [],
			}],
			"react/no-unused-class-component-methods": "error",
			"react/no-unused-prop-types": ["error", {
				ignore: [],
				customValidators: [],
				skipShapeProps: false,
			}],
			"react/no-unused-state": "error",
			"react/no-will-update-set-state": ["error", "disallow-in-func"],
			"react/prefer-es6-class": ["error", "always"],
			"react/prefer-exact-props": "error",
			"react/prefer-read-only-props": "error",
			"react/prefer-stateless-function": ["error", {
				ignorePureComponents: false,
			}],
			"react/prop-types": ["error", {
				ignore: [],
				customValidators: [],
				skipUndeclared: false,
			}],
			"react/react-in-jsx-scope": "off",
			"react/require-default-props": ["error", {
				forbidDefaultForRequired: true,
				classes: "defaultProps",
				functions: "defaultArguments",
				ignoreFunctionalComponents: false,
			}],
			"react/require-optimization": "off",
			"react/require-render-return": "error",
			"react/self-closing-comp": ["error", {
				component: true,
				html: true,
			}],
			"react/sort-comp": ["error", {
				order: [
					"static-methods",
					"lifecycle",
					"/^on.+$",
					"everything-else",
					"render",
				],
				groups: {},
			}],
			"react/sort-default-props": "off",
			"react/sort-prop-types": "off",
			"react/state-in-constructor": ["error", "always"],
			"react/static-property-placement": [
				"error",
				"property assignment",
				{
					childContextTypes: "property assignment",
					contextTypes: "property assignment",
					contextType: "property assignment",
					defaultProps: "property assignment",
					displayName: "property assignment",
					propTypes: "property assignment",
				},
			],
			"react/style-prop-object": ["error", {
				allow: [],
			}],
			"react/void-dom-elements-no-children": "error",
			
			// eslint-plugin-react-hooks Plugin
			// https://github.com/facebook/react
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
			
		},
		
		settings: {
			
			react: {
				
				version: "detect",
				
			},
			
		},
		
	}],
	
};
