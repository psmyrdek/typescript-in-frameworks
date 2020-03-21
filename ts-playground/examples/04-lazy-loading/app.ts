document.addEventListener('DOMContentLoaded', () => {

    const first: HTMLInputElement = document.querySelector('.first');
    const second: HTMLInputElement = document.querySelector('.second');
    const addBtn = document.querySelector('.add');
    const subtractBtn = document.querySelector('.subtract');

    addBtn.addEventListener('click', () => {
        import('./src/calculator.js').then(m => {
            const calc = new m.Calculator();
            const value = calc.add(parseInt(first.value), parseInt(second.value));
            alert(value);
        })
    });

    subtractBtn.addEventListener('click', () => {
        import('./src/calculator.js').then(m => {
            const calc = new m.Calculator();
            const value = calc.subtract(parseInt(first.value), parseInt(second.value));
            alert(value);
        })
    });

});

