function refreshView(newValue) {
    console.log(`New value: ${newValue}, refreshing view!`);
}

class FirstComponent {

    // private _name: string;

    // get name() {
    //     return this._name;
    // }

    // set name(value) {
    //     if (this._name !== value) {
    //         this._name = value;
    //         refreshView();
    //     }
    // }

    name: string

}


function Input() {
    return function (target: any, propertyKey: string) {
        Object.defineProperty(target, propertyKey, {
            get: () => { return this[propertyKey]; },
            set: (newValue) => {
                this[propertyKey] = newValue;
                refreshView(newValue);
            }
        })
        return target
    }
}

class SecondComponent {

    @Input()
    name: string;

}

const first = new FirstComponent();
first.name = 'Przemek';
console.log(`Current - ${first.name}`);

const second = new SecondComponent();
second.name = 'Franek';
console.log(`Current - ${second.name}`);