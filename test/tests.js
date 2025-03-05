'use strict';

var inspect = require('object-inspect');

var forEach = require('for-each');
var availableTypedArrays = require('available-typed-arrays')();
var v = require('es-value-fixtures');

module.exports = function runTests(at, t) {
	forEach(v.primitives.concat(v.objects), function (nonTA) {
		t['throws'](
			function () { at(nonTA); },
			TypeError,
			inspect(nonTA) + ' is not a Typed Array'
		);
	});

	t.test('Typed Arrays', { skip: availableTypedArrays.length === 0 }, function (st) {
		forEach(availableTypedArrays, function (name) {
			st.test(name, function (s2t) {
				var TA = global[name];
				var isBigInt = name.slice(0, 3) === 'Big';

				var Z = isBigInt ? BigInt : Number;

				var ta = new TA([Z(1), Z(2), Z(3)]);

				s2t.deepEqual(
					[at(ta, 0), at(ta, 1), at(ta, 2), at(ta, 3), at(ta, -1), at(ta, -2), at(ta, -3), at(ta, -4)],
					[Z(1), Z(2), Z(3), void undefined, Z(3), Z(2), Z(1), void undefined],
					'basic tests'
				);

				s2t.end();
			});
		});

		return st.end();
	});
};
