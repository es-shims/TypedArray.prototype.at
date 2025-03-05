# typedarray.prototype.at <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES spec-compliant `%TypedArray%.prototype.at` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-%typedarray%.prototype.at).

Because `%TypedArray%.prototype.at` depends on a receiver (the “this” value), the main export takes the typed array to operate on as the first argument.

## Example

```js
var at = require('typedarray.prototype.at');
var assert = require('assert');

var ta = new Uint8Array([1, 2, 3]);

assert.equal(at(ta, 0), 1);
assert.equal(at(ta, 1), 2);
assert.equal(at(ta, 2), 3);
assert.equal(at(ta, -1), 3);
assert.equal(at(ta, -2), 2);
assert.equal(at(ta, -3), 1);
```

```js
var shim = require('typedarray.prototype.at/shim');
var getPolyfill = require('typedarray.prototype.at/polyfill');
var assert = require('assert');
/* when TypedArray#at is not present */
delete Object.getPrototypeOf(Uint8Array.prototype).at;
var shimmed = shim();
assert.equal(shimmed, getPolyfill());
assert.equal(shimmed, Uint8Array.prototype.at);

var ta = new Uint8Array([1, 2, 3]);
assert.equal(ta.at(-1), at(ta, -1));
```

```js
var shim = require('typedarray.prototype.at/shim');
var assert = require('assert');
/* when TypedArray#at is present */
var shimmed = shim();
assert.equal(shimmed, Uint8Array.prototype.at);

var ta = new Uint8Array([1, 2, 3]);
assert.equal(ta.at(-1), at(ta, -1));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/typedarray.prototype.at
[npm-version-svg]: https://versionbadg.es/es-shims/TypedArray.prototype.at.svg
[deps-svg]: https://david-dm.org/es-shims/TypedArray.prototype.at.svg
[deps-url]: https://david-dm.org/es-shims/TypedArray.prototype.at
[dev-deps-svg]: https://david-dm.org/es-shims/TypedArray.prototype.at/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/TypedArray.prototype.at#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/typedarray.prototype.at.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/typedarray.prototype.at.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/typedarray.prototype.at.svg
[downloads-url]: https://npm-stat.com/charts.html?package=typedarray.prototype.at
[codecov-image]: https://codecov.io/gh/es-shims/TypedArray.prototype.at/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/TypedArray.prototype.at/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/TypedArray.prototype.at
[actions-url]: https://github.com/es-shims/TypedArray.prototype.at/actions
