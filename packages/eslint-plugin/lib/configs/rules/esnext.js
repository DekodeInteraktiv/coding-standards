// https://eslint.org/docs/rules/#ecmascript-6

module.exports = {
	// Require braces around arrow function bodies
	// https://eslint.org/docs/rules/arrow-body-style
	'arrow-body-style': [ 'error', 'as-needed', {
		requireReturnForObjectLiteral: false,
	} ],

	// Require parens in arrow function arguments
	// https://eslint.org/docs/rules/arrow-parens
	'arrow-parens': [ 'error', 'always' ],

	// Require space before/after arrow function's arrow
	// https://eslint.org/docs/rules/arrow-spacing
	'arrow-spacing': [ 'error', { before: true, after: true } ],

	// Require `super()` calls in constructors
	// https://eslint.org/docs/rules/constructor-super
	'constructor-super': 'error',

	// Enforce consistent spacing around * operators in generator functions
	// https://eslint.org/docs/rules/generator-star-spacing
	'generator-star-spacing': [ 'error', {
		before: false,
		after: true,
	} ],

	// Disallow reassigning class members
	// https://eslint.org/docs/rules/no-class-assign
	'no-class-assign': 'error',

	// Disallow reassigning `const` variables
	// https://eslint.org/docs/rules/no-const-assign
	'no-const-assign': 'error',

	// Disallow duplicate class members
	// https://eslint.org/docs/rules/no-dupe-class-members
	'no-dupe-class-members': 'error',

	// Disallow duplicate module imports
	// https://eslint.org/docs/rules/no-duplicate-imports
	// ** Replaced by `import/no-duplicates` **
	'no-duplicate-imports': 'off',

	// Disallow new operators with the Symbol object
	// https://eslint.org/docs/rules/no-new-symbol
	'no-new-symbol': 'error',

	// Disallow this/super before calling super() in constructors
	// https://eslint.org/docs/rules/no-this-before-super
	'no-this-before-super': 'error',

	// Disallow unnecessary computed property keys in object literals
	// https://eslint.org/docs/rules/no-useless-computed-key
	'no-useless-computed-key': 'error',

	// Disallow unnecessary constructors
	// https://eslint.org/docs/rules/no-useless-constructor
	'no-useless-constructor': 'error',

	// Disallow renaming import, export, and destructured assignments to the same name
	// https://eslint.org/docs/rules/no-useless-rename
	'no-useless-rename': [ 'error', {
		ignoreDestructuring: false,
		ignoreImport: false,
		ignoreExport: false,
	} ],

	// Require `let` or `const` instead of `var`
	// https://eslint.org/docs/rules/no-var
	'no-var': 'error',

	// Require or disallow method and property shorthand syntax for object literals
	// https://eslint.org/docs/rules/object-shorthand
	'object-shorthand': [ 'error', 'always', {
		ignoreConstructors: false,
		avoidQuotes: true,
	} ],

	// Require using arrow functions for callbacks
	// https://eslint.org/docs/rules/prefer-arrow-callback
	'prefer-arrow-callback': [ 'error', {
		allowNamedFunctions: false,
		allowUnboundThis: true,
	} ],

	// Require `const` declarations for variables that are never reassigned after declared
	// https://eslint.org/docs/rules/prefer-const
	'prefer-const': [ 'error', {
		destructuring: 'any',
		ignoreReadBeforeAssign: true,
	} ],

	// Require destructuring from arrays and/or objects
	// https://eslint.org/docs/rules/prefer-destructuring
	'prefer-destructuring': [ 'error', {
		VariableDeclarator: {
			array: false,
			object: true,
		},
		AssignmentExpression: {
			array: true,
			object: true,
		},
	}, {
		enforceForRenamedProperties: false,
	} ],

	// Require rest parameters instead of arguments
	// https://eslint.org/docs/rules/prefer-rest-params
	'prefer-rest-params': 'error',

	// Require spread operators instead of .apply()
	// https://eslint.org/docs/rules/prefer-spread
	'prefer-spread': 'error',

	// Require template literals instead of string concatenation
	// https://eslint.org/docs/rules/prefer-template
	'prefer-template': 'error',

	// Enforce spacing between rest and spread operators and their expressions
	// https://eslint.org/docs/rules/rest-spread-spacing
	'rest-spread-spacing': [ 'error', 'never' ],

	// Require generator functions to contain yield
	// https://eslint.org/docs/rules/require-yield
	'require-yield': 'error',

	// Require or disallow spacing around embedded expressions of template strings
	// https://eslint.org/docs/rules/template-curly-spacing
	'template-curly-spacing': [ 'error', 'always' ],
};
