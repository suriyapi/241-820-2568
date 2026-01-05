/*
object functions
*/

let students = [
    {name: "John", age: 20, grade: "A"},
    {name: "Jane", age: 22, grade: "B"},
    {name: "Jim", age: 21, grade: "C"}
]
console.log('Student',students[0]); 

let student = students.find((s) => {
  return s.name === "Jane";
})

let dubblescoreStudents = students.map((s) => {
  s.age = s.age * 2;
  return s;
});

let highGradeStudents = students.filter((s) => {
  return s.grade === "A";
});

console.log('Student ',student);
console.log('Dubble Score Students',dubblescoreStudents);
console.log('High Grade Students',highGradeStudents);