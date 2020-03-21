interface Person {
    name: string;
    age: number;
}

interface Repository<T> {
    get: (index: number) => T;
    getAll: () => T[];
    getWithFilter: (predicate: (value: T) => boolean) => T[];
    add: (value: T) => void;
}

const DATA_SOURCE: Person[] = [
    { name: 'John', age: 25 },
    { name: 'Peter', age: 41 },
    { name: 'Hannah', age: 22 },
    { name: 'Tom', age: 76 }
]

class PeopleRepository {
    
}