let myAdder = function(num1 , num2){
    let added = num1 + num2;
    return added
}


let multiplier = function(num1, num2){
    return num1 * num2;
}

//console.log(multiplier(5, 5));

// let name
let guestUser = function(uname="nNamed", courseCount){
    // let name = null;
    return "Hello " +uname+" your course count is " +courseCount;
}

console.log(guestUser("User", 6))