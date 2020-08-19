# Dekode Coding Standards

## Installation
Standards can be installed with [Composer](https://getcomposer.org/) dependency manager:

```
$ composer require dekode/coding-standards --dev
```

## Usage
### Basic usage
When the package is installed via Composer you can check your files with the
coding standards via:

```
$ vendor/bin/phpcs --standard="Dekode" <path>
```

Where `<path>` is at least one file or directory to check, ex `.`.

### Configuration File
To not have to pass all the arguments to the command line, and also make your
own project customizations create a `phpcs.xml.dist` file that contains
something like this:

```xml
<?xml version="1.0"?>
<ruleset name="MyProjectCodingStandard">
    <description>My Project coding standard.</description>

    <file>.</file>

    <!-- Only check .php files -->
    <arg name="extensions" value="php" />

    <!-- Set required text domain -->
    <config name="text_domain" value="my-project" />

    <!-- PHP 7.0 and higher. -->
    <config name="testVersion" value="7.0-" />

    <!-- Rules -->
    <rule ref="Dekode" />
</ruleset>
```

