'use strict';

var Get = require('es-abstract/2024/Get');
var ToIntegerOrInfinity = require('es-abstract/2024/ToIntegerOrInfinity');
var ToString = require('es-abstract/2024/ToString');
var TypedArrayLength = require('es-abstract/2024/TypedArrayLength');
var ValidateTypedArray = require('es-abstract/2024/ValidateTypedArray');

module.exports = function at(index) {
	var O = this; // step 1

	var taRecord = ValidateTypedArray(O, 'SEQ-CST'); // step 2

	var len = TypedArrayLength(taRecord); // step 3

	var relativeIndex = ToIntegerOrInfinity(index); // step 4

	var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex; // step 5-6

	if (k < 0 || k >= len) {
		return void undefined; // step 7
	}

	return Get(O, ToString(k)); // step 8
};
