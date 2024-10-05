# Dekode Coding Standards

## Installation and usage

```sh
$ composer require --dev dekode/coding-standards
```

### Add lint script to `composer.json`

```json
"scripts": {
  "lint": [
    "./vendor/bin/phpcs ."
  ]
}
```

### Configuration File

Create a `phpcs.xml.dist` file in your project root with the following contents. (Update required PHP version and text_domain accordingly.)

```xml
<?xml version="1.0"?>
<ruleset>
	<file>.</file>
	<arg name="extensions" value="php" />
	<config name="testVersion" value="8.2" />
	<config name="text_domain" value="block-theme,default" />
	<rule ref="Dekode" />
</ruleset>
```
