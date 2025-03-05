'use strict';

var define = require('define-properties');
var getProto = require('get-proto');

var getPolyfill = require('./polyfill');

module.exports = function shimTypedArrayAt() {
	if (typeof Uint8Array === 'function') {
		var polyfill = getPolyfill();
		var proto = getProto(Uint8Array.prototype);

		define(
			proto,
			{ at: polyfill },
			{ at: function () { return proto.at !== polyfill; } }
		);
	}
	return polyfill;
};
