class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
}

const account = new Account(1, 'Eugene', 0);
account.deposit(200);
account.balance;

class SeatAssignment {
  //index signature property
  [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.A1 = 'Eugene';
seats['A2'] = 'Serj';

class Ride {
  private static _activeRides: number = 0;

  start(): void {
    Ride._activeRides++;
  }

  stop(): void {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

const ride1 = new Ride();
const ride2 = new Ride();

ride1.start();
ride2.start();

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log('Walking...');
  }
}

class Student extends Person {
  constructor(public studentID: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a test...');
  }
}

class Teacher extends Person {
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements CloudCalendar {
  constructor(public name: string) {}

  sync(): void {
    throw new Error('Method not implemented.');
  }
  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}
