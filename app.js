// Destructuring array and objects
// ============================

// array destructure ============
let numbers = [10,20,30,35,40];
// let [num1, num2, num3, num4] = numbers;
let [num1, num2, ...z] = numbers;
// console.log(num1);
// console.log(num2);
// console.log(num1);
// console.log(num2);
// console.log(z);


// swap variables==================
let a=10, b=20;
[a,b] = [b,a];
// console.log(a);
// console.log(b);

// object destructure===========
const studentInfo = {
    id : 101,
    fullName : 'Jhon Doe',
    gpa : 3.94
}
// console.log(studentInfo.id);
// console.log(studentInfo.fullName);
// console.log(studentInfo.gpa);
const {idd, fullName} = studentInfo;
// console.log(idd);
// console.log(fullName);

// Nested Object destructre=============
const studentInfo2 = {
    id : 101,
    fullName : 'Jhon Doe',
    gpa : 3.94,
    languages : {
        native : 'bangla',
        beginner : 'english'
}
}
const {id, languages} = studentInfo2;
// console.log(languages);
// console.log(languages.native);

// destructuring function parameters==========
// const sInfo = (student) => {
//    //console.log(`${student.id}, ${student.fullName}`) // es6 template literals
// }
// const student = {
//     id : 101,
//     fullName: 'Forhad Hossain'
// }
// sInfo(student)
const sInfo = ({id, fullName}) => {
   console.log(`${id}, ${fullName}`) // es6 template literals
}
const student = {
    id : 1001,
    fullName: 'Forhad Hossain'
}
sInfo(student)

