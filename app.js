// For of

// const names = ['s1','s2','s3'];
// for(let name of names){
//     console.log(name);
// }


// For in
let students ={
    ID : 501,
    name: 'Jhon Doe',
    cgpa: 3.50
}
for(let x in students){
    // console.log(x);
    // console.log(students[x]);
    console.log(`${x} : ${students[x]}`); // string template literals
}