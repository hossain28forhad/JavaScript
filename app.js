// Arrow function (part-2) | arrow with map,filter

var students = [
  {
    id: 101,
    name: "Kamal",
    gpa: 2.23,
  },
  {
    id: 102,
    name: "Ahmed",
    gpa: 4.63,
  },
  {
    id: 103,
    name: "Zakir",
    gpa: 5.00,
  },
  {
    id: 104,
    name: "Sohel",
    gpa: 3.23,
  }
];

// console.log(students);

// Traditional function
function studentNames(){
    return students.filter(function(x){
        return x.gpa>3;
    }).map(function(y){
        return y.name;
    })
}

// console.log(studentNames());

// Arrow fun
const studentNames2 = () => students.filter((x) => x.gpa> 4).map((y) =>y.name);
console.log(studentNames2());