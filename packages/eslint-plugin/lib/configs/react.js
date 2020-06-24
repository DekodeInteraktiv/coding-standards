/**
 * External dependencies
 */
const merge = require( 'merge' );

module.exports = {
	plugins: [
		'jsx-a11y',
		'react',
		'react-hooks',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			pragma: 'React',
			version: '16',
		},
	},
	rules: merge(
		require( './rules/jsx-a11y' ),
		require( './rules/react' ),
	),
};
