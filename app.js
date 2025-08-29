// Traditional function
function dis1(){
    console.log('Traditional Function');
}

// Arrow function
const dis2 = () => console.log('Arrow Function');

// dis1();
// dis2();

// Traditional fun
function message1(){
    return "Hi I am message1";
}
// Arrow fun
const message2 = () => "hi I am from message2";
// console.log(message1());
// console.log(message2());

// Traditional Fun
function add1(a,b){
    return a+b;
}
// Arrow Fun
const add2 = (a,b) => a+b;

console.log(add1(10,20));
console.log(add2(10,20));