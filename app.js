
let string = "Hello World";
const string2 = "Hello World Again!";

const string3 = string + " " + string2;

console.log(string3);

//writing a fucntion declaration
function add(num1, num2) {
    console.log("print1")
    return num1 + num2;
}

// or function expression
const add1 = function(a,b) {
    console.log("print2")
    return a + b;
}

// or arrow function
const add2 = (a,b) => {
    console.log("print3")
    return a + b;
}

// or arrow function with implicit return
const add3 = (a,b) => a + b;

// or named function expression
const add4 = function sum(a,b) {
    console.log("print5")
    return a + b;
}

// calling a function 
let result = add(1,2);
console.log(result);


// Classes and Objects

// class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// class expression
const Person2 = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// creating an object
let person = new Person("John", 30);
person.greet();