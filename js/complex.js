"use strict";
var ComplexNumber = /** @class */ (function () {
    function ComplexNumber(real, imaginary) {
        this._imaginary = imaginary;
        this._real = real;
    }
    Object.defineProperty(ComplexNumber.prototype, "Real", {
        get: function () {
            return this._real;
        },
        set: function (value) {
            this._real = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexNumber.prototype, "Imaginary", {
        get: function () {
            return this._imaginary;
        },
        set: function (value) {
            this._imaginary = value;
        },
        enumerable: true,
        configurable: true
    });
    ComplexNumber.prototype.add = function (digit2) {
        var result;
        this._real += digit2.Real;
        this._imaginary += digit2.Imaginary;
        result = this._real + " " + this._imaginary + "j";
        return this._real + " " + this._imaginary + "j + " + digit2.Real + " " + digit2.Imaginary + "j = " + result;
    };
    ComplexNumber.prototype.subtract = function (digit2) {
        var result;
        this._real -= digit2.Real;
        this._imaginary -= digit2.Imaginary;
        result = this._real + " " + this._imaginary + "j";
        return this._real + " " + this._imaginary + "j - " + digit2.Real + " " + digit2.Imaginary + "j = " + result;
    };
    ComplexNumber.prototype.module = function () {
        var result;
        result = Math.sqrt(this._real * this._real + this._imaginary * this._imaginary);
        return "|" + this._real + " " + this._imaginary + "j| = " + result;
    };
    ComplexNumber.prototype.show = function () {
        return this._real + " " + this._imaginary + "j";
    };
    return ComplexNumber;
}());
var digit1 = new ComplexNumber(5, 9);
var digit2 = new ComplexNumber(1, 3);
console.log(digit1.add(digit2));
console.log(digit1.subtract(digit2));
console.log(digit1.module());
console.log(digit1.show());