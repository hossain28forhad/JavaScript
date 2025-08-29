// map() - calculation sesh kore notun akta array return korbe

var numbers = [2,3,4,5,6];
var squareNumbers = numbers.map(function(x){
    return x*x;
})
// console.log(squareNumbers);


// filter()
var numbers = [2,32,40,15,6];
var newNumbers = numbers.filter(function(x){
    return x>10;
})
console.log(newNumbers);