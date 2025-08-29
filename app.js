// Object Literals

function fun1(name, age){
    return{
        // name: name,
        // age: age
        name,
        age
    }
}

// console.log(fun1('Forhad Hossain',27));

// Consize method
let message = {
    body(){
        return 'Consize method';
    }
}
console.log(message.body());