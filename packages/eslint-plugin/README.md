# @dekode/eslint-plugin
Dekodes's ESLint plugin, following our styleguide.

## Installation
You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install [`@dekode/eslint-plugin`](https://github.com/DekodeInteraktiv/coding-standards/tree/master/packages/eslint-plugin):

```
$ npm install @dekode/eslint-plugin --save-dev
```

## Usage
This plugin exports a [`base` config](index.js) that enforces best practices.

Create your own `.eslintrc.js` configuration file:

```js
{
	"extends": "plugin:@dekode/base",
	"plugins": [
		"@dekode"
	]
}
```

Or see the [ESLint docs](http://eslint.org/docs/user-guide/configuring.html#configuration-file-formats) for more information about configuration file formats.

You can also stack any of the extra shared configs on top of the "base" config by extending an array of linting configs. For example, this package provides a React linting config, which can be added to the base config with the following configuration file:

```js
{
	"extends": [
		"plugin:@dekode/base",
		"plugin:@dekode/react"
	]
}
```

## Available rulesets
The following rulesets are available:

*   **base**: Enforces best practices and possible errors
*   **react**: Enforces best React.js practices
