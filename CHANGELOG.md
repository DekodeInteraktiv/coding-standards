# Changelog

## 3.3.0
* Remove exclusion of content/plugins folder. [PR #15](https://github.com/DekodeInteraktiv/coding-standards/pull/15)

## 3.2.0
* Updated dependencies.

## 3.1.0
* Exclude `Generic.Arrays.DisallowShortArraySyntax` and `WordPress.PHP.DisallowShortTernary.Found` introduced in [WPCS 2.2.0](https://github.com/WordPress/WordPress-Coding-Standards/releases/tag/2.2.0).

## 1.2.0
* Allow `file_get_contents`
* Remove rule: `PEAR.Functions.FunctionCallSignature.CloseBracketLine`
* Remove rule: `PEAR.Functions.FunctionCallSignature.ContentAfterOpenBracket`
* Remove rule: `PEAR.Functions.FunctionCallSignature.MultipleArguments`

## 1.1.0
* Replace `wimg/php-compatibility` with `phpcompatibility/phpcompatibility-wp`. (Cheers @jrfnl! [PR #4](https://github.com/DekodeInteraktiv/coding-standards/pull/4))

## 1.0.0
* WordPress Coding Standards for PHP_CodeSniffer 1.0
* PHP Compatibility Coding Standard for PHP CodeSniffer 8.2
* Neutron PHP Standard 1.5

## 0.3.1
* Allow slash in hook names

## 0.3.0
* Require strict type
* Require type hints
* Removed php7.0 as testVersion. Need to set it in your config

## 0.2.0
* Changed composer type to `phpcodesniffer-standard`.
* Added php7.0 as testVersion.
* Exclude folders you don't want to run PHPCS against

## 0.1.0
* Initial release.