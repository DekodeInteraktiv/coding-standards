// https://github.com/benmosher/eslint-plugin-import

module.exports = {
	// Ensure consistent use of file extension within the import path
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
	'import/extensions': [ 'error', 'ignorePackages', {
		js: 'never',
		mjs: 'never',
		jsx: 'never',
	} ],

	// Disallow invalid exports, e.g. multiple defaults
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
	'import/export': 'error',

	// Disallow non-import statements appearing before import statements
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
	'import/first': 'error',

	// Require a newline after the last import/require in a group
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
	'import/newline-after-import': 'error',

	// Forbid import of modules using absolute paths
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
	'import/no-absolute-path': 'error',

	// Disallow AMD require/define
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
	'import/no-amd': 'error',

	// Disallow use of jsdoc-marked-deprecated imports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
	'import/no-deprecated': 'off',

	// Report repeated import of the same module in multiple places
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
	'import/no-duplicates': 'error',

	// Forbid require() calls with expressions
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
	'import/no-dynamic-require': 'error',

	// Forbid mutable exports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
	'import/no-mutable-exports': 'error',

	// Do not allow a default import name to match a named export
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
	'import/no-named-as-default': 'error',

	// Warn on accessing default export property names that are also named exports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
	'import/no-named-as-default-member': 'error',

	// Prevent importing the default as if it were named
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
	'import/no-named-default': 'error',

	// Prohibit named exports. this is a terrible rule, do not use it.
	// https://github.com/benmosher/eslint-plugin-import/blob/1ec80fa35fa1819e2d35a70e68fb6a149fb57c5e/docs/rules/no-named-export.md
	'import/no-named-export': 'off',

	// Disallow namespace imports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
	'import/no-namespace': 'off',

	// No Node.js builtin modules
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
	'import/no-nodejs-modules': 'off',

	// Forbid a module from importing itself
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
	'import/no-self-import': 'error',

	// Use this rule to prevent imports to folders in relative parent paths.
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
	'import/no-relative-parent-imports': 'off',

	// Ensure imports point to files/modules that can be resolved
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
	'import/no-unresolved': [ 'error', {
		commonjs: true,
		caseSensitive: true,
	} ],

	// Restrict which files can be imported in a given folder
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
	'import/no-restricted-paths': 'off',

	// Ensures that there are no useless path segments
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
	'import/no-useless-path-segments': 'error',

	// Forbid Webpack loader syntax in imports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
	'import/no-webpack-loader-syntax': 'error',

	// ensure absolute imports are above relative imports and that unassigned imports are ignored
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
	// TODO: enforce a stricter convention in module import order?
	'import/order': [ 'error', {
		groups: [ [
			'builtin',
			'external',
			'internal',
		] ],
	} ],

	// Require modules with a single export to use a default export
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
	'import/prefer-default-export': 'error',

	// Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous JavaScript Grammar
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
	'import/unambiguous': 'off',

	// Prevent unassigned imports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
	'import/no-unassigned-import': 'off',

	// Reports modules without any exports, or with unused exports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
	'import/no-unused-modules': [ 'off', {
		ignoreExports: [],
		missingExports: true,
		unusedExports: true,
	} ],
};
