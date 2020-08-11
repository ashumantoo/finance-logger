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

const circumference = (diameter: number) => {
    return diameter * Math.PI;
}

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
    // Skills: [] error , it does not exits on the original object
}


/**=====================================================================================
 *                                  TYPESCRIPT BASIC (EXPLICIT TYPES)
 * =====================================================================================
 */

//explicit types
let someString: string;
let someAge: number;
let isLoggedIn: boolean;

// age ="name";
age = 30;

// isLoggedIn = "false";
isLoggedIn = true;

//arrays
let someNumbers: number[] = [];  //only accepts numbers
someNumbers.push(23);

let someStrings: string[] = [];  //only accepts strings
someStrings.push("hello");

//Mixed array type with union type
let someMixed: (number | string | boolean)[] = [];
someMixed.push('randomName');
someMixed.push(12);
someMixed.push(true)

let someId: number | string;
someId = "1223344";
someId = 8930293;

//objects
let ninjaOne: object;
ninjaOne = { name: "harry", age: 35 };

let ninjaTwo: {
    name: string,
    age: number,
    beltcolor: string
};
ninjaTwo = { name: "maria", age: 24, beltcolor: "black" };

/**=====================================================================================
 *                                  TYPESCRIPT BASIC (ANY TYPE)
 * =====================================================================================
 */
let newAge: any = 25;

newAge = true;
console.log(newAge);
newAge = 'hello';
console.log(newAge);
newAge = { name: 'luigi' };
console.log(newAge);

let newMixed: any[] = [];

newMixed.push(5);
newMixed.push('mario');
newMixed.push(false);
console.log(newMixed);

let ninja: { name: any, age: any };

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
}
console.log(sayHello()); //type of sayHello variable is a function type by default

let sayAgain: Function;
sayAgain = () => {
    console.log('Hello, Again');
}
sayAgain();

//optional argument
//if we don't return anything the returned type always be void by default
// or we can also defined it
const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);
}
add(5, 10)
add(5, 10, 20);

//making optional with default value of argument
const multiply = (a: number, b: number, c: number = 10): void => {
    console.log(a * b * c);
}
multiply(4, 5);


//return type of function (default will be the type of returned value)
const minus = (a: number, b: number) => {
    return a - b;
}
let result = minus(30, 20);
console.log(result);

const minusMultiple = (a: number, b: number, c: number): number => {
    return a - b - c;
}
const result2 = minusMultiple(40, 30, 10)
console.log(result2);

/**=====================================================================================
 *                                  TYPE ALIASES IN TYPESCRIPT
 * =====================================================================================
 */

// const logDetails = (uid: string | number, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }

// const greeting = (user: { name: string, uid: string | number }) => {
//     console.log(`${user.name} says hello`);
// }

// const greetingAgain = (user: { name: string, uid: string | number, message: string }) => {
//     console.log(`${user.name} says hello`);
// }

//type Aliases
type uidType = string | number;
type userType = { name: string, uid: uidType }

const logDetails = (uid: uidType, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greeting = (user: userType) => {
    console.log(`${user.name} says hello`);
}

const greetingAgain = (user: { user: userType, message: string }) => {
    console.log(`${user.user.name} says hello`);
}


/**=====================================================================================
 *                                  FUNCTION SIGNATURE IN TYPESCRIPT
 * =====================================================================================
 */

let newGreet: Function;

//example 1
let sayHi: (name: string, message: string) => void;
sayHi = (name: string, greet: string) => {
    console.log(`${name} is saying ${greet}`);
};
sayHi('mantoo', "how are you");



//example 2
let calculate: (a: number, b: number, c: string) => number;
calculate = (firstNumber: number, secondNumber: number, action: string) => {
    if (action === "add")
        return firstNumber + secondNumber;
    else
        return firstNumber - secondNumber;
}
calculate(30, 50, "add");


//example 3
let logDetailAgain: (obj: { name: string, age: number }) => void;
logDetailAgain = (person: { name: string, age: number }) => {
    console.log(`${person.name} is ${person.age} is old.`);
}
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

let invoices: CreateInvoice[] = [];

invoices.push(invoiceOne);
invoices.push(invoiceTwo);
// invoices.push({client:"somename",details:"writing an assey",amount:200}); this will also not work

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})
console.log(invoiceOne, invoiceTwo);


/**=====================================================================================
 *                                  INTERFACE IN TYPESCRIPT
 * =====================================================================================
 */

interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: "mantoo",
    age: 27,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('spent amount is ', amount);

        return amount;
    }
};

const greetPerson = (person: isPerson) => {
    console.log('hello ', person.name);
};

// greetPerson({name:"mantoo"}) will throw error its not follwing the isPerson interface
greetPerson(me);