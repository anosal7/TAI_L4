class ComplexNumber {
    private _real: number;
    private _imaginary: number;


    constructor(real : number, imaginary: number) {
        this._imaginary = imaginary;
        this._real = real;
    }


    get Real(): number {
        return this._real;
    }

    set Real(value: number) {
        this._real = value;
    }

    get Imaginary(): number {
        return this._imaginary;
    }

    set Imaginary(value: number) {
        this._imaginary = value;
    }


    add(digit2 : ComplexNumber) {
        let result : String;
        this._real += digit2.Real;
        this._imaginary += digit2.Imaginary;
        result =  this._real + " " + this._imaginary + "j";

        return this._real + " " + this._imaginary + "j + " + digit2.Real + " " + digit2.Imaginary + "j = " + result;
    }

    subtract(digit2 : ComplexNumber) {
        let result : String;
        this._real -= digit2.Real;
        this._imaginary -= digit2.Imaginary;
        result =  this._real + " " + this._imaginary + "j";

        return this._real + " " + this._imaginary + "j - " + digit2.Real + " " + digit2.Imaginary + "j = " + result;
    }

    module() {
        let result : number;
        result = Math.sqrt(this._real * this._real + this._imaginary * this._imaginary);

        return "|" + this._real + " " + this._imaginary + "j| = " +  result;
    }

    show(){
        return  this._real + " " + this._imaginary + "j";
    }
}

let digit1 = new ComplexNumber(5, 9);
let digit2 = new ComplexNumber(1, 3);
console.log(digit1.add(digit2));
console.log(digit1.subtract(digit2));
console.log(digit1.module());
console.log(digit1.show());