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

interface HasDates {
    dateFrom: number;
    dateTo: number;
}

interface CalendarEvent extends HasDates {
    name: string;
}

interface ScheduledMaintenance extends HasDates {
    name: string;
    priority: 1 | 2 | 3;
}

class ByDate<T extends HasDates> {

    sort(values: T[]) {
        return values.sort((first: HasDates, second: HasDates) => {
            /* custom sorting algorithm */
            return -1;
        })
    }

}

const eventsSorter = new ByDate<CalendarEvent>();
eventsSorter.sort([
    { name: 'Birthday party', dateFrom: 1551484800, dateTo: 1551484890},
    { name: 'Tom\'s Wedding', dateFrom: 1551482800, dateTo: 1551484850}
])

const maintenanceSorter = new ByDate<ScheduledMaintenance>();
maintenanceSorter.sort([
    { name: 'Database Maintenance', priority: 1, dateFrom: 1551484800, dateTo: 1551484800},
    { name: 'Backend Service Maintenance', priority: 3, dateFrom: 1551484800, dateTo: 1551484800},
    { name: 'Redis Cache Maintenance', priority: 2, dateFrom: 1551484800, dateTo: 1584808058},
])