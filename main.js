const name = "John";
const age = 40;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;

let z;


console.log(typeof (name));
console.log(typeof (age));
console.log(typeof (rating));
console.log(typeof (isCool));
console.log(typeof (x));
console.log(typeof (y));
console.log(typeof (z));


// Concatination
console.log('My name is ' + name + ' and I am ' + age);

// New Method For Concatenation
console.log(`My name is ${name} and I am ${age}`);

const hello = `My name is ${name} and I am ${age}`;

console.log(hello);


const s = 'hello world';

console.log(s.length);
console.log(s.toUpperCase());

console.log(s.substring(0 , 7));  // This Function is used to print an array from the index point we want to the index point we also want

console.log(s.substring(0 , 7).toUpperCase());

console.log(s.split('')); // This function is used to split the array into an array.

// Arrays 

// Basic Declaration
const number = new Array (1, 2, 3, 4, 5);

console.log(number);

// New Method

const fruit = ['Mango', 'Apple', 'Orange', 10, true];
console.log(fruit);
// To Print an Object from a Specific Index
console.log(fruit[1]);

// To add an Object from a Specific Index
//  1) Old Method
fruit[3] = 'Peach';
console.log(fruit);
console.log(fruit[3]);

// 2)New Method
fruit.push('Grapes'); //To add at the end
console.log(fruit);

fruit.unshift('Date');  //To add at the starting index of the Array
console.log(fruit);

// to Delete use friut.pop

//TO check wheather there is an array or not
console.log(Array.isArray(fruit));

//To check the index of the object in the array
console.log(fruit.indexOf('Date'));




// Object Laterals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'sports','movies'],
    address:{
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);