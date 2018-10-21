"use strict";
class ComplexNumber {
    constructor(real, imaginary) {
        this._imaginary = imaginary;
        this._real = real;
    }
    get Real() {
        return this._real;
    }
    set Real(value) {
        this._real = value;
    }
    get Imaginary() {
        return this._imaginary;
    }
    set Imaginary(value) {
        this._imaginary = value;
    }
    add(digit2) {
        let result;
        this._real += digit2.Real;
        this._imaginary += digit2.Imaginary;
        result = this._real + " " + this._imaginary + "j";
        return this._real + " " + this._imaginary + "j + " + digit2.Real + " " + digit2.Imaginary + "j = " + result;
    }
    subtract(digit2) {
        let result;
        this._real -= digit2.Real;
        this._imaginary -= digit2.Imaginary;
        result = this._real + " " + this._imaginary + "j";
        return this._real + " " + this._imaginary + "j - " + digit2.Real + " " + digit2.Imaginary + "j = " + result;
    }
    module() {
        let result;
        result = Math.sqrt(this._real * this._real + this._imaginary * this._imaginary);
        return "|" + this._real + " " + this._imaginary + "j| = " + result;
    }
    show() {
        return this._real + " " + this._imaginary + "j";
    }
}
let digit1 = new ComplexNumber(5, 9);
let digit2 = new ComplexNumber(1, 3);
console.log(digit1.add(digit2));
console.log(digit1.subtract(digit2));
console.log(digit1.module());
console.log(digit1.show());
