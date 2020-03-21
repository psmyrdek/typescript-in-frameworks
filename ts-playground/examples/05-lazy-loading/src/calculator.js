var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (first, second) {
        return first + second;
    };
    Calculator.prototype.subtract = function (first, second) {
        return first - second;
    };
    Calculator.prototype.multiply = function (first, second) {
        return first * second;
    };
    Calculator.prototype.divide = function (first, second) {
        return first / second;
    };
    return Calculator;
}());
export { Calculator };
