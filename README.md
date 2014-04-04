# grunt-svn-copy

> SVN copy command in grunt

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svn-copy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svn-copy');
```

## The "svn_copy" task

### Overview
In your project's Gruntfile, add a section named `svn_copy` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svn_copy: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

No options yet!

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  svn_copy: {
    options: {},
    files: {
      'dest/file/to/copy': ['target/file/to/copy/to'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  svn_copy: {
    options: {
    },
    files: {
      'dest/file/to/copy1': ['target/file/to/copy/to/1'],
      'dest/file/to/copy2': ['target/file/to/copy/to/2'],
      'dest/file/to/copy3': ['target/file/to/copy/to/3'],
      'dest/file/to/copy4': ['target/file/to/copy/to/4'],
      'dest/file/to/copy5': ['target/file/to/copy/to/5'],
      'dest/file/to/copy6': ['target/file/to/copy/to/6'],
      'dest/file/to/copy7': ['target/file/to/copy/to/7'],
      'dest/file/to/copy8': ['target/file/to/copy/to/8'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
