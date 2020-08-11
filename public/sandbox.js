import { CreateInvoice } from './classes/Invoice.js';
// const myName = "Ashutosh";
// console.log(myName);
// const input = document.querySelectorAll('input');
// console.log(input);
/**=====================================================================================
 *                                  TYPESCRIPT BASIC (TYPES)
 * =====================================================================================
 */
let character = "Nikki";
let age = 21;
let isDeveloper = false;
// character = 20;
character = "jsessica";
// age = "twentyone";
age = 25;
// isDeveloper = "true";
isDeveloper = true;
const circumference = (diameter) => {
    return diameter * Math.PI;
};
// console.log(circumference("seven"));  
//doesn't gives error, while it doesn't make sence to pass string as value if we don't assign the type of passed 
//paramter to the funciton
console.log(circumference(7));
/**=====================================================================================
 *                                  TYPESCRIPT BASIC (ARRAY AND OBJECTS)
 * =====================================================================================
 */
//arrays
let names = ["Sara", "Andy", "Maria", "Kalley"];
//  names.push(20);
// names[0]= 3;
names.push("Tylor");
console.log(names);
let numbers = [10, 20, 30, 40];
numbers.push(50);
// numbers.push("34")
console.log(numbers);
let mixed = ['keyle', 4, 'Mike', 9, 10];
mixed.push('John');
mixed.push('Emma');
mixed.push(20);
console.log(mixed);
//Objects
let testObej = {
    name: "Natasha",
    age: 28,
    belt: "black",
    profession: "developer"
};
// testObej = [];
testObej = {
    name: "Henha",
    age: 26,
    belt: "organe",
    profession: 'Volly ball',
};
/**=====================================================================================
 *                                  TYPESCRIPT BASIC (EXPLICIT TYPES)
 * =====================================================================================
 */
//explicit types
let someString;
let someAge;
let isLoggedIn;
// age ="name";
age = 30;
// isLoggedIn = "false";
isLoggedIn = true;
//arrays
let someNumbers = []; //only accepts numbers
someNumbers.push(23);
let someStrings = []; //only accepts strings
someStrings.push("hello");
//Mixed array type with union type
let someMixed = [];
someMixed.push('randomName');
someMixed.push(12);
someMixed.push(true);
let someId;
someId = "1223344";
someId = 8930293;
//objects
let ninjaOne;
ninjaOne = { name: "harry", age: 35 };
let ninjaTwo;
ninjaTwo = { name: "maria", age: 24, beltcolor: "black" };
/**=====================================================================================
 *                                  TYPESCRIPT BASIC (ANY TYPE)
 * =====================================================================================
 */
let newAge = 25;
newAge = true;
console.log(newAge);
newAge = 'hello';
console.log(newAge);
newAge = { name: 'luigi' };
console.log(newAge);
let newMixed = [];
newMixed.push(5);
newMixed.push('mario');
newMixed.push(false);
console.log(newMixed);
let ninja;
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
/**=====================================================================================
 *                                  FUNCTIONS IN TYPESCRIPT
 * =====================================================================================
 */
let sayHello = () => {
    console.log("Hello World");
};
console.log(sayHello()); //type of sayHello variable is a function type by default
let sayAgain;
sayAgain = () => {
    console.log('Hello, Again');
};
sayAgain();
//optional argument
//if we don't return anything the returned type always be void by default
// or we can also defined it
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
add(5, 10, 20);
//making optional with default value of argument
const multiply = (a, b, c = 10) => {
    console.log(a * b * c);
};
multiply(4, 5);
//return type of function (default will be the type of returned value)
const minus = (a, b) => {
    return a - b;
};
let result = minus(30, 20);
console.log(result);
const minusMultiple = (a, b, c) => {
    return a - b - c;
};
const result2 = minusMultiple(40, 30, 10);
console.log(result2);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`${user.name} says hello`);
};
const greetingAgain = (user) => {
    console.log(`${user.user.name} says hello`);
};
/**=====================================================================================
 *                                  FUNCTION SIGNATURE IN TYPESCRIPT
 * =====================================================================================
 */
let newGreet;
//example 1
let sayHi;
sayHi = (name, greet) => {
    console.log(`${name} is saying ${greet}`);
};
sayHi('mantoo', "how are you");
//example 2
let calculate;
calculate = (firstNumber, secondNumber, action) => {
    if (action === "add")
        return firstNumber + secondNumber;
    else
        return firstNumber - secondNumber;
};
calculate(30, 50, "add");
//example 3
let logDetailAgain;
logDetailAgain = (person) => {
    console.log(`${person.name} is ${person.age} is old.`);
};
logDetailAgain({ name: "hello", age: 23 });
/**=====================================================================================
 *                                  CLASSES IN TYPESCRIPT
 * =====================================================================================
 */
// //classes
// class Invoice {
//     // client: string;
//     // details: string;
//     // amount: number;
//     // readonly client: string;  //only readable - can't able to change
//     // private details: string;  //read and wirte possible only inside the class
//     // public amount: number;    //can be accessible any where inside the class or outside
//     // constructor(c: string, d: string, a: number) {
//     //     this.client = c;
//     //     this.details = d;
//     //     this.amount = a;
//     // }
//     //shortest way to creating class using constructor
//     constructor(
//         readonly client: string,
//         private details: string,
//         public amount: number
//     ) { }
//     format() {
//         return `${this.client} owes ${this.amount} for ${this.details}`;
//     }
// }
// const invoiceOne = new Invoice('mario', 'work on the mario website', 250);
// const invoiceTwo = new Invoice('jakson', 'work on some project website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
// // invoices.push({client:"somename",details:"writing an assey",amount:200}); this will also not work
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
// console.log(invoiceOne, invoiceTwo);
const invoiceOne = new CreateInvoice('mario', 'work on the mario website', 250);
const invoiceTwo = new CreateInvoice('jakson', 'work on some project website', 300);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
// invoices.push({client:"somename",details:"writing an assey",amount:200}); this will also not work
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invoiceOne, invoiceTwo);
const me = {
    name: "mantoo",
    age: 27,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('spent amount is ', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
// greetPerson({name:"mantoo"}) will throw error its not follwing the isPerson interface
greetPerson(me);
/**=====================================================================================
 *                                 GENERICS IN TYPESCRIPT
 * =====================================================================================
 */
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "mantoo", age: 27 });
// console.log(docOne.name); //here the function does not know what are the properites are on the passed object
//Making this function as Generic type - means what ever the properties passed the function
//as parameter will the object property - but here the problem is this function now accept any type, it could be
//string,could be a number etc
const addAnotherUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let anotherDocOne = addAnotherUID({ name: "mantoo", age: 27 });
// let anotherDocTwo = addAnotherUID('someName'); this will not gives error while it is not an object
console.log(anotherDocOne.age);
//To make this function to accept only object
const someAnotherUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let someDocOne = someAnotherUID({ name: "mantoo", age: 27 });
// let anotherDocTwo = someAnotherUID('someName'); // now here it will throw the error
console.log(someDocOne.age);
const resourceOne = {
    uid: "123",
    resourceName: "some resource",
    data: "some data"
};
const resourceTwo = {
    uid: "123",
    resourceName: "some resource",
    data: { name: "mantoo", age: 27 }
};
const resourceThree = {
    uid: "123",
    resourceName: "some resource",
    data: ['one', 'two', 'three']
};
console.log(resourceOne);
console.log(resourceTwo);
console.log(resourceThree);
