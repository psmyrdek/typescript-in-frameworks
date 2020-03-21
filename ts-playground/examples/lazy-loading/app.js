document.addEventListener('DOMContentLoaded', function () {
    var first = document.querySelector('.first');
    var second = document.querySelector('.second');
    var addBtn = document.querySelector('.add');
    var subtractBtn = document.querySelector('.subtract');
    addBtn.addEventListener('click', function () {
        import('./src/calculator.js').then(function (m) {
            var calc = new m.Calculator();
            var value = calc.add(parseInt(first.value), parseInt(second.value));
            alert(value);
        });
    });
    subtractBtn.addEventListener('click', function () {
        import('./src/calculator.js').then(function (m) {
            var calc = new m.Calculator();
            var value = calc.subtract(parseInt(first.value), parseInt(second.value));
            alert(value);
        });
    });
});
