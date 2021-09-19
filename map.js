  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);



// Using map()

const multByTwo = function (num) {
  return num * 2;
}

const mapResult = nums.map(multByTwo);
console.log(mapResult);


// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2});
console.log(simplified);


// Simplfied w/ map() + arrow function

const arrow = nums.map(num => num * 2);
console.log(arrow);


// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  const studentWithId = students.map(student => [student.name, student.id]);
  console.log(studentWithId);  // [['Mark', 1], ['Ariel', 2], ['Jason', 3]]
  

  students[0].age = 32; // add age to student 0 
  students[0]['age'] = 31; // update age to student 0
  delete students[0].age; //delete age from student 0
  console.log(students[0]);
  console.log(Object.keys(students[0]));
  console.log(Object.values(students[0]));

  //-
  const studentWithskills = students.map(student => [student.name, student.skill]);
  // let [mark, ...rest] = studentWithskills;  // or
  const studentSkilss = (itm) => [itm.name, itm.skill];
  let [mark, ...rest] = students.map(studentSkilss);
  console.log(mark);
  console.log(rest);  // [ 'Mark', 'JavaScript' ]
                      // [ [ 'Ariel', 'HTML' ], [ 'Jason', 'CSS' ] ]
