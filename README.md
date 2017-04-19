
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![js-standard-style][standard-style-image]][standard-style-url]
[![Build Status: Linux][travis-image]][travis-url]
[![Build Status: Windows][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]


# consecutive

### Get consecutive numbers

 v5.0.2


## Installation
```$ npm install --save consecutive```


## Usage

```javascript
var consecutive = require('consecutive');

var next = consecutive();
console.log(next(), next(), next());
//=> 0, 1, 2

```


## Tests

```npm test```


## Change Log

[all changes](CHANGELOG.md)


## Created by

Dimitry, 2@ivanoff.org.ua

```curl -A cv ivanoff.org.ua```


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[standard-style-image]: https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat
[standard-style-url]: https://github.com/airbnb/javascript

[npm-url]: https://npmjs.org/package/consecutive
[npm-version-image]: http://img.shields.io/npm/v/consecutive.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/consecutive.svg?style=flat

[travis-url]: https://travis-ci.org/ivanoff/consecutive
[travis-image]: https://travis-ci.org/ivanoff/consecutive.svg?branch=master

[appveyor-url]: https://ci.appveyor.com/project/ivanoff/consecutive/branch/master
[appveyor-image]: https://ci.appveyor.com/api/projects/status/lp3nhnam1eyyqh33/branch/master?svg=true

[coveralls-url]: https://coveralls.io/github/ivanoff/consecutive
[coveralls-image]: https://coveralls.io/repos/github/ivanoff/consecutive/badge.svg
