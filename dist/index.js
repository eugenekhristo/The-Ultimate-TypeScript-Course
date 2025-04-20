"use strict";
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
const account = new Account(1, 'Eugene', 0);
account.deposit(200);
account.balance;
class SeatAssignment {
}
const seats = new SeatAssignment();
seats.A1 = 'Eugene';
seats['A2'] = 'Serj';
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
const ride1 = new Ride();
const ride2 = new Ride();
ride1.start();
ride2.start();
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('Walking...');
    }
}
class Student extends Person {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    takeTest() {
        console.log('Taking a test...');
    }
}
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
const teacher = new Teacher('Eugene', 'Khristo');
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map