/**
 * External dependencies
 */
const merge = require( 'merge' );

module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [ 'import' ],
	rules: merge(
		require( './rules/best-practices' ),
		require( './rules/esnext' ),
		require( './rules/import' ),
		require( './rules/possible-errors' ),
		require( './rules/strict' ),
		require( './rules/stylistic-issues' ),
		require( './rules/variables' ),
	),
};
