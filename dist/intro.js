"use strict";
const user = [25, 'premium'];
let mySize = 2;
function calculateTaxes(income, year = 2022) {
    if (year < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
const employee = {
    id: 827861038,
    name: 'Eugene',
    retire: (date) => console.log(date),
};
function lbsToKg(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
const textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
let speed = null;
const ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
const phone = document.getElementById('phone');
const email = document.getElementById('email');
phone.value;
function processEvents() {
    while (true) { }
}
function reject(message) {
    throw new Error(message);
}
//# sourceMappingURL=intro.js.map