var es = require("./index");
var assert = require('assert');

var assertMethods = [
    'isNull',
    'isUndefined',
    'isEmpty',
    'isNullOrUndefined',
    'isNUE',
    'isString',
    'isNumber',
    'isObject',
    'isBoolean',
    'isFunction',
    'isPrimitive',
    'isArray',
    'isDate',
    'isRegExp',
    'isError',
    'isSymbol'
];

var testVals = [
    { value: null, expectResults: [true, false, false, true, true, false, false, true, false, false, true, false, false, false, false, false] },
    { value: void 0, expectResults: [false, true, false, true, true, false, false, false, false, false, true, false, false, false, false, false] },
    { value: '', expectResults: [false, false, true, false, true, true, false, false, false, false, true, false, false, false, false, false] },
    { value: 'test', expectResults: [false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false] },
    { value: false, expectResults: [false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false] },
    { value: true, expectResults: [false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false] },
    { value: 0, expectResults: [false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false] },
    { value: 1, expectResults: [false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false] },
    { value: 555, expectResults: [false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false] },
    { value: {}, expectResults: [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false] },
    { value: { test: "test" }, expectResults: [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false] },
    { value: function() {}, expectResults: [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false] },
    { value: Symbol('test'), expectResults: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true] },
    { value: [], expectResults: [false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false] },
    { value: [1, 2, 3], expectResults: [false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false] },
    { value: new Date(), expectResults: [false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false] },
    { value: /test/ig, expectResults: [false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false] },
    { value: new Error('test'), expectResults: [false, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false] },
];

function _toString(val) {
    if (val === null) {
        return 'null';
    }
    if ('undefined' === typeof val) {
        return 'undefined';
    }
    if (Array.isArray(val) || val.constructor === Object) {
        return JSON.stringify(val);
    }
    return val.toString();
}

describe('ensure', () => {
    testVals.forEach(({ value, expectResults }) => {
        describe(`es(${_toString(value)}) validations`, () => {
            assertMethods.forEach((method, i) => {
                it(`es(${_toString(value)}).${method}() should return ${expectResults[i].toString()}`, () => {
                    assert(es(value)[method]() === expectResults[i]);
                })
            })
        })
    })
})