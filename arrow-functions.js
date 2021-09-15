/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
 function addTwoNumbers(a, b) {
     // Code block
     return a + b;
 }
 let sum = addTwoNumbers(3, 5);
 console.log(sum);


// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

// const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello there!!');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
     This is multiple line string!
    <p>`
)
console.log(returnMultipleLines());

// class ex.
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
    
   
];
const averagePoints = (arr, subject) => {
   let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {  //-- this function going throught the all arr --//
      if(subject in itm.results) {    //-- this function going trought subjects results --//
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;  //-- this function return overage of subject's result --//
};

let result = averagePoints(students, 'english');
console.log(result);
//--------------------------------- copy the arr and add value passet to it--/
let subject = [...students[0].subjects]; //-- this copy first object,s subjects arr --/
const update = (item, val) => [...item, val];   //-- this function copy arr and add the value passet to it--/
let updateSubjects = update(subjects, "Electronics");
console.log(updateSubjects); //-- log out apdated arr --//
console.log(students[0]);  //-- log out full first object --//
