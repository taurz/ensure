module.exports = function ensure(val) {
    function isNull() {
        return val === null;
    }

    function isUndefined() {
        return 'undefined' === typeof val;
    }

    function isNullOrUndefined() {
        return isNull() || isUndefined();
    }

    function isEmpty() {
        return val === '';
    }

    function isNUE() {
        return isNull() || isUndefined() || isEmpty();
    }

    function isTypeOf(type) {
        return type === typeof val;
    }

    function isString() {
        return isTypeOf('string');
    }

    function isObject() {
        return isTypeOf('object');
    }

    function isNumber() {
        return isTypeOf('number');
    }

    function isBoolean() {
        return isTypeOf('boolean');
    }

    function isFunction() {
        return isTypeOf('function');
    }

    function isSymbol() {
        return isTypeOf('symbol');
    }

    function isPrimitive() {
        return isNull() || isUndefined() || isString() || isNumber() || isBoolean();
    }

    function isArray() {
        return !isNullOrUndefined() && val.constructor === Array;
    }

    function isDate() {
        return !isNullOrUndefined() && val.constructor === Date;
    }

    function isRegExp() {
        return !isNullOrUndefined() && val.constructor === RegExp;
    }

    function isError() {
        return !isNullOrUndefined() && val.constructor === Error;
    }

    return {
        isNull,
        isUndefined,
        isEmpty,
        isNullOrUndefined,
        isNUE,
        isString,
        isNumber,
        isObject,
        isBoolean,
        isFunction,
        isPrimitive,
        isArray,
        isDate,
        isRegExp,
        isError,
        isSymbol
    };
}