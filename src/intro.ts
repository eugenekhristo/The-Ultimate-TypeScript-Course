// tuples
const user: [number, string] = [25, 'premium'];

const enum Size {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}
const enum Test {
  Small = 1,
  Medium,
  Large,
}

let mySize: Test = Test.Medium; //2

function calculateTaxes(income: number, year = 2022): number {
  if (year < 2022) {
    return income * 1.2;
  }

  return income * 1.3;
}

// type alieases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const employee: Employee = {
  id: 827_861_038,
  name: 'Eugene',
  retire: (date: Date) => console.log(date),
};

// union types
function lbsToKg(weight: number | string): number {
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

// intersection types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

const textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl';

// Nullable types
// just null | undefined

let speed: number | null = null;
const ride = {
  // nullish coalescing
  speed: speed ?? 30,
};

//Type Assertions
const phone = document.getElementById('phone') as HTMLInputElement;
const email = <HTMLInputElement>document.getElementById('email');
phone.value;

//:uknown is better than :any

function processEvents(): never {
  while (true) {}
}

function reject(message: string): never {
  throw new Error(message);
}

// processEvents();
// reject('...');
// console.log();
