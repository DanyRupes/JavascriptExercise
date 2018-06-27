let userEmail = '    dAny@gamil.com     '
let password = '@#$%%%@'

console.log(password.length)
console.log(userEmail.toLowerCase().trim())

let userChecker = function(myString){
    if(myString.includes(123) && (myString.length>6)){

        return true
    }
    return false
}

console.log(userChecker(userEmail))
let passWordChecker = function(pass){
    if((pass <= 6) && (pass.includes('!@$%#*^1234567890'))){
    return false
}
return true
}

console.log(passWordChecker(password))