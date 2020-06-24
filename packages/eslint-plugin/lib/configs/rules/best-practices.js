// https://eslint.org/docs/rules/#best-practices

module.exports = {
	// Enforce `return` statements in callbacks of array methods
	// https://eslint.org/docs/rules/array-callback-return
	'array-callback-return': [ 'error', {
		allowImplicit: true,
	} ],

	// Enforce the use of variables within the scope they are defined
	// https://eslint.org/docs/rules/block-scoped-var
	'block-scoped-var': 'error',

	// Require return statements to either always or never specify values
	// https://eslint.org/docs/rules/consistent-return
	'consistent-return': 'error',

	// Enforce a maximum cyclomatic complexity allowed in a program
	// https://eslint.org/docs/rules/complexity
	complexity: 'off',

	// Enforce consistent brace style for all control statements
	// https://eslint.org/docs/rules/curly
	curly: 'error',

	// Require default cases in switch statements
	// https://eslint.org/docs/rules/default-case
	'default-case': [ 'error', {
		commentPattern: '^no default$',
	} ],

	// Enforce consistent newlines before and after dots
	// https://eslint.org/docs/rules/dot-location
	'dot-location': [ 'error', 'property' ],

	// Enforce dot notation whenever possible
	// https://eslint.org/docs/rules/dot-notation
	'dot-notation': [ 'error', {
		allowKeywords: true,
	} ],

	// Require the use of === and !==
	// https://eslint.org/docs/rules/eqeqeq
	eqeqeq: [ 'error', 'always', {
		null: 'ignore',
	} ],

	// Disallow the use of `alert`, `confirm`, and `prompt`
	// https://eslint.org/docs/rules/no-alert
	'no-alert': 'error',

	// Disallow the use of arguments.caller or arguments.callee
	// https://eslint.org/docs/rules/no-caller
	'no-caller': 'error',

	// Disallow lexical declarations in case clauses
	// https://eslint.org/docs/rules/no-case-declarations
	'no-case-declarations': 'error',

	// Disallow else blocks after return statements in if statements
	// https://eslint.org/docs/rules/no-else-return
	'no-else-return': [ 'error', {
		allowElseIf: false,
	} ],

	// Disallow empty functions, except for standalone funcs/arrows
	// https://eslint.org/docs/rules/no-empty-function
	'no-empty-function': [ 'error', {
		allow: [
			'arrowFunctions',
			'functions',
			'methods',
		],
	} ],

	// Disallow empty destructuring patterns
	// https://eslint.org/docs/rules/no-empty-pattern
	'no-empty-pattern': 'error',

	// Disallow the use of eval()
	// https://eslint.org/docs/rules/no-eval
	'no-eval': 'error',

	// Disallow extending native types
	// https://eslint.org/docs/rules/no-extend-native
	'no-extend-native': 'error',

	// Disallow unnecessary calls to .bind()
	// https://eslint.org/docs/rules/no-extra-bind
	'no-extra-bind': 'error',

	// Disallow unnecessary labels
	// https://eslint.org/docs/rules/no-extra-label
	'no-extra-label': 'error',

	// Disallow fallthrough of `case` statements
	// https://eslint.org/docs/rules/no-fallthrough
	'no-fallthrough': 'error',

	// Disallow leading or trailing decimal points in numeric literals
	// https://eslint.org/docs/rules/no-floating-decimal
	'no-floating-decimal': 'error',

	// Disallow assignments to native objects or read-only global variables
	// https://eslint.org/docs/rules/no-global-assign
	'no-global-assign': [ 'error', {
		exceptions: [],
	} ],

	// Disallow the use of eval()-like methods
	// https://eslint.org/docs/rules/no-implied-eval
	'no-implied-eval': 'error',

	// Disallow the use of the __iterator__ property
	// https://eslint.org/docs/rules/no-iterator
	'no-iterator': 'error',

	// Disallow labeled statements
	// https://eslint.org/docs/rules/no-labels
	'no-labels': [ 'error', {
		allowLoop: false,
		allowSwitch: false,
	} ],

	// Disallow unnecessary nested blocks
	// https://eslint.org/docs/rules/no-lone-blocks
	'no-lone-blocks': 'error',

	// Disallow function declarations and expressions inside loop statements
	// https://eslint.org/docs/rules/no-loop-func
	'no-loop-func': 'error',

	// Disallow multiple spaces
	// https://eslint.org/docs/rules/no-multi-spaces
	'no-multi-spaces': [ 'error', {
		ignoreEOLComments: false,
	} ],

	// Disallow multiline strings
	// https://eslint.org/docs/rules/no-multi-str
	'no-multi-str': 'error',

	// Disallow new operators outside of assignments or comparisons
	// https://eslint.org/docs/rules/no-new
	'no-new': 'error',

	// Disallow new operators with the Function object
	// https://eslint.org/docs/rules/no-new-func
	'no-new-func': 'error',

	// Disallow new operators with the String, Number, and Boolean objects
	// https://eslint.org/docs/rules/no-new-wrappers
	'no-new-wrappers': 'error',

	// Disallow octal literals
	// https://eslint.org/docs/rules/no-octal
	'no-octal': 'error',

	// Disallow octal escape sequences in string literals
	// https://eslint.org/docs/rules/no-octal-escape
	'no-octal-escape': 'error',

	// Disallow the use of the __proto__ property
	// https://eslint.org/docs/rules/no-proto
	'no-proto': 'error',

	// Disallow variable redeclaration
	// https://eslint.org/docs/rules/no-redeclare
	'no-redeclare': 'error',

	// Disallow certain properties on certain objects
	// https://eslint.org/docs/rules/no-restricted-properties
	'no-restricted-properties': [ 'error', {
		object: 'arguments',
		property: 'callee',
		message: 'arguments.callee is deprecated',
	}, {
		object: 'global',
		property: 'isFinite',
		message: 'Please use Number.isFinite instead',
	}, {
		object: 'self',
		property: 'isFinite',
		message: 'Please use Number.isFinite instead',
	}, {
		object: 'window',
		property: 'isFinite',
		message: 'Please use Number.isFinite instead',
	}, {
		object: 'global',
		property: 'isNaN',
		message: 'Please use Number.isNaN instead',
	}, {
		object: 'self',
		property: 'isNaN',
		message: 'Please use Number.isNaN instead',
	}, {
		object: 'window',
		property: 'isNaN',
		message: 'Please use Number.isNaN instead',
	}, {
		property: '__defineGetter__',
		message: 'Please use Object.defineProperty instead.',
	}, {
		property: '__defineSetter__',
		message: 'Please use Object.defineProperty instead.',
	}, {
		object: 'Math',
		property: 'pow',
		message: 'Use the exponentiation operator (**) instead.',
	}, {
		object: 'require',
		property: 'ensure',
		message: 'Please use import() instead.',
	}, {
		object: 'System',
		property: 'import',
		message: 'Please use import() instead.',
	} ],

	// Disallow use of assignment in return statement
	// https://eslint.org/docs/rules/no-return-assign
	'no-return-assign': [ 'error', 'always' ],

	// Disallow unnecessary `return await`
	// https://eslint.org/docs/rules/no-return-await
	'no-return-await': 'error',

	// Disallow javascript: urls
	// https://eslint.org/docs/rules/no-script-url
	'no-script-url': 'error',

	// Disallow assignments where both sides are exactly the same
	// https://eslint.org/docs/rules/no-self-assign
	'no-self-assign': [ 'error', {
		props: true,
	} ],

	// Disallow comparisons where both sides are exactly the same
	// https://eslint.org/docs/rules/no-self-compare
	'no-self-compare': 'error',

	// Disallow comma operators
	// https://eslint.org/docs/rules/no-sequences
	'no-sequences': 'error',

	// Disallow throwing literals as exceptions
	// https://eslint.org/docs/rules/no-throw-literal
	'no-throw-literal': 'error',

	// Disallow unused expressions
	// https://eslint.org/docs/rules/no-unused-expressions
	'no-unused-expressions': [ 'error', {
		allowShortCircuit: false,
		allowTernary: false,
		allowTaggedTemplates: false,
	} ],

	// Disallow unused labels
	// https://eslint.org/docs/rules/no-unused-labels
	'no-unused-labels': 'error',

	// Disallow unnecessary concatenation of literals or template literals
	// https://eslint.org/docs/rules/no-useless-concat
	'no-useless-concat': 'error',

	// Disallow unnecessary escape characters
	// https://eslint.org/docs/rules/no-useless-escape
	'no-useless-escape': 'error',

	// Disallow redundant return statements
	// https://eslint.org/docs/rules/no-useless-return
	'no-useless-return': 'error',

	// Disallow `void` operators
	// https://eslint.org/docs/rules/no-void
	'no-void': 'error',

	// Disallow with statements
	// https://eslint.org/docs/rules/no-with
	'no-with': 'error',

	// Enforce the consistent use of the radix argument when using parseInt()
	// https://eslint.org/docs/rules/radix
	radix: 'error',
};
