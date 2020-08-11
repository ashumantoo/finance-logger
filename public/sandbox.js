"use strict";
// const myName = "Ashutosh";
// console.log(myName);
// const input = document.querySelectorAll('input');
// console.log(input);
/**=====================================================================================
 *                                  TYPESCRIPT BASIC (TYPES)
 * =====================================================================================
 */
var character = "Nikki";
var age = 21;
var isDeveloper = false;
// character = 20;
character = "jsessica";
// age = "twentyone";
age = 25;
// isDeveloper = "true";
isDeveloper = true;
var circumference = function (diameter) {
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
var names = ["Sara", "Andy", "Maria", "Kalley"];
//  names.push(20);
// names[0]= 3;
names.push("Tylor");
console.log(names);
var numbers = [10, 20, 30, 40];
numbers.push(50);
// numbers.push("34")
console.log(numbers);
var mixed = ['keyle', 4, 'Mike', 9, 10];
mixed.push('John');
mixed.push('Emma');
mixed.push(20);
console.log(mixed);
//Objects
var testObej = {
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
var someString;
var someAge;
var isLoggedIn;
// age ="name";
age = 30;
// isLoggedIn = "false";
isLoggedIn = true;
//arrays
var someNumbers = []; //only accepts numbers
someNumbers.push(23);
var someStrings = []; //only accepts strings
someStrings.push("hello");
//Mixed array type with union type
var someMixed = [];
someMixed.push('randomName');
someMixed.push(12);
someMixed.push(true);
var someId;
someId = "1223344";
someId = 8930293;
//objects
var ninjaOne;
ninjaOne = { name: "harry", age: 35 };
var ninjaTwo;
ninjaTwo = { name: "maria", age: 24, beltcolor: "black" };
/**=====================================================================================
 *                                  TYPESCRIPT BASIC (ANY TYPE)
 * =====================================================================================
 */
var newAge = 25;
newAge = true;
console.log(newAge);
newAge = 'hello';
console.log(newAge);
newAge = { name: 'luigi' };
console.log(newAge);
var newMixed = [];
newMixed.push(5);
newMixed.push('mario');
newMixed.push(false);
console.log(newMixed);
var ninja;
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
/**=====================================================================================
 *                                  FUNCTIONS IN TYPESCRIPT
 * =====================================================================================
 */
var sayHello = function () {
    console.log("Hello World");
};
console.log(sayHello()); //type of sayHello variable is a function type by default
var sayAgain;
sayAgain = function () {
    console.log('Hello, Again');
};
sayAgain();
//optional argument
//if we don't return anything the returned type always be void by default
// or we can also defined it
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
add(5, 10, 20);
//making optional with default value of argument
var multiply = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a * b * c);
};
multiply(4, 5);
//return type of function (default will be the type of returned value)
var minus = function (a, b) {
    return a - b;
};
var result = minus(30, 20);
console.log(result);
var minusMultiple = function (a, b, c) {
    return a - b - c;
};
var result2 = minusMultiple(40, 30, 10);
console.log(result2);
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greeting = function (user) {
    console.log(user.name + " says hello");
};
var greetingAgain = function (user) {
    console.log(user.user.name + " says hello");
};
/**=====================================================================================
 *                                  FUNCTION SIGNATURE IN TYPESCRIPT
 * =====================================================================================
 */
var newGreet;
//example 1
var sayHi;
sayHi = function (name, greet) {
    console.log(name + " is saying " + greet);
};
sayHi('mantoo', "how are you");
//example 2
var calculate;
calculate = function (firstNumber, secondNumber, action) {
    if (action === "add")
        return firstNumber + secondNumber;
    else
        return firstNumber - secondNumber;
};
calculate(30, 50, "add");
//example 3
var logDetailAgain;
logDetailAgain = function (person) {
    console.log(person.name + " is " + person.age + " is old.");
};
logDetailAgain({ name: "hello", age: 23 });
/**=====================================================================================
 *                                  CLASSES IN TYPESCRIPT
 * =====================================================================================
 */
//classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice('mario', 'work on the mario website', 250);
var invoiceTwo = new Invoice('jakson', 'work on some project website', 300);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
// invoices.push({client:"somename",details:"writing an assey",amount:200}); this will also not work
console.log(invoiceOne, invoiceTwo);
