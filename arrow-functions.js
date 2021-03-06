/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
 function addTwoNumbers1(a, b) {
     // Code block
     return a + b;
 }
 let sum1 = addTwoNumbers1(3, 5);
 console.log('N1:', sum1);


// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log('N2:', sum);

// Single Line Arrow Function With Parameters

// const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log('N3:', sum2);

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
console.log( 'N4:', returnMultipleLines());

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
        results: {science: 63, maths: 79, art: 95, english: 48},
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
console.log('N5:', result);
//--------------------------------- copy the arr and add value passet to it--/
let subject = [...students[0].subjects]; //-- this copy first object,s subjects arr --/
const update = (item, val) => [...item, val];   //-- this function copy arr and add the value passet to it--/
let updateSubjects = update(subject, "Electronics");
console.log(updateSubjects); //-- log out apdated arr --//
console.log(students[0]);  //-- log out full first object --//
// extract subject
const makeList = (arr, student) => {
    for (let itm of arr) {
        if (itm.name == student) {
            return itm.subjects;
        }
    }
};       //-- This function will extract all subjects of entering student's name from studens array--/
let [first, second, ...rest] = makeList(students, 'John');
console.log('N6:', first, second, rest);

const englishCandidates = students.filter(itm => itm.results.english);
console.log(englishCandidates); // log out only students who got result at english


// --this function calculate the higher result at english object using reduce() medot--
const biggest = students.reduce((acc, curr) => {
    acc = acc.max > curr.results.english ? acc: {name:curr.name, max:curr.results.english};
    return acc;
    }, {name: '', max: 0});

console.log('N7:', biggest);  //-- or using destructuring/

const biggest1 = students.reduce(({max, name}, {name, results:{math}}) => {
    if(max < math) {
        acc = {name: name, max: math};
    }
    return acc;
});

console.log('N8:', biggest1);