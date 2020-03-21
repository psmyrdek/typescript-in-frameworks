let person = 'Przemek'
person = 'John'
person = 21;

function findEven(data: number[] = []) {
    if (data.length > 0) {
        return data.filter(entry => entry % 2 === 0)
    }
    return [];
}

const values = findEven([1, 2, 3])

const part = values.filter(p => p > 0)